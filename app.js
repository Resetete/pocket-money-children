// ===== DEFAULT CHILD TEMPLATE =====
function defaultChild(name = 'Lena', avatar = '🐸') {
  return {
    id: Date.now(),
    childName: name,
    avatar: avatar,
    allowance: { amount: 0, freq: 'monthly', nextDate: null, split: { spend: 60, save: 30, invest: 10 } },
    savings: { goal: { name: '', amount: 0, photo: null } },
    invest: { bonus: 10, freq: 'monthly' },
    balances: { spend: 0, save: 0, invest: 0 },
    transactions: []
  };
}

// ===== STATE =====
let appData = {
  parentPw: null,
  children: [defaultChild('Lena', '🐸')],
  activeChildId: null
};

// ===== STORAGE =====
function save() {
  try { localStorage.setItem('taschengeld_v4', JSON.stringify(appData)); } catch(e) {}
}
function load() {
  try {
    const d = localStorage.getItem('taschengeld_v4');
    if (d) {
      const parsed = JSON.parse(d);
      appData = { ...appData, ...parsed };
    }
    // Migrate v3 data
    const old = localStorage.getItem('taschengeld_v3');
    if (old && !d) {
      const o = JSON.parse(old);
      const child = defaultChild(o.childName || 'Lena', o.avatar || '🐸');
      child.allowance = o.allowance || child.allowance;
      child.savings = o.savings || child.savings;
      child.invest = o.invest || child.invest;
      child.balances = o.balances || child.balances;
      child.transactions = o.transactions || [];
      appData.parentPw = o.parentPw || null;
      appData.children = [child];
      save();
    }
  } catch(e) {}
}

function getChild(id) {
  return appData.children.find(c => c.id === id) || appData.children[0];
}
function activeChild() {
  return getChild(appData.activeChildId) || appData.children[0];
}

// ===== INIT =====
load();
if (!appData.activeChildId && appData.children.length) {
  appData.activeChildId = appData.children[0].id;
}
setTodayDate();
renderLoginState();

function setTodayDate() {
  const d = new Date();
  const opts = { weekday:'long', day:'numeric', month:'long' };
  const el = document.getElementById('today-date');
  if (el) el.textContent = d.toLocaleDateString('de-DE', opts);
}

// ===== LOGIN =====
let loginType = 'child';

function selectLoginType(type) {
  loginType = type;
  document.getElementById('btn-child').className = 'login-btn child' + (type==='child' ? ' active' : '');
  document.getElementById('btn-parent').className = 'login-btn parent' + (type==='parent' ? ' active' : '');
  document.getElementById('pw-group').style.display = type==='parent' ? 'block' : 'none';
  document.getElementById('child-hint').style.display = type==='child' ? 'block' : 'none';
  document.getElementById('login-btn-main').className = 'btn-main' + (type==='parent' ? ' yellow' : '');
  document.getElementById('login-error').textContent = '';

  // Child selector
  const childSel = document.getElementById('child-selector-wrap');
  if (type === 'child') {
    renderChildSelector();
    childSel.style.display = 'block';
  } else {
    childSel.style.display = 'none';
  }

  if (type==='parent' && !appData.parentPw) {
    document.getElementById('first-time-notice').style.display = 'block';
  } else {
    document.getElementById('first-time-notice').style.display = 'none';
  }
}

function renderChildSelector() {
  const wrap = document.getElementById('child-selector-wrap');
  if (appData.children.length <= 1) { wrap.innerHTML = ''; return; }
  wrap.innerHTML = `<div style="margin-bottom:1rem;">
    <label class="pw-label">Welches Kind bist du?</label>
    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
      ${appData.children.map(c => `
        <button class="child-pick-btn ${c.id === appData.activeChildId ? 'active' : ''}"
          onclick="selectActiveChild(${c.id})" style="flex:1;min-width:80px;">
          <span style="font-size:1.5rem;display:block;">${c.avatar}</span>
          <span style="font-size:0.85rem;font-weight:700;">${esc(c.childName)}</span>
        </button>
      `).join('')}
    </div>
  </div>`;
}

function selectActiveChild(id) {
  appData.activeChildId = id;
  save();
  renderChildSelector();
  renderLoginState();
}

function togglePw() {
  const inp = document.getElementById('pw-input');
  inp.type = inp.type === 'password' ? 'text' : 'password';
}

function renderLoginState() {
  const child = activeChild();
  document.getElementById('hero-frog').textContent = child.avatar || '🐸';
}

function tryLogin() {
  if (loginType === 'child') {
    showScreen('child');
    return;
  }
  const pw = document.getElementById('pw-input').value;
  if (!appData.parentPw) {
    if (pw.length < 4) {
      document.getElementById('login-error').textContent = 'Bitte mindestens 4 Zeichen wählen!';
      return;
    }
    appData.parentPw = pw;
    save();
    showScreen('parent');
    showToast('🎉 Neues Passwort gespeichert!');
  } else {
    if (pw === appData.parentPw) {
      showScreen('parent');
    } else {
      document.getElementById('login-error').textContent = '❌ Falsches Passwort!';
      shakeEl(document.getElementById('pw-input'));
    }
  }
}

function shakeEl(el) {
  el.style.borderColor = '#E53E3E';
  setTimeout(() => { el.style.borderColor = ''; }, 1000);
}

function logout() {
  document.getElementById('pw-input').value = '';
  document.getElementById('login-error').textContent = '';
  showScreen('welcome');
  renderLoginState();
}

function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  if (name === 'child') renderChildScreen();
  if (name === 'parent') { currentParentChildId = activeChild().id; renderParentScreen(); }
  if (name === 'welcome') selectLoginType('child');
}

// ===== CHILD SCREEN =====
function renderChildScreen() {
  const child = activeChild();
  const b = child.balances;
  const total = b.spend + b.save + b.invest;

  document.getElementById('child-greeting').textContent = 'Hallo ' + (child.childName || 'Sternchen') + '! 👋';
  document.getElementById('child-avatar').textContent = child.avatar;
  document.getElementById('child-total').textContent = fmt(total);
  document.getElementById('child-total-sub').textContent = 'Du hast ' + fmt(total) + ' gespart!';

  document.getElementById('bucket-spend').textContent = fmt(b.spend);
  document.getElementById('bucket-save').textContent = fmt(b.save);
  document.getElementById('bucket-invest').textContent = fmt(b.invest);
  document.getElementById('invest-display').textContent = fmt(b.invest);

  const bonus = child.invest.bonus || 10;
  document.getElementById('invest-bonus-info').innerHTML = `<span>🎁 Eltern zahlen ${bonus}% Bonus dazu!</span>`;

  renderNextPayout();
  renderSavingsGoal();
  renderTransactions();
}

function renderNextPayout() {
  const child = activeChild();
  const wrap = document.getElementById('next-payout-wrap');
  const nd = child.allowance.nextDate;
  if (!nd || !child.allowance.amount) { wrap.innerHTML = ''; return; }
  const d = new Date(nd);
  const today = new Date(); today.setHours(0,0,0,0);
  const diff = Math.ceil((d - today) / 86400000);
  const diffStr = diff === 0 ? 'heute' : diff === 1 ? 'morgen' : 'in ' + diff + ' Tagen';
  wrap.innerHTML = `<div class="next-payout">
    <span class="payout-icon">📅</span>
    <span>Nächstes Taschengeld: <strong>${fmt(child.allowance.amount)}</strong> — ${diffStr} (${d.toLocaleDateString('de-DE')})</span>
  </div>`;
}

function renderSavingsGoal() {
  const child = activeChild();
  const g = child.savings.goal;
  const saveAmt = child.balances.save;
  const el = document.getElementById('save-goal-display');

  if (!g || !g.name) {
    el.innerHTML = `<div class="empty-state"><div class="empty-icon">🌟</div>Noch kein Sparziel! Bitte Eltern fragen.</div>`;
    return;
  }

  const pct = g.amount > 0 ? Math.min(100, (saveAmt / g.amount) * 100) : 0;
  const photoHtml = g.photo
    ? `<img src="${g.photo}" class="goal-img" alt="Sparziel">`
    : `<div class="goal-img-placeholder">🎯</div>`;

  el.innerHTML = `<div class="goal-card">
    <div class="goal-header">
      ${photoHtml}
      <div class="goal-info">
        <div class="goal-name">${esc(g.name)}</div>
        <div class="goal-progress-text">${fmt(saveAmt)} von ${fmt(g.amount)} gespart</div>
        <div class="goal-progress-text">${pct >= 100 ? '🎉 Ziel erreicht!' : 'Noch ' + fmt(g.amount - saveAmt) + ' bis zum Ziel'}</div>
      </div>
    </div>
    <div class="thermometer-wrap">
      <div class="thermo-pct">${Math.round(pct)}%</div>
      <div class="thermo-track">
        <div class="thermo-fill" style="width:${pct}%"></div>
      </div>
    </div>
  </div>`;
}

function renderTransactions(context = 'child') {
  const child = context === 'parent' ? getChild(currentParentChildId) : activeChild();
  const txs = [...child.transactions].reverse();
  const recent = txs.slice(0, 5);

  if (context === 'child') {
    const listEl = document.getElementById('tx-list-recent');
    const allEl = document.getElementById('tx-list-all');
    if (!txs.length) {
      listEl.innerHTML = `<div class="empty-state"><div class="empty-icon">🐣</div>Noch keine Einträge</div>`;
      allEl.innerHTML = `<div class="empty-state"><div class="empty-icon">🐣</div>Noch keine Einträge</div>`;
      return;
    }
    listEl.innerHTML = recent.map(tx => txHtml(tx, false)).join('');
    allEl.innerHTML = txs.map(tx => txHtml(tx, false)).join('');
  } else {
    const listEl = document.getElementById('p-tx-list');
    if (!txs.length) {
      listEl.innerHTML = `<div class="empty-state"><div class="empty-icon">🐣</div>Noch keine Einträge</div>`;
      return;
    }
    listEl.innerHTML = txs.map(tx => txHtml(tx, true)).join('');
  }
}

function txHtml(tx, editable) {
  const sign = tx.type === 'income' ? '+' : '−';
  const cls = tx.type === 'income' ? 'plus' : 'minus';
  const bucketLabels = { spend: 'Ausgeben', save: 'Sparen', invest: 'Investieren' };
  const icon = tx.emoji || (tx.type === 'income' ? '💚' : '💸');
  const date = new Date(tx.date).toLocaleDateString('de-DE', { day:'numeric', month:'short' });
  const editBtn = editable
    ? `<button class="tx-edit-btn" onclick="openEditTx(${tx.id})" title="Bearbeiten">✏️</button>
       <button class="tx-edit-btn tx-delete-btn" onclick="deleteTx(${tx.id})" title="Löschen">🗑️</button>`
    : '';
  return `<div class="tx-item" id="tx-${tx.id}">
    <div class="tx-icon">${icon}</div>
    <div class="tx-info">
      <div class="tx-desc">${esc(tx.desc)}<span class="tx-bucket-badge ${tx.bucket}">${bucketLabels[tx.bucket]||''}</span></div>
      <div class="tx-date">${date}</div>
    </div>
    <div style="display:flex;align-items:center;gap:0.4rem;">
      <div class="tx-amount ${cls}">${sign}${fmt(tx.amount)}</div>
      ${editBtn}
    </div>
  </div>`;
}

function switchTab(name) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  document.getElementById('tab-content-' + name).classList.add('active');
}

// ===== EMOJI PICKER =====
const EMOJI_PRESETS = [
  '🎁','🎂','🎉','🎈','💰','💵','🪙','💳','🛍️','🎮','🧸','📚',
  '🍕','🍦','🎠','🚂','✈️','⚽','🏀','🎨','🎵','🌟','⭐','❤️',
  '💚','💙','💜','🌈','🌸','🌺','🍀','🦋','🐣','🐥','🦄','🐸',
  '💸','📖','🔑','🎯','🌱','🏆','🎖️','🥇','💡','🔧','🛠️','🎪'
];

function renderEmojiPicker(inputId) {
  const wrap = document.getElementById('emoji-picker-wrap');
  wrap.innerHTML = EMOJI_PRESETS.map(e =>
    `<button class="emoji-opt" onclick="pickEmoji('${e}','${inputId}')">${e}</button>`
  ).join('');
}

function pickEmoji(emoji, inputId) {
  document.getElementById(inputId).value = emoji;
}

// ===== ADD / EDIT TRANSACTION =====
let txTypeMode = 'income';
let editingTxId = null;

function openAddTx() {
  editingTxId = null;
  document.getElementById('addtx-modal-title').textContent = 'Neue Buchung';
  document.getElementById('tx-amount').value = '';
  document.getElementById('tx-desc').value = '';
  document.getElementById('tx-emoji-input').value = '';
  document.getElementById('tx-bucket').value = 'spend';
  setTxType('income');
  renderEmojiPicker('tx-emoji-input');
  openModal('modal-addtx');
}

function openEditTx(txId) {
  const child = getChild(currentParentChildId);
  const tx = child.transactions.find(t => t.id === txId);
  if (!tx) return;
  editingTxId = txId;
  document.getElementById('addtx-modal-title').textContent = 'Buchung bearbeiten';
  document.getElementById('tx-amount').value = tx.amount;
  document.getElementById('tx-desc').value = tx.desc;
  document.getElementById('tx-emoji-input').value = tx.emoji || '';
  document.getElementById('tx-bucket').value = tx.bucket;
  setTxType(tx.type);
  renderEmojiPicker('tx-emoji-input');
  openModal('modal-addtx');
}

function setTxType(type) {
  txTypeMode = type;
  document.getElementById('btn-income').className = type === 'income' ? 'active-income' : '';
  document.getElementById('btn-expense').className = type === 'expense' ? 'active-expense' : '';
}

function addTransaction() {
  const amt = parseFloat(document.getElementById('tx-amount').value);
  const desc = document.getElementById('tx-desc').value.trim();
  const bucket = document.getElementById('tx-bucket').value;
  const emoji = document.getElementById('tx-emoji-input').value.trim();

  if (!amt || amt <= 0) { showToast('❌ Bitte Betrag eingeben!'); return; }
  if (!desc) { showToast('❌ Bitte Beschreibung eingeben!'); return; }

  // Determine which child to use (parent context vs child context)
  const isParentContext = document.getElementById('screen-parent').classList.contains('active');
  const child = isParentContext ? getChild(currentParentChildId) : activeChild();

  if (editingTxId !== null) {
    // EDIT MODE: reverse old tx, apply new
    const oldTx = child.transactions.find(t => t.id === editingTxId);
    if (oldTx) {
      if (oldTx.type === 'income') child.balances[oldTx.bucket] -= oldTx.amount;
      else child.balances[oldTx.bucket] += oldTx.amount;
    }
    // Check funds after reversal
    if (txTypeMode === 'expense' && child.balances[bucket] < amt) {
      // Reapply old tx and bail
      if (oldTx) {
        if (oldTx.type === 'income') child.balances[oldTx.bucket] += oldTx.amount;
        else child.balances[oldTx.bucket] -= oldTx.amount;
      }
      showToast('❌ Nicht genug Geld im ' + bucket + '-Topf!');
      return;
    }
    const idx = child.transactions.findIndex(t => t.id === editingTxId);
    child.transactions[idx] = { ...child.transactions[idx], type: txTypeMode, amount: amt, desc, bucket, emoji: emoji || (txTypeMode === 'income' ? '💚' : '💸') };
    if (txTypeMode === 'income') child.balances[bucket] += amt;
    else child.balances[bucket] -= amt;
    showToast('✅ Buchung aktualisiert!');
  } else {
    // ADD MODE
    if (txTypeMode === 'expense' && child.balances[bucket] < amt) {
      showToast('❌ Nicht genug Geld im ' + bucket + '-Topf!');
      return;
    }
    const tx = {
      id: Date.now(), type: txTypeMode, amount: amt, desc, bucket,
      emoji: emoji || (txTypeMode === 'income' ? '💚' : '💸'),
      date: new Date().toISOString()
    };
    child.transactions.push(tx);
    if (txTypeMode === 'income') child.balances[bucket] += amt;
    else child.balances[bucket] -= amt;
    if (txTypeMode === 'income') { coinRain(); showToast('💰 +' + fmt(amt) + ' gespeichert!'); }
    else showToast('✅ ' + fmt(amt) + ' ausgegeben!');
  }

  save();
  closeModal('modal-addtx');
  if (isParentContext) { renderTransactions('parent'); renderParentBalances(); }
  else renderChildScreen();
}

function deleteTx(txId) {
  if (!confirm('Buchung wirklich löschen?')) return;
  const child = getChild(currentParentChildId);
  const tx = child.transactions.find(t => t.id === txId);
  if (!tx) return;
  if (tx.type === 'income') child.balances[tx.bucket] -= tx.amount;
  else child.balances[tx.bucket] += tx.amount;
  child.transactions = child.transactions.filter(t => t.id !== txId);
  save();
  renderTransactions('parent');
  renderParentBalances();
  showToast('🗑️ Buchung gelöscht!');
}

function renderParentBalances() {
  const child = getChild(currentParentChildId);
  const b = child.balances;
  const el = document.getElementById('p-balances-display');
  if (!el) return;
  el.innerHTML = `
    <span class="split-pill">🛍️ ${fmt(b.spend)}</span>
    <span class="split-pill save">🎯 ${fmt(b.save)}</span>
    <span class="split-pill invest">🌱 ${fmt(b.invest)}</span>`;
}

// ===== PARENT SCREEN =====
let currentParentChildId = null;

function renderParentScreen() {
  if (!currentParentChildId) currentParentChildId = appData.children[0].id;
  renderParentChildTabs();
  renderParentChildForm();
}

function renderParentChildTabs() {
  const wrap = document.getElementById('p-child-tabs');
  wrap.innerHTML = appData.children.map(c => `
    <button class="p-child-tab ${c.id === currentParentChildId ? 'active' : ''}"
      onclick="switchParentChild(${c.id})">
      ${c.avatar} ${esc(c.childName)}
    </button>
  `).join('') + `<button class="p-child-tab p-add-child-btn" onclick="openAddChildModal()">➕ Kind</button>`;
}

function switchParentChild(id) {
  currentParentChildId = id;
  renderParentChildTabs();
  renderParentChildForm();
}

function renderParentChildForm() {
  const child = getChild(currentParentChildId);
  document.getElementById('p-child-name').value = child.childName || '';
  document.getElementById('p-avatar').value = child.avatar || '🐸';
  document.getElementById('p-allowance-amount').value = child.allowance.amount || '';
  document.getElementById('p-allowance-freq').value = child.allowance.freq || 'monthly';
  document.getElementById('p-goal-name').value = child.savings.goal.name || '';
  document.getElementById('p-goal-amount').value = child.savings.goal.amount || '';
  document.getElementById('p-invest-bonus').value = child.invest.bonus || 10;
  document.getElementById('p-invest-freq').value = child.invest.freq || 'monthly';

  const area = document.getElementById('p-goal-photo-area');
  if (child.savings.goal.photo) {
    area.innerHTML = `<div class="photo-preview-wrap">
      <img src="${child.savings.goal.photo}" class="photo-preview" alt="Ziel">
      <button class="photo-remove" onclick="removeGoalPhoto()">✕</button>
    </div>`;
  } else {
    area.innerHTML = `<div class="photo-upload-area" onclick="document.getElementById('goal-photo-input').click()">
      📸 Foto auswählen<div style="font-size:0.75rem;color:var(--text-soft);margin-top:0.3rem;">optional</div>
    </div>`;
  }

  renderSplitDisplay();
  calcNextPayout();
  renderParentBalances();
  renderTransactions('parent');

  // Delete child button
  const delBtn = document.getElementById('p-delete-child-btn');
  if (delBtn) delBtn.style.display = appData.children.length > 1 ? 'block' : 'none';
}

function saveSettings() {
  const child = getChild(currentParentChildId);
  child.childName = document.getElementById('p-child-name').value || 'Lena';
  child.avatar = document.getElementById('p-avatar').value;
  child.allowance.amount = parseFloat(document.getElementById('p-allowance-amount').value) || 0;
  child.allowance.freq = document.getElementById('p-allowance-freq').value;
  child.savings.goal.name = document.getElementById('p-goal-name').value;
  child.savings.goal.amount = parseFloat(document.getElementById('p-goal-amount').value) || 0;
  child.invest.bonus = parseFloat(document.getElementById('p-invest-bonus').value) || 10;
  child.invest.freq = document.getElementById('p-invest-freq').value;
  calcNextPayout();
  save();
  renderParentChildTabs();
}

function calcNextPayout() {
  const child = getChild(currentParentChildId);
  const freq = child.allowance.freq;
  const today = new Date(); today.setHours(0,0,0,0);
  let next = new Date(today);
  if (freq === 'weekly') next.setDate(next.getDate() + 7);
  else if (freq === 'biweekly') next.setDate(next.getDate() + 14);
  else next.setMonth(next.getMonth() + 1);

  if (!child.allowance.nextDate) {
    child.allowance.nextDate = next.toISOString().split('T')[0];
    save();
  }
  const el = document.getElementById('p-next-payout');
  if (el) el.textContent = new Date(child.allowance.nextDate).toLocaleDateString('de-DE');
}

function payAllowance() {
  const child = getChild(currentParentChildId);
  const amt = child.allowance.amount;
  if (!amt) { showToast('❌ Bitte Betrag festlegen!'); return; }

  const split = child.allowance.split || { spend:60, save:30, invest:10 };
  const spendAmt = amt * split.spend / 100;
  const saveAmt = amt * split.save / 100;
  const investAmt = amt * split.invest / 100;

  child.balances.spend += spendAmt;
  child.balances.save += saveAmt;
  child.balances.invest += investAmt;

  const date = new Date().toISOString();
  if (spendAmt) child.transactions.push({ id: Date.now(), type:'income', amount:spendAmt, desc:'Taschengeld (Ausgeben)', bucket:'spend', emoji:'💰', date });
  if (saveAmt) child.transactions.push({ id: Date.now()+1, type:'income', amount:saveAmt, desc:'Taschengeld (Sparen)', bucket:'save', emoji:'💙', date });
  if (investAmt) child.transactions.push({ id: Date.now()+2, type:'income', amount:investAmt, desc:'Taschengeld (Investieren)', bucket:'invest', emoji:'🌱', date });

  const freq = child.allowance.freq;
  const next = new Date();
  if (freq === 'weekly') next.setDate(next.getDate() + 7);
  else if (freq === 'biweekly') next.setDate(next.getDate() + 14);
  else next.setMonth(next.getMonth() + 1);
  child.allowance.nextDate = next.toISOString().split('T')[0];

  save();
  renderParentChildForm();
  coinRain();
  showToast('🎉 ' + fmt(amt) + ' Taschengeld ausgezahlt!');
}

function payInvestBonus() {
  const child = getChild(currentParentChildId);
  const investAmt = child.balances.invest;
  if (!investAmt) { showToast('❌ Noch kein Geld im Investitions-Topf!'); return; }
  const bonus = (child.invest.bonus || 10) / 100;
  const bonusAmt = investAmt * bonus;

  child.balances.invest += bonusAmt;
  child.transactions.push({
    id: Date.now(), type:'income', amount:bonusAmt,
    desc:`Eltern-Bonus (${child.invest.bonus || 10}%)`,
    bucket:'invest', emoji:'🎁', date: new Date().toISOString()
  });

  save();
  renderParentBalances();
  renderTransactions('parent');
  coinRain();
  showToast('🎁 Bonus von ' + fmt(bonusAmt) + ' gutgeschrieben!');
}

// ===== MULTI-CHILD MANAGEMENT =====
function openAddChildModal() {
  document.getElementById('new-child-name').value = '';
  document.getElementById('new-child-avatar').value = '🐸';
  openModal('modal-add-child');
}

function addChild() {
  const name = document.getElementById('new-child-name').value.trim();
  const avatar = document.getElementById('new-child-avatar').value;
  if (!name) { showToast('❌ Bitte Namen eingeben!'); return; }
  const child = defaultChild(name, avatar);
  child.id = Date.now();
  appData.children.push(child);
  currentParentChildId = child.id;
  save();
  closeModal('modal-add-child');
  renderParentScreen();
  showToast('🎉 ' + name + ' hinzugefügt!');
}

function deleteCurrentChild() {
  if (appData.children.length <= 1) { showToast('❌ Mindestens ein Kind muss vorhanden sein!'); return; }
  const child = getChild(currentParentChildId);
  if (!confirm(`Wirklich "${child.childName}" und alle Daten löschen?`)) return;
  appData.children = appData.children.filter(c => c.id !== currentParentChildId);
  currentParentChildId = appData.children[0].id;
  appData.activeChildId = currentParentChildId;
  save();
  renderParentScreen();
  showToast('🗑️ Kind gelöscht!');
}

// Split
function openSplitModal() {
  const child = getChild(currentParentChildId);
  const s = child.allowance.split || { spend:60, save:30, invest:10 };
  document.getElementById('split-spend').value = s.spend;
  document.getElementById('split-save').value = s.save;
  document.getElementById('split-invest').value = s.invest;
  updateSplitPreview();
  openModal('modal-split');
}

function updateSplitPreview() {
  const a = parseInt(document.getElementById('split-spend').value)||0;
  const b = parseInt(document.getElementById('split-save').value)||0;
  const c = parseInt(document.getElementById('split-invest').value)||0;
  const sum = a + b + c;
  const el = document.getElementById('split-sum-msg');
  el.textContent = (sum === 100 ? '✅' : '⚠️') + ' Summe: ' + sum + '%';
  el.style.color = sum === 100 ? 'var(--green-dark)' : '#E53E3E';
}

function saveSplit() {
  const a = parseInt(document.getElementById('split-spend').value)||0;
  const b = parseInt(document.getElementById('split-save').value)||0;
  const c = parseInt(document.getElementById('split-invest').value)||0;
  if (a + b + c !== 100) { showToast('❌ Summe muss 100% ergeben!'); return; }
  getChild(currentParentChildId).allowance.split = { spend:a, save:b, invest:c };
  save();
  renderSplitDisplay();
  closeModal('modal-split');
  showToast('✅ Verteilung gespeichert!');
}

function renderSplitDisplay() {
  const child = getChild(currentParentChildId);
  const s = child.allowance.split || { spend:60, save:30, invest:10 };
  document.getElementById('split-display-parent').innerHTML = `
    <span class="split-pill">🛍️ ${s.spend}%</span>
    <span class="split-pill save">🎯 ${s.save}%</span>
    <span class="split-pill invest">🌱 ${s.invest}%</span>`;
}

// Goal photo
function handleGoalPhoto(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    getChild(currentParentChildId).savings.goal.photo = e.target.result;
    save();
    renderParentChildForm();
  };
  reader.readAsDataURL(file);
}

function removeGoalPhoto() {
  getChild(currentParentChildId).savings.goal.photo = null;
  save();
  renderParentChildForm();
}

// Change password
function openChangePw() {
  document.getElementById('old-pw').value = '';
  document.getElementById('new-pw').value = '';
  document.getElementById('pw-change-error').textContent = '';
  openModal('modal-changepw');
}

function changePassword() {
  const old = document.getElementById('old-pw').value;
  const nw = document.getElementById('new-pw').value;
  if (old !== appData.parentPw) {
    document.getElementById('pw-change-error').textContent = '❌ Altes Passwort stimmt nicht!';
    return;
  }
  if (nw.length < 4) {
    document.getElementById('pw-change-error').textContent = '❌ Mindestens 4 Zeichen!';
    return;
  }
  appData.parentPw = nw;
  save();
  closeModal('modal-changepw');
  showToast('✅ Passwort geändert!');
}

// Export / Import
function exportData() {
  const json = JSON.stringify(appData, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'taschengeld-backup-' + new Date().toISOString().split('T')[0] + '.json';
  a.click();
  showToast('📤 Daten exportiert!');
}

function importData(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      appData = { ...appData, ...data };
      save();
      renderParentScreen();
      showToast('📥 Daten importiert!');
    } catch(err) {
      showToast('❌ Datei konnte nicht gelesen werden!');
    }
  };
  reader.readAsText(file);
}

function confirmReset() {
  if (confirm('Wirklich alle Daten löschen? Das kann nicht rückgängig gemacht werden!')) {
    localStorage.removeItem('taschengeld_v4');
    localStorage.removeItem('taschengeld_v3');
    appData = { parentPw: null, children: [defaultChild('Lena', '🐸')], activeChildId: null };
    appData.activeChildId = appData.children[0].id;
    currentParentChildId = appData.children[0].id;
    showToast('🗑️ Alle Daten gelöscht!');
    logout();
  }
}

// ===== HELPERS =====
function fmt(n) {
  return (n || 0).toLocaleString('de-DE', { minimumFractionDigits:2, maximumFractionDigits:2 }) + ' €';
}
function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

document.querySelectorAll('.modal-overlay').forEach(o => {
  o.addEventListener('click', e => { if (e.target === o) o.classList.remove('open'); });
});

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function coinRain() {
  const container = document.getElementById('coin-rain');
  const coins = ['💰','💵','🪙','⭐','✨','🌟'];
  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      const c = document.createElement('div');
      c.className = 'coin';
      c.textContent = coins[Math.floor(Math.random() * coins.length)];
      c.style.left = Math.random() * 90 + 5 + '%';
      c.style.top = '-50px';
      c.style.animationDuration = (0.8 + Math.random() * 0.8) + 's';
      container.appendChild(c);
      setTimeout(() => c.remove(), 1600);
    }, i * 80);
  }
}

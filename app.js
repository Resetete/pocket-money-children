// ===== STATE =====
let appData = {
  parentPw: null,
  childName: 'Lena',
  avatar: '🐸',
  allowance: { amount: 0, freq: 'monthly', nextDate: null, split: { spend: 60, save: 30, invest: 10 } },
  savings: { goal: { name: '', amount: 0, photo: null } },
  invest: { bonus: 10, freq: 'monthly' },
  balances: { spend: 0, save: 0, invest: 0 },
  transactions: []
};

// ===== STORAGE =====
function save() {
  try { localStorage.setItem('taschengeld_v3', JSON.stringify(appData)); } catch(e) {}
}
function load() {
  try {
    const d = localStorage.getItem('taschengeld_v3');
    if (d) appData = { ...appData, ...JSON.parse(d) };
  } catch(e) {}
}

// ===== INIT =====
load();
setTodayDate();
renderLoginState();

function setTodayDate() {
  const d = new Date();
  const opts = { weekday:'long', day:'numeric', month:'long' };
  document.getElementById('today-date').textContent = d.toLocaleDateString('de-DE', opts);
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

  if (type==='parent' && !appData.parentPw) {
    document.getElementById('first-time-notice').style.display = 'block';
  } else {
    document.getElementById('first-time-notice').style.display = 'none';
  }
}

function togglePw() {
  const inp = document.getElementById('pw-input');
  inp.type = inp.type === 'password' ? 'text' : 'password';
}

function renderLoginState() {
  document.getElementById('hero-frog').textContent = appData.avatar || '🐸';
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
  el.style.animation = 'none';
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
  if (name === 'parent') renderParentScreen();
}

// ===== CHILD SCREEN =====
function renderChildScreen() {
  const b = appData.balances;
  const total = b.spend + b.save + b.invest;

  document.getElementById('child-greeting').textContent = 'Hallo ' + (appData.childName || 'Sternchen') + '! 👋';
  document.getElementById('child-avatar').textContent = appData.avatar;
  document.getElementById('child-total').textContent = fmt(total);
  document.getElementById('child-total-sub').textContent = 'Du hast ' + fmt(total) + ' gespart!';

  document.getElementById('bucket-spend').textContent = fmt(b.spend);
  document.getElementById('bucket-save').textContent = fmt(b.save);
  document.getElementById('bucket-invest').textContent = fmt(b.invest);
  document.getElementById('invest-display').textContent = fmt(b.invest);

  const bonus = appData.invest.bonus || 10;
  document.getElementById('invest-bonus-info').innerHTML = `<span>🎁 Eltern zahlen ${bonus}% Bonus dazu!</span>`;

  renderNextPayout();
  renderSavingsGoal();
  renderTransactions();
}

function renderNextPayout() {
  const wrap = document.getElementById('next-payout-wrap');
  const nd = appData.allowance.nextDate;
  if (!nd || !appData.allowance.amount) { wrap.innerHTML = ''; return; }
  const d = new Date(nd);
  const today = new Date(); today.setHours(0,0,0,0);
  const diff = Math.ceil((d - today) / 86400000);
  const diffStr = diff === 0 ? 'heute' : diff === 1 ? 'morgen' : 'in ' + diff + ' Tagen';
  wrap.innerHTML = `<div class="next-payout">
    <span class="payout-icon">📅</span>
    <span>Nächstes Taschengeld: <strong>${fmt(appData.allowance.amount)}</strong> — ${diffStr} (${d.toLocaleDateString('de-DE')})</span>
  </div>`;
}

function renderSavingsGoal() {
  const g = appData.savings.goal;
  const saveAmt = appData.balances.save;
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

function renderTransactions() {
  const txs = [...appData.transactions].reverse();
  const recent = txs.slice(0, 5);

  const listEl = document.getElementById('tx-list-recent');
  const allEl = document.getElementById('tx-list-all');

  if (!txs.length) {
    listEl.innerHTML = `<div class="empty-state"><div class="empty-icon">🐣</div>Noch keine Einträge</div>`;
    allEl.innerHTML = `<div class="empty-state"><div class="empty-icon">🐣</div>Noch keine Einträge</div>`;
    return;
  }

  listEl.innerHTML = recent.map(txHtml).join('');
  allEl.innerHTML = txs.map(txHtml).join('');
}

function txHtml(tx) {
  const sign = tx.type === 'income' ? '+' : '−';
  const cls = tx.type === 'income' ? 'plus' : 'minus';
  const bucketLabels = { spend: 'Ausgeben', save: 'Sparen', invest: 'Investieren' };
  const icon = tx.emoji || (tx.type === 'income' ? '💚' : '💸');
  const date = new Date(tx.date).toLocaleDateString('de-DE', { day:'numeric', month:'short' });
  return `<div class="tx-item">
    <div class="tx-icon">${icon}</div>
    <div class="tx-info">
      <div class="tx-desc">${esc(tx.desc)}<span class="tx-bucket-badge ${tx.bucket}">${bucketLabels[tx.bucket]||''}</span></div>
      <div class="tx-date">${date}</div>
    </div>
    <div class="tx-amount ${cls}">${sign}${fmt(tx.amount)}</div>
  </div>`;
}

function switchTab(name) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  document.getElementById('tab-content-' + name).classList.add('active');
}

// ===== ADD TRANSACTION =====
let txTypeMode = 'income';

function openAddTx() {
  document.getElementById('tx-amount').value = '';
  document.getElementById('tx-desc').value = '';
  document.getElementById('tx-emoji').value = '';
  document.getElementById('tx-bucket').value = 'spend';
  setTxType('income');
  openModal('modal-addtx');
}

function setTxType(type) {
  txTypeMode = type;
  const bInc = document.getElementById('btn-income');
  const bExp = document.getElementById('btn-expense');
  bInc.className = type === 'income' ? 'active-income' : '';
  bExp.className = type === 'expense' ? 'active-expense' : '';
}

function addTransaction() {
  const amt = parseFloat(document.getElementById('tx-amount').value);
  const desc = document.getElementById('tx-desc').value.trim();
  const bucket = document.getElementById('tx-bucket').value;
  const emoji = document.getElementById('tx-emoji').value.trim();

  if (!amt || amt <= 0) { showToast('❌ Bitte Betrag eingeben!'); return; }
  if (!desc) { showToast('❌ Bitte Beschreibung eingeben!'); return; }

  if (txTypeMode === 'expense') {
    if (appData.balances[bucket] < amt) {
      showToast('❌ Nicht genug Geld im ' + bucket + '-Topf!');
      return;
    }
  }

  const tx = {
    id: Date.now(),
    type: txTypeMode,
    amount: amt,
    desc,
    bucket,
    emoji: emoji || (txTypeMode === 'income' ? '💚' : '💸'),
    date: new Date().toISOString()
  };

  appData.transactions.push(tx);
  if (txTypeMode === 'income') {
    appData.balances[bucket] += amt;
  } else {
    appData.balances[bucket] -= amt;
  }

  save();
  closeModal('modal-addtx');
  renderChildScreen();

  if (txTypeMode === 'income') {
    coinRain();
    showToast('💰 +' + fmt(amt) + ' im ' + bucket + '-Topf!');
  } else {
    showToast('✅ ' + fmt(amt) + ' ausgegeben!');
  }
}

// ===== PARENT SCREEN =====
function renderParentScreen() {
  document.getElementById('p-child-name').value = appData.childName || '';
  document.getElementById('p-avatar').value = appData.avatar || '🐸';
  document.getElementById('p-allowance-amount').value = appData.allowance.amount || '';
  document.getElementById('p-allowance-freq').value = appData.allowance.freq || 'monthly';
  document.getElementById('p-goal-name').value = appData.savings.goal.name || '';
  document.getElementById('p-goal-amount').value = appData.savings.goal.amount || '';
  document.getElementById('p-invest-bonus').value = appData.invest.bonus || 10;
  document.getElementById('p-invest-freq').value = appData.invest.freq || 'monthly';

  const area = document.getElementById('p-goal-photo-area');
  if (appData.savings.goal.photo) {
    area.innerHTML = `<div class="photo-preview-wrap">
      <img src="${appData.savings.goal.photo}" class="photo-preview" alt="Ziel">
      <button class="photo-remove" onclick="removeGoalPhoto()">✕</button>
    </div>`;
  } else {
    area.innerHTML = `<div class="photo-upload-area" onclick="document.getElementById('goal-photo-input').click()">
      📸 Foto auswählen<div style="font-size:0.75rem;color:var(--text-soft);margin-top:0.3rem;">optional</div>
    </div>`;
  }

  renderSplitDisplay();
  calcNextPayout();
}

function saveSettings() {
  appData.childName = document.getElementById('p-child-name').value || 'Lena';
  appData.avatar = document.getElementById('p-avatar').value;
  appData.allowance.amount = parseFloat(document.getElementById('p-allowance-amount').value) || 0;
  appData.allowance.freq = document.getElementById('p-allowance-freq').value;
  appData.savings.goal.name = document.getElementById('p-goal-name').value;
  appData.savings.goal.amount = parseFloat(document.getElementById('p-goal-amount').value) || 0;
  appData.invest.bonus = parseFloat(document.getElementById('p-invest-bonus').value) || 10;
  appData.invest.freq = document.getElementById('p-invest-freq').value;
  calcNextPayout();
  save();
}

function calcNextPayout() {
  const freq = appData.allowance.freq;
  const today = new Date();
  today.setHours(0,0,0,0);
  let next = new Date(today);
  if (freq === 'weekly') next.setDate(next.getDate() + 7);
  else if (freq === 'biweekly') next.setDate(next.getDate() + 14);
  else next.setMonth(next.getMonth() + 1);

  if (!appData.allowance.nextDate) {
    appData.allowance.nextDate = next.toISOString().split('T')[0];
    save();
  }
  const el = document.getElementById('p-next-payout');
  if (el) el.textContent = new Date(appData.allowance.nextDate).toLocaleDateString('de-DE');
}

function payAllowance() {
  const amt = appData.allowance.amount;
  if (!amt) { showToast('❌ Bitte Betrag festlegen!'); return; }

  const split = appData.allowance.split || { spend:60, save:30, invest:10 };
  const spendAmt = amt * split.spend / 100;
  const saveAmt = amt * split.save / 100;
  const investAmt = amt * split.invest / 100;

  appData.balances.spend += spendAmt;
  appData.balances.save += saveAmt;
  appData.balances.invest += investAmt;

  const date = new Date().toISOString();
  if (spendAmt) appData.transactions.push({ id: Date.now(), type:'income', amount:spendAmt, desc:'Taschengeld (Ausgeben)', bucket:'spend', emoji:'💰', date });
  if (saveAmt) appData.transactions.push({ id: Date.now()+1, type:'income', amount:saveAmt, desc:'Taschengeld (Sparen)', bucket:'save', emoji:'💙', date });
  if (investAmt) appData.transactions.push({ id: Date.now()+2, type:'income', amount:investAmt, desc:'Taschengeld (Investieren)', bucket:'invest', emoji:'🌱', date });

  const freq = appData.allowance.freq;
  const next = new Date();
  if (freq === 'weekly') next.setDate(next.getDate() + 7);
  else if (freq === 'biweekly') next.setDate(next.getDate() + 14);
  else next.setMonth(next.getMonth() + 1);
  appData.allowance.nextDate = next.toISOString().split('T')[0];

  save();
  renderParentScreen();
  coinRain();
  showToast('🎉 ' + fmt(amt) + ' Taschengeld ausgezahlt!');
}

function payInvestBonus() {
  const investAmt = appData.balances.invest;
  if (!investAmt) { showToast('❌ Noch kein Geld im Investitions-Topf!'); return; }
  const bonus = (appData.invest.bonus || 10) / 100;
  const bonusAmt = investAmt * bonus;

  appData.balances.invest += bonusAmt;
  appData.transactions.push({
    id: Date.now(), type:'income', amount:bonusAmt,
    desc:`Eltern-Bonus (${appData.invest.bonus || 10}%)`,
    bucket:'invest', emoji:'🎁', date: new Date().toISOString()
  });

  save();
  coinRain();
  showToast('🎁 Bonus von ' + fmt(bonusAmt) + ' gutgeschrieben!');
}

// Split
function openSplitModal() {
  const s = appData.allowance.split || { spend:60, save:30, invest:10 };
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
  appData.allowance.split = { spend:a, save:b, invest:c };
  save();
  renderSplitDisplay();
  closeModal('modal-split');
  showToast('✅ Verteilung gespeichert!');
}

function renderSplitDisplay() {
  const s = appData.allowance.split || { spend:60, save:30, invest:10 };
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
    appData.savings.goal.photo = e.target.result;
    save();
    renderParentScreen();
  };
  reader.readAsDataURL(file);
}

function removeGoalPhoto() {
  appData.savings.goal.photo = null;
  save();
  renderParentScreen();
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
    localStorage.removeItem('taschengeld_v3');
    appData = {
      parentPw: null, childName: 'Lena', avatar: '🐸',
      allowance: { amount:0, freq:'monthly', nextDate:null, split:{spend:60,save:30,invest:10} },
      savings: { goal: { name:'', amount:0, photo:null } },
      invest: { bonus:10, freq:'monthly' },
      balances: { spend:0, save:0, invest:0 },
      transactions: []
    };
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

// Close modals on backdrop click
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

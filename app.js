// ===== TRANSLATIONS =====
const LANGS = {
  de: {
    appSubtitle: 'Dein Geld-Freund 🌿',
    iAmChild: 'Ich bin das Kind',
    iAmParent: 'Ich bin Elternteil',
    childHint: '👋 Kein Passwort nötig! Klick einfach auf Einloggen.',
    parentPwLabel: 'Eltern-Passwort',
    parentPwPlaceholder: 'Passwort eingeben…',
    firstTimeNotice: '🔑 Beim ersten Start: Passwort selbst festlegen! Dein erstes eingegebenes Passwort wird gespeichert.',
    loginBtn: '🐸 Los geht\'s!',
    whichChild: 'Welches Kind bist du?',
    hello: (name) => `Hallo ${name}! 👋`,
    myMoney: 'Mein gesamtes Geld 💰',
    savedSub: (amt) => `Du hast ${amt} gespart!`,
    tabHome: 'Home', tabSave: 'Sparen', tabHistory: 'Verlauf',
    bucketSpend: 'Ausgeben', bucketSave: 'Sparen', bucketInvest: 'Investieren',
    nextAllowance: 'Nächstes Taschengeld',
    today: 'heute', tomorrow: 'morgen', inDays: (n) => `in ${n} Tagen`,
    noGoal: 'Noch kein Sparziel! Bitte Eltern fragen.',
    savedOf: (a, b) => `${a} von ${b} gespart`,
    goalReached: '🎉 Ziel erreicht!',
    stillNeeded: (amt) => `Noch ${amt} bis zum Ziel`,
    mySavingsGoal: '🎯 Mein Sparziel',
    myInvestPot: '🌱 Mein Investitions-Topf',
    longTermSaver: 'Langzeit-Sparer',
    parentsBonusInfo: (pct) => `🎁 Eltern zahlen ${pct}% Bonus dazu!`,
    recentMovements: '⚡ Letzte Bewegungen',
    allTransactions: '📋 Alle Transaktionen',
    noEntries: 'Noch keine Einträge', bye: 'Tschüss',
    txSpend: 'Ausgeben', txSave: 'Sparen', txInvest: 'Investieren',
    parentArea: 'Eltern-Bereich 👨‍👩‍👧', settingsSubtitle: 'Einstellungen & Verwaltung',
    childProfile: '🧒 Kind-Profil', childName: 'Name des Kindes', childNamePlaceholder: 'z.B. Lena',
    animalAvatar: 'Tier-Avatar', changeParentPw: 'Eltern-Passwort ändern', changeBtn: '🔑 Ändern',
    deleteChild: '🗑️ Dieses Kind löschen',
    allowance: '💰 Taschengeld', amountPerPayment: 'Betrag pro Zahlung',
    payoutFrequency: 'Auszahlungs-Rhythmus', weekly: 'Wöchentlich', biweekly: 'Alle 2 Wochen', monthly: 'Monatlich',
    distribution: 'Verteilung (%)', distributeBtn: '⚙️ Verteilen', nextPayout: 'Nächste Auszahlung',
    payNow: '💸 Taschengeld jetzt auszahlen',
    savingsGoal: '🎯 Sparziel festlegen', goalName: 'Ziel-Name', goalNamePlaceholder: 'z.B. Nintendo Switch',
    goalAmount: 'Zielbetrag (€)', goalPhoto: 'Foto des Ziels', choosePhoto: '📸 Foto auswählen', photoOptional: 'optional',
    investBonus: '🌱 Investitions-Bonus', bonusPct: 'Bonus-Prozentsatz (%)', rhythm: 'Rhythmus',
    quarterly: 'Vierteljährlich', payBonusNow: '🌱 Bonus jetzt gutschreiben',
    manageBookings: '✏️ Buchungen verwalten', balance: 'Kontostand:', newBooking: '➕ Neue Buchung',
    backupData: '📦 Daten sichern', exportBtn: '📤 Exportieren', importBtn: '📥 Importieren',
    autoSaved: 'Daten werden auch automatisch im Browser gespeichert.',
    resetData: '⚠️ Zurücksetzen', deleteAll: '🗑️ Alle Daten löschen',
    addChild: 'Kind', newChildTitle: '🧒 Neues Kind hinzufügen',
    name: 'Name', namePlaceholder: 'z.B. Max', avatar: 'Avatar', addChildBtn: '✅ Hinzufügen',
    newBookingTitle: 'Neue Buchung', editBookingTitle: 'Buchung bearbeiten',
    income: '+ Einnahme', expense: '− Ausgabe', amount: 'Betrag (€)', description: 'Beschreibung',
    descPlaceholder: 'z.B. Geburtstagsgeld von Oma 🎂', wallet: 'Geldbeutel',
    spendOpt: '🛍️ Ausgeben (sofort)', saveOpt: '🎯 Sparen', investOpt: '🌱 Investieren',
    emoji: 'Emoji', cancel: 'Abbrechen', saveTx: '💾 Speichern',
    splitTitle: '⚙️ Taschengeld verteilen',
    splitDesc: 'Wie soll das Taschengeld aufgeteilt werden? (Summe muss 100% ergeben)',
    splitSpend: '🛍️ Ausgeben (%)', splitSave: '🎯 Sparen (%)', splitInvest: '🌱 Investieren (%)',
    splitSum: (n) => `Summe: ${n}%`, saveSplit: '✅ Speichern',
    changePwTitle: '🔑 Passwort ändern', oldPw: 'Altes Passwort', newPw: 'Neues Passwort',
    newPwPlaceholder: 'Neues Passwort (min. 4 Zeichen)', changePwBtn: '🔑 Ändern',
    toastNewPw: '🎉 Neues Passwort gespeichert!', toastWrongPw: '❌ Falsches Passwort!',
    toastMinChars: 'Bitte mindestens 4 Zeichen wählen!',
    toastEnterAmount: '❌ Bitte Betrag eingeben!', toastEnterDesc: '❌ Bitte Beschreibung eingeben!',
    toastNotEnough: (b) => `❌ Nicht genug Geld im ${b}-Topf!`,
    toastUpdated: '✅ Buchung aktualisiert!',
    toastIncomeSaved: (amt, b) => `💰 +${amt} im ${b}-Topf!`,
    toastExpenseSaved: (amt) => `✅ ${amt} ausgegeben!`,
    toastAllowancePaid: (amt) => `🎉 ${amt} Taschengeld ausgezahlt!`,
    toastNoInvest: '❌ Noch kein Geld im Investitions-Topf!',
    toastBonusPaid: (amt) => `🎁 Bonus von ${amt} gutgeschrieben!`,
    toastSplitSaved: '✅ Verteilung gespeichert!', toastSplitError: '❌ Summe muss 100% ergeben!',
    toastExported: '📤 Daten exportiert!', toastImported: '📥 Daten importiert!',
    toastImportError: '❌ Datei konnte nicht gelesen werden!', toastDeleted: '🗑️ Alle Daten gelöscht!',
    toastChildAdded: (name) => `🎉 ${name} hinzugefügt!`, toastChildDeleted: '🗑️ Kind gelöscht!',
    toastMinOneChild: '❌ Mindestens ein Kind muss vorhanden sein!', toastEnterName: '❌ Bitte Namen eingeben!',
    toastPwChanged: '✅ Passwort geändert!', toastWrongOldPw: '❌ Altes Passwort stimmt nicht!',
    toastMinFourChars: '❌ Mindestens 4 Zeichen!', toastTxDeleted: '🗑️ Buchung gelöscht!',
    toastSetAmount: '❌ Bitte Betrag festlegen!',
    confirmReset: 'Wirklich alle Daten löschen? Das kann nicht rückgängig gemacht werden!',
    confirmDeleteChild: (name) => `Wirklich "${name}" und alle Daten löschen?`,
    confirmDeleteTx: 'Buchung wirklich löschen?',
    allowanceSpend: 'Taschengeld (Ausgeben)', allowanceSave: 'Taschengeld (Sparen)', allowanceInvest: 'Taschengeld (Investieren)',
    bonusDesc: (pct) => `Eltern-Bonus (${pct}%)`,
    dateLocale: 'de-DE',
    currency: (n) => (n||0).toLocaleString('de-DE', {minimumFractionDigits:2,maximumFractionDigits:2}) + ' €',
  },
  en: {
    appSubtitle: 'Your money friend 🌿',
    iAmChild: "I'm the child", iAmParent: "I'm a parent",
    childHint: '👋 No password needed! Just tap Login.',
    parentPwLabel: 'Parent password', parentPwPlaceholder: 'Enter password…',
    firstTimeNotice: '🔑 First time? Set your own password — whatever you type first will be saved.',
    loginBtn: "🐸 Let's go!", whichChild: 'Which child are you?',
    hello: (name) => `Hello ${name}! 👋`, myMoney: 'My total money 💰',
    savedSub: (amt) => `You have saved ${amt}!`,
    tabHome: 'Home', tabSave: 'Save', tabHistory: 'History',
    bucketSpend: 'Spend', bucketSave: 'Save', bucketInvest: 'Invest',
    nextAllowance: 'Next allowance', today: 'today', tomorrow: 'tomorrow', inDays: (n) => `in ${n} days`,
    noGoal: 'No savings goal yet! Ask your parents.',
    savedOf: (a, b) => `${a} of ${b} saved`, goalReached: '🎉 Goal reached!',
    stillNeeded: (amt) => `${amt} still to go`,
    mySavingsGoal: '🎯 My Savings Goal', myInvestPot: '🌱 My Investment Pot',
    longTermSaver: 'Long-Term Saver', parentsBonusInfo: (pct) => `🎁 Parents add a ${pct}% bonus!`,
    recentMovements: '⚡ Recent Activity', allTransactions: '📋 All Transactions',
    noEntries: 'No entries yet', bye: 'Bye',
    txSpend: 'Spend', txSave: 'Save', txInvest: 'Invest',
    parentArea: 'Parent Area 👨‍👩‍👧', settingsSubtitle: 'Settings & Management',
    childProfile: '🧒 Child Profile', childName: "Child's name", childNamePlaceholder: 'e.g. Lena',
    animalAvatar: 'Animal avatar', changeParentPw: 'Change parent password', changeBtn: '🔑 Change',
    deleteChild: '🗑️ Delete this child',
    allowance: '💰 Allowance', amountPerPayment: 'Amount per payment',
    payoutFrequency: 'Payout frequency', weekly: 'Weekly', biweekly: 'Every 2 weeks', monthly: 'Monthly',
    distribution: 'Distribution (%)', distributeBtn: '⚙️ Configure', nextPayout: 'Next payout',
    payNow: '💸 Pay allowance now',
    savingsGoal: '🎯 Set savings goal', goalName: 'Goal name', goalNamePlaceholder: 'e.g. Nintendo Switch',
    goalAmount: 'Target amount (€)', goalPhoto: 'Photo of goal', choosePhoto: '📸 Choose photo', photoOptional: 'optional',
    investBonus: '🌱 Investment Bonus', bonusPct: 'Bonus percentage (%)', rhythm: 'Frequency',
    quarterly: 'Quarterly', payBonusNow: '🌱 Pay bonus now',
    manageBookings: '✏️ Manage Transactions', balance: 'Balance:', newBooking: '➕ New Transaction',
    backupData: '📦 Backup Data', exportBtn: '📤 Export', importBtn: '📥 Import',
    autoSaved: 'Data is also saved automatically in the browser.',
    resetData: '⚠️ Reset', deleteAll: '🗑️ Delete all data',
    addChild: 'Child', newChildTitle: '🧒 Add new child',
    name: 'Name', namePlaceholder: 'e.g. Max', avatar: 'Avatar', addChildBtn: '✅ Add',
    newBookingTitle: 'New Transaction', editBookingTitle: 'Edit Transaction',
    income: '+ Income', expense: '− Expense', amount: 'Amount (€)', description: 'Description',
    descPlaceholder: 'e.g. Birthday money from grandma 🎂', wallet: 'Bucket',
    spendOpt: '🛍️ Spend (now)', saveOpt: '🎯 Save', investOpt: '🌱 Invest',
    emoji: 'Emoji', cancel: 'Cancel', saveTx: '💾 Save',
    splitTitle: '⚙️ Split allowance',
    splitDesc: 'How should the allowance be split? (Must add up to 100%)',
    splitSpend: '🛍️ Spend (%)', splitSave: '🎯 Save (%)', splitInvest: '🌱 Invest (%)',
    splitSum: (n) => `Total: ${n}%`, saveSplit: '✅ Save',
    changePwTitle: '🔑 Change password', oldPw: 'Old password', newPw: 'New password',
    newPwPlaceholder: 'New password (min. 4 characters)', changePwBtn: '🔑 Change',
    toastNewPw: '🎉 New password saved!', toastWrongPw: '❌ Wrong password!',
    toastMinChars: 'Please choose at least 4 characters!',
    toastEnterAmount: '❌ Please enter an amount!', toastEnterDesc: '❌ Please enter a description!',
    toastNotEnough: (b) => `❌ Not enough money in the ${b} bucket!`,
    toastUpdated: '✅ Transaction updated!',
    toastIncomeSaved: (amt, b) => `💰 +${amt} in the ${b} bucket!`,
    toastExpenseSaved: (amt) => `✅ ${amt} spent!`,
    toastAllowancePaid: (amt) => `🎉 ${amt} allowance paid!`,
    toastNoInvest: '❌ No money in the invest bucket yet!',
    toastBonusPaid: (amt) => `🎁 Bonus of ${amt} added!`,
    toastSplitSaved: '✅ Split saved!', toastSplitError: '❌ Must add up to 100%!',
    toastExported: '📤 Data exported!', toastImported: '📥 Data imported!',
    toastImportError: '❌ Could not read file!', toastDeleted: '🗑️ All data deleted!',
    toastChildAdded: (name) => `🎉 ${name} added!`, toastChildDeleted: '🗑️ Child deleted!',
    toastMinOneChild: '❌ At least one child must remain!', toastEnterName: '❌ Please enter a name!',
    toastPwChanged: '✅ Password changed!', toastWrongOldPw: '❌ Old password is incorrect!',
    toastMinFourChars: '❌ At least 4 characters!', toastTxDeleted: '🗑️ Transaction deleted!',
    toastSetAmount: '❌ Please set an amount first!',
    confirmReset: 'Really delete all data? This cannot be undone!',
    confirmDeleteChild: (name) => `Really delete "${name}" and all their data?`,
    confirmDeleteTx: 'Really delete this transaction?',
    allowanceSpend: 'Allowance (Spend)', allowanceSave: 'Allowance (Save)', allowanceInvest: 'Allowance (Invest)',
    bonusDesc: (pct) => `Parent Bonus (${pct}%)`,
    dateLocale: 'en-GB',
    currency: (n) => '€' + (n||0).toLocaleString('en-GB', {minimumFractionDigits:2,maximumFractionDigits:2}),
  },
  pt: {
    appSubtitle: 'Seu amigo do dinheiro 🌿',
    iAmChild: 'Sou a criança', iAmParent: 'Sou pai/mãe',
    childHint: '👋 Sem senha necessária! Clique em Entrar.',
    parentPwLabel: 'Senha dos pais', parentPwPlaceholder: 'Digite a senha…',
    firstTimeNotice: '🔑 Primeira vez? Defina sua senha — o primeiro valor digitado será salvo.',
    loginBtn: '🐸 Vamos lá!', whichChild: 'Qual criança é você?',
    hello: (name) => `Olá ${name}! 👋`, myMoney: 'Meu dinheiro total 💰',
    savedSub: (amt) => `Você guardou ${amt}!`,
    tabHome: 'Início', tabSave: 'Poupar', tabHistory: 'Histórico',
    bucketSpend: 'Gastar', bucketSave: 'Poupar', bucketInvest: 'Investir',
    nextAllowance: 'Próxima mesada', today: 'hoje', tomorrow: 'amanhã', inDays: (n) => `em ${n} dias`,
    noGoal: 'Nenhuma meta ainda! Peça aos seus pais.',
    savedOf: (a, b) => `${a} de ${b} guardados`, goalReached: '🎉 Meta alcançada!',
    stillNeeded: (amt) => `Faltam ${amt} para a meta`,
    mySavingsGoal: '🎯 Minha Meta de Poupança', myInvestPot: '🌱 Meu Cofrinho de Investimento',
    longTermSaver: 'Poupador de Longo Prazo', parentsBonusInfo: (pct) => `🎁 Os pais adicionam ${pct}% de bônus!`,
    recentMovements: '⚡ Movimentos Recentes', allTransactions: '📋 Todas as Transações',
    noEntries: 'Nenhuma entrada ainda', bye: 'Tchau',
    txSpend: 'Gastar', txSave: 'Poupar', txInvest: 'Investir',
    parentArea: 'Área dos Pais 👨‍👩‍👧', settingsSubtitle: 'Configurações & Gestão',
    childProfile: '🧒 Perfil da Criança', childName: 'Nome da criança', childNamePlaceholder: 'ex. Lena',
    animalAvatar: 'Avatar animal', changeParentPw: 'Alterar senha dos pais', changeBtn: '🔑 Alterar',
    deleteChild: '🗑️ Excluir esta criança',
    allowance: '💰 Mesada', amountPerPayment: 'Valor por pagamento',
    payoutFrequency: 'Frequência de pagamento', weekly: 'Semanal', biweekly: 'A cada 2 semanas', monthly: 'Mensal',
    distribution: 'Distribuição (%)', distributeBtn: '⚙️ Configurar', nextPayout: 'Próximo pagamento',
    payNow: '💸 Pagar mesada agora',
    savingsGoal: '🎯 Definir meta de poupança', goalName: 'Nome da meta', goalNamePlaceholder: 'ex. Nintendo Switch',
    goalAmount: 'Valor alvo (€)', goalPhoto: 'Foto da meta', choosePhoto: '📸 Escolher foto', photoOptional: 'opcional',
    investBonus: '🌱 Bônus de Investimento', bonusPct: 'Percentual de bônus (%)', rhythm: 'Frequência',
    quarterly: 'Trimestral', payBonusNow: '🌱 Pagar bônus agora',
    manageBookings: '✏️ Gerenciar Transações', balance: 'Saldo:', newBooking: '➕ Nova Transação',
    backupData: '📦 Backup dos Dados', exportBtn: '📤 Exportar', importBtn: '📥 Importar',
    autoSaved: 'Os dados também são salvos automaticamente no navegador.',
    resetData: '⚠️ Redefinir', deleteAll: '🗑️ Apagar todos os dados',
    addChild: 'Criança', newChildTitle: '🧒 Adicionar nova criança',
    name: 'Nome', namePlaceholder: 'ex. Max', avatar: 'Avatar', addChildBtn: '✅ Adicionar',
    newBookingTitle: 'Nova Transação', editBookingTitle: 'Editar Transação',
    income: '+ Receita', expense: '− Despesa', amount: 'Valor (€)', description: 'Descrição',
    descPlaceholder: 'ex. Dinheiro de aniversário da vovó 🎂', wallet: 'Cofre',
    spendOpt: '🛍️ Gastar (agora)', saveOpt: '🎯 Poupar', investOpt: '🌱 Investir',
    emoji: 'Emoji', cancel: 'Cancelar', saveTx: '💾 Salvar',
    splitTitle: '⚙️ Dividir mesada',
    splitDesc: 'Como a mesada deve ser dividida? (Deve somar 100%)',
    splitSpend: '🛍️ Gastar (%)', splitSave: '🎯 Poupar (%)', splitInvest: '🌱 Investir (%)',
    splitSum: (n) => `Total: ${n}%`, saveSplit: '✅ Salvar',
    changePwTitle: '🔑 Alterar senha', oldPw: 'Senha antiga', newPw: 'Nova senha',
    newPwPlaceholder: 'Nova senha (mín. 4 caracteres)', changePwBtn: '🔑 Alterar',
    toastNewPw: '🎉 Nova senha salva!', toastWrongPw: '❌ Senha incorreta!',
    toastMinChars: 'Escolha pelo menos 4 caracteres!',
    toastEnterAmount: '❌ Por favor insira um valor!', toastEnterDesc: '❌ Por favor insira uma descrição!',
    toastNotEnough: (b) => `❌ Dinheiro insuficiente no cofre ${b}!`,
    toastUpdated: '✅ Transação atualizada!',
    toastIncomeSaved: (amt, b) => `💰 +${amt} no cofre ${b}!`,
    toastExpenseSaved: (amt) => `✅ ${amt} gasto!`,
    toastAllowancePaid: (amt) => `🎉 Mesada de ${amt} paga!`,
    toastNoInvest: '❌ Nenhum dinheiro no cofre de investimento!',
    toastBonusPaid: (amt) => `🎁 Bônus de ${amt} adicionado!`,
    toastSplitSaved: '✅ Divisão salva!', toastSplitError: '❌ Deve somar 100%!',
    toastExported: '📤 Dados exportados!', toastImported: '📥 Dados importados!',
    toastImportError: '❌ Não foi possível ler o arquivo!', toastDeleted: '🗑️ Todos os dados apagados!',
    toastChildAdded: (name) => `🎉 ${name} adicionado(a)!`, toastChildDeleted: '🗑️ Criança excluída!',
    toastMinOneChild: '❌ Pelo menos uma criança deve permanecer!', toastEnterName: '❌ Por favor insira um nome!',
    toastPwChanged: '✅ Senha alterada!', toastWrongOldPw: '❌ Senha antiga incorreta!',
    toastMinFourChars: '❌ Pelo menos 4 caracteres!', toastTxDeleted: '🗑️ Transação excluída!',
    toastSetAmount: '❌ Por favor defina um valor primeiro!',
    confirmReset: 'Realmente apagar todos os dados? Isso não pode ser desfeito!',
    confirmDeleteChild: (name) => `Realmente excluir "${name}" e todos os dados?`,
    confirmDeleteTx: 'Realmente excluir esta transação?',
    allowanceSpend: 'Mesada (Gastar)', allowanceSave: 'Mesada (Poupar)', allowanceInvest: 'Mesada (Investir)',
    bonusDesc: (pct) => `Bônus dos Pais (${pct}%)`,
    dateLocale: 'pt-BR',
    currency: (n) => (n||0).toLocaleString('pt-BR', {minimumFractionDigits:2,maximumFractionDigits:2}) + ' €',
  }
};

let currentLang = localStorage.getItem('lang') || 'de';
function t(key, ...args) {
  const val = LANGS[currentLang]?.[key] ?? LANGS['de'][key];
  return typeof val === 'function' ? val(...args) : (val ?? key);
}
function fmt(n) { return t('currency', n); }

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  applyStaticTranslations();
  renderCurrentScreen();
}

function renderCurrentScreen() {
  const active = document.querySelector('.screen.active');
  if (!active) return;
  const id = active.id;
  if (id === 'screen-welcome') selectLoginType(loginType);
  else if (id === 'screen-child') renderChildScreen();
  else if (id === 'screen-parent') renderParentScreen();
}

// ===== AVATAR THEMES =====
const AVATAR_THEMES = {
  '🐸': { primary:'#4CAF82', dark:'#2E7D5A', light:'#E8F7F0', bg:'#F0FBF5', accent:'#FFD166', accentLight:'#FFF8E1', grad:'135deg, #4CAF82 0%, #2E7D5A 100%' },
  '🐭': { primary:'#9B8EA8', dark:'#5C4D6B', light:'#F0EBF5', bg:'#F7F3FB', accent:'#D4B8E0', accentLight:'#F5EEF8', grad:'135deg, #9B8EA8 0%, #5C4D6B 100%' },
  '🐼': { primary:'#6B6B6B', dark:'#2B2B2B', light:'#EFEFEF', bg:'#F6F6F6', accent:'#E87070', accentLight:'#FFF0F0', grad:'135deg, #6B6B6B 0%, #2B2B2B 100%' },
  '🦊': { primary:'#E8732A', dark:'#A84D10', light:'#FDF0E6', bg:'#FEF6EE', accent:'#FFD166', accentLight:'#FFF8E1', grad:'135deg, #E8732A 0%, #A84D10 100%' },
  '🐨': { primary:'#6B9FB5', dark:'#3D6B7D', light:'#E3F2F8', bg:'#EEF7FA', accent:'#A8D4E0', accentLight:'#E8F6FA', grad:'135deg, #6B9FB5 0%, #3D6B7D 100%' },
  '🐰': { primary:'#D97FAE', dark:'#9A3D70', light:'#FDEEF6', bg:'#FEF4FB', accent:'#F4B8D8', accentLight:'#FEF0F8', grad:'135deg, #D97FAE 0%, #9A3D70 100%' },
  '🐱': { primary:'#C47A50', dark:'#7D4520', light:'#FAF0E8', bg:'#FDF5EE', accent:'#E8C080', accentLight:'#FEF8EC', grad:'135deg, #C47A50 0%, #7D4520 100%' },
  '🐶': { primary:'#B8894A', dark:'#7A5520', light:'#F8F0E0', bg:'#FDF6EC', accent:'#E8C87A', accentLight:'#FEF8E8', grad:'135deg, #B8894A 0%, #7A5520 100%' },
  '🐻': { primary:'#8B5E3C', dark:'#4A2A10', light:'#F5EAE0', bg:'#FAF2EA', accent:'#D4A070', accentLight:'#FAF0E4', grad:'135deg, #8B5E3C 0%, #4A2A10 100%' },
  '🦁': { primary:'#C8961E', dark:'#7A5800', light:'#FBF3DC', bg:'#FEF8E8', accent:'#E8B830', accentLight:'#FEF6DC', grad:'135deg, #C8961E 0%, #7A5800 100%' },
  '🐯': { primary:'#D4841A', dark:'#8A4A00', light:'#FEF0DC', bg:'#FEF6EE', accent:'#1A1A1A', accentLight:'#F0F0F0', grad:'135deg, #D4841A 0%, #8A4A00 100%' },
  '🦄': { primary:'#A855C8', dark:'#6A1E96', light:'#F3E8FA', bg:'#F9F0FE', accent:'#E8A0D4', accentLight:'#FEF0FA', grad:'135deg, #A855C8 0%, #6A1E96 100%' },
  '🐙': { primary:'#6B4EA8', dark:'#3A1E78', light:'#EDE8F8', bg:'#F4F0FC', accent:'#C898E0', accentLight:'#F5EEF8', grad:'135deg, #6B4EA8 0%, #3A1E78 100%' },
};

function applyAvatarTheme(avatar) {
  const theme = AVATAR_THEMES[avatar] || AVATAR_THEMES['🐸'];
  const r = document.documentElement;
  r.style.setProperty('--green', theme.primary);
  r.style.setProperty('--green-dark', theme.dark);
  r.style.setProperty('--green-light', theme.light);
  r.style.setProperty('--bg', theme.bg);
  r.style.setProperty('--yellow', theme.accent);
  r.style.setProperty('--yellow-light', theme.accentLight);
  // Dynamic overrides via injected style tag
  let style = document.getElementById('dynamic-theme-style');
  if (!style) { style = document.createElement('style'); style.id = 'dynamic-theme-style'; document.head.appendChild(style); }
  style.textContent = `
    .total-card { background: linear-gradient(${theme.grad}) !important; }
    .total-card::before { content: '${avatar}' !important; }
    .invest-card { background: linear-gradient(135deg, ${theme.primary}CC, ${theme.dark}) !important; }
    body { background-color: ${theme.bg}; }
  `;
}

// ===== STATIC TRANSLATIONS =====
function applyStaticTranslations() {
  const set = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };
  const setPH = (id, text) => { const el = document.getElementById(id); if (el) el.placeholder = text; };

  set('app-subtitle', t('appSubtitle'));
  set('btn-child-label', t('iAmChild'));
  set('btn-parent-label', t('iAmParent'));
  set('child-hint', t('childHint'));
  set('pw-label-text', t('parentPwLabel'));
  setPH('pw-input', t('parentPwPlaceholder'));
  set('first-time-text', t('firstTimeNotice'));
  set('login-btn-text', t('loginBtn'));
  // Child screen
  set('tab-overview-label', t('tabHome'));
  set('tab-save-label', t('tabSave'));
  set('tab-history-label', t('tabHistory'));
  set('bucket-spend-label', t('bucketSpend'));
  set('bucket-save-label', t('bucketSave'));
  set('bucket-invest-label', t('bucketInvest'));
  set('section-recent', t('recentMovements'));
  set('section-goal', t('mySavingsGoal'));
  set('section-invest-label', t('myInvestPot'));
  set('invest-card-title-text', t('longTermSaver'));
  set('section-history', t('allTransactions'));
  set('child-logout-btn', t('bye'));
  // Parent screen
  set('parent-area-title', t('parentArea'));
  set('parent-area-sub', t('settingsSubtitle'));
  set('parent-logout-btn', t('bye'));
  set('p-card-title-profile', t('childProfile'));
  set('p-label-child-name', t('childName'));
  set('p-label-avatar', t('animalAvatar'));
  set('p-label-change-pw', t('changeParentPw'));
  set('p-btn-change-pw', t('changeBtn'));
  set('p-btn-delete-child', t('deleteChild'));
  set('p-card-title-allowance', t('allowance'));
  set('p-label-allowance-amount', t('amountPerPayment'));
  set('p-label-allowance-freq', t('payoutFrequency'));
  set('p-label-distribution', t('distribution'));
  set('p-btn-distribute', t('distributeBtn'));
  set('p-label-next-payout', t('nextPayout'));
  set('p-btn-pay-allowance', t('payNow'));
  set('p-card-title-goal', t('savingsGoal'));
  set('p-label-goal-name', t('goalName'));
  set('p-label-goal-amount', t('goalAmount'));
  set('p-label-goal-photo', t('goalPhoto'));
  set('p-card-title-invest', t('investBonus'));
  set('p-label-bonus-pct', t('bonusPct'));
  set('p-label-bonus-freq', t('rhythm'));
  set('p-btn-pay-bonus', t('payBonusNow'));
  set('p-card-title-bookings', t('manageBookings'));
  set('p-label-balance', t('balance'));
  set('p-btn-new-booking', t('newBooking'));
  set('p-card-title-backup', t('backupData'));
  set('p-btn-export', t('exportBtn'));
  set('p-btn-import', t('importBtn'));
  set('p-auto-saved', t('autoSaved'));
  set('p-card-title-reset', t('resetData'));
  set('p-btn-delete-all', t('deleteAll'));
  setPH('p-child-name', t('childNamePlaceholder'));
  setPH('p-goal-name', t('goalNamePlaceholder'));
  // Modal: addtx
  set('modal-addtx-income-btn', t('income'));
  set('modal-addtx-expense-btn', t('expense'));
  set('modal-addtx-amount-label', t('amount'));
  set('modal-addtx-desc-label', t('description'));
  setPH('tx-desc', t('descPlaceholder'));
  set('modal-addtx-wallet-label', t('wallet'));
  set('tx-bucket-spend-opt', t('spendOpt'));
  set('tx-bucket-save-opt', t('saveOpt'));
  set('tx-bucket-invest-opt', t('investOpt'));
  set('modal-addtx-emoji-label', t('emoji'));
  set('modal-addtx-cancel', t('cancel'));
  set('modal-addtx-save', t('saveTx'));
  // Modal: split
  set('modal-split-title', t('splitTitle'));
  set('modal-split-desc', t('splitDesc'));
  set('split-label-spend', t('splitSpend'));
  set('split-label-save', t('splitSave'));
  set('split-label-invest', t('splitInvest'));
  set('split-cancel-btn', t('cancel'));
  set('split-save-btn', t('saveSplit'));
  // Modal: changepw
  set('modal-changepw-title', t('changePwTitle'));
  set('old-pw-label', t('oldPw'));
  set('new-pw-label', t('newPw'));
  setPH('new-pw', t('newPwPlaceholder'));
  set('changepw-cancel', t('cancel'));
  set('changepw-btn', t('changePwBtn'));
  // Modal: add child
  set('modal-add-child-title', t('newChildTitle'));
  set('new-child-name-label', t('name'));
  setPH('new-child-name', t('namePlaceholder'));
  set('new-child-avatar-label', t('avatar'));
  set('add-child-cancel', t('cancel'));
  set('add-child-btn', t('addChildBtn'));
  // Freq selects
  const freqSel = document.getElementById('p-allowance-freq');
  if (freqSel) { freqSel.options[0].text = t('weekly'); freqSel.options[1].text = t('biweekly'); freqSel.options[2].text = t('monthly'); }
  const invSel = document.getElementById('p-invest-freq');
  if (invSel) { invSel.options[0].text = t('monthly'); invSel.options[1].text = t('quarterly'); }
  // Today's date
  const dateEl = document.getElementById('today-date');
  if (dateEl) dateEl.textContent = new Date().toLocaleDateString(t('dateLocale'), { weekday:'long', day:'numeric', month:'long' });
  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));
}

// ===== DEFAULT CHILD =====
function defaultChild(name = 'Lena', avatar = '🐸') {
  return {
    id: Date.now(), childName: name, avatar,
    allowance: { amount: 0, freq: 'monthly', nextDate: null, split: { spend: 60, save: 30, invest: 10 } },
    savings: { goal: { name: '', amount: 0, photo: null } },
    invest: { bonus: 10, freq: 'monthly' },
    balances: { spend: 0, save: 0, invest: 0 },
    transactions: []
  };
}

// ===== STATE =====
let appData = { parentPw: null, children: [defaultChild('Lena', '🐸')], activeChildId: null };

// ===== STORAGE =====
function save() { try { localStorage.setItem('taschengeld_v4', JSON.stringify(appData)); } catch(e) {} }
function load() {
  try {
    const d = localStorage.getItem('taschengeld_v4');
    if (d) appData = { ...appData, ...JSON.parse(d) };
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

function getChild(id) { return appData.children.find(c => c.id === id) || appData.children[0]; }
function activeChild() { return getChild(appData.activeChildId) || appData.children[0]; }

// ===== INIT =====
load();
if (!appData.activeChildId && appData.children.length) appData.activeChildId = appData.children[0].id;
applyAvatarTheme(activeChild().avatar);
applyStaticTranslations();
renderLoginState();

// ===== LOGIN =====
let loginType = 'child';

function selectLoginType(type) {
  loginType = type;
  document.getElementById('btn-child').className = 'login-btn child' + (type === 'child' ? ' active' : '');
  document.getElementById('btn-parent').className = 'login-btn parent' + (type === 'parent' ? ' active' : '');
  document.getElementById('pw-group').style.display = type === 'parent' ? 'block' : 'none';
  document.getElementById('child-hint').style.display = type === 'child' ? 'block' : 'none';
  document.getElementById('login-btn-main').className = 'btn-main' + (type === 'parent' ? ' yellow' : '');
  document.getElementById('login-error').textContent = '';
  const childSel = document.getElementById('child-selector-wrap');
  if (type === 'child') { renderChildSelector(); childSel.style.display = 'block'; }
  else childSel.style.display = 'none';
  document.getElementById('first-time-notice').style.display = (type === 'parent' && !appData.parentPw) ? 'block' : 'none';
}

function renderChildSelector() {
  const wrap = document.getElementById('child-selector-wrap');
  if (appData.children.length <= 1) { wrap.innerHTML = ''; return; }
  wrap.innerHTML = `<div style="margin-bottom:1rem;">
    <label class="pw-label">${t('whichChild')}</label>
    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
      ${appData.children.map(c => `
        <button class="child-pick-btn ${c.id === appData.activeChildId ? 'active' : ''}"
          onclick="selectActiveChild(${c.id})" style="flex:1;min-width:80px;">
          <span style="font-size:1.5rem;display:block;">${c.avatar}</span>
          <span style="font-size:0.85rem;font-weight:700;">${esc(c.childName)}</span>
        </button>`).join('')}
    </div>
  </div>`;
}

function selectActiveChild(id) {
  appData.activeChildId = id; save();
  applyAvatarTheme(getChild(id).avatar);
  renderChildSelector(); renderLoginState();
}

function togglePw() { const i = document.getElementById('pw-input'); i.type = i.type === 'password' ? 'text' : 'password'; }

function renderLoginState() {
  const child = activeChild();
  document.getElementById('hero-frog').textContent = child.avatar || '🐸';
  applyAvatarTheme(child.avatar);
}

function tryLogin() {
  if (loginType === 'child') { showScreen('child'); return; }
  const pw = document.getElementById('pw-input').value;
  if (!appData.parentPw) {
    if (pw.length < 4) { document.getElementById('login-error').textContent = t('toastMinChars'); return; }
    appData.parentPw = pw; save(); showScreen('parent'); showToast(t('toastNewPw'));
  } else {
    if (pw === appData.parentPw) showScreen('parent');
    else { document.getElementById('login-error').textContent = t('toastWrongPw'); shakeEl(document.getElementById('pw-input')); }
  }
}

function shakeEl(el) { el.style.borderColor = '#E53E3E'; setTimeout(() => { el.style.borderColor = ''; }, 1000); }

function logout() {
  document.getElementById('pw-input').value = '';
  document.getElementById('login-error').textContent = '';
  showScreen('welcome'); renderLoginState();
}

function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  applyStaticTranslations();
  if (name === 'child') renderChildScreen();
  if (name === 'parent') { currentParentChildId = activeChild().id; renderParentScreen(); }
  if (name === 'welcome') selectLoginType('child');
}

// ===== CHILD SCREEN =====
function renderChildScreen() {
  const child = activeChild();
  applyAvatarTheme(child.avatar);
  const b = child.balances;
  const total = b.spend + b.save + b.invest;
  document.getElementById('child-greeting').textContent = t('hello', child.childName || '⭐');
  document.getElementById('child-avatar').textContent = child.avatar;
  document.getElementById('child-total').textContent = fmt(total);
  document.getElementById('child-total-sub').textContent = t('savedSub', fmt(total));
  document.getElementById('bucket-spend').textContent = fmt(b.spend);
  document.getElementById('bucket-save').textContent = fmt(b.save);
  document.getElementById('bucket-invest').textContent = fmt(b.invest);
  document.getElementById('invest-display').textContent = fmt(b.invest);
  document.getElementById('invest-bonus-info').innerHTML = `<span>${t('parentsBonusInfo', child.invest.bonus || 10)}</span>`;
  renderNextPayout(); renderSavingsGoal(); renderTransactions();
}

function renderNextPayout() {
  const child = activeChild();
  const wrap = document.getElementById('next-payout-wrap');
  const nd = child.allowance.nextDate;
  if (!nd || !child.allowance.amount) { wrap.innerHTML = ''; return; }
  const d = new Date(nd);
  const today = new Date(); today.setHours(0,0,0,0);
  const diff = Math.ceil((d - today) / 86400000);
  const diffStr = diff === 0 ? t('today') : diff === 1 ? t('tomorrow') : t('inDays', diff);
  wrap.innerHTML = `<div class="next-payout">
    <span class="payout-icon">📅</span>
    <span>${t('nextAllowance')}: <strong>${fmt(child.allowance.amount)}</strong> — ${diffStr} (${d.toLocaleDateString(t('dateLocale'))})</span>
  </div>`;
}

function renderSavingsGoal() {
  const child = activeChild();
  const g = child.savings.goal;
  const saveAmt = child.balances.save;
  const el = document.getElementById('save-goal-display');
  if (!g || !g.name) { el.innerHTML = `<div class="empty-state"><div class="empty-icon">🌟</div>${t('noGoal')}</div>`; return; }
  const pct = g.amount > 0 ? Math.min(100, (saveAmt / g.amount) * 100) : 0;
  const photoHtml = g.photo ? `<img src="${g.photo}" class="goal-img" alt="goal">` : `<div class="goal-img-placeholder">🎯</div>`;
  el.innerHTML = `<div class="goal-card">
    <div class="goal-header">${photoHtml}
      <div class="goal-info">
        <div class="goal-name">${esc(g.name)}</div>
        <div class="goal-progress-text">${t('savedOf', fmt(saveAmt), fmt(g.amount))}</div>
        <div class="goal-progress-text">${pct >= 100 ? t('goalReached') : t('stillNeeded', fmt(g.amount - saveAmt))}</div>
      </div>
    </div>
    <div class="thermometer-wrap">
      <div class="thermo-pct">${Math.round(pct)}%</div>
      <div class="thermo-track"><div class="thermo-fill" style="width:${pct}%"></div></div>
    </div>
  </div>`;
}

function renderTransactions(context = 'child') {
  const child = context === 'parent' ? getChild(currentParentChildId) : activeChild();
  const txs = [...child.transactions].reverse();
  const bl = { spend: t('txSpend'), save: t('txSave'), invest: t('txInvest') };
  const empty = `<div class="empty-state"><div class="empty-icon">🐣</div>${t('noEntries')}</div>`;
  if (context === 'child') {
    const a = document.getElementById('tx-list-recent'), b = document.getElementById('tx-list-all');
    if (!txs.length) { a.innerHTML = empty; b.innerHTML = empty; return; }
    a.innerHTML = txs.slice(0,5).map(tx => txHtml(tx, false, bl)).join('');
    b.innerHTML = txs.map(tx => txHtml(tx, false, bl)).join('');
  } else {
    const el = document.getElementById('p-tx-list');
    el.innerHTML = txs.length ? txs.map(tx => txHtml(tx, true, bl)).join('') : empty;
  }
}

function txHtml(tx, editable, bl) {
  const sign = tx.type === 'income' ? '+' : '−';
  const cls = tx.type === 'income' ? 'plus' : 'minus';
  const icon = tx.emoji || (tx.type === 'income' ? '💚' : '💸');
  const date = new Date(tx.date).toLocaleDateString(t('dateLocale'), { day:'numeric', month:'short' });
  const editBtns = editable ? `
    <button class="tx-edit-btn" onclick="openEditTx(${tx.id})">✏️</button>
    <button class="tx-edit-btn tx-delete-btn" onclick="deleteTx(${tx.id})">🗑️</button>` : '';
  return `<div class="tx-item" id="tx-${tx.id}">
    <div class="tx-icon">${icon}</div>
    <div class="tx-info">
      <div class="tx-desc">${esc(tx.desc)}<span class="tx-bucket-badge ${tx.bucket}">${bl[tx.bucket]||''}</span></div>
      <div class="tx-date">${date}</div>
    </div>
    <div style="display:flex;align-items:center;gap:0.4rem;">
      <div class="tx-amount ${cls}">${sign}${fmt(tx.amount)}</div>${editBtns}
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
  document.getElementById('emoji-picker-wrap').innerHTML =
    EMOJI_PRESETS.map(e => `<button class="emoji-opt" onclick="pickEmoji('${e}','${inputId}')">${e}</button>`).join('');
}
function pickEmoji(emoji, inputId) { document.getElementById(inputId).value = emoji; }

// ===== ADD / EDIT TRANSACTION =====
let txTypeMode = 'income';
let editingTxId = null;

function openAddTx() {
  editingTxId = null;
  document.getElementById('addtx-modal-title').textContent = t('newBookingTitle');
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
  document.getElementById('addtx-modal-title').textContent = t('editBookingTitle');
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
  if (!amt || amt <= 0) { showToast(t('toastEnterAmount')); return; }
  if (!desc) { showToast(t('toastEnterDesc')); return; }
  const isParent = document.getElementById('screen-parent').classList.contains('active');
  const child = isParent ? getChild(currentParentChildId) : activeChild();
  const bucketName = { spend: t('txSpend'), save: t('txSave'), invest: t('txInvest') }[bucket] || bucket;

  if (editingTxId !== null) {
    const oldTx = child.transactions.find(tx => tx.id === editingTxId);
    if (oldTx) { if (oldTx.type === 'income') child.balances[oldTx.bucket] -= oldTx.amount; else child.balances[oldTx.bucket] += oldTx.amount; }
    if (txTypeMode === 'expense' && child.balances[bucket] < amt) {
      if (oldTx) { if (oldTx.type === 'income') child.balances[oldTx.bucket] += oldTx.amount; else child.balances[oldTx.bucket] -= oldTx.amount; }
      showToast(t('toastNotEnough', bucketName)); return;
    }
    const idx = child.transactions.findIndex(tx => tx.id === editingTxId);
    child.transactions[idx] = { ...child.transactions[idx], type: txTypeMode, amount: amt, desc, bucket, emoji: emoji || (txTypeMode === 'income' ? '💚' : '💸') };
    if (txTypeMode === 'income') child.balances[bucket] += amt; else child.balances[bucket] -= amt;
    showToast(t('toastUpdated'));
  } else {
    if (txTypeMode === 'expense' && child.balances[bucket] < amt) { showToast(t('toastNotEnough', bucketName)); return; }
    child.transactions.push({ id: Date.now(), type: txTypeMode, amount: amt, desc, bucket, emoji: emoji || (txTypeMode === 'income' ? '💚' : '💸'), date: new Date().toISOString() });
    if (txTypeMode === 'income') { child.balances[bucket] += amt; coinRain(); showToast(t('toastIncomeSaved', fmt(amt), bucketName)); }
    else { child.balances[bucket] -= amt; showToast(t('toastExpenseSaved', fmt(amt))); }
  }
  save(); closeModal('modal-addtx');
  if (isParent) { renderTransactions('parent'); renderParentBalances(); } else renderChildScreen();
}

function deleteTx(txId) {
  if (!confirm(t('confirmDeleteTx'))) return;
  const child = getChild(currentParentChildId);
  const tx = child.transactions.find(t => t.id === txId);
  if (!tx) return;
  if (tx.type === 'income') child.balances[tx.bucket] -= tx.amount; else child.balances[tx.bucket] += tx.amount;
  child.transactions = child.transactions.filter(t => t.id !== txId);
  save(); renderTransactions('parent'); renderParentBalances(); showToast(t('toastTxDeleted'));
}

function renderParentBalances() {
  const b = getChild(currentParentChildId).balances;
  const el = document.getElementById('p-balances-display');
  if (!el) return;
  el.innerHTML = `<span class="split-pill">🛍️ ${fmt(b.spend)}</span>
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
  document.getElementById('p-child-tabs').innerHTML =
    appData.children.map(c => `
      <button class="p-child-tab ${c.id === currentParentChildId ? 'active' : ''}" onclick="switchParentChild(${c.id})">${c.avatar} ${esc(c.childName)}</button>
    `).join('') + `<button class="p-child-tab p-add-child-btn" onclick="openAddChildModal()">➕ ${t('addChild')}</button>`;
}

function switchParentChild(id) {
  currentParentChildId = id;
  applyAvatarTheme(getChild(id).avatar);
  renderParentChildTabs(); renderParentChildForm();
}

function renderParentChildForm() {
  const child = getChild(currentParentChildId);
  applyAvatarTheme(child.avatar);
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
    area.innerHTML = `<div class="photo-preview-wrap"><img src="${child.savings.goal.photo}" class="photo-preview" alt="goal"><button class="photo-remove" onclick="removeGoalPhoto()">✕</button></div>`;
  } else {
    area.innerHTML = `<div class="photo-upload-area" onclick="document.getElementById('goal-photo-input').click()">${t('choosePhoto')}<div style="font-size:0.75rem;color:var(--text-soft);margin-top:0.3rem;">${t('photoOptional')}</div></div>`;
  }
  renderSplitDisplay(); calcNextPayout(); renderParentBalances(); renderTransactions('parent');
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
  applyAvatarTheme(child.avatar); calcNextPayout(); save(); renderParentChildTabs();
}

function calcNextPayout() {
  const child = getChild(currentParentChildId);
  const today = new Date(); today.setHours(0,0,0,0);
  let next = new Date(today);
  if (child.allowance.freq === 'weekly') next.setDate(next.getDate() + 7);
  else if (child.allowance.freq === 'biweekly') next.setDate(next.getDate() + 14);
  else next.setMonth(next.getMonth() + 1);
  if (!child.allowance.nextDate) { child.allowance.nextDate = next.toISOString().split('T')[0]; save(); }
  const el = document.getElementById('p-next-payout');
  if (el) el.textContent = new Date(child.allowance.nextDate).toLocaleDateString(t('dateLocale'));
}

function payAllowance() {
  const child = getChild(currentParentChildId);
  const amt = child.allowance.amount;
  if (!amt) { showToast(t('toastSetAmount')); return; }
  const split = child.allowance.split || { spend:60, save:30, invest:10 };
  const sa = amt * split.spend / 100, sv = amt * split.save / 100, iv = amt * split.invest / 100;
  child.balances.spend += sa; child.balances.save += sv; child.balances.invest += iv;
  const date = new Date().toISOString();
  if (sa) child.transactions.push({ id: Date.now(), type:'income', amount:sa, desc:t('allowanceSpend'), bucket:'spend', emoji:'💰', date });
  if (sv) child.transactions.push({ id: Date.now()+1, type:'income', amount:sv, desc:t('allowanceSave'), bucket:'save', emoji:'💙', date });
  if (iv) child.transactions.push({ id: Date.now()+2, type:'income', amount:iv, desc:t('allowanceInvest'), bucket:'invest', emoji:'🌱', date });
  const next = new Date();
  if (child.allowance.freq === 'weekly') next.setDate(next.getDate() + 7);
  else if (child.allowance.freq === 'biweekly') next.setDate(next.getDate() + 14);
  else next.setMonth(next.getMonth() + 1);
  child.allowance.nextDate = next.toISOString().split('T')[0];
  save(); renderParentChildForm(); coinRain(); showToast(t('toastAllowancePaid', fmt(amt)));
}

function payInvestBonus() {
  const child = getChild(currentParentChildId);
  if (!child.balances.invest) { showToast(t('toastNoInvest')); return; }
  const bonusAmt = child.balances.invest * ((child.invest.bonus || 10) / 100);
  child.balances.invest += bonusAmt;
  child.transactions.push({ id: Date.now(), type:'income', amount:bonusAmt, desc:t('bonusDesc', child.invest.bonus || 10), bucket:'invest', emoji:'🎁', date: new Date().toISOString() });
  save(); renderParentBalances(); renderTransactions('parent'); coinRain(); showToast(t('toastBonusPaid', fmt(bonusAmt)));
}

function openAddChildModal() {
  document.getElementById('new-child-name').value = '';
  document.getElementById('new-child-avatar').value = '🐸';
  openModal('modal-add-child');
}

function addChild() {
  const name = document.getElementById('new-child-name').value.trim();
  const avatar = document.getElementById('new-child-avatar').value;
  if (!name) { showToast(t('toastEnterName')); return; }
  const child = { ...defaultChild(name, avatar), id: Date.now() };
  appData.children.push(child); currentParentChildId = child.id;
  save(); closeModal('modal-add-child'); renderParentScreen(); showToast(t('toastChildAdded', name));
}

function deleteCurrentChild() {
  if (appData.children.length <= 1) { showToast(t('toastMinOneChild')); return; }
  const child = getChild(currentParentChildId);
  if (!confirm(t('confirmDeleteChild', child.childName))) return;
  appData.children = appData.children.filter(c => c.id !== currentParentChildId);
  currentParentChildId = appData.children[0].id;
  appData.activeChildId = currentParentChildId;
  save(); renderParentScreen(); showToast(t('toastChildDeleted'));
}

function openSplitModal() {
  const s = getChild(currentParentChildId).allowance.split || { spend:60, save:30, invest:10 };
  document.getElementById('split-spend').value = s.spend;
  document.getElementById('split-save').value = s.save;
  document.getElementById('split-invest').value = s.invest;
  updateSplitPreview(); openModal('modal-split');
}

function updateSplitPreview() {
  const a = parseInt(document.getElementById('split-spend').value)||0;
  const b = parseInt(document.getElementById('split-save').value)||0;
  const c = parseInt(document.getElementById('split-invest').value)||0;
  const sum = a + b + c;
  const el = document.getElementById('split-sum-msg');
  el.textContent = (sum === 100 ? '✅ ' : '⚠️ ') + t('splitSum', sum);
  el.style.color = sum === 100 ? 'var(--green-dark)' : '#E53E3E';
}

function saveSplit() {
  const a = parseInt(document.getElementById('split-spend').value)||0;
  const b = parseInt(document.getElementById('split-save').value)||0;
  const c = parseInt(document.getElementById('split-invest').value)||0;
  if (a+b+c !== 100) { showToast(t('toastSplitError')); return; }
  getChild(currentParentChildId).allowance.split = { spend:a, save:b, invest:c };
  save(); renderSplitDisplay(); closeModal('modal-split'); showToast(t('toastSplitSaved'));
}

function renderSplitDisplay() {
  const s = getChild(currentParentChildId).allowance.split || { spend:60, save:30, invest:10 };
  document.getElementById('split-display-parent').innerHTML = `
    <span class="split-pill">🛍️ ${s.spend}%</span>
    <span class="split-pill save">🎯 ${s.save}%</span>
    <span class="split-pill invest">🌱 ${s.invest}%</span>`;
}

function handleGoalPhoto(input) {
  const file = input.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = e => { getChild(currentParentChildId).savings.goal.photo = e.target.result; save(); renderParentChildForm(); };
  reader.readAsDataURL(file);
}
function removeGoalPhoto() { getChild(currentParentChildId).savings.goal.photo = null; save(); renderParentChildForm(); }

function openChangePw() {
  document.getElementById('old-pw').value = '';
  document.getElementById('new-pw').value = '';
  document.getElementById('pw-change-error').textContent = '';
  openModal('modal-changepw');
}

function changePassword() {
  const old = document.getElementById('old-pw').value;
  const nw = document.getElementById('new-pw').value;
  if (old !== appData.parentPw) { document.getElementById('pw-change-error').textContent = t('toastWrongOldPw'); return; }
  if (nw.length < 4) { document.getElementById('pw-change-error').textContent = t('toastMinFourChars'); return; }
  appData.parentPw = nw; save(); closeModal('modal-changepw'); showToast(t('toastPwChanged'));
}

function exportData() {
  const blob = new Blob([JSON.stringify(appData, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'sparschwein-backup-' + new Date().toISOString().split('T')[0] + '.json';
  a.click(); showToast(t('toastExported'));
}

function importData(input) {
  const file = input.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try { appData = { ...appData, ...JSON.parse(e.target.result) }; save(); renderParentScreen(); showToast(t('toastImported')); }
    catch(err) { showToast(t('toastImportError')); }
  };
  reader.readAsText(file);
}

function confirmReset() {
  if (confirm(t('confirmReset'))) {
    localStorage.removeItem('taschengeld_v4'); localStorage.removeItem('taschengeld_v3');
    appData = { parentPw: null, children: [defaultChild('Lena', '🐸')], activeChildId: null };
    appData.activeChildId = appData.children[0].id;
    currentParentChildId = appData.children[0].id;
    applyAvatarTheme('🐸'); showToast(t('toastDeleted')); logout();
  }
}

// ===== HELPERS =====
function esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-overlay').forEach(o => {
  o.addEventListener('click', e => { if (e.target === o) o.classList.remove('open'); });
});
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg; toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
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

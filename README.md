🐸 Mein Sparschwein - pocket-money-children

A playful, mobile-first pocket money app for kids and parents — built as a single offline-capable web app with no backend required.
What it does
Mein Sparschwein helps families manage children's pocket money through a simple two-role system: kids get a fun, emoji-rich view of their money, while parents get a full control panel behind a password.
Money is automatically split across three buckets — Ausgeben (spend), Sparen (save), and Investieren (invest) — teaching children the basics of budgeting from an early age.

## Features

- 👨‍👩‍👧 Multi-child support — add multiple children, each with their own balances, goals, and transaction history
- 💰 Automatic allowance splitting — configure how each payout is distributed across the three buckets
- 🎯 Savings goals — set a target with a name, amount, and optional photo; a progress thermometer shows how close the child is
- 🌱 Investment bonus — parents can top up the invest bucket with a configurable bonus percentage, rewarding long-term saving
- ✏️ Transaction editing — parents can correct or delete any entry; balances update automatically
- 🎁 Emoji picker — 48 preset emojis for labelling transactions, making the experience fun for kids
- 🐸 Animal avatars — 13 avatars including frogs, pandas, foxes, and a mouse
- 📤 Export & import — full JSON backup and restore, so no data is ever lost
- 🔒 Parent PIN protection — the settings area is locked behind a password set on first use

## Tech stack
Plain HTML, CSS, and vanilla JavaScript — no frameworks, no dependencies, no server. All data is stored in localStorage. Works offline and can be saved to the home screen on any mobile device.

### Getting started
Download or clone the repository, then open index.html in any modern browser. No build step, no install.

```bash
git clone https://github.com/your-username/mein-sparschwein
cd mein-sparschwein
open index.html
```

On first launch, tap Elternteil and choose a password to unlock the settings panel. Then set up your child's name, avatar, allowance amount, and savings goal — and hand the device to the kid.

Use it online: 
```
https://resetete.github.io/pocket-money-children/
```

### File structure

```ruby
index.html   – markup and screen layout
style.css    – all styling and animations
app.js       – state management, logic, and rendering
```

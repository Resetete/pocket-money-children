🐸 Mein Sparschwein - pocket-money-children

A playful, mobile-first pocket money app for kids and parents — built as a single offline-capable web app with no backend required.

## What it does
Mein Sparschwein helps families manage children's pocket money through a simple two-role system: kids get a fun, emoji-rich view of their money, while parents get a full control panel behind a password.
Money is automatically split across three buckets — Ausgeben (spend), Sparen (save), and Investieren (invest) — teaching children the basics of budgeting from an early age.
It's available in English, German and Portuguese.

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

# How to use the app

## First-time setup (parents)

1. Open index.html or go to the app url in any browser and tap `Ich bin Elternteil`
2. Choose a password — whatever you type first gets saved automatically
3. Set your child's name and pick an avatar
4. Enter an allowance amount and frequency (weekly, bi-weekly, or monthly)
5. Configure the split between Ausgeben, Sparen, and Investieren
6. Optionally set a savings goal with a name, target amount, and a photo of the item
7. Tap `Los geht's` — you're done

## Day-to-day use
Hand the phone or open the browser — no password needed for the child's view. Kids can see their total balance, the three buckets, and all recent transactions. The + button lets them (or you) log income like birthday money or expenses like buying a snack.
Parents can log in at any time to pay out allowance, add a bonus, correct a transaction, or update the savings goal.

### Recommended allowance amounts
These are commonly used guidelines in German-speaking countries, based on recommendations from the Deutsches Jugendinstitut:
~1–2 € ~5–8€ 7–8 years~2–3 €~8–12 €9–10 years~3–4 €~13–18 €11–12 years~4–5 €~18–22 €

 | **Age**       | **Weekly**       | **Monthly**    |
 |---------------|------------------|----------------|
 | 5-6 years     | ~1–2€            | ~5–8€          |
 | 7-8 years     | ~2–3€            | ~8-12€         |
 | 9-10 years    | ~3–4€            | ~13-18€        |
 | 11-12 years   | ~4–5€            | ~18-22€        |


For a 6-year-old, starting at 1,50€ per week (paid weekly, so they get feedback fast) works well. Keep the split simple: 70% spend, 30% save, no invest bucket yet.

For an 8-year-old, 2,50 € per week or 10 € per month is a good starting point. At this age children can grasp saving toward a concrete goal, so a savings target like a LEGO set or a book makes the saving bucket feel real. A suggested split: 60% spend, 30% save, 10% invest.

Tip: always pay in round amounts so the split produces clean numbers. For example, 10 € splits into exactly 6 € / 3 € / 1 € with the 60/30/10 default.

### How to use the three buckets

#### Ausgeben (Spend)
Money here is for immediate use — snacks, stickers, small toys. The child controls this fully. Letting them make small mistakes (spending everything at once and having nothing left) is part of the learning.

#### Sparen (Save)
Money here is locked toward the savings goal set by the parents. Show the child the thermometer regularly — watching it fill up is motivating. Only unlock this money when the goal is actually reached.

#### Investieren (Invest)
This bucket teaches the concept of long-term growth. The child puts money in and leaves it alone. Parents pay a bonus on top at regular intervals, simulating interest. This is the most abstract bucket for young children — introduce it around age 8–10.

*Investment bonus: when and how much*
The investment bonus is the app's version of interest. It rewards the child for not touching the invest bucket.

Recommended schedule:
Monthly for younger children (more visible, more motivating)
Quarterly for older children (more realistic, teaches patience)

Recommended bonus rates:

| **Child's age**   | **Suggested bonus**                         |
 |------------------|---------------------------------------------|
 | 5-8 years        | 10–15% (high rate to make it feel exciting) |
 | 9-11 years       | 5–10%                                       |
 | 12+ years        | 2–5% (closer to realistic returns)          |

Example: Your 8-year-old has 12 € in the invest bucket. With a 10% monthly bonus, they earn 1,20€ — enough to see and feel. After a year of not touching it, the bucket has grown noticeably. That's the lesson.

Best practice: Make a small ritual out of it. Sit down together, open the app, tap the bonus button, and talk about why the number grew. The conversation matters more than the amount.

For teenagers, you can lower the rate to something more realistic (3–5%) and use it as a starting point for explaining how actual savings accounts or index funds work.


## Tips and best practices

Start simple. For children under 7, just use the spend and save buckets. The invest bucket can be introduced once they understand what saving means.
Pay consistently - unconditionally (e.g. don't cancel payment based on behaviour). 

Weekly payouts work better for younger children — the feedback loop is shorter and they stay engaged. 
Monthly works better for older children who are learning to plan ahead.

Let them fail. If a child spends everything in the spend bucket on day one and has nothing left for the week, that's a valuable lesson. Don't top it up early.

Make the savings goal tangible. Add a photo of the toy, book, or experience they're saving toward. Looking at the thermometer is much more motivating when there's a real image attached.

Review together. Once a month, sit down and open the app together. Look at the transaction history, talk about what they spent money on, and celebrate progress toward the savings goal. This is where the real financial education happens — not in the app itself, but in the conversation around it.

Keep records. Use the export feature every few months to save a JSON backup. If you switch devices or clear your browser, you won't lose the history.

Adjust as they grow. Raise the allowance amount each birthday. Gradually shift the split toward more saving and investing as they get older. When they're around 10–12, involve them in setting the split themselves.
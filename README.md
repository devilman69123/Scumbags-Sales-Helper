# Scumbags Sale Tracker

Lightweight sales ledger formatter for Discord with two stores:

- **La Nova** — restaurant menu with auto totals
- **Bisarnos Attachments** — catalog with separate Single and Shipment counters per item, so one order can mix both

Enter your name, tap item quantities, copy a ready-to-paste log.

## Local use

Open `index.html` in a browser, or from this folder:

```bash
npx --yes serve .
```

## Discord log format

La Nova:

```
Enzo Freeman
Scotch x 3
$60
```

Bisarnos:

```
Employee: Michael Magaddino
Customer: Ryuji "Dragon" Zen no-sha
Paid: $16,000.00
Attachments: x1 AKM Magazine Shipment, x1 SUSAT Shipment
```

- Employee name is saved in the browser and kept after each copy.
- Each store keeps its own in-progress sale when you switch tabs.
- Auto total is informational only and prefills Paid; Discord always prints the Paid amount.
- Bisarnos includes a persistent photo clipboard for pasting, storing, and recopying screenshots.
- Item lines use `Name x Qty`.
- Price uses `$` with commas when needed.

## Deploy to Netlify

1. Drag this folder onto [Netlify Drop](https://app.netlify.com/drop), **or**
2. Connect the folder/repo in Netlify and deploy (publish directory: site root).

No build step required.

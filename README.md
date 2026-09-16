# AES Research Lab — Vercel package

## Files
- `index.html` — new landing page with exactly two branches: Literature Review and Implementation Lab.
- `literature.html` — interactive literature dashboard, paper explorer, filters, charts, comparison matrix, attacks, gaps and novelty lab.
- `paper.html` — dynamic individual paper page. Open with `paper.html?id=noor2019` etc.
- `implementation.html` — separate implementation workspace for RISC-V, Verilog/SystemVerilog, verification and synthesis results.
- `data.js` — all paper content/data.
- `app.js` — rendering, filters, paper routing and charts.
- `styles.css` — graffiti/research-wall styling.

## Deploy
Upload all files to the same Vercel project root. No build step is required.

## Paper IDs
`noor2019`, `teng2021`, `lin2023`, `cheng2024`, `feng2025`, `aesrv2025`, `aesware2024`, `kassimi2026`, `clmul2026`, `ahmed2026`, `hojati2024`

## Adding a new paper
Add one object to `PAPERS` in `data.js`. The literature explorer, paper page, matrix and homepage cards will pick it up automatically.

## Adding implementation files later
Keep the implementation website separate from the literature data. Add source/code links and screenshots inside `implementation.html`, or later convert the placeholders into dynamic project-file cards.

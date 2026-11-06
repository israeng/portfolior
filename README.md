# Rana Alharbi portfolio (static, GitHub Pages)
All files sit in ONE flat folder (no sub-folders). Upload them to the root of your repository.

## Files
index.html, solven.html, forsah.html, alef.html, why-am-i-waiting.html, 404.html, style.css, main.js, i18n.js, config.js, cover-*-800.jpg / cover-*-1600.jpg (project covers) and the other images.

## What to edit
- Solven live URL: `config.js` -> `solvenUrl` (leave "" until ready; the button then shows "Live platform link coming soon"). The X link `https://x.com/iSolven` is also in `config.js`.
- Arabic text: `i18n.js` (English text stays in the HTML; Arabic is looked up by the exact English string).
- Colors for dark/light: the variables at the top of `style.css`.

## Publish (free)
1. Open your repository on github.com, choose Add file -> Upload files.
2. Drag in all extracted files (not the ZIP), replacing the old ones. Commit.
3. Settings -> Pages -> Deploy from a branch -> main / root.
4. Open https://israeng.github.io/Portfolio/ and press Ctrl+F5.
To restore the previous version, upload the files from portfolio-original-backup.zip the same way.

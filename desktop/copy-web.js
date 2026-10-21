// Copies the website into the desktop app (web/) and the icon into build/ for the installer.
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const web = path.join(__dirname, 'web');
fs.rmSync(web, { recursive: true, force: true });
fs.mkdirSync(path.join(web, 'icons'), { recursive: true });
fs.mkdirSync(path.join(__dirname, 'build'), { recursive: true });
let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
html = html.replace(/<script>\s*\/\/ Offline \+ installable[\s\S]*?<\/script>/, '');
fs.writeFileSync(path.join(web, 'index.html'), html);
for (const f of fs.readdirSync(path.join(root, 'icons'))) fs.copyFileSync(path.join(root, 'icons', f), path.join(web, 'icons', f));
fs.copyFileSync(path.join(root, 'icons', 'icon-512.png'), path.join(__dirname, 'build', 'icon.png'));
console.log('web/ klaar');

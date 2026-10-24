// Copies the website into the Android app (www/) and adds the Capacitor scripts used to save files and to install updates.
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const www = path.join(__dirname, 'www');
const mod = p => path.join(__dirname, 'node_modules', p);
fs.rmSync(www, { recursive: true, force: true });
fs.mkdirSync(path.join(www, 'icons'), { recursive: true });
let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
html = html.replace(/<script>\s*\/\/ Offline \+ installable[\s\S]*?<\/script>/, '');
html = html.replace('</head>', '<script src="capacitor.js"></script>\n<script src="filesystem.js"></script>\n<script src="share.js"></script>\n<script src="fileopener.js"></script>\n</head>');
fs.writeFileSync(path.join(www, 'index.html'), html);
for (const f of fs.readdirSync(path.join(root, 'icons'))) fs.copyFileSync(path.join(root, 'icons', f), path.join(www, 'icons', f));
fs.copyFileSync(mod('@capacitor/core/dist/capacitor.js'), path.join(www, 'capacitor.js'));
fs.copyFileSync(mod('@capacitor/filesystem/dist/plugin.js'), path.join(www, 'filesystem.js'));
fs.copyFileSync(mod('@capacitor/share/dist/plugin.js'), path.join(www, 'share.js'));
fs.copyFileSync(mod('@capacitor-community/file-opener/dist/plugin.js'), path.join(www, 'fileopener.js'));
console.log('www/ klaar');

// Kartograpper for Windows: a window around the same index.html as the website.
// Maps and assets live in IndexedDB under %APPDATA%\Kartograaf, which installing an update never touches.
const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

// The app was called Kartograaf before; its data folder keeps that name so nothing gets lost after the rename.
app.setPath('userData', path.join(app.getPath('appData'), 'Kartograaf'));
if (!app.requestSingleInstanceLock()) app.quit();

let win = null;
function createWindow() {
  win = new BrowserWindow({
    width: 1440, height: 900, minWidth: 800, minHeight: 560,
    title: 'Kartograpper', backgroundColor: '#d8dce2', autoHideMenuBar: true,
    icon: path.join(__dirname, 'web', 'icons', 'icon-512.png'),
    webPreferences: { contextIsolation: true, sandbox: true },
  });
  // Links such as the feedback button open in the normal browser.
  win.webContents.setWindowOpenHandler(({ url }) => { if (url.startsWith('https://')) shell.openExternal(url); return { action: 'deny' }; });
  win.webContents.on('will-navigate', (event, url) => { if (!url.startsWith('file://')) { event.preventDefault(); if (url.startsWith('https://')) shell.openExternal(url); } });
  win.loadFile(path.join(__dirname, 'web', 'index.html'));
}

app.on('second-instance', () => { if (win) { if (win.isMinimized()) win.restore(); win.focus(); } });
app.whenReady().then(() => { Menu.setApplicationMenu(null); createWindow(); });
app.on('window-all-closed', () => app.quit());

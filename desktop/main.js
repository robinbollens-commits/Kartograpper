// Kartograpper for Windows: a window around the same index.html as the website.
// Maps and assets live in IndexedDB under %APPDATA%\Kartograaf, which installing an update never touches.
const { app, BrowserWindow, Menu, shell, ipcMain } = require('electron');
const { autoUpdater } = require('electron-updater');
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
    webPreferences: { contextIsolation: true, sandbox: true, preload: path.join(__dirname, 'preload.js') },
  });
  // Links such as the feedback button open in the normal browser.
  win.webContents.setWindowOpenHandler(({ url }) => { if (url.startsWith('https://')) shell.openExternal(url); return { action: 'deny' }; });
  win.webContents.on('will-navigate', (event, url) => { if (!url.startsWith('file://')) { event.preventDefault(); if (url.startsWith('https://')) shell.openExternal(url); } });
  win.loadFile(path.join(__dirname, 'web', 'index.html'));
}

// Updates come from the GitHub releases (latest.yml). Nothing happens until the page asks for it; the installer then
// runs silently into the same folder and starts the app again. Maps stay in the data folder above.
autoUpdater.autoDownload = false;
autoUpdater.autoInstallOnAppQuit = false;
const send = m => { if (win && !win.isDestroyed()) win.webContents.send('upd', m); };
autoUpdater.on('download-progress', p => send({ type: 'progress', percent: p.percent }));
autoUpdater.on('update-downloaded', () => send({ type: 'ready' }));
autoUpdater.on('error', e => send({ type: 'error', message: String((e && e.message) || e) }));
ipcMain.handle('upd:download', async () => {
  if (!app.isPackaged) throw new Error('Bijwerken kan alleen in de geïnstalleerde app.');
  const r = await autoUpdater.checkForUpdates();
  // electron-updater 6.3 has no isUpdateAvailable on the result; there, only a found update comes with a cancellationToken
  const found = r && (r.isUpdateAvailable ?? !!r.cancellationToken);
  if (!found) return false;
  await autoUpdater.downloadUpdate(); return true;
});
ipcMain.handle('upd:install', () => { setImmediate(() => autoUpdater.quitAndInstall(true, true)); return true; });

app.on('second-instance', () => { if (win) { if (win.isMinimized()) win.restore(); win.focus(); } });
app.whenReady().then(() => { Menu.setApplicationMenu(null); createWindow(); });
app.on('window-all-closed', () => app.quit());

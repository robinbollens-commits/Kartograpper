// The only bridge between the page and the app: asking for an update and installing it.
const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('kartoUpdater', {
  download: () => ipcRenderer.invoke('upd:download'),
  install: () => ipcRenderer.invoke('upd:install'),
  on: fn => { ipcRenderer.on('upd', (_e, m) => fn(m)); },
});

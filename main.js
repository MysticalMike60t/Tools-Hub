const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
    },
  });

  // Set a permissive Content Security Policy (CSP) that allows everything
  mainWindow.webContents.session.webRequest.onHeadersReceived(({ responseHeaders }, callback) => {
    responseHeaders['Content-Security-Policy'] = ['default-src *'];
    callback({ cancel: false, responseHeaders });
  });

  mainWindow.loadFile('client/build/index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

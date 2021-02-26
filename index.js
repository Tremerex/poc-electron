const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const prepareNext = require('electron-next');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 240,
    resizable: false,
    autoHideMenuBar: true,
    alwaysOnTop: true,
    webPreferences: {}
  });

  const webPath = isDev ? 'http://localhost:3000'
    : `file://${path.join(__dirname, './build/server/pages/index.html')}`;

  mainWindow.loadURL(webPath);
}

app.whenReady().then(async () => {
  if (isDev) {
    await prepareNext('./', 3000);
  }
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

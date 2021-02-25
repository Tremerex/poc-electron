const { app, BrowserWindow } = require('electron');
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

  mainWindow.loadURL('http://localhost:3000/');
}

app.whenReady().then(async () => {
  // dev mode
  await prepareNext('./', 3000);
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

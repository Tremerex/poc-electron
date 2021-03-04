const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const prepareNext = require('electron-next');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    alwaysOnTop: true,
    autoHideMenuBar: true,
    height: 400,
    icon: path.join(__dirname, './public/assets/icons/48x48.png'),
    resizable: false,
    webPreferences: {},
    width: 420,
  });

  const webPath = isDev ? 'http://localhost:3000'
    : `file://${path.join(__dirname, './out/index.html')}`;

  mainWindow.loadURL(webPath);
}

app.whenReady().then(async () => {
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

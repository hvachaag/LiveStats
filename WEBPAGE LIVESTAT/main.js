const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 820,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  // Load local file (ensure relative assets are used)
  const indexPath = path.join(__dirname, 'livestats.html');
  win.loadFile(indexPath);
  // Optionally open devtools when the DEBUG_DEVTOOLS env var is true
  try {
    if (process.env.DEBUG_DEVTOOLS === 'true') {
      win.webContents.openDevTools();
    }
  } catch (e) {}
}

app.whenReady().then(() => {
  // Set user data path to a temp directory to avoid cache permission issues on certain Windows setups
  try {
    const tempUserData = path.join(app.getPath('temp'), 'livestats-electron');
    app.setPath('userData', tempUserData);
  } catch (err) {}
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
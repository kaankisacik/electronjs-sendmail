const { app, BrowserWindow } = require('electron')
const path = require('path')
const electronLocalshortcut = require('electron-localshortcut');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, 'assets/images/logooicon.png'),
    title: 'Bonafida Yazılım Mail Programı',
    autoHideMenuBar: true,
  })
  electronLocalshortcut.register(win, 'F12', () => {
    win.webContents.openDevTools();
  });
  win.loadFile('index.html')


}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

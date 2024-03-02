const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, 'icon.png'),
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
    app.on('browser-window-created', (event, window) => {
        window.setIcon(path.join(__dirname, 'icon.png'));
        window.autoHideMenuBar = true;
    });
})
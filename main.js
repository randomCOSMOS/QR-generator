// importing stuff
const {
    app,
    BrowserWindow,
    Menu
} = require('electron');
const url = require('url');
const path = require('path');

// menus
const menutemplate = [{
    label: "File",
    submenu: [
        {
            label: "Exit",
            accelerator: "ctrl+Q",
            click() {
                app.exit();
            }
        }
    ]
}]

// main stuff
app.on('ready', () => {
    mainWindow = new BrowserWindow({});

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'src/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    const mainMenu = Menu.buildFromTemplate(menutemplate);

    Menu.setApplicationMenu(mainMenu);
});
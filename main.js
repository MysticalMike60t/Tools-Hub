const { BrowserWindow } = require('electron-acrylic-window');
const { app, Menu, MenuItem } = require("electron");
const path = require("path");

// app.setUserTasks([
//   {
//     program: process.execPath,
//     arguments: '--new-window',
//     iconPath: process.execPath,
//     iconIndex: 0,
//     title: 'New Window',
//     description: 'Create a new window'
//   }
// ])

function createWindow() {
  const mainWindow = new BrowserWindow({
    resizable: false,
    icon: "./lib/images/icons/toolbox.png",
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: "#2f3241",
      symbolColor: "#74b1be",
      height: 50,
    },
    vibrancy: {
      theme: 'dark', // (default) or 'dark' or '#rrggbbaa'
      effect: 'acrylic', // (default) or 'blur'
      disableOnBlur: false, // (default)
    },
    transparent: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Set a permissive Content Security Policy (CSP) that allows everything
  mainWindow.webContents.session.webRequest.onHeadersReceived(
    ({ responseHeaders }, callback) => {
      responseHeaders["Content-Security-Policy"] = ["default-src *"];
      callback({ cancel: false, responseHeaders });
    }
  );

  mainWindow.loadFile("client/build/index.html");

  // Create a custom menu and set it as the application menu
  const template = [
    {
      label: "File",
      submenu: [
        {
          label: "New",
          click: () => {
            // Implement the action for the "New" menu item
          },
        },
        {
          label: "Open",
          click: () => {
            // Implement the action for the "Open" menu item
          },
        },
        {
          type: "separator",
        },
        {
          label: "Exit",
          click: () => {
            app.quit();
          },
        },
      ],
    },
    {
      label: "Edit",
      submenu: [
        {
          label: "Cut",
          role: "cut",
        },
        {
          label: "Copy",
          role: "copy",
        },
        {
          label: "Paste",
          role: "paste",
        },
      ],
    },
    // Add more menu items as needed
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

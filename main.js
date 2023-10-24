const { BrowserWindow } = require("electron-acrylic-window");
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

const navigationBarHeight = 50;
const windowAcrylicTheme = "dark";
const windowAcrylicEffect = "acrylic";
const windowTransparent = true;
const windowTitleBarStyle = "hidden";
const windowTitleBarOverlayColor = "#2f3241";
const windowTitleBarOverlaySymbolColor = "#74b1be";
const windowsIconPath = "./lib/images/icons/toolbox.png";
const windowWebPreferencesNodeIntegration = false;
const windowWebPreferencesContextIsolation = true;
const windowWebPreferencesSandbox = true;

function createWindow() {
  const mainWindow = new BrowserWindow({
    resizable: false,
    icon: windowsIconPath,
    titleBarStyle: windowTitleBarStyle,
    titleBarOverlay: {
      color: windowTitleBarOverlayColor,
      symbolColor: windowTitleBarOverlaySymbolColor,
      height: navigationBarHeight,
    },
    vibrancy: {
      theme: windowAcrylicTheme, // (default) or 'dark' or '#rrggbbaa'
      effect: windowAcrylicEffect, // (default) or 'blur'
      disableOnBlur: false, // (default)
    },
    transparent: windowTransparent,
    webPreferences: {
      nodeIntegration: windowWebPreferencesNodeIntegration,
      contextIsolation: windowWebPreferencesContextIsolation,
      sandbox: windowWebPreferencesSandbox,
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

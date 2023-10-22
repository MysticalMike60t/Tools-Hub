const { app, BrowserWindow, Menu, MenuItem } = require("electron");
const path = require("path");

function createWindow() {
  const mainWindow = new BrowserWindow({
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: "#2f3241",
      symbolColor: "#74b1be",
      height: 50,
    },
    transparent: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
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

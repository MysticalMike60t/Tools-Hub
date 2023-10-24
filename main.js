const { BrowserWindow } = require("electron-acrylic-window");
const { app } = require("electron");
const path = require("path");
const { autoUpdater } = require("electron-updater");

process.env.GH_TOKEN =
  "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";

autoUpdater.autoDownload = false; // You can set this to true if you want to download updates automatically
autoUpdater.checkForUpdatesAndNotify(); // Check for updates and notify the user

// Listen for update events
autoUpdater.on("update-available", () => {
  // An update is available, you can notify the user here
});

autoUpdater.on("update-downloaded", () => {
  // Update is downloaded and ready to be installed
  // You can prompt the user to install the update
  const { dialog } = require("electron");

  dialog.showMessageBox(
    {
      type: "info",
      title: "Update Available",
      message:
        "A new version of the app is available. Do you want to install it now?",
      buttons: ["Yes", "No"],
    },
    (buttonIndex) => {
      if (buttonIndex === 0) {
        // User clicked "Yes," so quit the app and install the update
        autoUpdater.quitAndInstall();
      }
    }
  );
});

// Listen for errors
autoUpdater.on("error", (error) => {
  // Handle update errors
});

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
const windowAcrylicDisableOnBlur = false;
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
      disableOnBlur: windowAcrylicDisableOnBlur, // (default)
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
}

app.on("ready", () => {
  // Configure autoUpdater
  autoUpdater.autoDownload = false;
  autoUpdater.checkForUpdatesAndNotify();

  createWindow();
});
autoUpdater.on("update-available", () => {
  console.log("Update available");
  // Notify the user or add more logic here
});

autoUpdater.on("update-downloaded", () => {
  console.log("Update downloaded");
  // Prompt the user to install the update or add more logic here
});

autoUpdater.on("error", (error) => {
  console.error("Update error:", error);
  // Handle update errors
});

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

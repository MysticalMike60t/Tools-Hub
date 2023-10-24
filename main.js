const { BrowserWindow } = require("electron-acrylic-window");
const { app, dialog } = require("electron");
const { autoUpdater } = require("electron-updater");
const path = require("path");

// Set your GitHub PAT token here
process.env.GH_TOKEN =
  "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";

const navigationBarHeight = 50;
const windowAcrylicTheme = "dark";
const windowAcrylicEffect = "acrylic";
const windowAcrylicDisableOnBlur = false;
const windowTransparent = true;
const windowTitleBarStyle = "hidden";
const windowTitleBarOverlayColor = "#2f3241";
const windowTitleBarOverlaySymbolColor = "#74b1be";
const windowsIconPath = path.join(__dirname, "lib/images/icons/toolbox.png");
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
      theme: windowAcrylicTheme,
      effect: windowAcrylicEffect,
      disableOnBlur: windowAcrylicDisableOnBlur,
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
  autoUpdater.allowPrerelease = true;
  autoUpdater.autoInstallOnAppQuit = false;

  // Set the dev update config to true to enable update checks in development
  autoUpdater.updateConfigPath = "./dev-app-update.yml";

  // Set the GitHub token for authentication
  autoUpdater.setFeedURL({
    provider: "github",
    owner: "MysticalMike60t",
    repo: "Tools-App",
    token: process.env.GH_TOKEN,
  });

  // Check for updates and notify the user
  autoUpdater.checkForUpdatesAndNotify();

  createWindow();
});

autoUpdater.on("update-available", () => {
  console.log("Update available");
  // Notify the user or add more logic here
});

autoUpdater.on("update-downloaded", () => {
  const options = {
    type: "info",
    title: "Update Available",
    message:
      "A new version of the app is available. Do you want to install it now?",
    buttons: ["Yes", "No"],
  };

  dialog.showMessageBox(options, (buttonIndex) => {
    if (buttonIndex === 0) {
      // User clicked "Yes," so quit the app and install the update
      autoUpdater.quitAndInstall();
    }
  });
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

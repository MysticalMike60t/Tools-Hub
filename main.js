const { BrowserWindow } = require("electron-acrylic-window");
const { app, dialog } = require("electron");
const { autoUpdater } = require("electron-updater");
const path = require("path");

process.env.GH_TOKEN = "";

const indexHTMLPath = "client/build/index.html";

const githubRepo = "Tools-App";
const githubOwner = "MysticalMike60t";

const updateProvider = "github";
const updateConfigPath = "./dev-app-update.yml";
const autoUpdateDownload = true;
const autoUpdateAllowPrerelease = true;
const autoUpdateInstallOnAppQuit = true;

const navigationBarHeight = 50;
const windowAcrylicTheme = "dark";
const windowAcrylicEffect = "acrylic";
const windowAcrylicDisableOnBlur = false;
const windowTransparent = true;
const windowResizable = false;
const windowTitleBarStyle = "hidden";
// const windowTitleBarOverlayColor = "#2f3241";
const windowTitleBarOverlayColor = "rgba(47, 50, 65, 0)";
const windowTitleBarOverlaySymbolColor = "#74b1be";
const windowsIconPath = path.join(__dirname, "lib/images/icons/toolbox.png");
const windowWebPreferencesNodeIntegration = false;
const windowWebPreferencesContextIsolation = true;
const windowWebPreferencesSandbox = true;
const windowPreloadFileName = "preload.js";
const windowPreloadPath = path.join(__dirname, windowPreloadFileName);

function createWindow() {
  const mainWindow = new BrowserWindow({
    resizable: windowResizable,
    icon: windowsIconPath,
    frame: false,
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
      preload: windowPreloadPath,
    },
  });

  // Set a permissive Content Security Policy (CSP) that allows everything
  mainWindow.webContents.session.webRequest.onHeadersReceived(
    ({ responseHeaders }, callback) => {
      responseHeaders["Content-Security-Policy"] = ["default-src *"];
      callback({ cancel: false, responseHeaders });
    }
  );

  mainWindow.loadFile(indexHTMLPath);
}

app.on("ready", () => {
  // Configure autoUpdater
  autoUpdater.autoDownload = autoUpdateDownload;
  autoUpdater.allowPrerelease = autoUpdateAllowPrerelease;
  autoUpdater.autoInstallOnAppQuit = autoUpdateInstallOnAppQuit;

  // Set the dev update config to true to enable update checks in development
  autoUpdater.updateConfigPath = updateConfigPath;

  // Set the GitHub token for authentication
  autoUpdater.setFeedURL({
    provider: updateProvider,
    owner: githubOwner,
    repo: githubRepo,
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

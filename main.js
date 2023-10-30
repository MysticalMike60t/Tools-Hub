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

function checkForUpdates() {
  // Check for updates without automatically downloading
  autoUpdater.checkForUpdates();

  // Get the current app version
  const currentVersion = app.getVersion();

  autoUpdater.on("update-available", (info) => {
    console.log("Update available:", info.version);

    // Compare the GitHub version with the current app version
    if (compareVersions(info.version, currentVersion) > 0) {
      const message = `A new version of the app is available.\nCurrent Version: ${currentVersion}\nLatest Version: ${info.version}`;
      console.log(message); // Log to the Windows console

      const options = {
        type: "info",
        title: "Update Available",
        message,
        buttons: ["Yes", "No"],
      };

      dialog.showMessageBox(options, (buttonIndex) => {
        if (buttonIndex === 0) {
          // User clicked "Yes," so quit the app and install the update
          autoUpdater.downloadUpdate();
        }
      });
    }
  });
}

function showMsg() {
  const currentVersion = app.getVersion();

  // Fetch the latest version from GitHub using the GitHub API
  // fetch(
  //   `https://api.github.com/repos/${githubOwner}/${githubRepo}/releases/latest`
  // )
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const latestVersion = data.tag_name;
  //     const message = `Current Version: ${currentVersion}\nLatest Version: ${latestVersion}`;

  //     dialog.showMessageBox({
  //       type: "info",
  //       title: "App Version Info",
  //       message,
  //       buttons: ["OK"],
  //     });
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching latest version:", error);
  //     dialog.showMessageBox({
  //       type: "error",
  //       title: "Error",
  //       message: "Failed to fetch the latest version from GitHub",
  //       buttons: ["OK"],
  //     });
  //   });
}

function compareVersions(a, b) {
  // Implement your version comparison logic here.
  // This is a simple example; you can use a more robust library for this.
  const versionA = a.split(".").map(Number);
  const versionB = b.split(".").map(Number);

  for (let i = 0; i < versionA.length; i++) {
    if (versionA[i] < versionB[i]) return -1;
    if (versionA[i] > versionB[i]) return 1;
  }

  return 0;
}

app.on("ready", () => {
  // Redirect the console output to the Windows console
  console.log = function(message) {
    const cp = require("child_process");
    cp.exec(`echo ${message}`);
  };

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
  checkForUpdates();

  showMsg();

  createWindow();
});

autoUpdater.on("update-available", (info) => {
  console.log("Update available:", info.version);
  // Notify the user or add more logic here

  const options = {
    type: "info",
    title: "Update Available",
    message: `A new version (${info.version}) of the app is available. Do you want to install it now?`,
    buttons: ["Yes", "No"],
  };

  dialog.showMessageBox(options, (buttonIndex) => {
    if (buttonIndex === 0) {
      // User clicked "Yes," so quit the app and install the update
      autoUpdater.downloadUpdate();
    }
  });
});

autoUpdater.on("update-downloaded", () => {
  // This event is no longer used for the prompt, as the update will be downloaded when the user clicks "Yes."
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

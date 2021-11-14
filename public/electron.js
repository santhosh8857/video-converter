const path = require("path");
// inoder to load the web pages into the application window we need these two modules of electron
const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  // Open the DevTools in electron.
  if (isDev) {
    win.webContents.openDevTools({ mode: "detach" });
  }
}

// the createWindow function will be called when the applciation becomes ready
app.whenReady().then(() => {
  createWindow();
});

// Quit the application when all the windows are closed(except macOS)
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

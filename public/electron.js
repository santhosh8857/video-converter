const path = require("path");
// inoder to load the web pages into the application window we need these two modules of electron
const { app, BrowserWindow } = require("electron");
const ipc = require("electron").ipcMain;
var mainWindow = null;

const isDev = require("electron-is-dev");

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    resizable: true,
    height: 600,
    width: 800,

    // this is will be using for include the node modules
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});

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
}

// // the createWindow function will be called when the applciation becomes ready
// app.whenReady().then(() => {
//   createWindow();
// });

// ipc.on("open-project", (e) => {
//   console.log("button pressed");
// });

// Quit the application when all the windows are closed(except macOS)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

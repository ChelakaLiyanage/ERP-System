import { app, BrowserWindow } from "electron";
import path from "path";
import { isDev, DEV_SERVER_URL } from "./util.js";

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
  });
  if (isDev()) {
    mainWindow.loadURL(DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "out/index.html"));
  }
}

app.whenReady().then(createWindow);
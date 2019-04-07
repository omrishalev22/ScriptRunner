const {app, BrowserWindow, ipcMain} = require("electron");
const url = require("url");
const fs = require("fs");
const exec = require("child_process").exec;
const Tail = require('tail').Tail; // will append additional data from file
const LOGS_DIRECTORY = '/logs';
let win;

function createWindow() {
  win = new BrowserWindow({width: 800, height: 600});

  // load the dist folder from Angular
  win.loadURL('http://localhost:4200/index.html');

  // The following is optional and will open the DevTools:
  win.webContents.openDevTools()

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

// on macOS, closing the window doesn't quit the app
app.on("window-all-closed", () => {

  fs.readdir(LOGS_DIRECTORY, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(LOGS_DIRECTORY, file), err => {
        if (err) throw err;
      });
    }
  });

  if (process.platform !== "darwin") {
    app.quit();
  }
});

// initialize the app's main window
app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});

/**
 * Responsible for reading the log file when user enters the process status page
 * @Returns stream of strings - lines from file
 */
ipcMain.on("readFromFile", (event, data) => {
  const filePath = 'logs/' + data.fileName;

  const tail = new Tail(filePath);
  if(data.isProcessRunning){
    tail.watch(true) // watch file from beginning
  }

  tail.on("line", function(data) {
    console.log(data);
    win.webContents.send("readStream", data);
  });

  tail.on("error", function(error) {
    console.log('ERROR: ', error);
  });

});

/**
 * Responsible for running the commands
 * @Returns stream of strings - output from console
 */
ipcMain.on("boxClicked", (event, data) => {
  let runningCommand = exec(data.command); // run given command by box clicked e.g npm run ...sprinters1
  let writeStream = fs.createWriteStream('logs/' + data.boxID + '.txt');

  runningCommand.stdout.on('data', (output) => {
    writeStream.write(output);
    win.webContents.send("writtenToCmd", output); // return response to web
  })

  runningCommand.stdout.on('finish', () => {
    console.log('server is up and running...');
    writeStream.end();
  });

  runningCommand.on('exit', (code) => {
    const msg = 'child process exited with code ' + code.toString();
    win.webContents.send("writtenToCmd", msg);
  })
});

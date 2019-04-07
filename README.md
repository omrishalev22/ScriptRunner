# ScriptRunner

The goal of this project is to ease the script running proccess in the company. Helps other devision to use the terminal without the need to remember complicated command. 
Using electron ( Node.js as for the actual script running and Angular for the UI ), this offline application can be installed easily on every computer. For Harman workers, additional predefined script will be given separately for first time run.

## Development

Run `npm run install`- only when starting the app for the first time.

Run `ng serve` for a dev server - will bring up the UI

Run `npm run electron` to startup the electron app

Make sure you run ng serve first 

## Additional Information
Electron is used here to make an offline application. Electron project uses 2 main features to make this application
run offline but also able to work with the computer's file system: 

1. Chromium - provides chrome's browser features, this is usefull for running the UI process

2. Node.js - Javascript based runtime which allows us to use javascript outside the browser. Node.js has the abbility
to communicate with the file system - this part of the application is called the 'Main' process.

In order to make the two proccess communicate an actually show the applicaiton we use
simple IPC ( inter process communication ) - you can see it in the API folder, for IPC we use 
`import { IpcRenderer } from 'electron';` which provides a simple set of commands.


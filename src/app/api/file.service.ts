import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private ipc: IpcRenderer;
  logsEvent = new Subject();

  constructor() {
    if ((<any>window).require) {
      try {
        this.ipc = (<any>window).require('electron').ipcRenderer;
      } catch (error) {
        throw error;
      }
    } else {
      console.warn('Could not load electron ipc');
    }
  }

  async writeToCommand(command, boxID) {
    return new Promise<any>((resolve, reject) => {
      this.ipc.on('writtenToCmd', (event, arg) => { // listens to response from main process --> main.js
          resolve(boxID+'.txt');
      });
      this.ipc.send('boxClicked', {command: command, boxID: boxID}); // fire event in main.js who listens to this action
    });
  }

  readFromFile(fileName,isProcessRunning): Subject<any> {
       this.ipc.on('readStream', (event, arg) => { // listens to response from main process --> main.js
         this.logsEvent.next(arg);
    });
    this.ipc.send('readFromFile', {fileName: fileName, isProcessRunning: isProcessRunning}); // fire event in main.js who listens to this action)
    return this.logsEvent;
  }

}

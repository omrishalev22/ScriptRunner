import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  private runningProcesses = {};

  constructor() {
  }

  getRunningProcesses() {
    return this.runningProcesses;
  }
  getRunningProcessesById(id) {
    return this.runningProcesses[id];
  }


  setRunningProcess(id) {
    this.runningProcesses[id]=true;
    return 'id was added succsefully';
  }

  stopRunningProcess(id) {
      if(this.runningProcesses[id]){
        return delete this.runningProcesses[id];
      }
      return 'could not find process by' + id;
  }

  stopAllRunningProcesses(){
    this.runningProcesses = {};
  }

}

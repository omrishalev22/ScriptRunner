import { Component, OnInit } from '@angular/core';
import { FileService } from '../api/file.service';
import { CommandService } from '../api/command.service';
import { Router } from '@angular/router';
import { ProcessService } from './process.service';

@Component({
    selector: 'app-box-list',
    templateUrl: './box-list.component.html',
    styleUrls: ['./box-list.component.scss']
})
export class BoxListComponent implements OnInit {

    constructor(private fileService: FileService,
                private commandService: CommandService,
                private router: Router,
                private processService: ProcessService) {
    }

    ngOnInit() {
    }

    runScript(boxID) {

        if (this.processService.getRunningProcessesById(boxID)) {
            this.navigateToStatusPage(boxID + '.txt');
        } else {
            this.fileService.writeToCommand(this.buildCommand(boxID), boxID).then(logFileName => {
                // main process started running script, return the file in logs folder where output is written to
                this.processService.setRunningProcess(boxID);
                this.navigateToStatusPage(logFileName);
            });
        }

    }

    private buildCommand(boxID): string {
        const CMD = this.getBoxCommand(boxID);
        const SWM = this.goToSwmFolder();
        return CMD ? SWM + ' && ' + CMD : '';
    }

    private getBoxCommand(boxID) {
        return this.commandService.getCommand(boxID);
    }

    private goToSwmFolder() {
        return 'cd ~/dev/sources/swm/SmaFrontend && pwd';
    }

    private navigateToStatusPage(logFileName) {
        this.router.navigate(['/status', logFileName]);
    }


}

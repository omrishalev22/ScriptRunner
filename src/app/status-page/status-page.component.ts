import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileService } from '../api/file.service';
import { ProcessService } from '../box-list/process.service';

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.scss']
})
export class StatusPageComponent implements OnInit {

  logs;
  fileName: string;
  id: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private fileService: FileService,
              private cd: ChangeDetectorRef,
              private process: ProcessService) {
    activatedRoute.params.subscribe(item => {
      this.fileName = item.name;
      if (!this.fileName) {
        this.id = this.fileName.replace('.txt', '');
        console.log('error was not created');
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit() {
    let logsEvent = this.fileService.readFromFile(this.fileName, this.process.getRunningProcessesById(this.id));
    logsEvent.subscribe(logs => {
      this.logs += logs ? `<br> ${logs}` : '';
      this.cd.detectChanges();
    });

  }

}

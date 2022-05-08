import { Component, OnInit } from '@angular/core';
import { LogsService } from '../services/logs.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  logs:string[] = []
  constructor(public logService:LogsService){
  }
  
  ngOnInit(): void {
    this.logs = this.logService.logs;
  }

}

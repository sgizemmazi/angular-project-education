import { Component, OnInit } from '@angular/core';
import { LoggerServiceService } from '../services/logger-service.service';

@Component({
  selector: 'app-logger-service-component',
  templateUrl: './logger-service-component.component.html',
  styleUrls: ['./logger-service-component.component.css']
})
export class LoggerServiceComponentComponent implements OnInit {

  constructor(private logger: LoggerServiceService) {}

  ngOnInit() {
    this.logger.log('Injection context örneğidir.');
  }

}

import { Component, OnInit } from '@angular/core';
import { SignalService } from 'src/app/services/signal.service';

@Component({
  selector: 'app-angular-signal',
  templateUrl: './angular-signal.component.html',
  styleUrls: ['./angular-signal.component.css']
})
export class AngularSignalComponent implements OnInit {

  signalValue!: number;

  constructor(private signalService: SignalService) { }

  ngOnInit(): void {
    this.signalService.signal$.subscribe(value => {
      this.signalValue = value;
    });
  }
  updateSignal(value: number): void {
    this.signalService.setSignal(value);
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() inputName: string | undefined;
  @Output() newCustomerNameEvent = new EventEmitter<string>();

  addNewCustomer(val: string) {
    this.newCustomerNameEvent.emit(val);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

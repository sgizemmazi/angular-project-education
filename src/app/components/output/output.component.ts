import { Component,  OnInit, } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name='gizo';
  nameInput: string | undefined;

  addNewCustomer(newCustomer: any) {
    this.nameInput = newCustomer;
  }
}

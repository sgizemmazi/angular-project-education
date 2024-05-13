import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referance-variables',
  templateUrl: './referance-variables.component.html',
  styleUrls: ['./referance-variables.component.css']
})
export class ReferanceVariablesComponent implements OnInit {
  showMessage(value: string) {
    alert('Girdiğiniz değer: ' + value);
  }


  constructor() { }

  ngOnInit(): void {
  }

}

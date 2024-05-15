import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css'],
  styles: [
    `
      .red-text {
        color: red;
      }
      .bold-text {
        font-weight: bold;
      }
    `,
  ],

})
export class AttributeDirectiveComponent implements OnInit {
//ngStyle
  divStyle = {
    'background-color': 'blue',
    color: 'white',
    'font-size': '18px',
  };

  changeStyle() {
    this.divStyle = {
      'background-color': 'yellow',
      color: 'black',
      'font-size': '22px',
    };
  }

  //ngClass
  isRed = false;
  isBold = false;

  toggleClass(){
    this.isRed = !this.isRed;
    this.isBold = !this.isBold;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

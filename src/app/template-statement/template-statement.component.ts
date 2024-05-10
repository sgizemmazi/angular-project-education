import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-statement',
  templateUrl: './template-statement.component.html',
  styleUrls: ['./template-statement.component.css']
})
export class TemplateStatementComponent implements OnInit {

  message: string = '';

  showMessage(): void {
    this.message = 'Butona Tıklandı!';
  }

  constructor() { }

  ngOnInit(): void {
  }

}

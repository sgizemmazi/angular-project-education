import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-and-style-bindings',
  templateUrl: './class-and-style-bindings.component.html',
  styleUrls: ['./class-and-style-bindings.component.css']
})
export class ClassAndStyleBindingsComponent implements OnInit {

  isSpecial = true;   //class binding

  fontSize = '25px';  //style binding


  constructor() { }

  ngOnInit(): void {
  }

}

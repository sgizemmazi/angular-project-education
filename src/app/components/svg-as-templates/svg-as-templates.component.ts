import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-as-templates',
  templateUrl: './svg-as-templates.component.html',
  styleUrls: ['./svg-as-templates.component.css']
})
export class SvgAsTemplatesComponent implements OnInit {
  isVisible = false;

  constructor() { }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  ngOnInit(): void {
  }

}

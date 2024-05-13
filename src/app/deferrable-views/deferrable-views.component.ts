import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deferrable-views',
  templateUrl: './deferrable-views.component.html',
  styleUrls: ['./deferrable-views.component.css']
})
export class DeferrableViewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showContent: boolean = true; 
  showContent1: boolean = false; 

}

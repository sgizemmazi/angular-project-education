import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  itemImageUrl = '../assets/images/card-product-img-3.png';

  ngOnInit(): void {
  }

}

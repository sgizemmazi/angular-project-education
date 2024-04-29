import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  itemImageUrl = '../assets/images/card-product-img-3.png'; //html de oluşturulan src değişkeni ile fotoğrafın yolunu burada verdik

  ngOnInit(): void {
  }

}

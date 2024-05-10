import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  itemImageUrl1 = '../assets/images/card-product-img-3.png'; //html de oluşturulan src değişkeni ile fotoğrafın yolunu burada verdik
  imageName : String ="Pink Color"; // html de oluşturduğum butona attiribut ile 
  ngOnInit(): void {
  }

  users = [      //html de oluşturduğum table yapısı buradan oraya verileri yansıttım (Angular Template Syntax)
    { id: 1, name: 'gizem', email: 'gizem@example.com', tel: '555555554569' },
    { id: 2, name: 'onur', email: 'onur@example.com', tel: '555555554446'  },
    { id: 3, name: 'bade', email: 'bade@example.com', tel: '555555445456'  }
  ];

}

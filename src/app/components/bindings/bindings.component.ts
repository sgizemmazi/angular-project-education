import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {
  interpolationText = 'Şöyle görünür: {{ interpolationText }}. Angular, bu ifadeleri şablon içindeki uygun yerlerde değişkenin değeriyle değiştirir.';  //interpolation örneğinin ts dosyası!!!

  propertyImageUrl = '../assets/images/card-product-img-3.png'; //html de oluşturulan src değişkeni ile fotoğrafın yolunu burada verdik

  handleClick() {            //event binding örneği
    alert('Tıklandı!');
  }
  constructor() { }

  ngOnInit(): void {
  }
  
}

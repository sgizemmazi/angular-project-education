import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // standalone: true,
  // imports: [MatButtonModule, MatMenuModule],

})
export class HeaderComponent implements OnInit {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  constructor() { }

  login: string = 'Login'; //html ile tanımladığım değişkeni buraya bağladım arayüzde ne gözükeceğini burada tanımladım.
  isUnchanged = true; // html de verilen buttonun özelliğini devredışı bırakmak için kullanılıyor
  ngOnInit(): void {
    
    console.log("burası bir ngOnInit örneği denemesidir.")
    
  }

}

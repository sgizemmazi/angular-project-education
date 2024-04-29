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

  ngOnInit(): void {
    
    console.log("burası bir ngOnInit örneği denemesidir.")
    
  }

}

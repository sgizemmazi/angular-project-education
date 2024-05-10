import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-template-syntax',
  templateUrl: './angular-template-syntax.component.html',
  styleUrls: ['./angular-template-syntax.component.css']
})
export class AngularTemplateSyntaxComponent implements OnInit {


  ngOnInit(): void {
  }

  submitForm(username: string) {
    console.log('Kullanıcı adı:', username);    // Form verilerini bir API'ye gönderebiliriz
  }
  users = [      //html de oluşturduğum table yapısı buradan oraya verileri yansıttım (Angular Template Syntax)
  { id: 1, name: 'rast', email: 'rast@example.com', tel: '555555554569' },
  { id: 2, name: 'mobile', email: 'mobile@example.com', tel: '555555554446'  },
  { id: 3, name: 'RM', email: 'rm@example.com', tel: '555555445456'  }
];
}

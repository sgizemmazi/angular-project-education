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
    console.log('Kullanıcı adı:', username);    // Form verilerini bir API'ye gönderebilirsiniz
  }
}

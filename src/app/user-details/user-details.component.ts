import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit { 
orderuser: any;
  constructor(private UserServiceService: UserServiceService ) { }

  ngOnInit(): void {
  this.orderuser =this.UserServiceService.getUser();
  }

}
//Dependency Injection:
//Bir bileşenin, ihtiyaç duyduğu diğer bileşenleri doğrudan kendisi oluşturmak yerine, dışarıdan 
//(genellikle bir servis sağlayıcı veya modül) alması ve kullanması anlamına gelir. 
//DI, bileşenlerin birbirleriyle bağımlılıklarını azaltır ve esnek ve test edilebilir kod yazmayı sağlar.
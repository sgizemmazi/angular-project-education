import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user-services-component',
  templateUrl: './user-services-component.component.html',
  styleUrls: ['./user-services-component.component.css']
})
export class UserServicesComponentComponent implements OnInit {
  userService: any;
  constructor(private UserServiceService: UserServiceService) {}
 
  ngOnInit() {
    this.userService = this.UserServiceService.getUser();
  }

}

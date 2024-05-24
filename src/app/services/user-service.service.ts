import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  getUser() {
    return {
      isim: 'Bade Elif',
      yas: 20,
      email: 'bade.elif@rm.com'
    };
  }
}

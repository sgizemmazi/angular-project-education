import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  getUser() {  // Modül içerisindeki providers array'ine eklenen elemanlar (örneğin, servisler ve interceptorler), modülün tüm bileşenlerine, direktiflerine ve pipelarına etki eder.
    return {
      isim: 'Bade Elif',
      yas: 20,
      email: 'bade.elif@rm.com'
    };
  }
}

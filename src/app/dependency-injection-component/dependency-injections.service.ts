import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DependencyInjectionsService {
  textService(): string {
    return 'Burası service.ts dosyasından gelen bir metindir.';  
    // burada textservice içine oluşturduğum metni component.ts sayfasında çağırıp orada mesaj olarak verip görüntüledim.
  }
  constructor() { }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InjectableServicesService {
  private data: any[] = [];
  getData() {
    return this.data;
}

addData(item: any) {
    this.data.push(item);
}
  constructor() { }
}

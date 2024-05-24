import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerServiceService {
  log(message: string) {
    console.log(message);
  }
}

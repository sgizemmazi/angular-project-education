import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalService {
private signalSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
public signal$: Observable<number> = this.signalSubject.asObservable();

  constructor() { }

  setSignal(value:number):void {
    this.signalSubject.next(value);
  }
}

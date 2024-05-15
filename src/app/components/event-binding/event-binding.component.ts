import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  message: string = '';

  showMessage(event: MouseEvent): void {
    this.message = 'Butona Tıklandı! **event binding özelliği kullanıldı**';
    console.log(event);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

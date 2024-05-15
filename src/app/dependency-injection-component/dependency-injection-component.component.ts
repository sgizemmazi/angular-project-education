import { Component } from '@angular/core';
import { DependencyInjectionsService } from './dependency-injections.service';

@Component({
  selector: 'app-dependency-injection-component',
  templateUrl: './dependency-injection-component.component.html',
  styleUrls: ['./dependency-injection-component.component.css']
})
export class DependencyInjectionComponentComponent {
  message : string;  //oluşturduğum metni string olarak alıp aşağıda bu mesajın geçtiği servisi çağırdım.

  constructor(private dependencyInjection: DependencyInjectionsService) {
    this.message = this.dependencyInjection.textService();
  }

}

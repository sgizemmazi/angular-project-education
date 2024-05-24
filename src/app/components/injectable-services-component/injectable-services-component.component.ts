import { Component, OnInit } from '@angular/core';
import { InjectableServicesService } from '../../directives/injectable-services.service';

@Component({
  selector: 'app-injectable-services-component',
  templateUrl: './injectable-services-component.component.html',
  styleUrls: ['./injectable-services-component.component.css']
})
export class InjectableServicesComponentComponent implements OnInit {

  items: any[] = [];

  constructor(private injectableServices: InjectableServicesService) {
        this.items = this.injectableServices.getData();
    }

    addItem() {
        const newItem = { id: Date.now(), value: 'New Item' };
        this.injectableServices.addData(newItem);
        this.items = this.injectableServices.getData();
    }
  ngOnInit(): void {
  }

}

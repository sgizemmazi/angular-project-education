import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectableServicesComponentComponent } from './injectable-services-component.component';

describe('InjectableServicesComponentComponent', () => {
  let component: InjectableServicesComponentComponent;
  let fixture: ComponentFixture<InjectableServicesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectableServicesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectableServicesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

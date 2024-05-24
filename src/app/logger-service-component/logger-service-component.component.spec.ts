import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerServiceComponentComponent } from './logger-service-component.component';

describe('LoggerServiceComponentComponent', () => {
  let component: LoggerServiceComponentComponent;
  let fixture: ComponentFixture<LoggerServiceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggerServiceComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggerServiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

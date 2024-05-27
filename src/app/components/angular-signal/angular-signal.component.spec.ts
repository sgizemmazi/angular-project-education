import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSignalComponent } from './angular-signal.component';

describe('AngularSignalComponent', () => {
  let component: AngularSignalComponent;
  let fixture: ComponentFixture<AngularSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularSignalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

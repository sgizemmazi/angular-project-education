import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserServicesComponentComponent } from './user-services-component.component';

describe('UserServicesComponentComponent', () => {
  let component: UserServicesComponentComponent;
  let fixture: ComponentFixture<UserServicesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserServicesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserServicesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

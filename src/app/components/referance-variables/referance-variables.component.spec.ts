import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferanceVariablesComponent } from './referance-variables.component';

describe('ReferanceVariablesComponent', () => {
  let component: ReferanceVariablesComponent;
  let fixture: ComponentFixture<ReferanceVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferanceVariablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferanceVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyInjectionComponentComponent } from './dependency-injection-component.component';

describe('DependencyInjectionComponentComponent', () => {
  let component: DependencyInjectionComponentComponent;
  let fixture: ComponentFixture<DependencyInjectionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependencyInjectionComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependencyInjectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

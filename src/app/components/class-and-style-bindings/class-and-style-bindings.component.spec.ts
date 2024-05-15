import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAndStyleBindingsComponent } from './class-and-style-bindings.component';

describe('ClassAndStyleBindingsComponent', () => {
  let component: ClassAndStyleBindingsComponent;
  let fixture: ComponentFixture<ClassAndStyleBindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassAndStyleBindingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassAndStyleBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

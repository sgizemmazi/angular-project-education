import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTemplateSyntaxComponent } from './angular-template-syntax.component';

describe('AngularTemplateSyntaxComponent', () => {
  let component: AngularTemplateSyntaxComponent;
  let fixture: ComponentFixture<AngularTemplateSyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularTemplateSyntaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularTemplateSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

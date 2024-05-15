import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgAsTemplatesComponent } from './svg-as-templates.component';

describe('SvgAsTemplatesComponent', () => {
  let component: SvgAsTemplatesComponent;
  let fixture: ComponentFixture<SvgAsTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgAsTemplatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgAsTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

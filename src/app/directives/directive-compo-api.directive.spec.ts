import { TestBed } from '@angular/core/testing';
import { DirectiveCompoApiDirective } from './directive-compo-api.directive';

describe('DirectiveCompoApiDirective', () => {
  it('should create an instance', () => {
    TestBed.configureTestingModule({
      declarations: [DirectiveCompoApiDirective]
    });
    const directive = TestBed.inject(DirectiveCompoApiDirective);
    expect(directive).toBeTruthy();
  });
});

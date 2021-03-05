import { TestBed } from '@angular/core/testing';

import { ElementResolver } from './element.resolver';

describe('ElementResolver', () => {
  let resolver: ElementResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ElementResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

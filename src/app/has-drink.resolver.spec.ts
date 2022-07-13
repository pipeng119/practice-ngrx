import { TestBed } from '@angular/core/testing';

import { HasDrinkResolver } from './has-drink.resolver';

describe('HasDrinkResolver', () => {
  let resolver: HasDrinkResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HasDrinkResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

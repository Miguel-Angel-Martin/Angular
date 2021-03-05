import { TestBed } from '@angular/core/testing';

import { InterceptorHTTPInterceptor } from './interceptor-http.interceptor';

describe('InterceptorHTTPInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptorHTTPInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptorHTTPInterceptor = TestBed.inject(InterceptorHTTPInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

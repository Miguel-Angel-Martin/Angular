import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadlodashComponent } from './Lodash.component';

describe('LoadlodashComponent', () => {
  let component: LoadlodashComponent;
  let fixture: ComponentFixture<LoadlodashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadlodashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadlodashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

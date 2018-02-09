import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreaktimeComponent } from './breaktime.component';

describe('BreaktimeComponent', () => {
  let component: BreaktimeComponent;
  let fixture: ComponentFixture<BreaktimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreaktimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreaktimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

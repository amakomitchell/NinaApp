import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeektimeentryComponent } from './weektimeentry.component';

describe('WeektimeentryComponent', () => {
  let component: WeektimeentryComponent;
  let fixture: ComponentFixture<WeektimeentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeektimeentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeektimeentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

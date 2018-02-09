import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryeditComponent } from './entryedit.component';

describe('EntryeditComponent', () => {
  let component: EntryeditComponent;
  let fixture: ComponentFixture<EntryeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

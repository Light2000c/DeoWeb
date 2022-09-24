import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactThreeComponent } from './contact-three.component';

describe('ContactThreeComponent', () => {
  let component: ContactThreeComponent;
  let fixture: ComponentFixture<ContactThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

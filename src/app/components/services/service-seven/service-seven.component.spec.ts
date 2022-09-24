import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSevenComponent } from './service-seven.component';

describe('ServiceSevenComponent', () => {
  let component: ServiceSevenComponent;
  let fixture: ComponentFixture<ServiceSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

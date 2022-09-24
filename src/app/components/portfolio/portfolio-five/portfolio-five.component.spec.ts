import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFiveComponent } from './portfolio-five.component';

describe('PortfolioFiveComponent', () => {
  let component: PortfolioFiveComponent;
  let fixture: ComponentFixture<PortfolioFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

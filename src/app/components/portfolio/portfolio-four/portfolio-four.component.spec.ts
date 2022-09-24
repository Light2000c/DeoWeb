import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFourComponent } from './portfolio-four.component';

describe('PortfolioFourComponent', () => {
  let component: PortfolioFourComponent;
  let fixture: ComponentFixture<PortfolioFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

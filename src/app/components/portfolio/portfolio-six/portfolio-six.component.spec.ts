import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSixComponent } from './portfolio-six.component';

describe('PortfolioSixComponent', () => {
  let component: PortfolioSixComponent;
  let fixture: ComponentFixture<PortfolioSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbPortfolioMasonryComponent } from './breadcrumb-portfolio-masonry.component';

describe('BreadcrumbPortfolioMasonryComponent', () => {
  let component: BreadcrumbPortfolioMasonryComponent;
  let fixture: ComponentFixture<BreadcrumbPortfolioMasonryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbPortfolioMasonryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbPortfolioMasonryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

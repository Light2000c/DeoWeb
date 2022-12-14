import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeElevenComponent } from './theme-eleven.component';

describe('ThemeElevenComponent', () => {
  let component: ThemeElevenComponent;
  let fixture: ComponentFixture<ThemeElevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeElevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

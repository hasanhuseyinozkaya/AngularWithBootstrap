import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlexamplesComponent } from './htmlexamples.component';

describe('HtmlexamplesComponent', () => {
  let component: HtmlexamplesComponent;
  let fixture: ComponentFixture<HtmlexamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlexamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlexamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

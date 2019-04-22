import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherLotsComponent } from './other-lots.component';

describe('OtherLotsComponent', () => {
  let component: OtherLotsComponent;
  let fixture: ComponentFixture<OtherLotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherLotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherLotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

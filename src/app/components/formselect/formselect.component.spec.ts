import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormselectComponent } from './formselect.component';

describe('FormselectComponent', () => {
  let component: FormselectComponent;
  let fixture: ComponentFixture<FormselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

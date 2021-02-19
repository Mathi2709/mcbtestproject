import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbanktransactionComponent } from './newbanktransaction.component';

describe('NewbanktransactionComponent', () => {
  let component: NewbanktransactionComponent;
  let fixture: ComponentFixture<NewbanktransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbanktransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbanktransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

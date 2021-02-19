import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitedtranactionComponent } from './submitedtranaction.component';

describe('SubmitedtranactionComponent', () => {
  let component: SubmitedtranactionComponent;
  let fixture: ComponentFixture<SubmitedtranactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitedtranactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitedtranactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

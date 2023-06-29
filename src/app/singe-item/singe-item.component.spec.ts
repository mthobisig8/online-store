import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingeItemComponent } from './singe-item.component';

describe('SingeItemComponent', () => {
  let component: SingeItemComponent;
  let fixture: ComponentFixture<SingeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingeItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

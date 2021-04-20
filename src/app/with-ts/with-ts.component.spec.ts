import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithTSComponent } from './with-ts.component';

describe('WithTSComponent', () => {
  let component: WithTSComponent;
  let fixture: ComponentFixture<WithTSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithTSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

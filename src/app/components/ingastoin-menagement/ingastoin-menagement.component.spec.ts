import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngastoinMenagementComponent } from './ingastoin-menagement.component';

describe('IngastoinMenagementComponent', () => {
  let component: IngastoinMenagementComponent;
  let fixture: ComponentFixture<IngastoinMenagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngastoinMenagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngastoinMenagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

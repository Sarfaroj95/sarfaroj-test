import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMamangementComponent } from './user-mamangement.component';

describe('UserMamangementComponent', () => {
  let component: UserMamangementComponent;
  let fixture: ComponentFixture<UserMamangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMamangementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserMamangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

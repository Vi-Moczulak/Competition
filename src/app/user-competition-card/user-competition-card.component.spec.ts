import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCompetitionCardComponent } from './user-competition-card.component';

describe('UserCompetitionCardComponent', () => {
  let component: UserCompetitionCardComponent;
  let fixture: ComponentFixture<UserCompetitionCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserCompetitionCardComponent]
    });
    fixture = TestBed.createComponent(UserCompetitionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

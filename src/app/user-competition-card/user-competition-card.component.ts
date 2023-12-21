import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/models/User';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-user-competition-card',
  templateUrl: './user-competition-card.component.html',
  styleUrls: ['./user-competition-card.component.scss']
})
export class UserCompetitionCardComponent implements OnInit{

  @Input() userId!: number;
  @Input() competitionId!: number;
  user?: User | null;
  userCompetitionData: any;
  public math = Math;

  colors = []
  positions = ['st', 'nd', 'rd']
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.user = this.dataService.getUser(this.userId);
    this.userCompetitionData = this.user?.competitions[this.competitionId];
    console.log(this.userCompetitionData)
  }
};



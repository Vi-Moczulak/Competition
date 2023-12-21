import { Component, Input, OnInit } from '@angular/core';
import { Competition } from 'src/models/Competition';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit{
  ngOnInit(): void {
    this.todayDate = new Date();
    this.dateDiff = Math.ceil((this.competition.dateTo.valueOf() - this.todayDate.valueOf())/ (1000 * 3600 * 24));
  }

  @Input() competition!: Competition;
  todayDate!: Date;
  dateDiff!: number;
  public math = Math;

  getParticipantsCount() {
    return this.competition.participants.length
  }
}

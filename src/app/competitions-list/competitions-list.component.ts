import { Component, OnInit } from '@angular/core';
import { Competition } from 'src/models/Competition';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-competitions-list',
  templateUrl: './competitions-list.component.html',
  styleUrls: ['./competitions-list.component.scss']
})
export class CompetitionsListComponent implements OnInit{


  public competitions!: Competition[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadCompetitions();
  }

  loadCompetitions() {
    this.competitions = this.dataService.getCompetitions();
  }
}

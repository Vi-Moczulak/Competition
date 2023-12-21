import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionsListComponent } from './competitions-list/competitions-list.component';

const routes: Routes = [{path: '', component: CompetitionsListComponent, title: 'Competition'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

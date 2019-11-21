import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FilmeListComponent} from './filme-list/filme-list.component';
import {AtorListComponent} from './ator-list/ator-list.component';
import {AtorFormComponent} from './ator-form/ator-form.component';
import {StudioListComponent} from './studio-list/studio-list.component';
import {StudioFormComponent} from './studio-form/studio-form.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'filme-list', component: FilmeListComponent
  },
  {
    path: 'ator-list', component: AtorListComponent
  },
  {
    path: 'ator-form', component: AtorFormComponent
  },
  {
    path: 'studio-list', component: StudioListComponent
  },
  {
    path: 'studio-form', component: StudioFormComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

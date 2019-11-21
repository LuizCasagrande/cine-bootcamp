import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilmeListComponent } from './filme-list/filme-list.component';
import {registerLocaleData} from '@angular/common';
import { InativoPipe } from './pipe/inativo.pipe';
import { FormatoPipe } from './pipe/formato.pipe';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { AtorListComponent } from './ator-list/ator-list.component';
import { AtorFormComponent } from './ator-form/ator-form.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { StudioListComponent } from './studio-list/studio-list.component';
import { StudioFormComponent } from './studio-form/studio-form.component';
import { FilmFormComponent } from './film-form/film-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmeListComponent,
    InativoPipe,
    FormatoPipe,
    NavBarComponent,
    AtorListComponent,
    AtorFormComponent,
    StudioListComponent,
    StudioFormComponent,
    FilmFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ButtonModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import {Studio} from '../model/Studio';
import {Observable, of, of as observableOf} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class StudioService {

  private studioList: Studio[];
  private KEY_STUDIOS = 'KEY STUDIOS'

  constructor() {
    this.studioList = [];
  }

  findAll(): Observable<Studio[]> {
    return observableOf(JSON.parse(localStorage.getItem(this.KEY_STUDIOS))).pipe(delay(0));
  }

  add(studio: Studio): void {
    this.studioList.push(studio);
    localStorage.setItem(this.KEY_STUDIOS, JSON.stringify(this.studioList));
  }

  remove(studio: Studio): void {
    const index = this.studioList.findIndex(item => item.id === studio.id);
    this.studioList.splice(index, 1);
    localStorage.setItem(this.KEY_STUDIOS, JSON.stringify(this.studioList));
  }

  clear(): void {
    this.studioList = [];
    localStorage.removeItem(this.KEY_STUDIOS);
  }

  editar(studio: Studio): void {
    const index = this.studioList.findIndex(item => item.id === studio.id);
    this.studioList[index] = studio;
    localStorage.setItem(this.KEY_STUDIOS, JSON.stringify(this.studioList));
  }

  size(): Observable<number> {
    return of(this.studioList.length);
  }
}

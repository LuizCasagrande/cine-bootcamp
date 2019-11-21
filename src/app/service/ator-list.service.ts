import { Injectable } from '@angular/core';
import {Ator} from '../model/Ator';
import {Observable, of, of as observableOf} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AtorListService {

  private atorList: Ator[];
  private KEY_ATORES = 'KEY ATORES'

  constructor() {
    this.atorList = [];
  }

  findAll(): Observable<Ator[]> {
    return observableOf(JSON.parse(localStorage.getItem(this.KEY_ATORES))).pipe(delay(0));
  }


  add(ator: Ator): void {
    this.atorList.push(ator);
    localStorage.setItem(this.KEY_ATORES, JSON.stringify(this.atorList));
  }

  remove(ator: Ator): void {
    const index = this.atorList.findIndex(item => item.id === ator.id);
    this.atorList.splice(index, 1);
    localStorage.setItem(this.KEY_ATORES, JSON.stringify(this.atorList));
  }

  clear(): void {
    this.atorList = [];
    localStorage.removeItem(this.KEY_ATORES);
  }

  editar(ator: Ator): void {
    const index = this.atorList.findIndex(item => item.id === ator.id);
    this.atorList[index] = ator;
    localStorage.setItem(this.KEY_ATORES, JSON.stringify(this.atorList));
  }

  size(): Observable<number> {
    return of(this.atorList.length);
  }
}

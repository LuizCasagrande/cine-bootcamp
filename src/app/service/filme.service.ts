import {Injectable} from '@angular/core';
import {Filme} from '../model/Filme';
import {Observable, of, of as observableOf, throwError} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private filmeList: Filme[];
  private KEY_FILMES = 'KEY FILMES'

  constructor() {
    this.filmeList = [];
  }

  findAll(): Observable<Filme[]> {
    // return throwError(error('ERRO'))
    return observableOf(JSON.parse(localStorage.getItem(this.KEY_FILMES))).pipe(delay(0));
  }


  add(filme: Filme): void {
    this.filmeList.push(filme);
    localStorage.setItem(this.KEY_FILMES, JSON.stringify(this.filmeList));
  }

  remove(filme: Filme): void {
    const index = this.filmeList.findIndex(item => item.id === filme.id);
    this.filmeList.splice(index, 1);
    localStorage.setItem(this.KEY_FILMES, JSON.stringify(this.filmeList));
  }

  clear(): void {
    this.filmeList = [];
    localStorage.removeItem(this.KEY_FILMES);
  }

  getTotal(): Observable<number> {
    return of(this.filmeList.reduce((soma, filme) => soma + filme.precoBilhete, 0));
  }

  size(): Observable<number> {
    return of(this.filmeList.length);
  }

}

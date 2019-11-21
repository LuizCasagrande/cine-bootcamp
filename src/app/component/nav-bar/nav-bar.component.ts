import { Component, OnInit } from '@angular/core';
import {Menu} from './menu';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  menuList: Menu[];

  constructor() { }

  ngOnInit(): void {
    this.menuList = [];
    this.menuList.push({descricao: 'Home', rota: [''], icone: 'fa-home'});
    this.menuList.push({descricao: 'Filmes', rota: ['filme-list'], icone: 'fa-film'});
    this.menuList.push({descricao: 'Atores', rota: ['ator-list'], icone: 'fa-star'});
    this.menuList.push({descricao: 'Studios', rota: ['studio-list'], icone: 'fa-video'});
  }

}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilmeService} from '../service/filme.service';
import {Filme} from '../model/Filme';
import {ClassificacaoEnum} from '../enumerations/classificacao.enum';
import {Observable} from 'rxjs';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.scss']
})
export class FilmeListComponent implements OnInit, OnDestroy {

  constructor(private filmeService: FilmeService, private titleService: Title) {
  }

  filmeList$: Observable<Filme[]>;
  tooltip: string;

  getTotal(): Observable<number> {
    return this.filmeService.getTotal();
  }

  size(): Observable<number> {
    return this.filmeService.size();
  }

  ngOnInit(): void {
    this.titleService.setTitle('Cine Bootcamp - Filmes');
    this.gerarFilme();
    // this.filmeService.findAll().subscribe(filmesList => this.filmeList = filmesList);
    this.filmeList$ = this.filmeService.findAll();
  }

  titulo(filme: Filme): void {
    if (filme.inativo) {
      this.tooltip = 'Status: Inativo';
      return;
    }
    if (filme.precoBilhete <= 10) {
      this.tooltip = 'Custo Baixo';
    }
    if (filme.precoBilhete > 10 && filme.precoBilhete <= 20) {
      this.tooltip = 'Custo Regular';
    }
    if (filme.precoBilhete > 20 && filme.precoBilhete < 40) {
      this.tooltip = 'Custo Médio';
    }
    if (filme.precoBilhete >= 40) {
      this.tooltip = 'Custo Alto';
    }
  }

  private gerarFilme() {
    const filme = new Filme();
    filme.id = 1;
    filme.titulo = 'Cars';
    filme.classificacao = ClassificacaoEnum.INFANTIL;
    filme.dataLancamento = new Date(2015, 0, 2);
    filme.precoBilhete = 15;
    filme.formato = 1;
    filme.inativo = false;
    this.filmeService.add(filme);

    const filme2 = new Filme();
    filme2.id = 2;
    filme2.titulo = 'Cars 2';
    filme2.classificacao = ClassificacaoEnum.INFANTIL;
    filme2.dataLancamento = new Date(2016, 1, 3);
    filme2.precoBilhete = 30;
    filme2.formato = 2;
    filme2.inativo = false;
    this.filmeService.add(filme2);

    const filme3 = new Filme();
    filme3.id = 3;
    filme3.titulo = 'Cars 3';
    filme3.classificacao = ClassificacaoEnum.INFANTIL;
    filme3.dataLancamento = new Date(2017, 2, 4);
    filme3.precoBilhete = 45;
    filme3.formato = 3;
    filme3.inativo = false;
    this.filmeService.add(filme3);

    const filme4 = new Filme();
    filme4.id = 4;
    filme4.titulo = 'Fast and Furious';
    filme4.classificacao = ClassificacaoEnum.ADULTO;
    filme4.dataLancamento = new Date(2014, 8, 10);
    filme4.precoBilhete = 10;
    filme4.formato = 4;
    filme4.inativo = true;
    this.filmeService.add(filme4);

    const filme5 = new Filme();
    filme5.id = 5;
    filme5.titulo = 'Fast and Furious 2';
    filme5.classificacao = ClassificacaoEnum.ADULTO;
    filme5.dataLancamento = new Date(2015, 8, 10);
    filme5.precoBilhete = 20;
    filme5.formato = 1;
    filme5.inativo = true;
    this.filmeService.add(filme5);

    const filme6 = new Filme();
    filme6.id = 6;
    filme6.titulo = 'Fast and Furious 3';
    filme6.classificacao = ClassificacaoEnum.ADULTO;
    filme6.dataLancamento = new Date(2016, 8, 10);
    filme6.precoBilhete = 30;
    filme6.formato = 2;
    filme6.inativo = false;
    this.filmeService.add(filme6);

    const filme7 = new Filme();
    filme7.id = 7;
    filme7.titulo = 'Fast and Furious 4';
    filme7.classificacao = ClassificacaoEnum.ADULTO;
    filme7.dataLancamento = new Date(2017, 8, 10);
    filme7.precoBilhete = 40;
    filme7.formato = 3;
    filme7.inativo = false;
    this.filmeService.add(filme7);

    const filme8 = new Filme();
    filme8.id = 8;
    filme8.titulo = 'Avengers';
    filme8.classificacao = ClassificacaoEnum.ADOLESCENTE;
    filme8.dataLancamento = new Date(2016, 3, 2);
    filme8.precoBilhete = 10;
    filme8.formato = 4;
    filme8.inativo = false;
    this.filmeService.add(filme8);

    const filme9 = new Filme();
    filme9.id = 9;
    filme9.titulo = 'Avengers 2';
    filme9.classificacao = ClassificacaoEnum.ADOLESCENTE;
    filme9.dataLancamento = new Date(2017, 4, 3);
    filme9.precoBilhete = 20;
    filme9.formato = 1;
    filme9.inativo = false;
    this.filmeService.add(filme9);

    const filme10 = new Filme();
    filme10.id = 10;
    filme10.titulo = 'Avengers 4';
    filme10.classificacao = ClassificacaoEnum.ADOLESCENTE;
    filme10.dataLancamento = new Date(2018, 4, 3);
    filme10.precoBilhete = 50;
    filme10.formato = 2;
    filme10.inativo = false;
    this.filmeService.add(filme10);
  }

  ngOnDestroy(): void {
    this.filmeService.clear();
  }

}

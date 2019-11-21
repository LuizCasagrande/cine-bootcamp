import {Component, OnInit, OnDestroy} from '@angular/core';
import {AtorListService} from '../service/ator-list.service';
import {Observable} from 'rxjs';
import {Ator} from '../model/Ator';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-ator-list',
  templateUrl: './ator-list.component.html',
  styleUrls: ['./ator-list.component.scss']
})
export class AtorListComponent implements OnInit {

  atorList$: Observable<Ator[]>;
  atorParaEditar: Ator;

  constructor(private atorListService: AtorListService, private titleService: Title) {
  }

  size(): Observable<number> {
    return this.atorListService.size();
  }

  editar(ator: Ator): void {
    this.atorParaEditar = JSON.parse(JSON.stringify(ator));
  }

  excluir(ator: Ator): void {
    this.atorListService.remove(ator);
    this.atorList$ = this.atorListService.findAll();
  }

  atualizarRegistro(): void {
    this.atorList$ = this.atorListService.findAll();
    this.atorParaEditar = null;
  }


  ngOnInit() {
    this.titleService.setTitle('Cine Bootcamp - Atores');
    this.gerarAtor();
    this.atorList$ = this.atorListService.findAll();
  }

  private gerarAtor() {
    this.atorListService.size().subscribe(size => {
      if (size === 0) {
        const ator = new Ator();
        ator.id = 1;
        ator.nome = 'Marlon Brando';
        ator.idade = 57;
        this.atorListService.add(ator);

        const ator2 = new Ator();
        ator2.id = 2;
        ator2.nome = 'Laurence Olivier';
        ator2.idade = 49;
        this.atorListService.add(ator2);

        const ator3 = new Ator();
        ator3.id = 3;
        ator3.nome = 'Daniel Day-Lewis';
        ator3.idade = 63;
        this.atorListService.add(ator3);

        const ator4 = new Ator();
        ator4.id = 4;
        ator4.nome = 'Al Pacino';
        ator4.idade = 52;
        this.atorListService.add(ator4);

        const ator5 = new Ator();
        ator5.id = 5;
        ator5.nome = 'Robert De Niro';
        ator5.idade = 61;
        this.atorListService.add(ator5);

        const ator6 = new Ator();
        ator6.id = 6;
        ator6.nome = 'Dustin Hoffman';
        ator6.idade = 67;
        this.atorListService.add(ator6);

        const ator7 = new Ator();
        ator7.id = 7;
        ator7.nome = 'Jack Nicholson';
        ator7.idade = 54;
        this.atorListService.add(ator7);

        const ator8 = new Ator();
        ator8.id = 8;
        ator8.nome = 'Morgan Freeman';
        ator8.idade = 83;
        this.atorListService.add(ator8);
      }
    });
  }


}

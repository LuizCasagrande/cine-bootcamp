import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Title} from '@angular/platform-browser';
import {Studio} from '../model/Studio';
import {StudioService} from '../service/studio.service';

@Component({
  selector: 'app-studio-list',
  templateUrl: './studio-list.component.html',
  styleUrls: ['./studio-list.component.scss']
})
export class StudioListComponent implements OnInit {

  studio$: Observable<Studio[]>;
  studioParaEditar: Studio;

  constructor(private studioService: StudioService, private titleService: Title) {
  }

  size(): Observable<number> {
    return this.studioService.size();
  }

  editar(studio: Studio): void {
    this.studioParaEditar = JSON.parse(JSON.stringify(studio));
  }

  excluir(studio: Studio): void {
    this.studioService.remove(studio);
    this.studio$ = this.studioService.findAll();
  }

  atualizarRegistro(): void {
    this.studio$ = this.studioService.findAll();
    this.studioParaEditar = null;
  }


  ngOnInit() {
    this.titleService.setTitle('Cine Bootcamp - Studios');
    this.gerarStudio();
    this.studio$ = this.studioService.findAll();
  }

  private gerarStudio() {
    this.studioService.size().subscribe(size => {
      if (size === 0) {
        const studio = new Studio();
        studio.id = 1;
        studio.nome = 'Dreamworks';
        studio.pais = 'EUA';
        studio.filmes = 36;
        this.studioService.add(studio);

        const studio2 = new Studio();
        studio2.id = 1;
        studio2.nome = 'Dreamworks';
        studio2.pais = 'EUA';
        studio2.filmes = 36;
        this.studioService.add(studio2);
      }
    });
  }

}

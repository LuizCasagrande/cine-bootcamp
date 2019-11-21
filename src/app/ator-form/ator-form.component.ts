import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ator} from '../model/Ator';
import {AtorListService} from '../service/ator-list.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ator-form',
  templateUrl: './ator-form.component.html',
  styleUrls: ['./ator-form.component.scss']
})
export class AtorFormComponent {

  @Input() ator: Ator = new Ator();

  @Input() editar = false;

  @Output() onPersist = new EventEmitter<void>();

  constructor(private atorListService: AtorListService, private router: Router) { }

  adicionar(): void {
    if (this.editar) {
      this.atorListService.editar(this.ator);
    } else {
      this.atorListService.add(this.ator);
    }
    this.onPersist.emit();
    this.router.navigate(['/ator-list']);
  }

}

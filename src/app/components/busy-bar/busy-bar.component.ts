import { Component } from '@angular/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-busy-bar',
  standalone: true,
  imports: [NgbProgressbarModule],
  templateUrl: './busy-bar.component.html',
  styleUrl: './busy-bar.component.scss'
})
export class BusyBarComponent {
  constructor(public ls: ListService) {

  }
}

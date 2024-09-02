import { Component, Input } from '@angular/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { ToDoList } from '../../models/todo-entry';

@Component({
  selector: 'app-busy-bar',
  standalone: true,
  imports: [NgbProgressbarModule],
  templateUrl: './busy-bar.component.html',
  styleUrl: './busy-bar.component.scss'
})
export class BusyBarComponent {
  @Input() list!: ToDoList
  constructor() {

  }
}

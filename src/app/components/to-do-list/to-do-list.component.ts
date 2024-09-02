import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { faCircleCheck as checkedIcon, faCopy, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faArrowDownAZ, faCircleCheck as uncheckedIcon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ToDoList } from '../../models/todo-entry';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FontAwesomeModule, NgbTooltipModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {
  @Input() list!: ToDoList;
  checked = checkedIcon
  unchecked = uncheckedIcon
  copyIcon = faCopy
  removeIcon = faTrashAlt
  sortIcon = faArrowDownAZ
  constructor() { }
}

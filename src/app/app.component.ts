import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { BusyBarComponent } from "./components/busy-bar/busy-bar.component";
import { ToDoList } from './models/todo-entry';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ToDoListComponent, BusyBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'interview';
  list: ToDoList = new ToDoList();
}

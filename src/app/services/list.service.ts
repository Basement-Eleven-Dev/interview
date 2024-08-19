import { Injectable } from '@angular/core';
import { ToDoEntry } from '../models/todo-entry';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  list: ToDoEntry[] = [];
  get count(): number {
    return this.list.length
  }
  duplicate(entry: ToDoEntry, index: number): void {
    this.list.splice(index, 0, entry)
  }
  newEntry(): void {
    this.list.push(new ToDoEntry(''))
  }
  remove(index: number): void {
    this.list.splice(index, 1)
  }
  edit(index: number, value: string): void {
    this.list[index].title = value;
  }
  switchEntry(index: number): void {
    this.list[index].done = !this.list[index].done;
  }
  constructor() { }
}

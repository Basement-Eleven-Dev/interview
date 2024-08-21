import { Injectable } from '@angular/core';
import { ToDoEntry } from '../models/todo-entry';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private list: ToDoEntry[] = [];
  get count(): number {
    return this.list.length
  }
  get entries(): ToDoEntry[] {
    return this.list
  }
  duplicate(entry: ToDoEntry, index: number): void {
    this.list.splice(index, 0, entry)
  }
  generateSampleData(): void {
    this.list = ToDoEntry.getSampleData()
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
  sort(): void {
    //please fill this
  }
  get committmentPercentage(): number {
    //please fill this
    return 50;
  }
  constructor() { }
}

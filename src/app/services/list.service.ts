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
    this.list = [
      new ToDoEntry('Buy groceries', false),
      new ToDoEntry('Clean the house', true),
      new ToDoEntry('Finish work project', false),
      new ToDoEntry('Call mom', false),
      new ToDoEntry('Go for a run', true),
      new ToDoEntry('Read a book', false),
      new ToDoEntry('Pay bills', true),
      new ToDoEntry('Organize closet', false),
      new ToDoEntry('Plan vacation', false),
      new ToDoEntry('Attend meeting', true),
      new ToDoEntry('Write blog post ', false),
      new ToDoEntry('Cook dinner', true),
      new ToDoEntry('Study for exam', false),
      new ToDoEntry('Do laundry', true),
      new ToDoEntry('Buy birthday gift ', false),
      new ToDoEntry('Mow the lawn', true),
      new ToDoEntry('Schedule doctor appointment', false),
      new ToDoEntry('Organize files', true),
      new ToDoEntry('Learn a new skill', false),
      new ToDoEntry('Catch up with friends', true),
    ]
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

export class ToDoEntry {

    constructor(
        public title: string,
        public done: boolean = false,
        public createdAt: Date = new Date(),
        public completedAt?: Date
    ) { }
}


export class ToDoList {
    static getSampleData(): ToDoEntry[] {
        return [
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
    get count(): number {
        return this.list.length
    }
    get committmentPercentage(): number {
        return 50;
    }
    constructor(public list: ToDoEntry[] = []) { }
    add(): void {
        this.list.push(new ToDoEntry(''))
    }
    remove(index: number): void {
        this.list.splice(index, 1)
    }
    duplicate(entry: ToDoEntry, index: number): void {
        this.list.splice(index, 0, entry)
    }
    edit(index: number, value: string): void {
        this.list[index].title = value;
    }
    setAsCompleted(index: number) {
        this.list[index].done = true;
        this.list[index].completedAt = new Date();
    }
    setAsNotCompleted(index: number) {
        this.list[index].done = false;
        this.list[index].completedAt = undefined;
    }
    loadSampleData() {
        this.list = ToDoList.getSampleData()
    }
}
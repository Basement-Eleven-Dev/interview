export class ToDoEntry {
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
    constructor(
        public title: string,
        public done: boolean = false
    ) { }
}
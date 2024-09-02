import java.util.Date;

class ToDoEntry {
    public String title;
    public boolean done = false;
    public Date createdAt = new Date();
    public Date completedAt;
    ToDoEntry(String title) {
        this.title = title;
    }
}

// Create a type alias for a todo item. It should include
// - description
// - optional due date
// - whether completed
// - optional tags
// • Add several todo items to a list of type Todo[]
type Todo = {
    description: string;
    dueDate?: Date;
    completed: boolean;
    tags?: string[];
};
const todos: Todo[] = [
    {
        description: "Finish TypeScript project",
        dueDate: new Date("2025-06-30"),
        completed: false,
        tags: ["work", "urgent"],
    },
    {
        description: "Grocery shopping",
        completed: true,
    },
    {
        description: "Read a book",
        dueDate: new Date("2025-07-15"),
        completed: false,
        tags: ["leisure"],
    },
];
for (const todo of todos) {
    console.log(
        `Task: ${todo.description}, Due: ${todo.dueDate?.toDateString() ?? "No due date"}, Completed: ${todo.completed}, Tags: ${todo.tags?.join(", ") ?? "No tags"}`
    );
}


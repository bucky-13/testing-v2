import { Todo } from "../models/Todo";
import { addTodo, toggleTodo, removeTodo } from "../todoApp";

describe("Todo App", () => {
    test("It should add a todo", () => {
        // Assign
        const todoText = "Create a statue of a hamster";
        const todos: Todo[] = [];

        // Act

        addTodo(todoText, todos);

        // Assert
        expect(todos).toHaveLength(1);
        expect(todos[0].text).toBe(todoText);
        expect(todos[0].done).toBeFalsy;
        expect(todos[0].id).toBeGreaterThan(0);
    
    })

    test("It should toggle", () => {
        // Assign
        const todo: Todo = new Todo("Bajs")

        // Act
        toggleTodo(todo);

        // Assert
        expect(todo.done).toBeTruthy();

        // Act
        toggleTodo(todo);

        // Assert
        expect(todo.done).toBeFalsy();
    })

    test("It should remove todo", () => {
        // Assign
        const todo = new Todo("DELETE me")
        const todos: Todo[] = [todo]; 

        // Act
        removeTodo(todo.id, todos);

        // Assert
        expect(todos).toHaveLength(0);
    })
})
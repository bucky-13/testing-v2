import { Todo } from "../models/Todo";
import { addTodo, toggleTodo, removeTodo } from "../todoApp";
import * as htmlFunctions from "./../htmlFunctions";

describe("Todo App", () => {

    let mockedCreateHtml: jest.SpyInstance<void>;

    beforeEach(() => {
               mockedCreateHtml = jest.spyOn(htmlFunctions, "createHTML");
    })

    test("It should add a todo", () => {
        // Assign
        const todoText = "Create a statue of a hamster";
        const todos: Todo[] = [];
        document.body.innerHTML = `<ul id="todoList"></ul>`;


        // Act
        addTodo(todoText, todos);

        // Assert
        expect(todos).toHaveLength(1);
        expect(todos[0].text).toBe(todoText);
        expect(todos[0].done).toBeFalsy;
        expect(todos[0].id).toBeGreaterThan(0);

        // const liTags = document.getElementsByTagName('li');
        // expect(liTags).toHaveLength(1);
        expect(mockedCreateHtml).toHaveBeenCalled();

    })

    test("It should NOT add a todo", () => {
        // Assign
        const todoText = "";
        const todos: Todo[] = [];

        // Act
        addTodo(todoText, todos);

        // Assert
        expect(todos).toHaveLength(0);
        expect(mockedCreateHtml).toHaveBeenCalled();
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
        expect(mockedCreateHtml).toHaveBeenCalled();
    })

    test("It should remove todo", () => {
        // Assign
        const todo = new Todo("DELETE me")
        const todos: Todo[] = [todo]; 

        // Act
        removeTodo(todo.id, todos);

        // Assert
        expect(todos).toHaveLength(0);
        expect(mockedCreateHtml).toHaveBeenCalled();
    })
})
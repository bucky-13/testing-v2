import { Todo } from "./models/Todo";
import { createHTML } from "./htmlFunctions";

const todos: Todo[] = [];

export const addTodo = (text: string, theList: Todo[]) => {
    if (text !== "") {
        theList.push(new Todo(text));
    } else {
        console.log("Nothing gets added");
    }
    createHTML(theList);
}

export const toggleTodo = (todo: Todo) => {
    todo.done = !todo.done;
    createHTML(todos);
}

export const removeTodo = (id: number, theList: Todo[]) => {
    const i = theList.findIndex(todo => todo.id === id);
    theList.splice(i, 1);
    createHTML(theList);
}

createHTML(todos);
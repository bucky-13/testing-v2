import { Todo } from "./models/Todo";

export const createHTML = (theList: Todo[]) => {
    // Clear ul content
    const todoList = document.querySelector('#todoList')
    if (todoList) todoList.innerHTML = "";
    
    // Loop the list
    for (let i = 0; i < theList.length; i++) {
        // Create Li tags
        const listItem = document.createElement('li');
        listItem.innerHTML = theList[i].text;

        todoList?.appendChild(listItem);
    }
};
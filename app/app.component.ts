import { Component } from "@angular/core";
import { TodoListComponent } from "./todo/todo-list.component";

// const TASKS: task[] = ["Задача 1","Задача 2","Задача 3"];


@Component({
    selector: "todo-app",
    templateUrl: "./app/app.component.html",
    styleUrls: ["./app/app.component.css"]
    directives: [TodoListComponent]
})

export class AppComponent {
    title: string;
    todos: string[];
    // selectHero: tasks;

    constructor() {
        this.title = "Angular 2 ToDo List";
        this.todos = [];
    }

    add_todo(input: HTMLInputElement) {
        let todo = input.value;
        input.value = "";
        console.log("add todo item + "todo"");
        // this.selectHero.push(todo);
        this.todos.push(todo);



    }
}

import { Component, Input, Directive, ElementRef, HostListener, Renderer  } from "@angular/core";

// @Directive({ selector: '[todo-list]' })
@Component({
    selector: "todo-list",
    templateUrl: "./app/todo/todo-list.component.html",
    styleUrls: ["./app/app.component.css"],
    inputs: ["todos"]
})

export class TodoListComponent {
    // @Input() todos: string[];
    // constructor() {
    //     this.todos = ["Задача 1","Задача 2","Задача 3"];
    // }
    // @Input() todos: string[];
}

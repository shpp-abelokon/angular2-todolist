"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var todo_list_component_1 = require("./todo/todo-list.component");
// const TASKS: task[] = ["Задача 1","Задача 2","Задача 3"];
var AppComponent = (function () {
    // selectHero: tasks;
    function AppComponent() {
        this.title = "Angular 2 ToDo List";
        this.todos = [];
    }
    AppComponent.prototype.add_todo = function (input) {
        var todo = input.value;
        input.value = "";
        console.log("add todo item + ", todo, "");
        // this.selectHero.push(todo);
        this.todos.push(todo);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "todo-app",
            templateUrl: "./app/app.component.html",
            styleUrls: ["./app/app.component.css"],
            directives: [todo_list_component_1.TodoListComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';

import { CommonModule } from '@angular/common'; // Often needed for template directives

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos implements OnInit {
  todoService = inject(TodosService); //inject the service to this component; assign this injection to a variable
  todoItems = signal<Array<Todo>>([]);

  // ngOnInit(): void {
  //   console.log(this.todoService.todoItems);
  //   this.todoItems.set(this.todoService.todoItems);
  // }

  ngOnInit(): void {

    this.todoService
    .getTodos() // 👈 Use the actual method name from your service
      .pipe(
        catchError((err) => {
          console.error("Error fetching todos from Spring Boot:", err);
          // Handle the error (e.g., display a user message)
          throw err;
      })
    )
    .subscribe((todos) => {
      this.todoItems.set(todos);
    });
  }

}

// import { Component } from '@angular/core';
import { Component, OnInit, inject } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { TodosService } from '../../services/todos';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
// export class TodoItem {

// }

export class TodoItem implements OnInit {
  // Assuming your component property name is 'todos'
  todos: Todo[] = []; 
  private todoService = inject(TodosService); // Inject the service

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.todoService.getTodos().subscribe({
      next: (data) => {
        this.todos = data; // Assign the data from Spring Boot
        console.log('Todos fetched from Spring Boot successfully!');
      },
      error: (err) => {
        console.error('Error fetching data:', err);
        // This is where you'd see a CORS error if WebConfig was missing/wrong
      }
    });
  }
}

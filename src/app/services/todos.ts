import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //?

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  // http = inject(HttpClient);


//   todoItems: Array<Todo> = [{
//     title: 'groceries',
//     id: 0,
//     userId: 1,
//     completed: false
//   }, {
//     title: 'car wash',
//     id: 1,
//     userId: 1,
//     completed: false
//   }
// ];

  public defaultApiPort = 8080;
  
  // CRITICAL: Point to the Spring Boot endpoint
  private apiUrl = 'http://localhost:8080/api/todos'; 
  
  private http = inject(HttpClient);

  // getTodosFromApi(){
  //   const url = `https://jsonplaceholder.typicode.com/todos`;
  //   return this.http.get<Array<Todo>>(url);
  // }

  // Method to fetch the list of todos
  getTodos(): Observable<Todo[]> {
    // The `http.get<Todo[]>()` ensures the response is typed correctly
    return this.http.get<Todo[]>(this.apiUrl);
  }
  // constructor() {

  // }
}

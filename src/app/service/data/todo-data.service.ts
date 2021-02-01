import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDo } from 'src/app/list-to-dos/list-to-dos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  retriveAllTodos(username:string){
    return this.http.get<ToDo []>(`http://localhost:8080/users/${username}/todos`);
  }

  deleteToservice(username,id){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }
}

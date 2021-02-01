import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class ToDo{
  constructor(public id:number, 
    public description:string,
    public done:boolean,
    public targetDate:Date){}
}

@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})
export class ListToDosComponent implements OnInit {
  // todos=[
  //   new ToDo(1, 'Learn to Dance', false, new Date()),
  //   new ToDo(2,'Expert in Angular', false, new Date()),
  //   new ToDo(3,'Expert in Spring', false, new Date())
  // ];
  todos:ToDo[];
  deleteMessage:string;

  constructor(private todoservice:TodoDataService) { }

  ngOnInit() {
    this.refreshTodos();
  }
  
  refreshTodos(){
    this.todoservice.retriveAllTodos('sunny').subscribe(
      response => {
        console.log('Response = '+response);
        this.todos=response;
      }
    );
  }

  deleteTodo(id){
    console.log(`Delete is clicked ${id}`);
    this.todoservice.deleteToservice('sunny',id).subscribe(
      response => {
        console.log('Response = '+response);
        this.deleteMessage=`Delete of id ${id} Successful !`;
        this.refreshTodos();
      }
    );
    
  }

}

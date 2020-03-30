import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  TodosData: any;

  constructor(
    public apiService: ApiService
  ) {
    this.TodosData = [];
   }

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos() {
    //Get saved list of students
    this.apiService.getItems().subscribe(response => {
      console.log(response);
      this.TodosData = response;
    })
  }
  delete(item) {
    //Delete item in Student data
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllTodos();
    });
  }
}

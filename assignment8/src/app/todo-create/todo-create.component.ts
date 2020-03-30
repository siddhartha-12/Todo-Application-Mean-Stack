import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent implements OnInit {

  data: Todo
 
  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.data = new Todo();
  }
 
  ngOnInit() {
  }
 
  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['list']);
    });
 
  }
}

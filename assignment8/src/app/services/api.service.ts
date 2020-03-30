import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Todo} from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //API Path
  base_path = 'http://localhost:3000/todo'

  constructor(private http:HttpClient) { }

  //HTTP option and setting header
  httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})}

  //Creating a new todo
  createItem(item):Observable<Todo>
  {
    return this.http
    .post<Todo>(this.base_path, JSON.stringify(item),this.httpOptions)
  }

  //Get Single todo
  getItem(id):Observable<Todo>{
    return this.http
    .get<Todo>(this.base_path + '/'+id)
  }

  getItems():Observable<Todo>{
    return this.http
    .get<Todo>(this.base_path)
  }

  // Update item by id
  updateItem(id, item): Observable<Todo> {
    return this.http
      .put<Todo>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
  }
  
  deleteItem(id):Observable<Todo>{
    return this.http
    .delete<Todo>(this.base_path + '/'+id)
  }
}

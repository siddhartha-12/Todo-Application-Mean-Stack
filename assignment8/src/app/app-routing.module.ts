import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoListComponent } from './todo-list/todo-list.component';


const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'list'},
  {path: 'create',component: TodoCreateComponent },
  {path: 'edit:/id',component: TodoEditComponent},
  {path: 'list',component: TodoListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

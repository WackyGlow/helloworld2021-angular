import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PetsComponent} from "./pets/pets.component";
import {PetdetailsComponent} from "./petdetails/petdetails.component";

const routes: Routes = [
  {path: 'pets', component: PetsComponent},
  {path: 'petdetails', component: PetdetailsComponent},
  {path: 'todos', loadChildren: () => import("./todos/todos.module").then(m => m.TodosModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

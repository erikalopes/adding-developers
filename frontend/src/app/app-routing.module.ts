import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeveloperCreateComponent } from './components/developer-create/developer-create.component';
import { DeveloperListComponent } from './components/developer-list/developer-list.component';
import { DeveloperEditComponent } from './components/developer-edit/developer-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-employee', component: DeveloperCreateComponent },
  { path: 'edit-employee/:id', component: DeveloperEditComponent },
  { path: 'employees-list', component: DeveloperListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
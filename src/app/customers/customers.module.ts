
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {CustomersListComponent} from "./list/customers.list.component";
import {CustomersEditComponent} from "./edit/customers.edit.component";
import {CustomersAddComponent} from "./add/customers.add.component";
import {CustomersDeleteComponent} from "./delete/customers.delete.component";



const routes: Routes = [
  {
    path: '',
    component: CustomersListComponent
  },
  {
    path: 'list',
    component: CustomersListComponent
  },
  {
    path: 'edit',
    component: CustomersEditComponent
  },
  {
    path: 'add',
    component: CustomersAddComponent
  },
  {
    path: 'delete',
    component: CustomersDeleteComponent
  },


]

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    CustomersEditComponent,
    CustomersAddComponent,
    CustomersDeleteComponent,



  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [CustomersComponent,
    CustomersListComponent,
  ],
  providers: [],
  bootstrap: [CustomersComponent]
})

export class CustomersModule { }


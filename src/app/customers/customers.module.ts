
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import {NgModule} from "@angular/core";
import {CustomersListComponent} from "./list/customers.list.component";
import {CustomersEditComponent} from "./edit/customers.edit.component";
import {CustomersAddComponent} from "./add/customers.add.component";
import {CustomersDeleteComponent} from "./delete/customers.delete.component";
import {TopMenuCustomersComponent} from "./topMenuCustomers/topMenuCustomers.component";
import {RestApiService} from "../common/service/RestApiService";
import {MaterialModule} from "../common/material/material.module";
import {BrowserModule} from "@angular/platform-browser";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'customers/list',
    pathMatch: 'full'
  },
  {
    path: 'customer/test',
    component: CustomersListComponent
  },

  {
    path: 'customers',
    children: [
      {
        path: 'list',
        component: CustomersListComponent
      },
      {
        path: 'add',
        component: CustomersAddComponent
      },
      {
        path: 'edit/:id',
        component: CustomersEditComponent
      },
      {
        path: 'delete',
        component: CustomersDeleteComponent
      }

    ]
  }
  ]

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    CustomersEditComponent,
    CustomersAddComponent,
    CustomersDeleteComponent,
    TopMenuCustomersComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MaterialModule
  ],
  exports: [CustomersComponent,
  ],
  providers: [RestApiService],
  bootstrap: [CustomersComponent]
})

export class CustomersModule { }


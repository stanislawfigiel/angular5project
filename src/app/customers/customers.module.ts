
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {CustomersListComponent} from "./list/customers.list.component";
import {CustomersEditComponent} from "./edit/customers.edit.component";
import {CustomersAddComponent} from "./add/customers.add.component";
import {CustomersDeleteComponent} from "./delete/customers.delete.component";
import {TopMenuCustomersComponent} from "./topMenuCustomers/topMenuCustomers.component";


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
        path: 'edit',
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
    RouterModule.forRoot(routes)
  ],
  exports: [CustomersComponent,
  ],
  providers: [],
  bootstrap: [CustomersComponent]
})

export class CustomersModule { }


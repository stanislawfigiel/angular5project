
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
import { CustomersDetailsComponent } from './details/customers.details.component';
import { FormsModule } from '@angular/forms';
import {RegularExpressionValidatorDirective} from "../common/validation/regularExpressionValidator/regular-expression-validator.directive";
import {MessageComponent} from "../common/messageComponent/message-component/message.component";
import {MessageService} from "../common/service/MessageService";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'customers/list',
    pathMatch: 'full'
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
        path: 'details/:idx',
        component: CustomersDetailsComponent
      },
      {
        path: 'edit/:id',
        component: CustomersEditComponent
      },
      {
        path: 'delete/:id',
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
    TopMenuCustomersComponent,
    CustomersDetailsComponent,
    RegularExpressionValidatorDirective,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    FormsModule,

  ],

  exports: [CustomersComponent,
  ],
  providers: [RestApiService,MessageService],
  bootstrap: [CustomersComponent]
})

export class CustomersModule { }


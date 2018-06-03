import { Component } from '@angular/core';
import {Customer} from "../../common/model/Customer";
import {RestApiService} from "../../common/service/RestApiService";
import {Router} from "@angular/router";

@Component({
  selector: 'customers-add',
  templateUrl: '../common/customers.form.html',
  styleUrls: ['../common/customers.form.scss']
})
export class CustomersAddComponent {
  selectedCustomer:Customer;
  title = 'customers add component';

  constructor(private restApiService:RestApiService,
              private router: Router,
              ){
    this.selectedCustomer = new Customer();
  }

  onSubmit():void{
    let idx = this.restApiService.addCustomer(this.selectedCustomer);

    
  this.router.navigate(["/customers/edit/"+idx]);

  }
}


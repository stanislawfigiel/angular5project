import { Component } from '@angular/core';
import {Customer} from "../../common/model/Customer";
import {RestApiService} from "../../common/service/RestApiService";

@Component({
  selector: 'customers-add',
  templateUrl: '../common/customers.form.html',
  styleUrls: ['../common/customers.form.scss']
})
export class CustomersAddComponent {
  selectedCustomer:Customer;
  title = 'customers add component';

  constructor(private restApiService:RestApiService){
    this.selectedCustomer = new Customer();
  }

  onSubmit():void{
    this.restApiService.addCustomer(this.selectedCustomer);
    console.log('dodajemy', this.selectedCustomer);
  }
}

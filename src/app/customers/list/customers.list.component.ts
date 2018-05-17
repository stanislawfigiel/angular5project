import {Component, OnInit} from '@angular/core';
import {RestApiService} from "../../common/service/RestApiService";
import {Customer} from "../../common/model/Customer";
// import {MaterialModule} from "../../common/material/material.module";

@Component({
  selector: 'customers-list',
  templateUrl: './customers.list.component.html',
  styleUrls: ['./customers.list.component.scss']
})
export class CustomersListComponent implements OnInit {
  list: Customer[];
  title = 'customers listcomponent';
  selectedCustomer;

  constructor(private restApiService: RestApiService) {

  }

  ngOnInit() {
    this.list = this.restApiService.getCustomers();

  }

  selectCustomer = (customer) => {
    this.selectedCustomer = customer;
    // console.log('alert', customer);
  }

}

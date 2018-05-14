import {Component, OnInit} from '@angular/core';
import {RestApiService} from "../../common/service/RestApiService";

@Component({
  selector: 'customers-list',
  templateUrl: './customers.list.component.html',
  styleUrls: ['./customers.list.component.scss']
})
export class CustomersListComponent implements OnInit {
  list: {}[];
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

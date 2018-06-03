import {Component} from '@angular/core';
import {Customer} from "../../common/model/Customer";
import {RestApiService} from "../../common/service/RestApiService";
import {Router} from "@angular/router";
import {RestCustomer} from "../../common/model/RestCustomer";
import {MessageService} from "../../common/service/MessageService";

@Component({
  selector: 'customers-add',
  templateUrl: '../common/customers.form.html',
  styleUrls: ['../common/customers.form.scss']
})
export class CustomersAddComponent {
  selectedCustomer: Customer;
  title = 'customers add component';

  constructor(private restApiService: RestApiService,
              private router: Router,
              private messageService: MessageService) {
    this.selectedCustomer = new Customer();
  }

  onSubmit(): void {
    let restCustomer: RestCustomer = this.restApiService.mapCustomerToRestCustomer(this.selectedCustomer);
    this.restApiService.addCustomerToRest(restCustomer).subscribe(
      data => {
        this.messageService.announceSuccess("Customer has been added to database with success.");

        this.router.navigate(["/customers/list"]);
      }
    );


  }
}


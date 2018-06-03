import {Component, OnInit} from '@angular/core';
import {RestApiService} from "../../common/service/RestApiService";
import {Customer} from "../../common/model/Customer";
import {MatDialog} from "@angular/material";
import {CustomersDeleteComponent} from "../delete/customers.delete.component";
import {RestCustomer} from "../../common/model/RestCustomer";

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
  animal: string;
  name: string;

  constructor(private restApiService: RestApiService,
              public dialog: MatDialog
              ) {

  }

  public ngOnInit() {
    this.restApiService.getCustomersFromRest()
      .subscribe((data: {customers:RestCustomer[]}) => {
        this.list = this.mapRestCustomersToCustomers(data.customers);
        }
      );


  }

    selectCustomer = (customer) => {
    this.selectedCustomer = {...customer};
  }

  openDeleteDialog(customer:Customer): void {
    let dialogRef = this.dialog.open(CustomersDeleteComponent, {
      width: '250px',
      data: { selectedCustomer: customer}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == "yes") {
        this.ngOnInit();
      }
    });
  }


  mapRestCustomersToCustomers(restCustomers:RestCustomer[]):Customer[]{
    let customers:Customer[] = [];
    for(let restCustomer of restCustomers){
       let customer:Customer = this.restApiService.mapRestCustomerToCustomer(restCustomer);
       console.log("customer w petli:", customer);
        customers.push(customer);
    }
    return customers;

  }

}

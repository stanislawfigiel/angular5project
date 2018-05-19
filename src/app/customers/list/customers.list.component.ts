import {Component, OnInit} from '@angular/core';
import {RestApiService} from "../../common/service/RestApiService";
import {Customer} from "../../common/model/Customer";
import {MatDialog} from "@angular/material";
import {CustomersDeleteComponent} from "../delete/customers.delete.component";

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

  ngOnInit() {
    this.list = this.restApiService.getCustomers();

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
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

import {Component, Inject} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Customer} from "../../common/model/Customer";
import {RestApiService} from "../../common/service/RestApiService";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {MessageService} from "../../common/service/MessageService";

@Component({
  selector: 'customers-delete',
  templateUrl: './customers.delete.component.html',
  styleUrls: ['./customers.delete.component.scss']
})
export class CustomersDeleteComponent {
  selectedCustomer: Customer;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private restApiService: RestApiService,
              public dialogRef: MatDialogRef<CustomersDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private messageService: MessageService
  ){
    this.selectedCustomer = data.selectedCustomer;
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    this.dialogRef.close();
    this.restApiService.deleteCustomerFromRest(this.selectedCustomer.id).subscribe(
      result => {
        this.messageService.announceSuccess("Row has been deleted with success.");
      }
    );
  }



}

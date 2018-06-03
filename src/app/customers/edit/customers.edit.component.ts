import {Component, OnDestroy, OnInit} from '@angular/core';

import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {RestApiService} from "../../common/service/RestApiService";
import {Customer} from "../../common/model/Customer";
import {MessageService} from "../../common/service/MessageService";
import {Subscription} from "rxjs/Subscription";
import {RestCustomer} from "../../common/model/RestCustomer";

@Component({
  selector: 'customers-edit',
  templateUrl: '../common/customers.form.html',
  styleUrls: ['../common/customers.form.scss'],

})


export class CustomersEditComponent {
  public id: string;
  selectedCustomer: Customer;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private restApiService: RestApiService,
              private messageService: MessageService,

              ) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.restApiService.getByIdFromRest(this.id)
          .subscribe((data:{customer:RestCustomer}) => {
              this.selectedCustomer = this.restApiService.mapRestCustomerToCustomer(data.customer);
            }
          );
        ;

      }
    });

  }


  onSubmit(): void {
    this.restApiService.updateCustomer(this.selectedCustomer);
    let restCustomer:RestCustomer = this.restApiService.mapCustomerToRestCustomer(this.selectedCustomer);
    this.restApiService.updateCustomerFromRest(restCustomer)
      .subscribe(result=>{

      })
    ;
    this.messageService.announceSuccess("Data was saved with success.");
  }

}

import {Component, OnDestroy, OnInit} from '@angular/core';

import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {RestApiService} from "../../common/service/RestApiService";
import {Customer} from "../../common/model/Customer";
import {MessageService} from "../../common/service/MessageService";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'customers-edit',
  templateUrl: '../common/customers.form.html',
  styleUrls: ['../common/customers.form.scss'],

})


export class CustomersEditComponent {
  public id: number;
  selectedCustomer: Customer;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private restApiService: RestApiService,
              private messageService: MessageService,

              ) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
        let customer: Customer = this.restApiService.getByIndex(this.id);
        this.selectedCustomer = {...customer};
      }
    });

  }


  onSubmit(): void {
    this.restApiService.updateCustomer(this.selectedCustomer);
    this.messageService.announceSuccess("Data was saved with success.");
  }

}

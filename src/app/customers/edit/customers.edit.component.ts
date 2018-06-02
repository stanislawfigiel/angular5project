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


export class CustomersEditComponent implements OnInit, OnDestroy {
  public id: number;
  selectedCustomer: Customer;
  subscription: Subscription;

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


    this.subscription = this.messageService.successMessageAnnounced$.subscribe(
      message => {
        console.log("w komponencie edit", message);
      });

  }


  ngOnInit(): void {

  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  onSubmit(): void {
    this.messageService.announceSuccess("Data was saved with success");
    this.restApiService.updateCustomer(this.selectedCustomer);
  }

}

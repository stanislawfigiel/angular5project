import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {RestApiService} from "../../common/service/RestApiService";
import {Customer} from "../../common/model/Customer";

@Component({
  selector: 'customers-edit',
  templateUrl: '../common/customers.form.html',
  styleUrls: ['./customers.edit.component.scss'],

})


export class CustomersEditComponent implements OnInit {
  public id:number;
  selectedCustomer: Customer;

  constructor(private activatedRoute: ActivatedRoute,
  private router: Router,
  private restApiService: RestApiService
  ){

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
        let customer:Customer = this.restApiService.getByIndex(this.id);
        this.selectedCustomer = {...customer};
      }
    });

  }


  ngOnInit(): void {

  }

  onSubmit():void{
    this.restApiService.updateCustomer(this.selectedCustomer);

    console.log('on submit');
  }

}

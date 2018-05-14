import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {RestApiService} from "../../common/service/RestApiService";
import {Customer} from "../../common/model/Customer";

@Component({
  selector: 'customers-edit',
  templateUrl: './customers.edit.component.html',
  styleUrls: ['./customers.edit.component.scss']
})


export class CustomersEditComponent implements OnInit {
  title = 'customers edit component';
  public id:number;
  selectedCustomer: Customer;

  constructor(private activatedRoute: ActivatedRoute,
  private router: Router,
  private restApiService: RestApiService
  ){

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
        console.log('id', this.id);
        this.selectedCustomer = this.restApiService.getByIndex(this.id);
      }
    });
    
  }


  ngOnInit(): void {

  }

}

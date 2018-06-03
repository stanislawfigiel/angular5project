import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Customer} from "../../common/model/Customer";
import {RestApiService} from "../../common/service/RestApiService";
import {RestCustomer} from "../../common/model/RestCustomer";

@Component({
  selector: 'customers-details',
  templateUrl: './customers.details.component.html',
  styleUrls: ['./customers.details.component.scss']
})
export class CustomersDetailsComponent implements OnInit {
  public id:string;
  selectedCustomer: Customer;


  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private restApiService: RestApiService
  ){

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.restApiService.getByIdFromRest(this.id).subscribe(
          data=>{
            let restCustomer:RestCustomer = data.customer;
            this.selectedCustomer = this.restApiService.mapRestCustomerToCustomer(restCustomer);
          }
        );
      }
    });

  }

  ngOnInit() {
  }

}

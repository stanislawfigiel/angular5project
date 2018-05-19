import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Customer} from "../../common/model/Customer";
import {RestApiService} from "../../common/service/RestApiService";

@Component({
  selector: 'customers-details',
  templateUrl: './customers.details.component.html',
  styleUrls: ['./customers.details.component.scss']
})
export class CustomersDetailsComponent implements OnInit {
  public idx:number;
  selectedCustomer: Customer;


  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private restApiService: RestApiService
  ){

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.idx = parseInt(this.activatedRoute.snapshot.paramMap.get('idx'));
        let customer:Customer = this.restApiService.getByIndex(this.idx);
        this.selectedCustomer = {...customer};
      }
    });

  }

  ngOnInit() {
  }

}

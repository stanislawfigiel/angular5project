import {Injectable} from "@angular/core";
import {Customer} from "../model/Customer";


@Injectable()
export class RestApiService{

  private list:Customer[] = [{id: 1, firstName: 'ala', lastName: 'Kowalska', email:'ala@wp.pl', company:'mycompany' },
    {id:2, firstName: 'Tomek', lastName: 'Nowak', email:'tom@wp.pl', company:'s comp' }];
  public getCustomers():Customer[]{
    return this.list;
  }

  public getByIndex(index: number): Customer{
    return this.list[index];
  }

  public addCustomer(customer:Customer):void{
    this.list.push(customer);
  }

  public deleteCustomer(customer:Customer):void{
    let idx = this.list.findIndex(cust=> cust === customer );
    this.list.splice(idx,1);
  }

  public updateCustomer(customer:Customer):void{
    let idx = this.list.findIndex(cust=> cust.id === customer.id );
    this.list[idx]=customer;
    // this.list.splice(idx,1);
  }


}

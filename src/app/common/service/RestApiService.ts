import {Injectable} from "@angular/core";
import {Customer} from "../model/Customer";


@Injectable()
export class RestApiService{

  private list:Customer[] = [{id: 1, firstName: 'ala', lastName: 'Kowalska' },
    {id:2, firstName: 'Tomek', lastName: 'Nowak' }];
  public getCustomers():Customer[]{
    return this.list;
  }

  public getByIndex(index: number): Customer{
    return this.list[index];
  }

}

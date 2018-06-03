import {Injectable, Self} from "@angular/core";
import {Customer} from "../model/Customer";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {RestCustomer} from "../model/RestCustomer";
import {Observable} from "rxjs/Observable";
import {catchError} from "rxjs/operators";


@Injectable()
export class RestApiService{
  private  API:string = 'https://wsb-frontend-project-angularjs.juszczak.io';
  constructor(private http: HttpClient) { }

  /*private getHeaders(): = () => ({
    'Content-Type': 'application/json',
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    'Access-Control-Allow-Origin': '*',
    'X-User-ID': 'adrian'
  });*/

 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-User-ID': 'adrian'
  })
};


  private list:Customer[] = [];
  /*= [{id: '1', firstName: 'ala', lastName: 'Kowalska', email:'ala@wp.pl', company:'mycompany' },
    {id:'2', firstName: 'Tomek', lastName: 'Nowak', email:'tom@wp.pl', company:'s comp' }];
*/

  public getCustomersFromRest(){
    return this.http.get(this.API + "/customers",this.httpOptions);
  }

  public getCustomers():Customer[]{
    return this.list;
  }

  public getByIdFromRest(id: string): Observable<{customer:RestCustomer}>{
    return this.http.get<{customer:RestCustomer}>(this.API + "/customer/"+ id,this.httpOptions);
      /*.pipe(
        // catchError(this.handleError)
      );*/
  }


  public getByIndex(index: number): Customer{
    return this.list[index];
  }


  public addCustomer(customer:Customer):number{
    this.list.push(customer);
    let idx:number = this.list.findIndex(cust=> cust=== customer);
    return idx;
  }

  public addCustomerToRest(customer:RestCustomer):Observable<RestCustomer>{
    let customerJson = JSON.stringify({ customer: customer });
    return this.http.post<RestCustomer>(this.API + "/add",customerJson, this.httpOptions)
      .pipe(
        // catchError(this.handleError)
      );
  }



  public deleteCustomer(customer:Customer):void{
    let idx = this.list.findIndex(cust=> cust === customer );
    this.list.splice(idx,1);
  }

  public deleteCustomerFromRest(customerId:String):Observable<{}>{
    return this.http.delete(this.API + "/delete/" + customerId, this.httpOptions)
      .pipe(
        // catchError(this.handleError('deleteHero'))
      );
  }


  public updateCustomer(customer:Customer):void{
    let idx = this.list.findIndex(cust=> cust.id === customer.id );
    this.list[idx]=customer;
    // this.list.splice(idx,1);
  }

  public updateCustomerFromRest(customer:RestCustomer):Observable<RestCustomer>{
    let customerJson = JSON.stringify({ customer: customer });
    return this.http.put<RestCustomer>(this.API + "/update/" + customer.id, customerJson, this.httpOptions)
      .pipe(
        // catchError(this.handleError(''))
      );

  }

  public mapRestCustomerToCustomer(restCustomer: RestCustomer): Customer {
    let customer: Customer = new Customer();
    if (restCustomer.name != "" && restCustomer.name != null) {
      let names: string[] = restCustomer.name.split(" ");
      if (names.length > 0) {
        customer.firstName = names[0];
      }
      if (names.length > 1) {
        customer.lastName = names[1];
      }
    }
    customer.id= restCustomer.id;
    customer.company = restCustomer.company;
    customer.email = restCustomer.email;
    return customer;
  }

  public mapCustomerToRestCustomer(customer: Customer): RestCustomer {
    let restCustomer: RestCustomer = new RestCustomer();
    restCustomer.name = customer.firstName + " " + customer.lastName;
    restCustomer.id= customer.id;
    restCustomer.company = customer.company;
    restCustomer.email = customer.email;
    restCustomer.phone = customer.phone;
    restCustomer.date = customer.date;
    return restCustomer;
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
     throw Error(
      'Error Something bad happened; please try again later.');
  };

}

import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";

@Injectable()
export class MessageService {

  private successMessageSource = new Subject<string>();
  private errorMessageSource = new Subject<string>();
  private warningMessageSource = new Subject<string>();

  successMessageAnnounced$ = this.successMessageSource.asObservable();
  errorMessageAnnounced$ = this.errorMessageSource.asObservable();
  warningMessageAnnounced$ = this.warningMessageSource.asObservable();

  announceSuccess(message: string) {
    console.log('success ogloszony', message);
    this.successMessageSource.next(message);
  }

  announceErrorr(message: string) {
    this.errorMessageSource.next(message);
  }

  announceWarning(message: string) {
    this.warningMessageSource.next(message);
  }


}

import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";

@Injectable()
export class MessageService {

  private handleInterval:any;
  private successMessageSource = new Subject<string>();
  private errorMessageSource = new Subject<string>();
  private warningMessageSource = new Subject<string>();

  successMessageAnnounced$ = this.successMessageSource.asObservable();
  errorMessageAnnounced$ = this.errorMessageSource.asObservable();
  warningMessageAnnounced$ = this.warningMessageSource.asObservable();

  announceSuccess(message: string) {
    this.successMessageSource.next(message);
    this.handleInterval = setTimeout(this.resetMessage, 3000, this.successMessageSource);
  }



  announceError(message: string) {
    this.errorMessageSource.next(message);
    this.handleInterval = setTimeout(this.resetMessage, 3000, this.errorMessageSource);
  }

  announceWarning(message: string) {
    this.warningMessageSource.next(message);
    this.handleInterval = setTimeout(this.resetMessage, 3000, this.warningMessageSource);
  }

  private resetMessage(subject:Subject<string>){
    subject.next("");
    clearInterval(this.handleInterval);
  }


}

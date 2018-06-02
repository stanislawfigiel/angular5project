import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from "../../service/MessageService";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-message-component',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit, OnDestroy {

  errorMessage:string;
  successMessage:string;
  warningMessage: string;
  successSubscription: Subscription;
  errorSubscription: Subscription;
  warningSubscription: Subscription;


  constructor(private messageService:MessageService) {
    this.successSubscription = this.messageService.successMessageAnnounced$.subscribe(
      message => {
        this.successMessage = message;

      });

    this.errorSubscription = this.messageService.errorMessageAnnounced$.subscribe(
      message => {
        this.errorMessage = message;

      });

    this.warningSubscription = this.messageService.warningMessageAnnounced$.subscribe(
      message => {
        this.warningMessage = message;

      });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.successSubscription.unsubscribe();
    this.errorSubscription.unsubscribe();
    this.warningSubscription.unsubscribe();

  }

}

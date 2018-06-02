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
  subscription: Subscription;

  constructor(private messageService:MessageService) {
    this.subscription = this.messageService.successMessageAnnounced$.subscribe(
      message => {
        this.successMessage = message;

      });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}

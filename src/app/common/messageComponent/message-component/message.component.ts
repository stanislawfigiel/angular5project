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
  successMessage:string='<no mission success announced>';
  subscription: Subscription;

  constructor(private messageService:MessageService) {
    this.subscription = this.messageService.successMessageAnnounced$.subscribe(
      message => {
        console.log("w komponencie message:", message);
        this.successMessage = message;

      });
  }

  ngOnInit() {
    this.errorMessage="jakis blad";
    this.messageService.announceSuccess("jaja");
    // this.successMessage = "success message";
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}

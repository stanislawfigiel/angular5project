import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-component',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  errorMessage:string;
  successMessage:string;

  constructor() { }

  ngOnInit() {
    this.errorMessage="jakis blad";
    this.successMessage = "success message";
  }

}

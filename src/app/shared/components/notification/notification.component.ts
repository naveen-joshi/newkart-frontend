import { Component, Input, OnInit } from '@angular/core';

export enum AlertType {
  Error = 'danger',
  Info = 'info',
  Success = 'success'
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Input() public type: AlertType;
  @Input() public message: string;

  constructor() { }

  ngOnInit(): void {
  }

}

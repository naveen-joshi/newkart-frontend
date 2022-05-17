import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  public notify = false;
  public message = 'Hello, I am toast';
  public type = 'success';
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.notify = true;
    }, 3000)
  }

}

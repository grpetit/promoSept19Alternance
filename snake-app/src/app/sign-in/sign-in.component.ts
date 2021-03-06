import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})


export class SignInComponent implements OnInit {
  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }


  signin() {
    console.log(this.userService.user)
    this.userService.signin()
  }
}

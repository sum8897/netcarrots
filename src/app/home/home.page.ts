import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

userDataAll:any;
result:any;
  constructor(public auth:AuthService,
              public router: Router,
              public user: UserService) {
             this.userDataAll= JSON.parse(localStorage.getItem('allData'));
             this.result=localStorage.getItem('result');
             console.log(this.userDataAll);
              }
  ngOnInit() {

  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


  constructor(public auth: AuthService,
    public router: Router,
    public user: UserService) { }
  ngOnInit() {

  }
  loginRes: any;
  loginData: any;
  loginallData: any;
  captchaCode: any;
  otp: any;
  oldOTP = "123456";

  submitData() {
    let user_data = {
      "MobileNo": "9900000000",
      "DeviceId": "Device001",
      "OSType": "iOS",
      "CaptchaCode": "",
      "OTP": "",
      "IsLoginFirst": "",
      "FCMToken": ""
    }
    this.user.present('wait...');
    this.auth.loginUser(user_data).subscribe((data) => {
      this.user.dismiss();
      this.loginRes = data;
      this.loginData = this.loginRes.UserLoginAPI;
      this.loginallData = this.loginData.Response;
      this.captchaCode = this.loginallData[0].CaptchaCode;
      this.otp = this.loginallData[0].OTPCode;
      localStorage.setItem('otp', this.otp);
      localStorage.setItem('allData', JSON.stringify(this.loginallData))
      localStorage.setItem('result', this.loginData.Result);
      console.log(this.captchaCode + " " + this.otp);

      if (this.otp == this.oldOTP) {
        this.router.navigateByUrl('/home');
      }
      else {
        alert('OTP did not match..')
      }
    }, err => {
      this.user.dismiss();
      alert(JSON.stringify(err));
    })
  }

  submitDataInput(loginForm: any) {
    console.log(loginForm.value.phone);
  }
}

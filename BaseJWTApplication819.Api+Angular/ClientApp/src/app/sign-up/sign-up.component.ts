import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { SignUpModel } from '../Models/sign-up.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private spinner: NgxSpinnerService,
    private notifier: NotifierService
  ) { }

  model = new SignUpModel();
  confirmPassword: string;

  register() {
    // this.spinner.show();
    this.notifier.notify('success', "OKEY");
    this.notifier.notify('error', "ERROR");
    
    console.log(this.model.FullName, this.model.Email, this.model.Password)
  }

  ngOnInit() {
  }

}

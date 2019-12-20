import { AppService } from './../app.service';
import { YourService } from './../your.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Route, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  listeUsers = [];
  diableButton = false;
  credential = {
    name: '',
    pass: ''
  }
  loginform: FormGroup
  constructor(private users: UserService, private notifier: NotifierService, private cookie: CookieService, private router: Router, private fb: FormBuilder, private yourservice: YourService, private appservice: AppService) { }

  ngOnInit() {

    this.loginform = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      pass: ['', Validators.compose([Validators.required, Validators.minLength(3)])]


    })

  }

  login() {
    let verifiedpassuser: boolean = false;
     let profil:string="";


        if (( this.credential.name=="farouk") && (this.credential.pass=="123")) {
          verifiedpassuser = true;
        }


      if (verifiedpassuser == true) {
        this.cookie.set('name', this.credential.name)
        this.cookie.set('profil',profil)

        this.yourservice.setBehaviorView({ user: this.credential });
        this.appservice.authenticate(this.cookie.get('name'), () => {
          this.router.navigate(["/dashboard"])

        });
      }
      else {
        this.notifier.notify("error", "login ou mot de passe incorrecte ")

      }

  }
}
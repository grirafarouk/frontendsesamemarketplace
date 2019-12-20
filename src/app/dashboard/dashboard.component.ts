import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private cokie:CookieService ,private  router:Router,private appservice:AppService) { }

  ngOnInit(): void {
    if(this.cokie.get('name').length >0){
          this.router.navigateByUrl("/dashboard")
          
        }
        
        else{
          this.router.navigateByUrl("/login")
        
        }
      }
      logout() {
        this.cokie.delete('name')
        this.appservice.setauthenticated(false)
        this.router.navigateByUrl("/login")
    
      }
}

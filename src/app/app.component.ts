import { Component } from '@angular/core';

import { AuthserviceService } from './services/authservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  constructor(private authService:AuthserviceService,private rout:Router)
  {

    var token= localStorage.getItem("token");
     alert(token+"   this is token")
     if(token!=undefined  && token.length>5)
     {
       this.rout.navigate(['/user']);;
     }
  }
  title = 'AngularWhee';
}

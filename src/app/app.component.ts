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
 debugger;
     var token= localStorage.getItem("token");
     var userData= localStorage.getItem("userData");
     alert(token+"   this is token"  +"  "+ userData);
     if(token!=undefined  && token.length>5)
     {
       this.authService.token=token;
       if(userData!=undefined )
       {
         this.authService.userRegisterData= JSON.parse( userData);
         alert("User Data Initialize "+JSON.stringify(  this.authService.userRegisterData));
       }
       this.rout.navigate(['/dashboard']);;
     }
     else
     {
      this.rout.navigate(['/user']);;
     }
  }
  title = 'AngularWhee';
}

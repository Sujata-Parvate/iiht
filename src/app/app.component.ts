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
     if(this.authService.token=="")
     {
       this.rout.navigate(['/', 'users']);;
     }
  }
  title = 'AngularWhee';
}

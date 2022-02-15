import { Component, OnInit } from '@angular/core';

import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor( public authoservice:AuthserviceService) { 

  }

  ngOnInit(): void {

  }

  StudentSignup(data:any)
  {
  console.warn(data);
  this.authoservice.SignUp(data).subscribe((result:any)=>{
    //console.log("json", result);
    this.authoservice.token= result.token;
    alert("student !!!"+this.authoservice.token);
    
} )
}
}

import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {

  constructor(public authoservice:AuthserviceService) { }

  ngOnInit(): void {
  }
  StudentRegistration(data:any)
  {
    debugger;
  console.log("abc", JSON.stringify(data));
  this.authoservice.StudentRegistration(data).subscribe((result:any)=>{
    this.authoservice.userRegisterData=result;

    localStorage.setItem("userData", JSON.stringify(  this.authoservice.userRegisterData));
    alert(JSON.stringify(result));
    
   } )
}

}

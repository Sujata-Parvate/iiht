import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {

  constructor(public authoservice:AuthserviceService) { }
  student_unique_id="";
  event_id="";
  student_name="";
  attemptnumber="";
  ngOnInit(): void {
  }
  StudentRegistration(data:any)
  {
    debugger;
  console.log("abc", JSON.stringify(data));
  this.authoservice.StudentRegistration(data).subscribe((result:any)=>{
       alert("Registration Done :-"+  JSON.stringify(result));
       this.authoservice.userModel.attemptid=result.attemptid;
       this.authoservice.userModel.student_name=this.student_name;
       this.authoservice.userModel.student_unique_id=this.student_unique_id;
       this.authoservice.event_id=this.event_id;
   } )
}

}

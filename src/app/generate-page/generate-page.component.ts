import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';

export interface PageTypes {
  value: string;
  display: string;
}
export interface Captureimages {
  value: string;
  display: string;
}

@Component({
  selector: 'app-generate-page',
  templateUrl: './generate-page.component.html',
  styleUrls: ['./generate-page.component.css']
})
export class GeneratePageComponent implements OnInit {
 
  PageTypes: PageTypes[] = [
    {value: 'env', display: 'env'},
    {value: 'approver', display:'approver'},
    {value: 'env-approver', display:'env-approver'},
    {value: 'train', display:'train'}
 ];
 Captureimages: Captureimages[] = [
  {value: 'candidate', display: 'candidate'},
  {value: 'idcard', display:'idcard'},
  {value: 'both', display:'both'}
 
];

student_unique_id:string="";
attemptnumber:number=0;
event_id:string="";
  constructor(public authoservice:AuthserviceService) { }

  ngOnInit(): void {
    if(this.authoservice.userModel.student_unique_id.length>0)
    {
       // document.getElementById("student_unique_id").;
       this.student_unique_id=this.authoservice.userModel.student_unique_id;
       this.attemptnumber=this.authoservice.userModel.attemptid;
       this.event_id=this.authoservice.event_id;
    }
  }
  str : string='';

  
  GetURL(data:any)
  {
    debugger;
  console.log("abc", JSON.stringify(data));
  this.authoservice.GeneratePageUrl(data).subscribe((result:any)=>{
    alert(JSON.stringify(result));
     this.str=result.attemptUrl;
     this.authoservice.userModel.attemptid=result.attemptId;
   
     window.open(this.str,"blank");
   } )
}


}

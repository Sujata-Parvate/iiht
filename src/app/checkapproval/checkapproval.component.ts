import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-checkapproval',
  templateUrl: './checkapproval.component.html',
  styleUrls: ['./checkapproval.component.css']
})
export class CheckapprovalComponent implements OnInit {

  constructor(public authoservice:AuthserviceService) { }

  ngOnInit(): void {
  }

  GetapproverStatus(data:any)
  {
    debugger;
  console.log("abc", JSON.stringify(data));
  this.authoservice.GetapproverStatus(data).subscribe((result:any)=>{
    alert(JSON.stringify(result));
     
   } )
}

}

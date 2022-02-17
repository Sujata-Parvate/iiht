import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-get-report',
  templateUrl: './get-report.component.html',
  styleUrls: ['./get-report.component.css']
})
export class GetReportComponent implements OnInit {

  constructor(public authoservice:AuthserviceService) { }

  ngOnInit(): void {
  }
  str : string='';
  GetReport(data:any)
  {
    debugger;
  console.log("abc", JSON.stringify(data));
  this.authoservice.GetReport(data).subscribe((result:any)=>{
    alert(JSON.stringify(result));
    this.str=result.reportUrl;
     window.open(this.str);
    
   } )
  }
}

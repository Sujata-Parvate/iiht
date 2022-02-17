import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-report-score',
  templateUrl: './report-score.component.html',
  styleUrls: ['./report-score.component.css']
})
export class ReportScoreComponent implements OnInit {

  constructor(public authoservice:AuthserviceService) { }

  ngOnInit(): void {
  }

  ReportScore(data:any)
  {
    debugger;
  console.log("abc", JSON.stringify(data));
  this.authoservice.ReportScore(data).subscribe((result:any)=>{
    alert(JSON.stringify(result));
   } )
}
}

import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-train-status',
  templateUrl: './train-status.component.html',
  styleUrls: ['./train-status.component.css']
})
export class TrainStatusComponent implements OnInit {

  constructor(public authoservice:AuthserviceService) { }

  ngOnInit(): void {
  }
 
  GetTrainStatus(data:any)
  {
    debugger;
  console.log("abc", JSON.stringify(data));
  this.authoservice.GetTrainStatus(data).subscribe((result:any)=>{
    alert(JSON.stringify(result));
    
   } )
  }
}

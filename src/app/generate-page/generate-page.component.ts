import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';


@Component({
  selector: 'app-generate-page',
  templateUrl: './generate-page.component.html',
  styleUrls: ['./generate-page.component.css']
})
export class GeneratePageComponent implements OnInit {

  constructor(public authoservice:AuthserviceService) { }

  ngOnInit(): void {
  }

  GetURL(data:any,method:any)
  {
  console.warn(data);
  this.authoservice.GeneratePageUrl(data,method).subscribe((result:any)=>{
    //console.log("json", result);
    alert(JSON.stringify(result));
    //localStorage.setItem("token",this.authoservice.token);
    
} )
}


}

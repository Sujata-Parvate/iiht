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
  str : string='';
  GetURL(data:any)
  {
    debugger;
  console.log("abc", JSON.stringify(data));
  this.authoservice.GeneratePageUrl(data).subscribe((result:any)=>{
    alert(JSON.stringify(result));
     this.str=result.attemptUrl;
     window.open(this.str);
    
    
    
} )
}


}

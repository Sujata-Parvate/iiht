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

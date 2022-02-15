import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  public token:string="";

  constructor(private http : HttpClient) {

   }

  // readonly BaseURL='https://servicew.wheebox.com/WheeboxRestService_blob/'
 // readonly BaseURL='https://servicew.wheebox.com/WheeboxRestService_blob/'

 readonly BaseURL='https://localhost:44317/api/'
   SignUp(data:any){
     debugger;
     let AuthHeader=new HttpHeaders();
     AuthHeader.append('Access-Control-Allow-Origin','*');
    return this.http.post("https://localhost:44317/api/UserToken",data,{headers:AuthHeader});
  }

 
   postApi(data:any,method:any){
     debugger;
     let AuthHeader=new HttpHeaders();
     AuthHeader.append('Access-Control-Allow-Origin','*');
     AuthHeader.append('Authrization',this.token);
    return this.http.post(this.BaseURL+"/"+method,data,{headers:AuthHeader});
  }

}


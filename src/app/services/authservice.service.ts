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
  readonly BaseURL='https://servicew.wheebox.com/WheeboxRestService_blob/'
   SignUp(data:any){
     debugger;
     let AuthHeader=new HttpHeaders();
     AuthHeader.append('Access-Control-Allow-Origin','*');
    return this.http.post("https://localhost:44317/api/UserToken",data,{headers:AuthHeader});
  }

}



import { AuthserviceService } from 'src/app/services/authservice.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserModel } from '../WheeboxUserModel';
declare function openIiht(): any; 
declare function connectionwsGet1(n:number): any; 
declare function startProctoringThread(n:number,b:boolean,b1:boolean  ,s:string,o:any): any; 
@Component({
  selector: 'app-wheeboxui',
  templateUrl: './wheeboxui.component.html',
  styleUrls: ['./wheeboxui.component.css']
})
export class WheeboxuiComponent implements OnInit  ,AfterViewInit
{
  constructor(private authService:AuthserviceService)
  {

  }

  ngAfterViewInit(): void {
    this.startClentLiveVideoStreaming();
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    
  }
  @ViewChild('open-room') open_room: ElementRef | undefined;
  udetail:UserModel=new UserModel();
  //{"student_unique_id":"amarmishra.demo3","student_name":"Amardeep Demo","attemptId":3088993};
  @ViewChild('fname') fname: ElementRef | undefined;
  @ViewChild('room-id') room_id: ElementRef | undefined;
  @ViewChild('key_sno') key_sno: ElementRef | undefined;

  


  

   startClentLiveVideoStreaming(){
    
    this.udetail= this.authService.userModel;
    alert(JSON.stringify(this.udetail));
    let key_sno=this.udetail.attemptid; 
    
   // this.fname?.nativeElement.
  //  document.getElementById("fname").value=udetail.student_name;
   // document.getElementById("room-id").value=key_sno;
   // document.getElementById("key_sno").value=key_sno;
     
    //document.getElementById("open-room").click();

    this.open_room?.nativeElement.click();

    key_sno=this.udetail.attemptid; 
    connectionwsGet1(3000);   //start chating thread now and getting chat messages from server.  
    startProctoringThread(5000,true,true,this.authService.token,this.udetail);  // This function needs to be called once when test starts.
    setTimeout(()=>{
      //alert("5000 completed");
      openIiht();
    },100);
   
  }

  takeSubjectiveDocumentPhoto_()
  {
     alert("Hii");
  }

  openClick()
  {
    //openIiht

    alert("click");
    openIiht();
  }


}

import { Component, OnInit } from '@angular/core';
import { AfterViewInit,ElementRef,ViewChild } from '@angular/core'; 
import { AuthserviceService } from 'src/app/services/authservice.service';
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
   setTimeout(()=>{
    this.startClentLiveVideoStreaming();
   },2000);
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    
  }
  @ViewChild('open-room') open_room: ElementRef | undefined;
  udetail={"student_unique_id":"amarmishra.demo3","student_name":"Amardeep Demo","attemptId":3088993};
  @ViewChild('fname') fname: ElementRef | undefined;
  @ViewChild('room-id') room_id: ElementRef | undefined;
  @ViewChild('key_sno') key_sno: ElementRef | undefined;

  


  

   startClentLiveVideoStreaming()
   {
      alert("Attempt Id "+this.udetail.attemptId);
      let key_sno=this.udetail.attemptId; 
    
      alert(this.authService.token+"   This is token" );
   // this.fname?.nativeElement.
  //  document.getElementById("fname").value=udetail.student_name;
   // document.getElementById("room-id").value=key_sno;
   // document.getElementById("key_sno").value=key_sno;
     
    //document.getElementById("open-room").click();

        this.open_room?.nativeElement.click();

        key_sno=this.udetail.attemptId; 
        connectionwsGet1(3000);   //start chating thread now and getting chat messages from server.  
        startProctoringThread(5000,true,true,
        //'ea82252a-4df9-4bcb-be50-b88cbd7a36b8',
        this.authService.token,
        this.udetail);  // This function needs to be called once when test starts.
   
   
  }

  takeSubjectiveDocumentPhoto_()
  {
     alert("Hii");
  }

  openClick()
  {
    //openIiht

    alert("click");
    //openIiht();
  }


}

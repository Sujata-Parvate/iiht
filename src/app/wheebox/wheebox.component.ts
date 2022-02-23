import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
declare function startClentLiveVideoStreamingWithUser(udetail:any,token:string): any; 
declare function stopTest():any;
declare function stopcamera():any;
declare function checkOverAllReport():any;
declare function showchatboxFromCompenent():any;
declare function hidechatboxFromCompenent():any;
declare function showCameraIcon():any;
declare function hideCameraIcon():any;
declare function startCapuringImageFromAngular():any;
@Component({
  selector: 'app-wheebox',
  templateUrl: './wheebox.component.html',
  styleUrls: ['./wheebox.component.css']
})
export class WheeboxComponent   implements OnInit,AfterViewInit,OnDestroy {
  constructor(private authService:AuthserviceService)
  {
    //alert("app component loaded");
    //startClentLiveVideoStreaming();
  }
 
  startProctoring()
  {

    let  udetail=this.authService.userRegisterData;
    //{"student_unique_id":"dilip200","student_name":"dilip pakhare","attemptId":4876497};
    startClentLiveVideoStreamingWithUser(udetail,this.authService.token);
  }
  stop()
  {
    stopTest();
  }
  stopcam()
  {
    stopcamera();
  }
  overallProctoringReport()
  {
    checkOverAllReport();
  }
  showChatWindow()
  {
    showchatboxFromCompenent();
  }
  hideChatWindow()
  {
    hidechatboxFromCompenent();
  }
  startCapuringPhoto()
  {
    startCapuringImageFromAngular();
  }

  ngAfterViewInit(): void {
   // startClentLiveVideoStreaming();
   setTimeout(()=>{
     showCameraIcon();
   },5000);
  
  }
  ngOnInit(): void 
  {
   
  }
  ngOnDestroy(): void {
    hideCameraIcon();
    stopTest();
    stopcamera();
  }

  @HostListener('window:wheebox.proctor', ['$event']) 
  onProctorRes(event:any): void {
   alert("In Component .ts "+event.detail);
  }


} 
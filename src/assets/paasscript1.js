/**
 * ref path : https://statiswheebox.z29.web.core.windows.net/wet/assest/paas/paasscript1.js
 * line number 56
 */
function aadharrBreak(id){
	   var tempIDStore=id;
	   try{
		   var n = tempIDStore.length;
		   if(n == 12){
			   tempIDStore= tempIDStore.substring(7, n  -0);
			   tempIDStore="***"+tempIDStore;
		   }         
	   }catch (e) {//alert(e);
		// TODO: handle exception
	}
	   return tempIDStore;
	   
}


	  var internetstatus= true;
	  var facecheck= true;
	  var objectcheck= true;
	  var mtoff= true;
	  var noface= true;
	  var pausestatus= true;
	  var forcesubmit= true;
	  var apiresponsemessage="";
      var noicedetect=true;
    var fromenterkey=false;
	$('#msg').keyup(function(e) {
	try{
		
		if (wsGet1 != null) {
            if (wsGet1.readyState === 1){
            	if (e.keyCode == 13) {
        			if($("#msg").val().trim()!=""){
        				 
        			fromenterkey=true;        			
         			var urlforsaveChats2="Chatprocess.obj?key_sno="+key_sno;
         			console.log("urlforsaveChats2="+urlforsaveChats2);
        			saveChats2("insert"); 
        			console.log("Enter pressed. sending request.");
        			}else{
        		    console.log("Enter pressed. message blank.");		
        		    $("#msg").val('');
        			}
        		}else{
        			fromenterkey=false;
        		}
            }else{ 
            	console.log("wsGet1.readyState not 1");
            }
		}else{
			console.log("wsGet1 is null");
		}
	}catch(e){
		console.log(e);
	}
		 
		
		
		
		
	}); 
   
	 var key_sno;
	function saveChats2(urlActive) {
		var userwheeboxID="";
		   
		try{ 
			var uName = $("#chatid").val();
			var fname=$("#fname").val();
			 
			if(document.getElementById("showchat").style.display=="none"){
				 $("#chatHeader").html("Chat Box ("+fname+") <div id='MPicone' style='float:right' >+</div> ");
			 }else{
				 $("#chatHeader").html("Chat Box ("+fname+") <div id='MPicone' style='float:right' >-</div> ");
			 }
			 
			var msg = $("#msg").val();   
			
			if(urlActive=="insert"){ 
				$("#msg").val('');  
			}
			//$("#msg").val('');
		 	 var aadhaar="";
		 	
		 	   
			var dataMap = {"uName": (userwheeboxID)+"", "msg": (msg), "colorCode": "red","type": "chat","url": "/"+key_sno+"ws1/","random": Math.random(),"id": aadhaar,"key_sno": key_sno,"fname": fname,"sendto": userwheeboxID,"proctorID": "","subtype": "user","secoundUrl": "/"+key_sno+"ws2/","action": urlActive};
			    
			 // alert(dataMap.toString());  
			//var dataMap = {"uName": "","msg": "","colorCode":"","type":"chat","url":"/"+userwheeboxID+"ws1/","random":Math.random(),"id":"","key_sno":"","fname":""};
			        
			      
			//alert(dataMap);
			sendGet1(dataMap);
			   
			return false;   
		}catch(e){ 
		console.log("Error saveChats2 fun: "+e); 	
		}
		 
	}
	
	
	var width = 320;    // We will scale the photo width to this
	var height = 240;     // This will be computed based on the input stream
	var PliveStreaminCameraStatus=false;      
	 
	function takepicture() {
		PliveStreaminCameraStatus=true;
	     try{
	    var context = canvas.getContext('2d');

	       canvas.width = width;  
	       canvas.height = height;
	    	// var percentage = 0.8; 
	    	 context.drawImage(video, 0, 0, width, height); 
	    	 var data = canvas.toDataURL('image/jpeg');
	         //photo.setAttribute('src', data);  
	         PliveStreaminCameraStatus=true;  
	     }catch(e){     
	    	 data="";    
	    	 console.log(e);
             apiresponsemessage="blank image";
	     }   
	        
	      return data; 
	    
	  }
	
	function sendImagetoserver(urlActive,facerec_required,objectdetction_required,token,userdetail) {
		
		//var udetail={"student_unique_id":"amarapi@harbinger.com","student_name":"amardeep","attemptId":6431};

		var userwheeboxID="";
		   
		try{ 
			
			var fname=userdetail.student_name;		 
			var msg = takepicture();   
		 	var aadhaar="";
		 	key_sno=userdetail.attemptId;
		 	//attemptId
			var student_unique_id=userdetail.student_unique_id;
			var event_id="";
			var attemptnumber="";

			var dataMap = {"uName": (userwheeboxID)+"", "msg": (msg), "colorCode": token+","+facerec_required+","+objectdetction_required,"type": "chat","url": "/"+key_sno+"ws1/",
					      "random": Math.random(),"id": aadhaar,"key_sno": key_sno,"fname": fname,"sendto": userwheeboxID,"proctorID": "",
					      "subtype": "user","secoundUrl": "/"+key_sno+"ws2/","action": "processPaasImage","student_unique_id":student_unique_id,
					      "event_id":event_id,"attemptnumber":attemptnumber};
			    
			 // alert(dataMap.toString());  ,"frcheck":facerec_required,"sodf":objectdetction_required
			//var dataMap = {"uName": "","msg": "","colorCode":"","type":"chat","url":"/"+userwheeboxID+"ws1/","random":Math.random(),"id":"","key_sno":"","fname":""};
			        
			  // console.log(dataMap);   
			//alert(dataMap);
			if(msg!=""){
			sendGet1(dataMap);				
			}else{
				apiresponsemessage="blank image";
			}
			   
			return false;   
		}catch(e){ 
		console.log("Error saveChats2 fun: "+e); 	
		}
		 
	}
	
	
	
	var startProctoringThreadinterval;
	function startProctoringThread(interval,facerec_required,objectdetction_required,token,userdetail){
		startProctoringThreadinterval=setInterval(function(){sendImagetoserver("captureImage",facerec_required,objectdetction_required,token,userdetail);},interval); 
	}
	
	function stopProctoringThread(){
		clearInterval(startProctoringThreadinterval);	
	}
	
	
	
	$( "#chatHeader" ).click(function() {//alert(""); 
  $( "#showchat" ).toggle();
  
  if(document.getElementById("showchat").style.display=="none"){
		 $("#MPicone").html("+"); 
	 }else{
		 $("#MPicone").html("-");
		     
		 chatNotification=0; 
		 msgReader();  
		 $("#nmag").html("");  
		 
	 }   
  
  
}); 

	 var chatNotification=0; 
	 var isPaused=false; 
	 var STestPauseByProctor =false;
function responseOfChat(response){
	//console.log("responseOfChat called : "+response);
	var passresponse=response;
	chatNotification=0;
	console.log("responseOfChat called : "+response);
	try{   
		response = decodeURIComponent(response);
		  response=response.replace(/&#32;/g, ' ').replace(/&quote;/g, '"');
		  // alert(response);  
		   
		  if(response=="startnowlivefeed" || response=="stopnowlivefeed"){
				//console.log("Livefeed status: "+response);   
				try{ 
					if(response=="startnowlivefeed"){startClentLiveVideoStreaming()}
				}catch(e){ 
					 
				}
				document.getElementById("livefeedstatus").innerHTML=response;
			}else if(response=="sma"){
					 
				 }else{	  
		  try{
			  response=JSON.parse(response);
			}catch(e){  
				response=JSON.stringify(response);   					
			} 
			
		var resultJson = response; 
		var jsonCount=Object.keys(resultJson).length; 
		if (typeof resultJson["chatNotification"] == 'undefined') {
				  confifurevariables(passresponse);
	 			   start_aud();
				  return false;
        }

		$("#chat-area").html("");
		for(var i=1;i < jsonCount;i++){ 
			 try{
				 var responseSingle=JSON.parse(resultJson["data"+i]); 
				 console.log("response: "+responseSingle["message"]);
				 var chatDiv="";   
				 if(responseSingle["type"]=="user"){  
					 chatDiv="<table style='width:88%;border-collapse:unset;border-spacing:10px;' align='left'><tr><td align='right'><img src='https://statiswheebox.z29.web.core.windows.net/wet1-wbox/assest/images/icon_user.jpg' style='width:30px'></td><td style='background:#eeeeee;padding:5px !important;border-radius: 7px;'><table style='width:100%'><tr><td><b>"+responseSingle["name"]+"</b></td><td align='right'><b>"+responseSingle["chatTime"]+"</b></td></tr> <td><div>"+responseSingle["message"]+"</div></td></tr></table> </td></tr></table>";
				 }else{    
					
					   chatDiv="<table style='width:88%;border-collapse:unset;border-spacing:10px;' align='right'><tr><td align='right'><img src='https://statiswheebox.z29.web.core.windows.net/wet1-wbox/assest/images/icon_admin.png' style='width:30px'></td><td style='background:#00b0f0;padding:5px !important;border-radius: 7px;color:white;'><table style='width:100%'><tr><td><b>"+responseSingle["name"]+"</b></td><td align='right'><b>"+responseSingle["chatTime"]+"</b></td></tr> <td><div>"+responseSingle["message"]+"</div></td></tr></table> </td></tr></table>";
						 	 
				 }                         
				 msgtemp=responseSingle["message"];         
				 $("#chat-area").append(chatDiv);   
			 }catch(e){
				 
			 }     
		}
		
		
		console.log("resultJson[chatNotification]: "+resultJson["chatNotification"])
		if(resultJson["chatNotification"]!="0"){ 
			$("#nmag").html("<p class='noti_bubble'>"+resultJson["chatNotification"]+"</p>");
		}
		
		
		//var data = resultJson["msg"];
		 //console.log(data); 
 if(resultJson["testStatus"]=="pause"){
	 
		 if(!STestPauseByProctor){ 		 
		 try{totalwarningcounter++;
		 var pausedbyproctorcounter = parseInt(pausedbyproctor.value) + 1;
		 pausedbyproctor.value = pausedbyproctorcounter;	  
		  }catch(e){}
		 }
	 
	 //console.log("Your test is paused by proctor.");
	 STestPauseByProctor=true;
	 pausestatus=true;
	 //proctorAction(true,false);
	 isPaused=false; 
 }else if(resultJson["testStatus"]=="submit"){
	// hideall("Your test is submitted by proctor.");
	 submitbyproctor();
	 STestSubmittedByProctor=true;
 }else{  
	 //proctorAction(false,false);
	 pausestatus=false;
	 STestPauseByProctor=false;
	 if(isPaused)  
		 showAllinner();
 }
    /*var chatTime=data.split("|||||")[2];  
	document.getElementById("msgReader").value=chatTime;
	if(chatTime!=""){   
		
		var tempw=chatTime.split("@@");  */
		 
		
		if(document.getElementById("showchat").style.display=='none'){
			//var msgtemp=data.split("|||||")[2].split("##")[2];
			//msgtemp=msgtemp.split("@@")[0]; 
			var msglength = msgtemp.length;
			if(msglength>250)
				{
				msgtemp = msgtemp.substring(0, 249);
				msgtemp=msgtemp+"...";
				} 
			//parent.swal("Chat Message From Proctor !!",""+msgtemp,"warning");
			try{            
				//chatNotification=(tempw.length)-1;
				//$("#nmag").html("<p class='noti_bubble'>"+chatNotification+"</p>");	
			}catch (e) {
				// TODO: handle exception
			} 
			    
			//msgReader();         
			//$("#nmag").html("<p class='noti_bubble'>"+(tempw.length-1)+"</p>");	
		}else{             
			msgReader();           
			$("#nmag").html("");
		}
		  
	/*}else{ 
		$("#nmag").html("");
	}  */ 

	//$("#chat-area").html(data.split("|||||")[0]); 
	//totalmessage=data.split("|||||")[0].length;
	document.getElementById('chat-area').scrollTop = document.getElementById('chat-area').scrollHeight;
	try{
		if(document.getElementById("chat-area").innerHTML==""){   
			document.getElementById("chat-area").innerHTML="<div style='color: gray;'> No chat history found.</div>";
		}else{  
			//msgReader(document.getElementById("sendto").value);  
		} 
	}catch(e){
		
	}
		
			//console.log("sending request on Sucess");
	}
 }catch(e){
 	//alert("error1 >>"+e);
	 confifurevariables(passresponse);
	 start_aud();
 	//console.log("error1 >>"+e);
}  
	
}	
	function confifurevariables(responeses){
	//	console.log("confifurevariables called : " + responeses);
		noface=true;
		mtoff=true;
		facecheck=true;
		objectcheck=true;
		apiresponsemessage=responeses;
		if(responeses=="NFF") {  
			noface=false;
			//console.log("IN nff called : " + noface);
		}else if(responeses=="MTOFF") {
			mtoff=false;
		}else if(responeses=="notstraight") {
		}else if(responeses=="FNM") {
			facecheck=false;
		}else if(responeses=="SODF") {
			objectcheck=false;
		}
			
		try{
			responseOfProcessedImages(internetstatus,facecheck,objectcheck,mtoff,noface);
		}catch(e){}
		//console.log(checkOverallProctoringStatus()	); 
	}
function checkOverallProctoringStatus()	
{
	
		return   {"internetstatus": internetstatus,
		  "facecheck": facecheck,
		  "objectcheck": objectcheck,
		  "mtoff": mtoff,
		  "noface": noface,
		  "pausestatus": pausestatus,
		  "forcesubmit": forcesubmit,
		  "message" : apiresponsemessage,
          "noicedetect" : noicedetect} ; 
		

}
	
function msgReader(){
	//console.log("msgReader called");
	
	//if(document.getElementById("msgReader").value!=""){
//		alert("ok"+document.getElementById("msgReader").value);
		try{    
			var dataMap = {"data": document.getElementById("msgReader").value+""};
			 var urlTyping="data="+encodeURIComponent(document.getElementById("msgReader").value);
			 
			$.ajax( {  
				type: "POST",
				  url : "updateRead.obj?id=1212&key_sno="+key_sno+"&random="+Math.random()+"&"+urlTyping,   
				   /*  contentType: "application/json; charset=utf-8", 
				    dataType: "json",  
				    data: JSON.stringify(dataMap),     */
			timeout: 21000, 
			error : function(xhr, ajaxOptions, thrownError) {
				return false; 
			},         
			success : function(data) { 
			}     
		}); 
		}catch(e){	alert("error >>"+e);}
	/*}else{ 
	}*/
}
 
function submitbyproctor(){
try{
	//console.log("forced submission by proctor.");
	forcesubmit=true;
	//proctorAction(false,true);
}catch(e){}
    
}


function testImagedonechat()
{	 
	var submitBy="submitbyproctor";
	document.getElementById('submitBy').value=submitBy; 
   	
	autosubmit=true;
	if(myAutoSubmit){
		 
		testImage();
      	myAutoSubmit = false;
	}
	 return true ;
}


 $(function() {
	    
	  $("#streaming-camera-circle").click(function() {    
	    $("#streaming-camera-circle").toggle('scale');
	    $(".streaming-box").toggle('scale');
	  })
	  
	  $(".streaming-box-toggle").click(function() {
	    $("#streaming-camera-circle").toggle('scale');
	    $(".streaming-box").toggle('scale');
	  })
	  
	})
	
	
	
	
	
	function hidechatbox(){
	 $("#chatBoxMainDiv").hide();
     }
	
	function showchatbox(){
	 $("#chatBoxMainDiv").show();
  }
function stopcamera(){
	window.cancelAnimationFrame(rafID_meter);  
	//audioContext_meter.close(); 
	mailsstream.getTracks().forEach(function(track) { track.stop(); }) 
	try{stopProctoringThread();}catch(e){}
	
	connection.getAllParticipants().forEach(function(pid) {
        connection.disconnectWith(pid);
    });

    // stop all local cameras
    connection.attachStreams.forEach(function(localStream) {
        localStream.stop();
    });

    // close socket.io connection
    connection.closeSocket();  
	
}
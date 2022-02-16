 /**
 * ref path : https://statiswheebox.z29.web.core.windows.net/wet/assest/paas/userChat.js
 */                
    //start first step to send a msg
         var wssURL= document.getElementById("chatURL").innerHTML;
    var wsGet1;  

    var keySNO;
     
    var th1; 
    function ConnectingGet1(time){
    	clearTimeout(th1);  
    	th1=setTimeout(function() {
    		connectionwsGet1();   
    		}, time);  
    }  
      
       
    function connectionwsGet1(){
		 
        if(wssURL==undefined)
        {
            wssURL="wss://akschat.wheebox.com";
        }
	    if ('WebSocket' in window) 
        { 
	    	var key_sno=document.getElementById("key_sno").value;

            if(key_sno!=undefined)
	    	  connectWS1(wssURL+''+key_sno+'ws1/');
	    	console.log('key_sno: '+key_sno);  
	    }else{  
	        console.log('web sockets not suported');                       
	    }       
    }
    
    function connectWS1(host) {
    	wsGet1 = new WebSocket(host);
    	wsGet1.onopen = function () {
            console.log('connected: Sender');
            ConnectingGet2(500);
           // ConnectingGet1(5000);       
            //saveChats2("select");  
        }    
                       
        wsGet1.onclose = function () {
        	ConnectingGet1(2000); 
            console.log('closed');
        }
            
        wsGet1.onerror = function(evt) {
            console.log('<span style="color: red;">ERROR:</span> ' + evt.data);
            internetstatus=false;
        }
    } 
               
    function sendGet1(msg) {
        if (wsGet1 != null) {
            if (wsGet1.readyState === 1){ 
            	   
            	//var oldMsg=document.getElementById("log").innerHTML;       
             	//document.getElementById("log").innerHTML=oldMsg+"<br/>"+msg;       
             	//var dataMap = {"msg": msg, "url": "/"+userwheeboxID+"ws1/","type":"chat"};
             	  //console.log('send....user chat....'+JSON.stringify(msg));   
                wsGet1.send(JSON.stringify(msg));  
                //ConnectingGet1(5000);      
            }           
        } else {  
        	ConnectingGet1(2000);      
            console.log('not ready yet');
        }
    }
      
    //start first step to recive a msg
               
    //ConnectingGet2(5000);  
    var th2;
    function ConnectingGet2(time){
    	clearTimeout(th2);  
    	th2=setTimeout(function() {
    		connectionwsGet2();   
    		 //console.log('time: '+time);    
    		
    		}, time);  
    }     
    
    function connectionwsGet2(){
	var wsGet2;
	    if ('WebSocket' in window) { 
	    	var key_sno=document.getElementById("key_sno").value;
	           
            if(wssURL==undefined)
            {
                wssURL="wss://akschat.wheebox.com";
            }
	    	connectWS2(wssURL+''+key_sno+'ws1/');	   
	    	//console.log('key_sno: '+key_sno);  
	    }else{   
	        console.log('web sockets not suported');                       
	    }              
    }
            
    function connectWS2(host){  
    	wsGet2 = new WebSocket(host);
    	wsGet2.onopen = function () {
            //console.log('connected: Reciver');
            saveChats2("select");   
           // ConnectingGet2(5000);
        }    
                       
    	wsGet2.onmessage = function (evt) {  
            try{  //console.log("------------"+evt.data);  
            	if (evt.data != null) {
                  try{          
                	  if(evt.data!=""){     
                	  //console.log("Data Recived.");
                	  //var oldMsg=document.getElementById("log").innerHTML;       
                	  //document.getElementById("log").innerHTML=oldMsg+"<br/>"+evt.data;    
                	  //  console.log("evt.data : "+evt.data);
                	  responseOfChat(evt.data)
                	  }           
                	  //ConnectingGet2(5000);
                  }catch (e) {alert(e);}   
              	
            	}             
            }catch (e) {alert(e);}
        }
        
        wsGet2.onclose = function () {  
            console.log('closed'); 
            ConnectingGet2(2000) 
        }
          
        
        wsGet2.onerror = function(evt) {
            console.log('<span style="color: red;">ERROR:</span> ' + evt.data);
            internetstatus=false;
        }
    }
    
          
/**
 * ref path : https://statiswheebox.z29.web.core.windows.net/wet/assest/paas/detectnoise.js
 */

 var audioContext_meter = null;
 var meter_vol = null;

 var rafID_meter = null;
 var start_audstarted=true;
 var mediaStreamSource = null;
var foundtalking=false; 
 function createAudioMeter(audioContext_meter,clipLevel,averaging,clipLag) {
     var processor = audioContext_meter.createScriptProcessor(512);
     processor.onaudioprocess = volumeAudioProcess;
     processor.clipping = false;
     processor.lastClip = 0;
     processor.volume = 0;
     processor.clipLevel = clipLevel || 0.98;
     processor.averaging = averaging || 0.95;
     processor.clipLag = clipLag || 750;

     // this will have no effect, since we don't copy the input to the output,
     // but works around a current Chrome bug.
     processor.connect(audioContext_meter.destination);

     processor.checkClipping =
         function(){
             if (!this.clipping)
                 return false;
             if ((this.lastClip + this.clipLag) < window.performance.now())
                 this.clipping = false;
             return this.clipping;
         };

     processor.shutdown =
         function(){
             this.disconnect();
             this.onaudioprocess = null;
         };

     return processor;
 }

 function volumeAudioProcess( event ) {
     var buf = event.inputBuffer.getChannelData(0);
     var bufLength = buf.length;
     var sum = 0;
     var x;

     // Do a root-mean-square on the samples: sum up the squares...
     for (var i=0; i<bufLength; i++) {
         x = buf[i];
         if (Math.abs(x)>=this.clipLevel) {
             this.clipping = true;
             this.lastClip = window.performance.now();
         }
         sum += x * x;
     }

     // ... then take the square root of the sum.
     var rms =  Math.sqrt(sum / bufLength);

     // Now smooth this out with the averaging factor applied
     // to the previous sample - take the max here because we
     // want "fast attack, slow release."
     this.volume = Math.max(rms, this.volume*this.averaging);
 }

 
 function start_aud(){
 if(start_audstarted){
     try{
         
     navigator.getUserMedia({audio: true}, start_aud1, function(e) {
           __log('No live audio input: ' + e); 
         });
     }catch(e){start_aud1();}
     }
     
     start_audstarted=false;
     }
 //window.onload = function() {
function start_aud1(){
     // grab our canvas
     //canvasContext = document.getElementById( "meter" ).getContext("2d");
     
     // monkeypatch Web Audio
     window.AudioContext = window.AudioContext || window.webkitAudioContext;
     
     // grab an audio context
     audioContext_meter = new AudioContext();

     // Attempt to get audio input
     try {
         // monkeypatch getUserMedia
         navigator.getUserMedia = 
             navigator.getUserMedia ||
             navigator.webkitGetUserMedia ||
             navigator.mozGetUserMedia;

         // ask for an audio input
         navigator.getUserMedia(
         {
             "audio": {
                 "mandatory": {
                     "googEchoCancellation": "false",
                     "googAutoGainControl": "false",
                     "googNoiseSuppression": "false",
                     "googHighpassFilter": "false"
                 },
                 "optional": []
             },
         }, gotStream, didntGetStream);
     } catch (e) {
         alert('getUserMedia threw exception :' + e);
     }

 }


 function didntGetStream() {
     alert('Stream generation failed.');
 }

var mailsstream;

 function gotStream(stream) {
     // Create an AudioNode from the stream.
mailsstream=stream; 
     mediaStreamSource = audioContext_meter.createMediaStreamSource(stream);

     // Create a new volume meter and connect it.
     meter_vol = createAudioMeter(audioContext_meter);
     mediaStreamSource.connect(meter_vol);

     // kick off the visual updating
     drawLoop();
 }

 function drawLoop( time ) {
     
     var volumelevel=meter_vol.volume;
     if(volumelevel > 0.30){
     audioFound=true;	
     foundtalking=true; 
     
   noicedetect=false;
     }else{
   noicedetect=true;	 
     }
     
         
     // set up the next visual callback
     rafID_meter = window.requestAnimationFrame( drawLoop );
 }
 
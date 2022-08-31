window.onload = function () {
  
    var seconds = 00; 
    var mins = 00; 
    var showmins = document.getElementById("mins")
    var showsecs = document.getElementById("seconds")
    var buttonstart = document.getElementById('button-start');
    var buttonstop = document.getElementById('button-stop');
    var buttonreset = document.getElementById('button-reset');
    var interval ;
  
    buttonstart.onclick = function() {
      
      clearInterval(interval);
       interval = setInterval(startTimer, 10);
    }
    
      buttonstop.onclick = function() {
         clearInterval(interval);
    }
    
  
    buttonreset.onclick = function() {
       clearInterval(interval);
      mins = "00";
        seconds = "00";
      showmins.innerHTML = mins;
        showsecs.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
      mins++; 
      
      if(mins <= 9){
        showmins.innerHTML = "0" + mins;
      }
      
      if (mins > 9){
        showmins.innerHTML = mins;
        
      } 
      
      if (mins > 99) {
        console.log("seconds");
        seconds++;
        showsecs.innerHTML = "0" + seconds;
        mins = 0;
        showmins.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        showsecs.innerHTML = seconds;
      }
    
    }
    
  
  }    
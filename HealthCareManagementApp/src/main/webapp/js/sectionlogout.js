 $(function() {

var IDLE_TIMEOUT = 180; //seconds
var _localStorageKey = 'global_countdown_last_reset_timestamp';
var _idleSecondsTimer = null;
var _lastResetTimeStamp = (new Date()).getTime();
var _localStorage = null;

AttachEvent(document, 'click', ResetTime);
AttachEvent(document, 'mousemove', ResetTime);
AttachEvent(document, 'keypress', ResetTime);
AttachEvent(window, 'load', ResetTime);

try {
    _localStorage = window.localStorage;
}
catch (ex) {
}

_idleSecondsTimer = window.setInterval(CheckIdleTime, 1000);

function GetLastResetTimeStamp() {
    var lastResetTimeStamp = 0;
    if (_localStorage) {
        lastResetTimeStamp = parseInt(_localStorage[_localStorageKey], 10);
        if (isNaN(lastResetTimeStamp) || lastResetTimeStamp < 0)
            lastResetTimeStamp = (new Date()).getTime();
    } else {
        lastResetTimeStamp = _lastResetTimeStamp;
    }
       
    return lastResetTimeStamp;
}

function SetLastResetTimeStamp(timeStamp) {
    if (_localStorage) {
        _localStorage[_localStorageKey] = timeStamp;
    } else {
        _lastResetTimeStamp = timeStamp;
    }
}

function ResetTime() {
    SetLastResetTimeStamp((new Date()).getTime());
}

function AttachEvent(element, eventName, eventHandler) {
    if (element.addEventListener) {
        element.addEventListener(eventName, eventHandler, false);
        return true;
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, eventHandler);
        return true;
    } else {
        //nothing to do, browser too old or non standard anyway
        return false;
    }
}

function WriteProgress(msg) {
    var oPanel = document.getElementById("SecondsUntilExpire");
    if (oPanel)
         oPanel.innerHTML = msg;
    else if (console)
        console.log(msg);
}

function CheckIdleTime() {
    var currentTimeStamp = (new Date()).getTime();
    var lastResetTimeStamp = GetLastResetTimeStamp();
    var secondsDiff = Math.floor((currentTimeStamp - lastResetTimeStamp) / 1000);
    if (secondsDiff <= 0) {
        ResetTime();
        secondsDiff = 0;
    }
    WriteProgress((IDLE_TIMEOUT - secondsDiff) + "");
    if (secondsDiff >= IDLE_TIMEOUT) {
        window.clearInterval(_idleSecondsTimer);
        ResetTime();
     //   alert("Time expired!");
		logout();
         // document.getElementById("data_msg").innerHTML =data.message;
		//	$('#onload').modal('show');
       //   document.location.href = "login.html";
    }
}
 }); 
 
 function logout() {
	 var cheeck =  localStorage.getItem('mainroleid');
	 	var token = localStorage.getItem('tokens');
   if(cheeck == 3){
	//   alert("nursse");
	var adminlogout = {
			"nurseId": localStorage.getItem('nurseid')
		}
		console.log(adminlogout);
		$.ajax({
		type: "POST",
		
		url: "https://" + host + "/secure/Nurse/logout",
		'data': JSON.stringify(adminlogout),
		Accept: "application/json, text/plain",
		contentType: "application/json; charset=latin1",
		crossDomain: true,
		beforeSend: function(xhr) {
			  xhr.setRequestHeader( 'Authorization', token );
		},
	
		success: function(data) {
			console.log(data);
	document.getElementById("data_msg").innerHTML = "Session logout! Your session has been expired! please login.";
				                   $('#onload').modal('show');
								  $('.modal-backdrop').css('background-color','initial');  
	  setTimeout(function(){ window.location="login.html" }, 3000);    
	/* 	  $("#onload").modal("show", function(){
			  document.getElementById("data_msg").innerHTML = "Your session has been expired !";
			  $('.fade .in').addClass('blue');
			  	 $(this).modal('opacity','1');
		// $('.fade').css('opacity','1');
		// $('.fade .in').addClass('blue');
			
		  }); */
			
			if(data.message == "You are successfully logged out") {
			//	setTimeout(function() {window.location = "login.html"}, 3000);
				
			} else {
			setTimeout(function(){ $('#onload').modal('hide')}, 3000);  
			}
			
		},
		
		
		
		error: function(data, textStatus, jqXHR) {
		if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
		}
	});
		
		
	 }else{
		 
		//  alert("provider");
		 var adminlogout = {
			"providerId": localStorage.getItem('providerid')
		}
		console.log(adminlogout);
		$.ajax({
		type: "POST",
		
		url: "https://" + host + "/secure/providerUser/logout",
		'data': JSON.stringify(adminlogout),
		Accept: "application/json, text/plain",
		contentType: "application/json; charset=latin1",
		crossDomain: true,
		beforeSend: function(xhr) {
			  xhr.setRequestHeader( 'Authorization', token );
		},
		success: function(data) {
			console.log(data);
		document.getElementById("data_msg").innerHTML = "Session logout! Your session has been expired! please login.";
				                   $('#onload').modal('show');
								  $('.modal-backdrop').css('background-color','initial');  
	  setTimeout(function(){ window.location="login.html" }, 3000);   
			
			if(data.message == "You are successfully logged out") {
			//	setTimeout(function() {window.location = "login.html"}, 3000);
				
			} else {
			setTimeout(function(){ $('#onload').modal('hide')}, 3000);  
			}
			
		},
		error: function(data, textStatus, jqXHR) {
		if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
		}       
			}
	});
	
	 }
	
	localStorage.clear();
}
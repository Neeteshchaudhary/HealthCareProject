/* $(document).ready(function(){
				
			 $("#password_forget").click(function(){
				
				var log_mail = document.getElementById("fname").value;
  if (log_mail == "")
  {
document.getElementById("err").innerHTML= "Please enter your Email Id";
return false;
  }
  
 var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   if (!filter.test(fname.value)) {
	 document.getElementById("err").innerHTML= "Please provide a valid email Id";
   // alert('Please provide a valid email address');
    fname.focus;
    return false;
 }
  document.getElementById("err").innerHTML= "";
		forget_myFunc();
			
			  });
			
		});	 */
	
 function validateForm() {
       
      	var for_mail = document.getElementById("fname").value;
        if (for_mail == "")
        {
      document.getElementById("err").innerHTML= "Please enter your Email Id";
      return false;
        }
		
 var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   if (!filter.test(fname.value)) {
	 document.getElementById("err").innerHTML= "Please provide a valid email Id";
   // alert('Please provide a valid email address');
    fname.focus;
    return false;
 }

 document.getElementById("err").innerHTML= "";
  	
     forget_myFunc();
  return false; 
      }  
		
		
function forget_myFunc() {
	
			 
         var log_mail = document.getElementById("fname").value;
           var loginForm ={ "email" :log_mail}
       console.log(loginForm);
	          
			     $("#loading").show();	
	      $.ajax({
		      type: "POST",
// url: "https://"+host+"/ewoundNursingHomeUser/forgetPassword",
url: "https://"+host+"/Admin/forgetPassword",
                                 'data':JSON.stringify(loginForm),
			                    Accept: "application/json, text/plain",
								contentType: "application/json; charset=latin1",
    
         						success: function (data) {
								 console.log(data);
							
								  $("#loading").hide();
								 	document.getElementById("data_msg").innerHTML =data.message;
							  	 $('#onload').modal('show'); 
								  $('.modal-backdrop').css('background-color','initial');
							   if(data.status == true){
								   
								     setTimeout(function(){ window.location="login.html" }, 3000);  
								//    window.location="list.html" ;
								
                                   }						
                                 }, 
								 error: function (data, textStatus, jqXHR) {
         								if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
                                 }		
                             }); 
		  }

  //////////////////////////////////////////////////////
  var value = window.location.href;
   var lastSegment = value.split('=').pop();
   console.log(lastSegment);

  
   function change_validate() {

   var old_pass = document.getElementById("new_pass").value;
  if (old_pass == "")
  {
document.getElementById("log_err1").innerHTML= "Please enter your new password";
return false;
  }
  if((document.myForm.new_pass.value).length < 6 )
  {
  document.getElementById("log_err1").innerHTML= "Enter minimum 6 characters";
  return false;
  }
  
  if (!(/^\S{3,}$/.test(old_pass))) {
       document.getElementById("log_err1").innerHTML = "Password cannot contain whitespace";
        return false;
    }
  
 document.getElementById("log_err1").innerHTML= "";
  var new_pass = document.getElementById("con_pass").value;
  if (new_pass == "")
  {
document.getElementById("log_err2").innerHTML= "Please enter your confirm password";
return false;
  }
  if(document.myForm.new_pass.value != document.myForm.con_pass.value)
  {
   document.getElementById("log_err2").innerHTML= "Your password is not matched";
  return false;
   }
 document.getElementById("log_err2").innerHTML= "";
    change_myFunc();
  return false; 
	
}

         
 function change_myFunc(){
		var  new_passed = document.getElementById("con_pass").value;
           //console.log(email);
		   var data = {
			 "verificationToken" : lastSegment, 
			 "password" :new_passed			
		   };
		     $.ajax({
		      
         			type: "POST",
 // url: "https://"+host+"/ewoundNursingHomeUser/resetPassword",
  url: "https://"+host+"/Admin/resetPassword",

                                 'data':JSON.stringify(data),
			                    Accept: "application/json, text/plain",
								contentType: "application/json; charset=latin1",
         						crossDomain : true,
	
         						success: function (data) {
								 console.log(data);
						
localStorage.setItem('frgtfn', data.vSeeFname);
localStorage.setItem('frgtln', data.vSeeLname);
localStorage.setItem('vsee_mail', data.email);
  //  console.log(frgtfn);
  //  console.log(frgtln);	
 //   console.log(vsee_mail);
							 
							 
							 
function removeSpecialChars(vsee_mail) {
      return vsee_mail.replace(/(?!\w|\s)./g, '')
    .replace(/\s+/g, ' ')
    .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
  } 
var Vs_user = removeSpecialChars(vsee_mail);

localStorage.setItem('frgtmail', Vs_user);
//            console.log(Vs_user);
			
var secret_key = "3mhvdw30c6arprkf0u18qmzsjcrhyznonwiaohvbzakjfpwfyfgvv5slmhztdivc";


						
						
							 $("#loading").show();
								document.getElementById("data_msg").innerHTML =data.message;
							  	 $('#onload').modal('show');
                          $('.modal-backdrop').css('background-color','initial');								 
							   if(data.status == true){
								   
								    setTimeout(function(){ window.location="login.html" }, 3000);     
								 
                                   }else{
									       setTimeout(function(){ window.location="forgot.html" }, 3000);  
									//   window.alert("Your token id has expired! Please try again");
									//   window.location="resetPassword.html" ;
								   }
         												
                                 }, 
								 error: function (data, textStatus, jqXHR) {
         								if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
                                 }
         						
                             });
							
 }
 
 
 
 function myFunctionVsee(){	

  /*  $.ajax({
						type: "POST",
                    url: "https://api.vsee.com/user/update?apikey=kuguq0x4vmomsuh0rjrcpk2vfyqe4vvvmj0krqhmgm1ikwj0uu8whvqxtu8jciat",
						'data': JSON.stringify({
			 "secretkey" :"3mhvdw30c6arprkf0u18qmzsjcrhyznonwiaohvbzakjfpwfyfgvv5slmhztdivc",
			   "username" :Vs_user,
			   "password" :new_passed,
               "fn" : data.vSeeFname,
               "ln" :data.vSeeLname
		   }),
						contentType: "application/json",
						crossDomain : true,
         						success: function (data) {
								 console.log(data);
								 alert("hiii");
							   if(data.status == "success"){
								     window.alert("your Vsee password has changed successfully");
									  window.location="register.html" ;
                                   }else{
									   window.alert("I am sorry!");
									  
								   }
         												
                                 },   
								 error: function (data, textStatus, jqXHR) {
         								
                                 }
         			 }); */
					 

 var frgot_mail = localStorage.getItem('frgtmail');
 console.log(frgot_mail);
  var frgot_fn = localStorage.getItem('frgtfn');
   var frgot_ln = localStorage.getItem('frgtln');
 var  new_passed = document.getElementById("con_pass").value;

       var secret_key = "3mhvdw30c6arprkf0u18qmzsjcrhyznonwiaohvbzakjfpwfyfgvv5slmhztdivc";
	//    console.log(secret_key);
		var  new_passed = document.getElementById("con_pass").value;
	var Vseereg = {
			 "secretkey" :secret_key,
			   "username" :frgot_mail,
			   "password" :new_passed,
               "fn" :frgot_fn,
               "ln" :frgot_ln 
		   };
   console.log(Vseereg);
   
               $.ajax({
						type: "POST",
                    url: "https://api.vsee.com/user/update?apikey=kuguq0x4vmomsuh0rjrcpk2vfyqe4vvvmj0krqhmgm1ikwj0uu8whvqxtu8jciat",
						'data': JSON.stringify({
			 "secretkey" :"3mhvdw30c6arprkf0u18qmzsjcrhyznonwiaohvbzakjfpwfyfgvv5slmhztdivc",
			   "username" :frgot_mail,
			   "password" :new_passed,
               "fn" :frgot_fn,
               "ln" :frgot_ln
		   }),
						contentType: "application/json",
						crossDomain : true,
         						success: function (data) {
								 console.log(data);
							   if(data.status == "success"){
								     window.alert("your Vsee password has changed successfully");
								//	  window.location="register.html" ;
                                   }else{
									   window.alert("I am sorry!");
									  
								   }
         												
                                 },   
								 error: function (data, textStatus, jqXHR) {
         								if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
                                 }
         			 }); 
							
 }
	//forgot password code ends//
	
	
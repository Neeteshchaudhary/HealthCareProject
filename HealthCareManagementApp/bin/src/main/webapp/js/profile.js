var one;
var two;

$(function() {

var copy = localStorage.getItem('tokens');
	
	if(copy == null) {
		window.location = "login.html";
	}
  var patient_id = localStorage.getItem('patientId');
  var token = localStorage.getItem('tokens');
	//	alert(localStorage.getItem('facilityname'));		
	
if(localStorage.getItem('check_nur_pro') == "nurse") {
  $("#facility_id").hide();
  document.getElementById("visitor_role").innerHTML = "Nurse ID : ";
    document.getElementById("pro_facid").innerHTML = localStorage.getItem('nurseid');	
}else{  
	document.getElementById("visitor_role").innerHTML = "Provider ID : ";
    document.getElementById("pro_facid").innerHTML = localStorage.getItem('providerid');	
}
 //   console.log(token);
  //alert(storedid); 
// profile details js start //
var profile_img =localStorage.getItem('profileimgdata');
           if(profile_img == "Edit Image"){

                                   }else{
					      var profile_img =localStorage.getItem('profileimgdata');
					  var token = localStorage.getItem('tokens');
					
								  fetch('https://'+host+'/secure/woundImg/image/'+ profile_img, { headers: { "Authorization":  token } })

									.then(response => response.blob())
									.then(blob => {
									let url = URL.createObjectURL(blob);
	//								console.log(url);	
									var img1 = document.createElement("img");
										img1.src = url;
									
										  document.getElementById("images_pro").appendChild(img1);
									});
									
								   }

          document.getElementById("pro_mail").innerHTML = localStorage.getItem('usermail');				  
		  document.getElementById("pro_user").innerHTML = localStorage.getItem('username');		
        	if(localStorage.getItem('check_nur_pro') == "nurse") {
				  document.getElementById("pro_name").innerHTML = localStorage.getItem('facilityname');	
			}else{
				$("#facility_id").show();
				  document.getElementById("sele_fac").innerHTML = localStorage.getItem('facilityname');	
			}
                       
});


	$(function() {
		myprofile();
	});

function myprofile(){

   var facil_details = document.getElementById("facility_id").value;
  if(facil_details == undefined || facil_details == "undefined"){
				
					var defltadminid = localStorage.getItem('useradminid');
					var defltadminame = localStorage.getItem('useradminame');
			//	alert(defltadminid +","+ defltadminame);
					localStorage.setItem('facilityId', defltadminid);
                    localStorage.setItem('facilityname',defltadminame);
} 


$.ajax({
type: "GET",
//   url: "https://" + host + "/secure/getAllAdmin/" + localStorage.getItem('masterroleid'),
     url: "https://" + host + "/secure/provider/getFacility/" + localStorage.getItem('providerid'),
 beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization',localStorage.getItem('tokens'));
    },
success: function (data) {
	console.log(data);

var original = data.reduce((unique, o) => {
    if(!unique.some(obj => obj.facilityName === o.facilityName && obj.value === o.value)) {
      unique.push(o);
    }
    return unique;
},[]);
console.log(original);
var data = original ;	
	
var result = '';
	var i=0;
if(data[i].active == false) {
			
		}else{
							result += '<option selected="selected" id="sele_fac" style="color:#ccc;width:50%;" disabled="disabled">'+localStorage.getItem('facilityname')+' </option>'
			    $(data).each(function(){
				result += '<option value="'+ data[i].adminId +','+ data[i].facilityName +'" id="admin_select">'+data[i].facilityName+'</option>'
					i++;	
			           });	
					   						
$('#facility_id').html(result);	 
// var listdata = data;

/*	localStorage.setItem('listdata', data);
 result += '<li><a id='data[i].facilityName'  onClick='reply_click(this.id)'>'+data[i].facilityName+'</a></li>'
					i++;
$('#submenuss').html(result); 
   $(data).each(function(){
for (i in myObj) {
			
  //  }); 
	 
	//	 x += "<li style='width:20px;' value='"+myObj[i].facilityName+"'>'+myObj[i].facilityName+'</li>"; 
 
 
//document.getElementById("submenuss").innerHTML = x;

}  
   });    */
 
    $("#facility_id").click(function(){
	$(".open>.dropdown-menu").css("display","block");
	
	 var facil_details = document.getElementById("facility_id").value;
					var a = document.getElementById("facility_id").selectedIndex;
                    var b = document.getElementById("facility_id").options;
                   	var spe_name = b[a].text;	
				
				                  var adminss = facil_details.split(',');
								   console.log(facil_details);	
                                 console.log(adminss[0]);	
								     console.log(adminss[1]);	
				localStorage.setItem('facilityId',adminss[0]);
				localStorage.setItem('facilityname',adminss[1]);	
				document.getElementById("pro_facid").innerHTML = localStorage.getItem('facilityId');
			//   var notselect = adminss[1];
		//	alert(facil_details);
				
					
    //   setTimeout(function(){ window.location="list.html" }, 3000);
	   	myprofile();
		setTimeout(function(){ window.location="list.html" }, 3000);
 });
 
 
 
 
 
 }
}, error: function (data, textStatus, jqXHR) {
           if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
}
});

//});



};



	// profile js end //

	var mymail = localStorage.getItem('usermail');
console.log(mymail);
	
  // change password js start //  
   
   function change_validateForm() {

	var chan_mail = document.getElementById("chan_user").value;
  if (chan_mail == "")
  {
document.getElementById("log_err").innerHTML= "Enter old password!";
return false;
  }
   document.getElementById("log_err").innerHTML= ""
   var old_pass = document.getElementById("chan_pass").value;
  if (old_pass == "")
  {
document.getElementById("log_err1").innerHTML= "Enter New Password!";
return false;
  }
   if((document.myForm.chan_pass.value).length < 6 )
  {
  document.getElementById("log_err1").innerHTML= "New password should be minimum 6 letters";
  return false;
  }
  if (!(/^\S{3,}$/.test(old_pass))) {
       document.getElementById("log_err1").innerHTML = "Password cannot contain whitespace";
        return false;
    }
 document.getElementById("log_err1").innerHTML= "";
 
 
 re = /[0-9]/;
      if(!re.test(myForm.chan_pass.value)) {
		  document.getElementById("log_err1").innerHTML = "Password should contain atleast one Number, Special Character, Upper and Lower case";
     myForm.chan_pass.focus();
        return false;
      }
      re = /[a-z]/;
      if(!re.test(myForm.chan_pass.value)) {
		    document.getElementById("log_err1").innerHTML = "Password should contain atleast one Number, Special Character, Upper and Lower case";
    myForm.chan_pass.focus();
        return false;
      }
      re = /[A-Z]/;
      if(!re.test(myForm.chan_pass.value)) {
		    document.getElementById("log_err1").innerHTML = "Password should contain atleast one Number, Special Character, Upper and Lower case";
              myForm.chan_pass.focus();
        return false;
      }
	re = /[!@#$%^&*]/;
	   if(!re.test(myForm.chan_pass.value)) {
		    document.getElementById("log_err1").innerHTML = "Password should contain atleast one Number, Special Character, Upper and Lower case";
              myForm.chan_pass.focus();
        return false;
      }
	  	document.getElementById("log_err1").innerHTML = "";
 
 
  var new_pass = document.getElementById("new_pass").value;
  if (new_pass == "")
  {
document.getElementById("log_err2").innerHTML= "Enter Confirm Password!";
return false;
  }
 if(document.myForm.new_pass.value != document.myForm.chan_pass.value)
  {
   document.getElementById("log_err2").innerHTML= "New Password & Confirm Pasword mismatch!";
  return false;
   } 
 document.getElementById("log_err2").innerHTML= "";
    change_myFunction();
  return false; 
	
}	
  
 function change_myFunction() {
	 	var mymail = localStorage.getItem('usermail');
             var old_pass = document.getElementById("chan_user").value,
         	  chan_pass = document.getElementById("chan_pass").value,
			    new_passed = document.getElementById("new_pass").value;
         	  var cngv_ln = localStorage.getItem('userfname');
           var cngv_mail = localStorage.getItem('userlname');				
		
           var changepassForm ={"email" :mymail, "oldPassword" :old_pass, "newPassword" :chan_pass, "fn" :cngv_ln, "ln" :cngv_mail}
       console.log(changepassForm);
//	   alert(changepassForm);
	      $("#loading").show();
		  
		  
		  var mastrid = localStorage.getItem('mainroleid');
					 if(mastrid ==3 ){
								//	   alert("nurse");
					  $.ajax({
		      
         			type: "POST",
					
 url: "https://"+host+"/secure/updateNursePassword",

                                 'data':JSON.stringify(changepassForm),
			                    Accept: "application/json, text/plain",
								contentType: "application/json; charset=latin1",
         						crossDomain : true,
		beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', token );
         },
		 success: function (data) {
								 console.log(data);
						 $("#loading").hide();
							document.getElementById("data_msg").innerHTML =data.message;
							 $('#onload').modal('show');
							  $('.modal-backdrop').css('background-color','initial');
							     
							  if(data.message == "Your password has been changed successfully."){
								       setTimeout(function(){ window.location="login.html" }, 3000); 
									//    chg_vseeglobal();
	                               }
								   else{
									   setTimeout(function(){ $('#onload').modal('hide') }, 3000);  	
								   }
         						 }, 
								 error: function (data, textStatus, jqXHR) {
									 console.log(data);
									  $("#loading").hide();
			if(data.status == "400") {
				document.getElementById("data_msg").innerHTML = "Your old password is incorrect";
							 $('#onload').modal('show');
							  $('.modal-backdrop').css('background-color','initial');
							  setTimeout(function(){$('#onload').modal('hide')}, 3000);
							  myForm.chan_user.focus();
			}
			if(data.status == "500") {
				document.getElementById("data_msg").innerHTML = "Something went wrong, Please try again!";
							 $('#onload').modal('show');
							  $('.modal-backdrop').css('background-color','initial');

			}
			if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
         						 }
         					 });
								  }else{
									//    alert("provider");
								
                 $.ajax({
		             type: "POST",
					
              url: "https://"+host+"/secure/provider/updateProviderPassword",

                                 'data':JSON.stringify(changepassForm),
			                    Accept: "application/json, text/plain",
								contentType: "application/json; charset=latin1",
         						crossDomain : true,
		beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', token );
         },
         						success: function (data) {
								 console.log(data);
						 $("#loading").hide();
						document.getElementById("data_msg").innerHTML =data.message;
							 $('#onload').modal('show');
							  $('.modal-backdrop').css('background-color','initial');
						  if(data.message == "Your password has changed successfully"){
								       setTimeout(function(){ window.location="login.html" }, 3000); 
									//    chg_vseeglobal();
	                        }
								   else{
									   setTimeout(function(){ $('#onload').modal('hide') }, 3000);  	
								   }
         					     }, 
								 error: function (data, textStatus, jqXHR) {
			 console.log(data);
									  $("#loading").hide();
			if(data.status == "400") {
				document.getElementById("data_msg").innerHTML = "Your old password is incorrect";
							 $('#onload').modal('show');
							  $('.modal-backdrop').css('background-color','initial');
			}
			if(data.status == "500") {
				document.getElementById("data_msg").innerHTML = "Something went wrong, Please try again!";
							 $('#onload').modal('show');
							  $('.modal-backdrop').css('background-color','initial');

			}
			if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
         					    }
         						
                             });
					 }
         }
  
 
function chg_vseeglobal() {
	    var cngv_fn = localStorage.getItem('frgtfn'); 
										var cngv_ln = localStorage.getItem('frgtln');
										var cngv_mail = localStorage.getItem('frgtmail');				
                   $.ajax({
						type: "POST",
                        url: "https://api.vsee.com/user/update?apikey=kuguq0x4vmomsuh0rjrcpk2vfyqe4vvvmj0krqhmgm1ikwj0uu8whvqxtu8jciat",
						'data': JSON.stringify({"secretkey": "3mhvdw30c6arprkf0u18qmzsjcrhyznonwiaohvbzakjfpwfyfgvv5slmhztdivc", 
                    "username": "epiphaneedev+"+cngv_mail,
                    "password": chan_pass,
                      "fn": cngv_fn, 
                       "ln": cngv_ln}), 
						contentType: "application/json",
						crossDomain : true,
         						success: function (data) {
								 console.log(data);
							   if(data.status == "success"){
								//   window.alert("your vsee password changed successfully ! ");
									 	setTimeout(function(){ window.location="login.html" }, 3000);
                                   }else{
									//   window.alert("I am sorry! Please try again");
                                setTimeout(function(){ $('#onload').modal('hide')}, 3000);  	 
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
 	 
function chg_vseevalidate() {
	 var usermal = localStorage.getItem('usermail');
		   var registfn = document.getElementById("reg_fn").value,
         	  registln = document.getElementById("reg_ln").value,
		  registpass = document.getElementById("reg_pwd1").value; 
					//	 console.log(usermal);
						 var secret_key = "3mhvdw30c6arprkf0u18qmzsjcrhyznonwiaohvbzakjfpwfyfgvv5slmhztdivc";	 
		var Vseeregstor = {
			 "secretkey" :secret_key,
			   "username" :usermal,
			   "password" :registpass,
               "fn" :registfn,
               "ln" :registln 
		   };
  console.log(Vseeregstor);
   
               $.ajax({
						type: "POST",   
                        url: "https://api.vsee.com/user/create?apikey=kuguq0x4vmomsuh0rjrcpk2vfyqe4vvvmj0krqhmgm1ikwj0uu8whvqxtu8jciat",
						'data': JSON.stringify({"secretkey": "3mhvdw30c6arprkf0u18qmzsjcrhyznonwiaohvbzakjfpwfyfgvv5slmhztdivc", 
                    "username": usermal,
                    "password": registpass,
                      "fn": registfn, 
                       "ln": registln}),
						contentType: "application/json",
						crossDomain : true,
         						success: function (data) {
								 console.log(data);
							   if(data.status == "success"){
								     window.alert("your are vsee registor successfully ! ");
                                   }else{
									   window.alert("I am sorry! Please try again");
									    
								   }
         						  },   
								 error: function (data, textStatus, jqXHR) {
         						 }
         			 });  
	 } 
  // change password js end //
 
	// profile update image start js //
 $(function() {
$("#file").change(function() {  

        
$("#message").empty();      
			var file = this.files[0];           
			var imagefile = file.type;
			var match= ["image/jpeg","image/png","image/jpg"];
		if(!((imagefile==match[0]) || (imagefile==match[1]) || (imagefile==match[2])))
{
$('#previewing').attr('src','noimage.png');
$("#message").html("<p id='error'>Please Select A valid Image File</p>"+"<h4>Note</h4>"+"<span id='error_message'>Only jpeg, jpg and png Images type allowed</span>");
return false;
}
else
{
var reader = new FileReader();
reader.onload = imageIsLoaded;
reader.readAsDataURL(this.files[0]);

var f1 = file;
var f2 = file.names;
//localStorage.setItem('image1', f2);  

//console.log(f1);
//var img_name = woundImg.name;
//console.log(f1.name);
}
});
});
function imageIsLoaded(e) {
$("#file").css("color","pink");
$('#image_preview').css("display", "block");
$('#previewing').attr('src', e.target.result);
$('#previewing').attr('width', '250px');
$('#previewing').attr('height', '230px');

};

///////////////////////////////////////////////////////////////////
 var token = localStorage.getItem('tokens');

$(document).ready(function (e) {
$("#uploadimage").on('submit',(function(e) {

e.preventDefault();
$("#message").empty();

        var token = localStorage.getItem('tokens');                     
var formData = new FormData();
var profileimgs = $('input[name="file"]').get(0).files[0];

if (profileimgs == null || profileimgs == ""){  
 
 document.getElementById("pro_err").innerHTML= "Select Profile Image";  
  return false;  
} 

console.log(profileimgs);
//formData.append('woundImg',formData); 
formData.append('profileImage', profileimgs);

			 $("#loading").show();				 
   $.ajax({
        url: "https://"+host+"/secure/woundImg/post",
        type:"POST",
        processData:false,
        contentType: false,
        data: formData,
		beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', token );
    },
	          complete: function(data){
				console.log(data);
			      var prof_data = data.responseJSON;
				     console.log(prof_data);
					var prof_img = prof_data.profileImage;
					console.log(prof_img);
				 var storedid = localStorage.getItem('provider_nurseid');
		
	  var profileForm ={ "userId" :storedid, "profileImage" : prof_img}
       console.log(profileForm);
	       
           $.ajax({
		      
         			type: "POST",
 url: "https://"+host+"/secure/update/profileImage",

                                  'data':JSON.stringify(profileForm),
			                    Accept: "application/json, text/plain",
								contentType: "application/json; charset=latin1",
         						crossDomain : true,
								 beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', token );
    },
         						success: function (data) {
								console.log(data);
								
							 localStorage.setItem('profileimgdata', data.profileImage);	
					 			 $("#loading").hide();
								
							  	document.getElementById("data_msg").innerHTML =data.message;
							  	 $('#onload').modal('show'); 
								  $('.modal-backdrop').css('background-color','initial');
						  setTimeout(function(){ window.location="list.html" }, 3000);  
						
							   if(data.status == true){
				//	  setTimeout(function(){ window.location="wound_document.html" }, 3000);  
							
                                   }
         												
                                 }, 
								 error: function (data, textStatus, jqXHR) {
         								
                                 }
         						
                             });	
				////////////////////////////////////////////////////////
								
			 }, 
			 error: function (data, textStatus, jqXHR) {
			if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
			 }
			
		 });
}));

 }); 
	// profile update image end //
	
$(document).ready(function() {
		 $("#logout").click(function(){
	        app_logout(); 
		
			 });
 });
  
function app_logout() {
	 var cheeck =  localStorage.getItem('mainroleid');
	 	var token = localStorage.getItem('tokens');
		console.log(token);
	//	alert(cheeck);
	//	alert(host);
   if(cheeck == 3){
	//   alert("nursse");
	var adminlogout = {
			"nurseId": localStorage.getItem('nurseid')
		}
		console.log(adminlogout);
	//	alert(adminlogout);
		$.ajax({
		
		type: "POST",
		url: "https://" + host + "/secure/Nurse/logout",
		'data': JSON.stringify(adminlogout),
	          Accept: "application/json, text/plain",
			contentType: "application/json; charset=latin1",
			crossDomain : true,
        beforeSend : function( xhr ) {
            xhr.setRequestHeader( 'Authorization', token );
        },
		success: function (data) {
			console.log(data);
		//	alert(data.message);
	document.getElementById("data_msg").innerHTML =data.message;
			       $('#onload').modal('show');
				  $('.modal-backdrop').css('background-color','initial'); 
	  setTimeout(function(){ window.location="login.html" }, 3000);    
	
			if(data.message == "You are successfully logged out") {
			//	setTimeout(function() {window.location = "login.html"}, 3000);
				
			} else {
			setTimeout(function(){ $('#onload').modal('hide')}, 3000);  
			}
			
		},error: function(data, textStatus, jqXHR){
		console.log(data);
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
	//	alert(adminlogout);
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
		//	alert(data.message);
		document.getElementById("data_msg").innerHTML =data.message;
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
		console.log(data);
		if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
		}
	});
	
	 }
	
	localStorage.clear();
}

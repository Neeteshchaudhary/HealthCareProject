
//input js start //

$(function () {
	$('.mat-input-outer label').click(function () {
		$(this).prev('input').focus();
	});
	$('.mat-input-outer input').focusin(function () {
		$(this).next('label').addClass('active');
	});
	$('.mat-input-outer input').focusout(function () {
		if (!$(this).val()) {
			$(this).next('label').removeClass('active');
		} else {
			$(this).next('label').addClass('active');
		}
	});

});
//input js end //

//registor js start //			

function log_validateForm() {

	var log_mail = document.getElementById("log_user").value;
	if (log_mail == "")
	{
		document.getElementById("log_err").innerHTML= "Enter your registered Email ID";
		return false;
	}

	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!filter.test(log_user.value)) {
		document.getElementById("log_err").innerHTML= "Enter valid Email ID";
		// alert('Please provide a valid email address');
		log_user.focus;
		return false;
	}
	document.getElementById("log_err").innerHTML= "";
	// document.getElementById("log_err").innerHTML= ""
	var log_pass = document.getElementById("log_pass").value;
	if (log_pass == "")
	{
		document.getElementById("log_err1").innerHTML= "Enter Password";
		return false;
	}
	document.getElementById("log_err1").innerHTML= "";

	//log_myFunction();
	return true; 

}	
var token = localStorage.getItem('ptoken');
//console.log(token);



function log_myFunction() {
	var log_mail = document.getElementById("log_user").value,
	log_pass = document.getElementById("log_pass").value;

	var loginForm ={ "email" :log_mail, "password" :log_pass}
	console.log(loginForm);

	$("#loading").show();	

	$.ajax({

		type: "POST",
		url: "https://"+host+"/Admin/login",

		'data':JSON.stringify(loginForm),
		Accept: "application/json, text/plain",
		contentType: "application/json; charset=latin1",
		crossDomain : true,
		success: function (data) {
			console.log(data);

			$("#loading").css('display','none');
			//  $("#loading").hide();	
			//	 window.alert(data.message);

			if(data.roleId ==3 || data.roleId ==4 ){

				document.getElementById("data_msg").innerHTML =data.message;
				$('#onload').modal('show');
				$('.modal-backdrop').css('background-color','initial');
				setTimeout(function(){ window.location="list.html" }, 2000);

			}else{
				document.getElementById("data_msg").innerHTML = "You are not authorized to access the application. Please contact System Administrator.";
				$('#onload').modal('show');
				$('.modal-backdrop').css('background-color','initial');
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}

			var pat_token = data.jwtToken;
			var brer_tkn = "Bearer "+ token;
			localStorage.setItem('tokens', brer_tkn);

			localStorage.setItem('ptoken', pat_token);

			localStorage.setItem('facilityId', data.adminId);
			localStorage.setItem('adminroleid', data.adminRoleId);
			localStorage.setItem('masterroleid', data.masterRoleId);
			localStorage.setItem('mainroleid', data.roleId);	
			localStorage.setItem('useradminid', data.adminId);
			localStorage.setItem('useradminame', data.facilityName);
			if(data.roleId ==3 ){
				//   alert("nurse");

				localStorage.setItem('nurseid', data.nurseId); 
				localStorage.setItem('provider_nurseid', data.nurseId);		
				localStorage.setItem('check_nur_pro', 'nurse');												
			}else if(data.roleId ==4 ){
				//    alert("provider");
				localStorage.setItem('providerid', data.providerId); 
				localStorage.setItem('provider_nurseid', data.providerId);	
				localStorage.setItem('check_nur_pro', 'provider');										 
			}

			localStorage.setItem('profileimgdata', data.profileImage);	
			localStorage.setItem('username', data.fName  + "&nbsp;" +  data.lName);	
			localStorage.setItem('userfname', data.fName);
			localStorage.setItem('userlname', data.lName);
			localStorage.setItem('usermail', data.email);	
			localStorage.setItem('facilityname', data.facilityName);	
			localStorage.setItem('userno', data.mobileNo);	 

		}, 
		error: function (data, textStatus, jqXHR) {
			$("#loading").css('display','none');
			console.log(data);
			//	console.log(data.statusText);

			$('#onload').modal('show');
			$('.modal-backdrop').css('background-color','initial');
			if(data.status == "400") {

				if(data.responseJSON.message == "your password is incorrect"){

					$('#onload').modal('show');
					document.getElementById("data_msg").innerHTML ="your password is incorrect";
					setTimeout(function(){$('#onload').modal('hide')}, 3000); 
				}else{
					document.getElementById("data_msg").innerHTML ="User does not exist";
					setTimeout(function(){$('#onload').modal('hide')}, 3000); 
				}
			}
			if(data.status == "403") {
				document.getElementById("data_msg").innerHTML = "Your account is not activated!";

				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
			if(data.status == "500") {
				document.getElementById("data_msg").innerHTML ="Something went wrong, Please try again!";

				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
			if(data.statusText == "error") {
				document.getElementById("data_msg").innerHTML ="Please check your internet connection!";

				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
		}

	});

	function removeSpecialChars(log_mail) {
		return log_mail.replace(/(?!\w|\s)./g, '')
		.replace(/\s+/g, ' ')
		.replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
	} 
	var vreg_user = removeSpecialChars(log_mail);
	localStorage.setItem('vs_usr', vreg_user);
	localStorage.setItem('vs_password', log_pass);
//	console.log(Vs_user);

}

// login js end //  


var patient_id = localStorage.getItem('patientId');

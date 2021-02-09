$(function() {
	
//	console.log(localStorage.getItem('vs_usr'));
//   console.log(localStorage.getItem('vs_password'));

	// document.getElementById("myDIV").style.zIndex = "-1";
//var storedid = localStorage.getItem('facilityId');
    //    console.log(storedid);
   var token2 = localStorage.getItem('ptoken');
		
		  var brer_tkn = "Bearer "+ token2;
		   localStorage.setItem('tokens', brer_tkn);
		   
  var def = localStorage.getItem('facilityId');

//    alert(def);

/*  
if(def == 'undefined'){
	alert("shdgdgfd");
// 
	var def = localStorage.getItem('useradminid');
	
	                var defltadminid = localStorage.getItem('useradminid');
					var defltadminame = localStorage.getItem('useradminame');
						localStorage.setItem('facilityId', defltadminid);
						localStorage.setItem('facilityname',defltadminame);
					
}  
   */
$.ajax({

				  type: "GET",
                 url: "https://" + host + "/secure/patients/ByAdminId/" + localStorage.getItem('facilityId'),
				  
                   
				   beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization',brer_tkn );
    },
						success: function (data) {
						        
                            console.log(data);
	
								 var myObj = data;					
 var x="" ;  
	if(data.length == 0){
		
        x += "<tr style='clear:both;'><td style='display:none;'></td><td style='' colspan='7'><h4 style=''>"+'No Patient Found !'+"</h4></td></tr>"; 
        document.getElementById("pat_list").innerHTML = x;

                                     }else{
										 
for (i in myObj) {

	
	if(myObj[i].gender == "M"){
		myObj[i].gender = "Male";
	}
	if(myObj[i].gender == "F"){
		myObj[i].gender = "Female";
	}
	

/*	var id = myObj[i].mobile ;
	 console.log(id);
	
	 var lastFive = id.substr(id.length - 5); 
     console.log(lastFive);
	 
	var id = "ctl03_Tabs1";
var lastFive = id.substr(id.length - 5); // => "Tabs1"
 console.log(id.slice(-5));
 console.log(lastFive);   */
 
	// console.log(myObj[i].adhaarCardNo.slice(0,10));
	
				 
								 x += "<tr id ='d1' style='clear:both;'><td style='width:20px;' value='"+myObj[i].patientId+"'></td><td style='color:#337ab7;font-weight: bold;'>"+ myObj[i].name  + "</td><td style=''>"+myObj[i].dob+"</td><td>"+myObj[i].gender+"</td><td id='mbl_msk'>"+myObj[i].mobile+"</td><td><button type='btn' class='btn btn-primary' value='"+myObj[i].patientId+"' style='width:80px;'>View</button></td></tr>"; 
 
 
document.getElementById("pat_list").innerHTML = x;
  
//var mask = '<span style="position:absolute; top:0; left:0; background-color:white;">000000</span>';

//$("#mbl_msk").append(mask);
	
$("button[type='btn']").click(function(){
				
			 var patientid1 = $(this).val();
			
		 localStorage.setItem('patientId', patientid1);
console.log(patientid1);
 window.location="past_details.html";
});





		    /* var table = document.getElementById('dev-table');
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
   document.getElementById("fs").value = this.cells[0].value;
//  alert(this.cells[0].value);
var patientid1= document.getElementById("fs").value;


localStorage.setItem('patientId', patientid1);
console.log(patientid1);
 window.location="past_details.html";
                    };
                }	 */	 
					 
									 ///////////
								   }
	sortTable();

	
   }  
	
          /* var rowss = document.getElementById(pat_list).getElementsByTagName("tbody")[0].getElementsByTagName("tr").length;
           alert(rowss); */

				}, error: function (data, textStatus, jqXHR) {
							console.log(data);
							 $('.modal-backdrop').css('background-color','initial');
			if(data.statusText == "400") {

				document.getElementById("data_msg").innerHTML ="Input Parameters Wrong";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			 }
			if(data.statusText == "500") {
					document.getElementById("data_msg").innerHTML ="Something went wrong, Please try again!";
				 
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			} 
			if(data.statusText == "error") {
					document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				 
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
                        }
						
                    });
  
});

// add patient js start //
function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("dev-table");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false; 

      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];

      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
   
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

/*function ipLookUp () {
  $.ajax('http://ip-api.com/json')
  .then(
      function success(response) {
       console.log('User\'s Location Data is ', response);
    console.log('User\'s Country', response.country);
		   localStorage.setItem('userLocation', response.country);	
      },

      function fail(data, status) {
          console.log('Request failed.  Returned status of',
                      status);
      }
  );
}
ipLookUp()*/

  
$.get("https://ipinfo.io", function(response) {
 //console.log(response);
 console.log(response.ip, response.country);
localStorage.setItem('userLocation', response.country);	
visitor_form();
}, "jsonp")



function visitor_form(){

//  var locations = "USA";
  var locations = localStorage.getItem('userLocation');	
// console.log(locations);

  if(locations == 'IN'){
document.getElementById("india_name").style.display = "block";
document.getElementById("india_aadhar").style.display = "block";

  }else{
  
  document.getElementById("us_fn").style.display = "block";
document.getElementById("us_mn").style.display = "block";
document.getElementById("us_ln").style.display = "block";
document.getElementById("us_ssn").style.display = "block";
  }
  }

 

function fun1(){

//console.log(localStorage.getItem('userLocation'));
 var locations = localStorage.getItem('userLocation');	
  //  var locations = "USA";
 //   console.log(locations); 
                if(locations == 'IN'){
				
  var add_firstname = document.getElementById("add_fn").value;
  if (add_firstname == "")
  {
document.getElementById("add_err").innerHTML= "Enter Name!";
return false;
  }
   document.getElementById("add_err").innerHTML= ""
              }else{
var first_name = document.getElementById("us_fstn").value;
  if (first_name == "")
  {
document.getElementById("add_us_err1").innerHTML= "Enter First Name!";
return false;
  }
   document.getElementById("add_us_err1").innerHTML= ""
   var last_name = document.getElementById("us_lstn").value;
  if (last_name == "")
  {
document.getElementById("add_us_err3").innerHTML= "Enter Last Name!";
return false;
  }
   document.getElementById("add_us_err3").innerHTML= ""
                   }
   
   var add_mobileno = document.getElementById("add_mobile").value;
  if (add_mobileno == "")
  {
document.getElementById("add_err3").innerHTML= "Enter Phone Number!";
return false;
  }
  if(add_mobileno.slice(0,1) == 0){
   
	 document.getElementById("add_err3").innerHTML= "Mobile number should not start with 0";
 return false;
    }
if((document.myform.add_mobile.value).length < 10 )
  {
  document.getElementById("add_err3").innerHTML= "Phone Number should be 10 digits.";
  return false;
  }
   document.getElementById("add_err3").innerHTML= ""
   
              if(locations == 'IN'){
   var add_aadhar = document.getElementById("add_adr").value;
  if (add_aadhar == "")
  {
document.getElementById("add_err4").innerHTML= "Enter Aadhar Number!";
return false;
  }
  if (add_aadhar == 000000000000)
  {
document.getElementById("add_err4").innerHTML= "Enter valid Aadhar Number";
return false;
  }
if((document.myform.add_adr.value).length < 12)
  {
  document.getElementById("add_err4").innerHTML= "Aadhar Number should be 12 digits.";
  return false;  
  }
  document.getElementById("add_err4").innerHTML= ""
                   }else{
				   
 var add_ssn = document.getElementById("us_adr").value;
  if (add_ssn == "")
  {
document.getElementById("add_us_err4").innerHTML= "Enter SSN Number!";
return false;
  }
  if (add_ssn == 000000000000)
  {
document.getElementById("add_us_err4").innerHTML= "Enter valid SSN Number";
return false;
  }
if((document.myform.us_adr.value).length < 9)
  {
  document.getElementById("add_us_err4").innerHTML= "SSN Number should be 9 digits.";
  return false;  
  }
  document.getElementById("add_us_err4").innerHTML= ""
                   }
  
   var add_gndr = document.getElementById("add_gender").value;
  if (add_gndr == "")
  {
document.getElementById("add_err5").innerHTML= "Enter Gender!";
return false;
  }
  document.getElementById("add_err5").innerHTML= ""
   var add_birth = document.getElementById("add_dob").value;
  if (add_birth == "")
  {
document.getElementById("add_err6").innerHTML= "Enter Date of Birth!";
return false;
  }
 //  var d = new Date();
// console.log(d);
 document.getElementById("add_err6").innerHTML= "";
 
    add_myFunction();
  return false;
  
  
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '/' + mm + '/' + dd;
console.log(today);
localStorage.setItem('systemDate',today);	

function add_myFunction() {

//  console.log(today);

 var token = localStorage.getItem('tokens');
//	console.log(token);
	console.log(localStorage.getItem('userLocation'));
 var locations = localStorage.getItem('userLocation');	
 // var locations = "USA";
 //  console.log(locations); 
                if(locations == 'IN'){
				 var add_firstname1 = document.getElementById("add_fn").value,
				 add_aadhar1 = document.getElementById("add_adr").value;
				}else{
		   var first_name = document.getElementById("us_fstn").value;
		   var middle_name = document.getElementById("us_mdln").value;
		   var last_name = document.getElementById("us_lstn").value;
		   
				// var add_firstname1 = first_name.concat(middle_name, last_name);
				 var add_firstname1 =  first_name + " " + middle_name + " " + last_name;
				var add_aadhar1 = document.getElementById("us_adr").value;
				}
           	var add_mobileno1 = document.getElementById("add_mobile").value,
			add_gndr1 = document.getElementById("add_gender").value,
         	  add_birth1 = document.getElementById("add_dob").value;
 		      var storedid = localStorage.getItem('facilityId');
			 

		 var add_patientForm = { "nurseId":localStorage.getItem('nurseid'), "providerId":localStorage.getItem('providerid'), "name":add_firstname1, "adhaarCardNo":add_aadhar1, "gender":add_gndr1,"mobile":add_mobileno1, "dob":add_birth1,"adminId": localStorage.getItem('facilityId'),"adminRoleId":localStorage.getItem('adminroleid'),"masterRoleId":localStorage.getItem('masterroleid'),"createdDate":localStorage.getItem('systemDate')}

	console.log(add_patientForm);
	
	          $("#loading").show();
	
           $.ajax({
		      
         			type: "POST",
 url: "https://"+host+"//secure/patient/add",

                                'data':JSON.stringify(add_patientForm),
			                    Accept: "application/json, text/plain",
								contentType: "application/json; charset=latin1",
         						crossDomain : true,
								
		beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', token );
         },
         						success: function (data) {
									     $("#loading").css('display','none');
								 console.log(data);
								
								
                          if(data.status == true){
							  
							  document.getElementById("data_msg").innerHTML ="Patient added successfully";
							    $('#onload').modal('show'); 
								 $('.modal-backdrop').css('background-color','initial');
							 setTimeout(function(){ window.location="list.html" }, 3000);
							
                                   }
								   
								 /*  else{
									  
								document.getElementById("data_msg").innerHTML ="Your Aadhar card is already exist";
							    $('#onload').modal('show'); 
									   
									   setTimeout(function(){ $('#onload').modal('hide')}, 3000);  	
								   } */
         												
                                 }, 
								 error: function (data, textStatus, jqXHR) {
         								console.log(data);
                               $('#onload').modal('show'); 
							 //   $('.modal-backdrop').css('background-color','initial');
			if(data.status == "400") {
             // document.getElementById("data_msg").innerHTML = "You are Already our Patient check your name in the patient List";
			   document.getElementById("data_msg").innerHTML = "You are already our patient, search in the patient List";
			    $("#loading").css('display','none');
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

         }
// Add patient js end //

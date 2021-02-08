var one;
var two;
var storedid = localStorage.getItem('facilityId');
  var patient_id = localStorage.getItem('patientId');
  var mywoundid = localStorage.getItem('mywound');
  // console.log(localStorage.getItem('vs_usr'));
  // console.log(localStorage.getItem('vs_password'));

	//  console.log(mywoundid); 
   var token = localStorage.getItem('tokens'); 

  //window.alert(patient_id); 
 function myFunction() {
	   var woundid = localStorage.getItem('woundno');
	   var mywoundid = localStorage.getItem('mywound');
	                                    var re_wound = localStorage.getItem('condition');
										if (re_wound == 1) {
								
    document.getElementById("no").value = woundid;
	
											}
 else {
											
	 document.getElementById("no").value = mywoundid;
	  }
	  
	 
}

$(function() {
 
	//Etiology starts js//
	  
	   var orgId;
	     $.ajax({
						type: "GET",
                        url: "https://"+host+"/secure/AllEtiologies",  
                        beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', token );
         },
						success: function (data) {
                           
							var result = '';
							
							var i=0;
							result += '<option selected="selected" value="" disabled="disabled">Select Etiology</option>'
			    $(data).each(function(){
				result += '<option value="'+data[i].etiology_name+'">'+data[i].etiology_name+'</option>'
					i++;	
			           });							
						$('#country').html(result);	
                        }, error: function (data, textStatus, jqXHR) {
				if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
                        }
						
                    });
		
		$.ajax({
						type: "GET",
                        url: "https://"+host+"/secure/AllWoundAppearance",
                        beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', token );
         },
						success: function (data) {
                        
							var result = '';
							
							var i=0;
							result += '<option selected="selected" value="" disabled="disabled">Select Appearance</option>'
			    $(data).each(function(){
				result += '<option value="'+data[i].woundAppearance_Name+'">'+data[i].woundAppearance_Name+'</option>'
					i++;	
			           });							
						$('#appearance').html(result);	
                        }, error: function (data, textStatus, jqXHR) {
							if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
                        }
						
                    });
					
		$.ajax({
						type: "GET",
                        url: "https://"+host+"/secure/AllWoundMarginDetails",
                        beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', token );
         },
						success: function (data) {
                           
							var result = '';
							
							var i=0;
							result += '<option selected="selected" value="" disabled="disabled">Select Margin Details</option>'
			    $(data).each(function(){
				result += '<option value="'+data[i].woundMarginDetails_Name+'">'+data[i].woundMarginDetails_Name+'</option>'
					i++;	
			           });							
						$('#margin').html(result);	
                        }, error: function (data, textStatus, jqXHR) {
							if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
                        }
						
                    });
		
        $.ajax({
						type: "GET",
                        url: "https://"+host+"/secure/AllOdor",
                        beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', token );
         },
						success: function (data) {
                           
							var result = '';
							
							var i=0;
							result += '<option selected="selected" value="" disabled="disabled">Select Odor</option>'
			    $(data).each(function(){
				result += '<option value="'+data[i].oder_Name+'">'+data[i].oder_Name+'</option>'
					i++;	
			           });							
						$('#Odor').html(result);	
                        }, error: function (data, textStatus, jqXHR) {
							if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
                        }
						
                    });
					
		$.ajax({
						type: "GET",
                        url: "https://"+host+"/secure/AllDrainage_Amount",
                        beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', token );
         },
						success: function (data) {
                           
							var result = '';
							
							var i=0;
							result += '<option selected="selected" value="" disabled="disabled">Select Drainage Amount</option>'
			    $(data).each(function(){
				result += '<option value="'+data[i].drainage_Amount_Name+'">'+data[i].drainage_Amount_Name+'</option>'
					i++;	
			           });							
						$('#drainage').html(result);	
                        }, error: function (data, textStatus, jqXHR) {
							if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
                        }
						
                    });
					
		$.ajax({
						type: "GET",
                        url: "https://"+host+"/secure/AllDrainage_Type",
                        beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', token );
         },
						success: function (data) {
                           
							var result = '';
							
							var i=0;
							result += '<option selected="selected" value="" disabled="disabled">Select Drainage Type</option>'
			    $(data).each(function(){
				result += '<option value="'+data[i].drainage_Type_Name+'">'+data[i].drainage_Type_Name+'</option>'
					i++;	
			           });							
						$('#type').html(result);
                        }, error: function (data, textStatus, jqXHR) {
							if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
                        }
						
                    });
					
		$.ajax({
						type: "GET",
                        url: "https://"+host+"/secure/AllPeri_Wound",
                        beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', token );
         },
						success: function (data) {
                           
							var result = '';
							
							var i=0;
							result += '<option selected="selected" value="" disabled="disabled">Select Peri-Wound</option>'
			    $(data).each(function(){
				result += '<option value="'+data[i].periWound_Name+'">'+data[i].periWound_Name+'</option>'
					i++;	
			           });							
						$('#Peri-Wound').html(result);	
                        }, error: function (data, textStatus, jqXHR) {
							if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
                        }
						
                    });
		
		$.ajax({
						type: "GET",
                        url: "https://"+host+"/secure/AllComplianceWithCarePlans",
                        beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', token );
         },
						success: function (data) {
                           
							var result = '';
							
							var i=0;
							result += '<option selected="selected" value="" disabled="disabled">Select Compliance with care plan</option>'
			    $(data).each(function(){
				result += '<option value="'+data[i].cwcpname+'">'+data[i].cwcpname+'</option>'
					i++;	
			           });							
						$('#comp').html(result);	
                        }, error: function (data, textStatus, jqXHR) {
							if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
                        }
						
                    });
					
		$.ajax({
						type: "GET",
                        url: "https://"+host+"/secure/AllNutritional",
                        beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', token );
         },
						success: function (data) {
                           
							var result = '';
							
							var i=0;
							result += '<option selected="selected" value="" disabled="disabled">Select Nutritional Assessment </option>'
			    $(data).each(function(){
				result += '<option value="'+data[i].nutritionalName+'">'+data[i].nutritionalName+'</option>'
					i++;	
			           });							
						$('#nutri').html(result);	
                        }, error: function (data, textStatus, jqXHR) {
							if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
                        }
						
                    });
		
//Etiology end js//
	 
	
	 
	 
  });
 // wound checkbox js start //

  $(document).ready(function() {
        $(".btn-login-submit").click(function(){
            var favorite = [];
            $.each($("input[name='sport']:checked"), function(){            
                favorite.push($(this).val());
            });
			var critical = favorite.join(", ");
        //    alert(critical);
		  localStorage.setItem('sign', critical);
        });
  });
$(document).ready(function() {
        $(".btn-login-submit").click(function(){
            var favorite = [];
            $.each($("input[name='wound']:checked"), function(){            
                favorite.push($(this).val());
            });
			var wou_critical = favorite.join(", ");
       //     alert(wou_critical);
		  localStorage.setItem('wou_sign', wou_critical);
        });
  });
  $(document).ready(function() {
        $(".btn-login-submit").click(function(){
            var favorite = [];
            $.each($("input[name='offloading_device']:checked"), function(){            
                favorite.push($(this).val());
            });
			var wou_offloadcheck = favorite.join(", ");
       //     alert(wou_critical);
		  localStorage.setItem('offload_check', wou_offloadcheck);
        });
  });
  //radio button //
  $(document).ready(function() {
        $(".btn-login-submit").click(function(){
            var favorite = [];
            $.each($("input[name='bony']:checked"), function(){            
                favorite.push($(this).val());
            });
			var ulcer = favorite.join(", ");
       //     alert(ulcer);
		  localStorage.setItem('under', ulcer);
        });
  });
   $(document).ready(function() {
        $(".btn-login-submit").click(function(){
            var favorite = [];
            $.each($("input[name='bony1']:checked"), function(){            
                favorite.push($(this).val());
            });
			var relief = favorite.join(", ");
       //     alert(relief);
		  localStorage.setItem('pressure', relief);
        });
  });
   $(document).ready(function() {
        $(".btn-login-submit").click(function(){
            var favorite = [];
            $.each($("input[name='bony2']:checked"), function(){            
                favorite.push($(this).val());
            });
			var offload = favorite.join(", ");
       //     alert(offload);
		  localStorage.setItem('off', offload);
        });
  });
  

  
   // wound checkbox js end //
   
   
   // wound documentation post js start //
   	
   
function log_validateForm() {
	
	                                              var re_wound = localStorage.getItem('condition');
																 console.log(re_wound);
																 
		var visitlength = document.getElementById("w_length").value;
  if (visitlength == "")
  {
  document.getElementById("wnd_len").innerHTML= "Enter Wound Length";
return false;
  }
											
	 if (re_wound == 1 && visitlength == 0) {

document.getElementById("wnd_len").innerHTML= "Enter Valid Length";
return false;
   }
   document.getElementById("wnd_len").innerHTML= "" 

	var visitwidth = document.getElementById("w_width").value;
  if (visitwidth == "")
  {
  document.getElementById("wnd_wid").innerHTML= "Enter Wound Width";
return false;
  }
document.getElementById("wnd_wid").innerHTML= "" 	
											
	 if (re_wound == 1 && visitwidth == 0) {

document.getElementById("wnd_wid").innerHTML= "Enter Valid Width";
return false;
   }
   
   document.getElementById("wnd_wid").innerHTML= ""    
   
   var visitdepth = document.getElementById("w_depth").value;
  if (visitdepth == "")
  {
  document.getElementById("wnd_dep").innerHTML= "Enter Wound Depth";
return false;
  }
document.getElementById("wnd_dep").innerHTML= "" 	
											
	 if (re_wound == 1 && visitdepth == 0) {
document.getElementById("wnd_dep").innerHTML= "Enter Valid Depth";
return false;
   }
   document.getElementById("wnd_dep").innerHTML= ""    
   
   /*  var selpian = document.getElementById("w_notes").value;
  if (selpian == "")
  {
  document.getElementById("err3").innerHTML= "Please select your pain scale"; 
return false;
  }
   document.getElementById("err3").innerHTML= ""; 
  */
	// var storedid = localStorage.getItem('facilityId');
    var patient_id = localStorage.getItem('patientId');
   var pain = localStorage.getItem('slider_val');
  		
    log_myFunction();

  return false; 
	
}	

 function log_myFunction() {
	          	   									   
					 var woundid = localStorage.getItem('woundno');
									   
    //         var log_no = document.getElementById("no").value;
			   var wound_cntry = document.getElementById("country").value,
                    wound_apperanc = document.getElementById("appearance").value,
				    wound_mrgn = document.getElementById("margin").value,
         	  wound_drng = document.getElementById("drainage").value,
			   wound_type = document.getElementById("type").value,
			   wound_odr = document.getElementById("Odor").value,
			  wound_peri = document.getElementById("Peri-Wound").value,
			  wound_tunling = document.getElementById("tunneling").value,
			 
			  length = document.getElementById("w_length").value,
			  width = document.getElementById("w_width").value,
			  depth = document.getElementById("w_depth").value,
			  nutritional = document.getElementById("nutri").value,
			  team = document.getElementById("comp").value,
			 note = document.getElementById("w_notes").value;


  	     var sign_critical = localStorage.getItem('sign');			
         var sign_critical2 = localStorage.getItem('wou_sign');			
		 var under_ulcer = localStorage.getItem('under');			
		 var pressure_relief = localStorage.getItem('pressure');							
	     var offloading = localStorage.getItem('off');				      
		var pain = localStorage.getItem('slider_val');
		var checked_off = localStorage.getItem('offload_check');
		  //   console.log(localStorage.getItem('offload_check')) ;                                              
														  
		var f1img = localStorage.getItem('image1');
	  var f2img = localStorage.getItem('image2');
	  
	  var mywoundid = localStorage.getItem('mywound');
	  console.log(mywoundid);
	  var patient_id = localStorage.getItem('patientId');
	   var res_visit = localStorage.getItem('reasons');
	
										
												
												var re_wound = localStorage.getItem('condition');
																 console.log(re_wound);
															//		var greeting;
																	if (re_wound == 1) {
																//	 greeting = "Good day";
															//	   alert("Good day");
																    console.log("Good day");
         	  
           var loginForm ={ "patientId" :patient_id,"woundId" :woundid,"etiology" :wound_cntry,"woundBed" :wound_apperanc,"woundMarginDetails" :wound_mrgn,"drainageAmount" :wound_drng,"drainageType" :wound_type,"odor" :wound_odr,"periWound" :wound_peri,"underminingAndTunneling" :wound_tunling,"signsOfInfectionForBiofilm" : sign_critical,"signsOfInfectionForWOundInfection" : sign_critical2,"bonyProminenceUnderUlcer" : under_ulcer,"adequatePressureRelief" : pressure_relief,"complianceWithOffloading" : offloading,"woundMeasurementsLength" :length,"woundMeasurementswidth" :width,"woundMeasurementsdepth" :depth,"nutritionalAssessment" :nutritional,"compliancewithCarePlan" :team,"notes" :note,"painScale": pain,"offLoadingDeviceUsed":checked_off,"createdDate":localStorage.getItem('systemDate')}
		   
		  
       console.log(loginForm);

	  // console.log(storedid);
	  
	           $("#loading").show();	
           $.ajax({
		      
         			type: "POST",
     url: "https://"+host+"/secure/ewoundDetails/addWoundDocuments",

                                 'data':JSON.stringify(loginForm),
			                    Accept: "application/json, text/plain",
								contentType: "application/json; charset=latin1",
         						crossDomain : true,
								 beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', token );
    },
         						success: function (data) {
								console.log(data);
							$("#loading").hide();
						//		alert(data.message);
						localStorage.setItem('reason_re','0');
						
								document.getElementById("data_msg").innerHTML =data.message;
							   $('#onload').modal('show'); 	
							    $('.modal-backdrop').css('background-color','initial');
							   setTimeout(function(){  $('#onload').modal('hide') }, 2000);  
							    $("body").css({"height":"650px","overflow-y":"hidden"});
								 setTimeout(function(){ $("#debrid").show() }, 3000);  
							//	$("#debrid").show();	
							   
							  if(data.status == true){
								 $(".debrid").show();
								  //$(body).css('overflow-y','hidden');
				//	 setTimeout(function(){ window.location="treatment.html" }, 3000);   
							
								
                                }
         												
                                 }, 
								 error: function (data, textStatus, jqXHR) {
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
							 
							                                         } else {
																//		greeting = "Good evening";
																//		 alert("Good evening");
																		   console.log(" Good evening");
																		   
		var revisitdoc = { "patientId" :patient_id, "reason" :res_visit, "woundImg" : f1img, "postImg" : f2img,"woundId" :mywoundid,"etiology" :wound_cntry,"woundBed" :wound_apperanc,"woundMarginDetails" :wound_mrgn,"drainageAmount" :wound_drng,"drainageType" :wound_type,"odor" :wound_odr,"periWound" :wound_peri,"underminingAndTunneling" :wound_tunling,"signsOfInfectionForBiofilm" : sign_critical,"signsOfInfectionForWOundInfection" : sign_critical2,"bonyProminenceUnderUlcer" : under_ulcer,"adequatePressureRelief" : pressure_relief,"complianceWithOffloading" : offloading,"woundMeasurementsLength" :length,"woundMeasurementswidth" :width,"woundMeasurementsdepth" :depth,"nutritionalAssessment" :nutritional,"compliancewithCarePlan" :team,"notes" :note,"painScale": pain,"offLoadingDeviceUsed":checked_off,"createdDate":localStorage.getItem('systemDate')}
		 console.log(revisitdoc);
		
	  // console.log(storedid);
	            $("#loading").show();	
           $.ajax({
		      
         			type: "POST",
     url: "https://"+host+"/secure/ewoundDetails/Revisit",

                                 'data':JSON.stringify(revisitdoc),
			                    Accept: "application/json, text/plain",
								contentType: "application/json; charset=latin1",
         						crossDomain : true,
								 beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', token );
    },
         						success: function (data) {
								console.log(data);
							$("#loading").hide();
							localStorage.setItem('reason_revisitid',data.reasonForRevisitId);
								localStorage.setItem('reason_re','1');
								
							document.getElementById("data_msg").innerHTML =data.message;
							 	  $('#onload').modal('show'); 
								   $('.modal-backdrop').css('background-color','initial');
								setTimeout(function(){  $('#onload').modal('hide') }, 3000);   
                               $("body").css({"height":"650px","overflow-y":"hidden"});
								$("#debrid").show();	
                      						
							//  setTimeout(function(){ window.location="post_measurement.html" }, 3000);    
							//   if(data.status == true){
								   
						//	  window.location="treatment.html" ;
								
                               //    }
         												
                                 }, 
								 error: function (data, textStatus, jqXHR) {
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
							 
			 }
			
      }


	// wound documentation js end //
	
	// images upload //
//   });
	
	// Post measurement js start//
 function post_measurementdata(){

         var re_wound = localStorage.getItem('condition');
																 console.log(re_wound);
																 
		var visitlength = document.getElementById("p_length").value;
  if (visitlength == "")
  {
  document.getElementById("post_len").innerHTML= "Enter Wound Length";
return false;
  }
											
	 if (re_wound == 1 && visitlength == 0) {

document.getElementById("post_len").innerHTML= "Enter Valid Length";
return false;
   }
   document.getElementById("post_len").innerHTML= "" 

	var visitwidth = document.getElementById("p_width").value;
  if (visitwidth == "")
  {
  document.getElementById("post_wid").innerHTML= "Enter Wound Width";
return false;
  }
document.getElementById("post_wid").innerHTML= "" 	
											
	 if (re_wound == 1 && visitwidth == 0) {

document.getElementById("post_wid").innerHTML= "Enter Valid Width";
return false;
   }
   
   document.getElementById("post_wid").innerHTML= ""    
   
   var visitdepth = document.getElementById("p_depth").value;
  if (visitdepth == "")
  {
  document.getElementById("post_dep").innerHTML= "Enter Wound Depth";
return false;
  }
document.getElementById("post_dep").innerHTML= "" 	
											
	 if (re_wound == 1 && visitdepth == 0) {
document.getElementById("post_dep").innerHTML= "Enter Valid Depth";
return false;
   }
   document.getElementById("post_dep").innerHTML= ""    
   
 
    post_measuredetails();
  return false; 
}

 function post_measuredetails(){
   var length_post = document.getElementById("p_length").value,
			  width_post = document.getElementById("p_width").value,
			  depth_post = document.getElementById("p_depth").value;
			
		                                         	 var re_wound = localStorage.getItem('condition');
														console.log(re_wound);
															if (re_wound == 1) {
																
																    console.log("Good day");
			
			
			
var newpostdetails = { "woundMeasurementsLength":length_post,"woundMeasurementswidth":width_post,"woundMeasurementsdepth":depth_post,"woundId":localStorage.getItem('woundno'),"patientId": localStorage.getItem('patientId'),"underminingAndTunneling":"image.jpg"}
		 console.log(newpostdetails);
	//	alert(newpostdetails);
	          $("#loading").show();	
	 $.ajax({
		      
         			type: "POST",
 url: "https://"+host+"/secure/ewoundDetails/woundUpdate",

                               'data':JSON.stringify(newpostdetails),
			                    Accept: "application/json, text/plain",
								contentType: "application/json; charset=latin1",
         						crossDomain : true,
								 beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', token );
    },
         						success: function (data) {
								console.log(data);
								
					      $("#loading").hide();
							
							  if(data.status == true){
							 	document.getElementById("data_msg").innerHTML = data.message;

                                   $('#onload').modal('show'); 
								   $('.modal-backdrop').css('background-color','initial');
								setTimeout(function(){  $('#onload').modal('hide') }, 3000);   
                               $("body").css({"height":"650px","overflow-y":"hidden"});
								$("#vsee_confirm").show();
								
                                  }
         												
                                 }, 
								 error: function (data, textStatus, jqXHR) {
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
							 
																				 }else{
																			console.log(" Good evening");
			var postdetails = { "woundMeasurementsLength":length_post,"woundMeasurementswidth":width_post,"woundMeasurementsdepth":depth_post,"reasonForRevisitId":localStorage.getItem('reason_revisitid'),"patientId": localStorage.getItem('patientId'),"underminingAndTunneling":"image.jpg"}
		 console.log(postdetails);
	//	alert(postdetails);
	          $("#loading").show();	
	 $.ajax({
		      
         			type: "POST",
 url: "https://"+host+"/secure/ewoundDetails/revisitWoundUpdate",

                               'data':JSON.stringify(postdetails),
			                    Accept: "application/json, text/plain",
								contentType: "application/json; charset=latin1",
         						crossDomain : true,
								 beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', token );
    },
         						success: function (data) {
								console.log(data);
								
					      $("#loading").hide();
										
							
							  if(data.status == true){
							 	document.getElementById("data_msg").innerHTML = data.message;
			//	 $('#onload').modal('show');
          //		$('.modal-backdrop').css('background-color','initial');
		//		  setTimeout(function(){ window.location="user_provider.html" }, 3000);   

                   //        setTimeout(function(){  $('#onload').modal('hide') }, 3000);   
                   //          $("body").css({"height":"600px","overflow-y":"hidden"});
					//		$("#vsee_confirm").show();	
                                    $('#onload').modal('show'); 
								   $('.modal-backdrop').css('background-color','initial');
								setTimeout(function(){  $('#onload').modal('hide') }, 3000);   
                               $("body").css({"height":"650px","overflow-y":"hidden"});
								$("#vsee_confirm").show();
								
							}
                                 }, 
								 error: function (data, textStatus, jqXHR) {
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
									 }
	
	}
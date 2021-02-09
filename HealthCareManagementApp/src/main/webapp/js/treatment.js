var one;
var two;
var storedid = localStorage.getItem('facilityId');
  var patient_id = localStorage.getItem('patientId');
  var token = localStorage.getItem('tokens');
  //window.alert(patient_id); 

// treatment js start //

  function log_validateForm() {

		 log_myFunction();
  return false; 
	
}	

 function log_myFunction() {
	 
	                                     /*  var woundid = 18; */
										  
										 	  var mywoundid = localStorage.getItem('mywound');
										 var woundid = localStorage.getItem('woundno');
										// alert(localStorage.getItem('mywound'));
			 var patient_id = localStorage.getItem('patientId');
			 var storedid = localStorage.getItem('facilityId');
            var tretment_creams = localStorage.getItem('treat1');
            var tretment_cloth = localStorage.getItem('treat2');
             var tretment_gel = localStorage.getItem('treat3');	
             var tretment_adv = localStorage.getItem('treat4');	
             var tretment_dres = localStorage.getItem('treat5');				 
	 
	                                                            var re_wound = localStorage.getItem('condition');
																 console.log(re_wound);
														
																	if (re_wound == 1) {
																     console.log("Good day");
																	
																	
               var treatForm ={"creamsOrOintments":tretment_creams,"clothDressings":tretment_cloth,"gelDressings":tretment_gel,"advancedTherapies":tretment_adv,"foamDressings":tretment_dres,"patientId":localStorage.getItem('patientId'),"woundId": localStorage.getItem('woundno'),"adminId": localStorage.getItem('facilityId'),"adminRoleId": localStorage.getItem('adminroleid'),"masterRoleId":  localStorage.getItem('masterroleid'),"nurseId":  localStorage.getItem('nurseid'),"providerId": localStorage.getItem('providerid'),"createdDate":localStorage.getItem('systemDate')}
       console.log(treatForm);
	         
			   $("#loading").show();	
			   
           $.ajax({   
		      
         			type: "POST",
  url: "https://"+host+"/secure/treatment/add",

                                 'data':JSON.stringify(treatForm),
			                    Accept: "application/json, text/plain",
								contentType: "application/json; charset=latin1",
         						crossDomain : true,
								 beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', token );
    },
         						success: function (data) {
								 console.log(data);
							$("#loading").hide();	  
							 //   window.alert(data.message);
							 document.getElementById("data_msg").innerHTML =data.message;
							   $('#onload').modal('show'); 
							    $('.modal-backdrop').css('background-color','initial');
							   if(data.status == true){
								   setTimeout(function(){ window.location="list.html" }, 3000);  
								  
                                   }
         												
                                 }, 
								 error: function (data, textStatus, jqXHR) {
         	if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
                                 }
         						
                             });
							                                            }else{
																		 console.log("Good night");
																		 
								  var mywoundid = localStorage.getItem('mywound');											
		                    		
               var treatForm ={"creamsOrOintments":tretment_creams,"clothDressings":tretment_cloth,"gelDressings":tretment_gel,"advancedTherapies":tretment_adv,"foamDressings":tretment_dres,"patientId":localStorage.getItem('patientId'),"woundId": localStorage.getItem('mywound'),"adminId": localStorage.getItem('facilityId'),"adminRoleId": localStorage.getItem('adminroleid'),"masterRoleId":  localStorage.getItem('masterroleid'),"nurseId":  localStorage.getItem('nurseid'),"providerId": localStorage.getItem('providerid'),"createdDate":localStorage.getItem('systemDate')}
       console.log(treatForm);
	         
		//	 alert(treatForm);
			   $("#loading").show();	
			   
           $.ajax({
		      
         			type: "POST",
 url: "https://"+host+"/secure/treatment/updateTreatmentDetails",

                                 'data':JSON.stringify(treatForm),
			                    Accept: "application/json, text/plain",
								contentType: "application/json; charset=latin1",
         						crossDomain : true,
								 beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', token );
    },
         						success: function (data) {
								 console.log(data);
							$("#loading").hide();	  
						//	  window.alert(data.message);
							 document.getElementById("data_msg").innerHTML ="Treatment plan uploaded.";
							   $('#onload').modal('show'); 
							    $('.modal-backdrop').css('background-color','initial');
							   if(data.status == true){
								   setTimeout(function(){ window.location="list.html" }, 3000);  
								
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

         }
	// treatment js start //
  

 // wound checkbox js start //

  $(document).ready(function() {
        $("#treatment_btn").click(function(){
            var favorite = [];
            $.each($("input[name='cream']:checked"), function(){            
                favorite.push($(this).val());
            });
			var treat_cream = favorite.join(", ");
     // alert(treat_cream);
		  localStorage.setItem('treat1', treat_cream);
        });
  });
$(document).ready(function() {
        $("#treatment_btn").click(function(){
            var favorite = [];
            $.each($("input[name='cloth']:checked"), function(){            
                favorite.push($(this).val());
            });
			var treat_cloth = favorite.join(", ");
  //         alert(treat_cloth);
		  localStorage.setItem('treat2', treat_cloth);
        });
  });
 
  $(document).ready(function() {
        $("#treatment_btn").click(function(){
            var favorite = [];
            $.each($("input[name='gel']:checked"), function(){            
                favorite.push($(this).val());
            });
			var treat_gel = favorite.join(", ");
    //        alert(treat_gel);
		  localStorage.setItem('treat3', treat_gel);
        });
  });
   $(document).ready(function() {
        $("#treatment_btn").click(function(){
            var favorite = [];
            $.each($("input[name='adv']:checked"), function(){            
                favorite.push($(this).val());
            });
			var treat_adv = favorite.join(", ");
     //      alert(treat_adv);
		  localStorage.setItem('treat4', treat_adv);
        });
  });
   $(document).ready(function() {
        $("#treatment_btn").click(function(){
            var favorite = [];
            $.each($("input[name='dres']:checked"), function(){            
                favorite.push($(this).val());
            });
			var treat_dres = favorite.join(", ");
    //      alert(treat_dres);
		  localStorage.setItem('treat5', treat_dres);
        });
  });
   // wound checkbox js end //
   
   
 
	
	
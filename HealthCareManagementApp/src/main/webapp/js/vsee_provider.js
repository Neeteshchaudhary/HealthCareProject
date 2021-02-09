$(function() {

	
 //  var facilityid = localStorage.getItem('facilityId');
var patient_id = localStorage.getItem('patientId');
 var token = localStorage.getItem('tokens');
 
// console.log(localStorage.getItem('vs_usr'));
// console.log(localStorage.getItem('vs_password'));

	//console.log(facilityid);	
	console.log(token);	
  $.ajax({  
	            
					 type: "GET",
                  url: "https://"+host+"/secure/allVSeeProviderUser/"+localStorage.getItem('facilityId'),
   
		 beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', token );
         },
						success: function (data) {
						        
                            console.log(data);
								 var providerlist = data;		
								 
 var x="" ;  
		if(providerlist.length == 0){
		
        x += "<tr style='clear:both;'><td style='display:none;'></td><td style='' colspan='4'><h4 style=''>"+'No Provider Found !'+"</h4></td></tr>"; 
        document.getElementById("vsee_list").innerHTML = x;

                                     }else{
for (i in providerlist) {
//console.log(providerlist[i].vSeeUserName);
   //   var str = providerlist[i].vSeeUserName;
   //    var res = str.slice(13);
   //providerlist[i].vSeeUserName.slice(13)
	
var visitor_id = localStorage.getItem('providerid');

     if(providerlist[i].providerId == visitor_id ){
	 
	 }
									 else{


 x += "<tr id ='d1' style='clear:both;' value='"+providerlist[i].providerId+"'><td style='color:transparent;width:20px;'>" + providerlist[i].providerId + "</td><td>"+ providerlist[i].fName + '&nbsp;'+ providerlist[i].lName  + "</td><td style='color:transparent;'>" + providerlist[i].vSeeUserName + "</td></tr>"; 

document.getElementById("vsee_list").innerHTML = x;

        var table = document.getElementById('dev-table');
            for(var i = 1; i < table.rows.length; i++)
                {
                  table.rows[i].onclick = function()
                    {
				//	   var value=$(this).find('td:first').html();
   document.getElementById("fs").value = this.cells[2].innerHTML;
var patientid1= document.getElementById("fs").value;
 localStorage.setItem('vsee_called', patientid1);			
//alert(patientid1);
    vsee_calling();
//localStorage.setItem('patientId', patientid1);
//window.location="past_details.html";
                    };
                }  
   }  
   }  
   }
		}, error: function (data, textStatus, jqXHR) {
		console.log(data);
					if(data.statusText == "error") {
				document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}		
                        }
						
                    }); 
					
	 $.ajax({     
	            
					 type: "GET",
                  url: "https://"+host+"/secure/allVSeeNurses/"+localStorage.getItem('facilityId'),
   
		 beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', token );
         },
						success: function (data) {
						        
                            console.log(data);
								 var vseelist = data;		
								 
 var x="" ;  
		if(vseelist.length == 0){
		
        x += "<tr style='clear:both;'><td style='display:none;'></td><td style='' colspan='4'><h4 style=''>"+'No Nurse Found !'+"</h4></td></tr>"; 
        document.getElementById("vsee_nurses").innerHTML = x;

                                     }else{
for (i in vseelist) {

var visitor_id = localStorage.getItem('nurseid');
 if(vseelist[i].nurseId == visitor_id ){
	  }
		 else{

 x += "<tr id ='d1' style='clear:both;' value='"+vseelist[i].nurseId+"'><td style='color:transparent;width:20px;'>" + vseelist[i].nurseId + "</td><td>"+ vseelist[i].fName + '&nbsp;'+ vseelist[i].lName  + "</td><td style='color:transparent;'>" + vseelist[i].vSeeUserName + "</td></tr>"; 

document.getElementById("vsee_nurses").innerHTML = x;

        var table = document.getElementById('dev-table2');
            for(var i = 1; i < table.rows.length; i++)
                {
                  table.rows[i].onclick = function()
                    {
				
   document.getElementById("fs").value = this.cells[2].innerHTML;
var patientid1= document.getElementById("fs").value;
 localStorage.setItem('vsee_called', patientid1);			
   vsee_calling();

                    };
                }  
   }  
   }  
   }
		}, error: function (data, textStatus, jqXHR) {
			if(data.statusText == "error") {
				document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}	
                        }
						
                    }); 
					
					
					
});	


function vsee_calling() {

 var token = localStorage.getItem('tokens');


           var vseecaller ={ "caller":"epiphaneedev+"+localStorage.getItem('vs_usr'),"callerpwd":localStorage.getItem('vs_password'),"callingTo": localStorage.getItem('vsee_called')}
       console.log(vseecaller);
	          
			     $("#loading").show();	
	       
           $.ajax({
		      
    type: "POST",
 url: " https://"+host+"/secure/makeVseeCall",

                                 'data':JSON.stringify(vseecaller),
			                    Accept: "application/json, text/plain",
								contentType: "application/json; charset=latin1",
		beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', token );
         },
         						crossDomain : true,
         						success: function (data) {
								 console.log(data);
					console.log(data.data[0]);
					var vseecal = data.data[0];
								window.location = vseecal; 
								setTimeout(function(){ window.location = "treatment.html"}, 60000); 
								//  window.location = "treatment.html"; 
							//	window.location.replace(vseecal);
						
                                 }, 
								 error: function (data, textStatus, jqXHR) {
									console.log(data);  
		 	if(data.statusText == "error") {
				document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
                                 }
         						
                             });
							 }
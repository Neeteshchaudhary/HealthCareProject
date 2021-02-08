var res_visit = localStorage.getItem('reasons');
 var patient_id = localStorage.getItem('patientId');
 var token = localStorage.getItem('tokens');
//  console.log(res_visit);
 
 
   $(document).ready(function(e){

				$("#deb_yes").click(function(){
	$("#wnd_imghide").css("display", "block");
				localStorage.setItem('debr_yes', "yes");

				});
			$("#deb_no").click(function(){
	
		//		$("#wnd_imghide").css("display", "none");		
			//	 localStorage.setItem('debr_yes', "No");
			//	  window.location="user_provider.html";
			
			$("#debrid").css("display", "none");
								$('.modal-backdrop').css('background-color','initial');
								setTimeout(function(){  $('#onload').modal('hide') }, 3000);   
                               $("body").css({"height":"650px","overflow-y":"hidden"});
							   $("#vsee_confirm").css("display", "block");
			
			
			});
		});
 
$(document).ready(function (e) {
$("#uploadimage").on('submit',(function(e) {
	
     var gender = document.getElementsByName('deb');
				  var genValue = false;
				  for(var i=0; i<gender.length;i++){
				   if(gender[i].checked == true){
					genValue = true; 
					
				   }
				  }
				  if(!genValue){

				   document.getElementById("radio_err").innerHTML= "Please select Debridement"; 
				   return false;
				  }
	
//           	 alert("you Choosed gender ...........");
	 document.getElementById("radio_err").innerHTML= "";
e.preventDefault();
$("#message").empty();

                            
   var formData = new FormData();
 

                                                          var debrmntimg = localStorage.getItem('img_cndtn');
														//		 console.log(debrmntimg);
																var formData = new FormData();
  var Img2 = $('input[name="file2"]').get(0).files[0];
			
if (Img2==null || Img2==""){ 
 $("#loading1").hide();	 

   document.getElementById("wnd_err").innerHTML= "Please select post images";
  return false;  
}


 
formData.append('postImg', Img2);

			 $("#loading1").show();				 
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
			
				// console.log(data.responseJSON);
					var imgs = data.responseJSON;
			
				var img_nm2 = data.responseJSON.postImg;
				console.log(img_nm2);
					localStorage.setItem('image2', img_nm2); 
				
				$("#loading1").hide();
	//	 alert("Image uploaded Sucessfully");
		 
		    $('.fade .bs-example-modal-lg').css({'opacity':'1','display':'block'});
					 document.getElementById("data_msg").innerHTML = "Image uploaded Successfully";
							   $('#onload').modal('show'); 
                   setTimeout(function(){$('#onload').modal('hide')}, 3000); 
		 
	
														    var re_visitidvalue = localStorage.getItem('reason_re');
																 console.log(re_visitidvalue);
														
																	if (re_visitidvalue == 1) {
																		
															
																
	var detailForm = {"reasonForRevisitId": localStorage.getItem('reason_revisitid'),"postImg":img_nm2 }

console.log(detailForm);
   $.ajax({
		      
         			type: "POST",
   url: "https://"+host+"/secure/ewoundDetails/updaterevisitPostImg", 

                                 'data':JSON.stringify(detailForm),
			                    Accept: "application/json, text/plain",
								contentType: "application/json; charset=latin1",
         						crossDomain : true,
								 beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', token );
    },
         						success: function (data) {
								console.log(data);
								
								
			 setTimeout(function(){ window.location="post_measurement.html" }, 3000);  			
							   if(data.status == true){
       setTimeout(function(){ window.location="post_measurement.html" }, 3000);  
								
								 }
         												
                                 }, 
								 error: function (data, textStatus, jqXHR) {
								 if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			              }
			                      }
                             });  
					} else {
					
					  var detailForm = {"woundId": localStorage.getItem('woundno'),"postImg":img_nm2}

                console.log(detailForm);
              $.ajax({
		      
         			type: "POST",
                     url: "https://"+host+"/secure/ewoundDetails/updatePostImg", 

                                 'data':JSON.stringify(detailForm),
			                    Accept: "application/json, text/plain",
								contentType: "application/json; charset=latin1",
         						crossDomain : true,
								 beforeSend : function( xhr ) {
                           xhr.setRequestHeader( 'Authorization', token );
                                  },
         						success: function (data) {
								console.log(data);
								
			 setTimeout(function(){ window.location="post_measurement.html" }, 3000);  			
							   if(data.status == true){
        setTimeout(function(){ window.location="post_measurement.html" }, 3000);  
								
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
							},error: function (data, textStatus, jqXHR) {
         	if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
                                 }
	});	


}));
});

// Function to preview image after validation
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





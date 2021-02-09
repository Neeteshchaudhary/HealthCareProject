var res_visit = localStorage.getItem('reasons');
 var patient_id = localStorage.getItem('patientId');
 var token = localStorage.getItem('tokens');
//  console.log(res_visit);
       

function mypostimages(){
	

}

			 
$(document).ready(function (e) {
$("#uploadimage").on('submit',(function(e) {
	
 var c_img = document.forms["myForm"]["file4"].value;				
if (c_img==null || c_img==""){  
 
 document.getElementById("wnd_err").innerHTML= "Please select wound image";  
  return false;  
}  
       
e.preventDefault();
$("#message").empty();

                            
   var formData = new FormData();
 

                                                          var debrmntimg = localStorage.getItem('img_cndtn');
																	var formData = new FormData();
																 var Img1 = $('input[name="file4"]').get(0).files[0];  
																 console.log(Img1);
																
									
																
                                    formData.append('woundImg', Img1);


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
			
					var imgs = data.responseJSON;
				var img_nm1 = data.responseJSON.woundImg;
		
					console.log(img_nm1);
			localStorage.setItem('image1', img_nm1); 
			$("#loading1").hide();
			//   alert("Image uploaded Sucessfully");
				 
				 
				    $('.fade .bs-example-modal-lg').css({'opacity':'1','display':'block'});
					 document.getElementById("data_msg").innerHTML = "Image uploaded Successfully";
							//   $('#onload').modal('show'); 
                  
			 setTimeout(function(){$('#onload').modal('hide')}, 3000); 
																 var re_wound = localStorage.getItem('condition');
																 console.log(re_wound);
															//		var greeting;
                                                       if (re_wound == 1) {	
																
		  var patient_id = localStorage.getItem('patientId');
 var res_visit = localStorage.getItem('reasons');
 console.log(res_visit);

var detailForm ={"patientId":patient_id,"nurseId": localStorage.getItem('nurseid'),"providerId":localStorage.getItem('providerid'),"adminId":localStorage.getItem('mainroleid'),"masterRoleId":localStorage.getItem('masterroleid'),"adminRoleId":localStorage.getItem('adminroleid'),"reason":res_visit,"woundLocationImg":"null","woundImg":img_nm1,"createdDate":localStorage.getItem('systemDate')};
	 
												console.log(detailForm);
                                                       
   $.ajax({
		      
         			type: "POST",
  url: "https://"+host+"/secure/ewoundDetails/addReasonImgs",

                                 'data':JSON.stringify(detailForm),
			                    Accept: "application/json, text/plain",
								contentType: "application/json; charset=latin1",
         						crossDomain : true,
								 beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', token );
    },
         						success: function (data) {
								console.log(data);
								
					 			var wnd_id = data.woundId;
							localStorage.setItem('woundno', wnd_id);
							
			 setTimeout(function(){ window.location="wound_document.html" }, 3000);  			
							   if(data.status == true){
	  setTimeout(function(){ window.location="wound_document.html" }, 3000);  
								
								 }
         												
                                 }, 
								 error: function (data, textStatus, jqXHR) {
         								if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
                                 }
                             });  
				
																		 }else {
																  window.location="wound_document.html" ;
																		}
			  }
      });								  
								
return false; 
//  }											
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





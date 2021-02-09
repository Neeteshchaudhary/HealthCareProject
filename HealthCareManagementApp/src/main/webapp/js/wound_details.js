var one;
var two;
var storedid = localStorage.getItem('facilityId');
  var patient_id = localStorage.getItem('patientId');
  var token = localStorage.getItem('tokens');
 // window.alert(token);   

// wound visits history details patient start//

	var ids = [];
	var imgs = [];
	var loc_img =[];

$(function() {
	
		var patient_id = localStorage.getItem('patientId');
		var token = localStorage.getItem('tokens');
		var wound_details = {	"woundId": localStorage.getItem('mywound'),"patientId":patient_id,"createdDate":localStorage.getItem('mywoundvis')}
	console.log(wound_details);
	     $.ajax({
				type: "POST",
                url: "https://"+host+"/secure/ewoundDetails/getPatientHistory",
				
                  'data':JSON.stringify(wound_details),
			                    Accept: "application/json, text/plain",
								contentType: "application/json; charset=latin1",
         						crossDomain : true,      
                beforeSend : function( xhr ) {
                    xhr.setRequestHeader( 'Authorization', token );
                },
         		success: function (data) {
                  
                    console.log(data);
					// alert(oldhis.etiology);
var x ="" ;                          
 

 if(data.etiology == "" || data.etiology == null || data.etiology == "undefined" || data.etiology == "--No-selection--"){
	 data.etiology = "N/A";
	}
	if(data.woundMarginDetails == "" || data.woundMarginDetails == null || data.woundMarginDetails == "undefined" || data.woundMarginDetails == "--No-selection--"){
	  data.woundMarginDetails = "N/A";
	}
	if(data.drainageAmount == "" || data.drainageAmount == null || data.drainageAmount == "undefined" || data.drainageAmount == "--No-selection--"){
	  data.drainageAmount = "N/A";
	}
	if(data.nutritionalAssessment == "" || data.nutritionalAssessment == null || data.nutritionalAssessment == "undefined" || data.nutritionalAssessment == "--No-selection--"){
	  data.nutritionalAssessment = "N/A";
	}
	if(data.signsOfInfectionForBiofilm == "" || data.signsOfInfectionForBiofilm == null || data.signsOfInfectionForBiofilm == "undefined" || data.signsOfInfectionForBiofilm == "--No-selection--"){
	  data.signsOfInfectionForBiofilm = "N/A";
	}
	if(data.complianceWithOffloading == "" || data.complianceWithOffloading == null || data.complianceWithOffloading == "undefined" || data.complianceWithOffloading == "--No-selection--"){
	  data.complianceWithOffloading = "N/A";
	}
	if(data.bonyProminenceUnderUlcer == "" || data.bonyProminenceUnderUlcer == null || data.bonyProminenceUnderUlcer == "undefined" || data.bonyProminenceUnderUlcer == "--No-selection--"){
	  data.bonyProminenceUnderUlcer = "N/A";
	}
	if(data.woundBed == "" || data.woundBed == null || data.woundBed == "undefined" || data.woundBed == "--No-selection--"){
	  data.woundBed = "N/A";
	}
	if(data.signsOfInfectionForWOundInfection == "" || data.signsOfInfectionForWOundInfection == null || data.signsOfInfectionForWOundInfection == "undefined" || data.signsOfInfectionForWOundInfection == "--No-selection--"){
	  data.signsOfInfectionForWOundInfection = "N/A";
	} 
	if(data.adequatePressureRelief == "" || data.adequatePressureRelief == null || data.adequatePressureRelief == "undefined" || data.adequatePressureRelief == "--No-selection--"){
	  data.adequatePressureRelief = "N/A";
	}
	if(data.drainageType == "" || data.drainageType == null || data.drainageType == "undefined" || data.drainageType == "--No-selection--"){
	  data.drainageType = "N/A";
	}
	if(data.periWound == "" || data.periWound == null || data.periWound == "undefined" || data.periWound == "--No-selection--"){
	  data.periWound = "N/A";
	}
	if(data.offLoadingDeviceUsed == "" || data.offLoadingDeviceUsed == null || data.offLoadingDeviceUsed == "undefined" || data.offLoadingDeviceUsed == "--No-selection--"){
	  data.offLoadingDeviceUsed = "N/A";
	}
	if(data.compliancewithCarePlan == "" || data.compliancewithCarePlan == null || data.compliancewithCarePlan == "undefined" || data.compliancewithCarePlan == "--No-selection--"){
	  data.compliancewithCarePlan = "N/A";
	}
	if(data.odor == "" || data.odor == null || data.odor == "undefined" || data.odor == "--No-selection--"){
	  data.odor = "N/A";
	}
	if(data.createdDate == "" || data.createdDate == null || data.createdDate == "undefined"){
	  data.createdDate = "N/A";
	} 
	if(data.notes == "" || data.notes == null || data.notes == "undefined"){
	  data.notes = "N/A";
	} 
	if(data.woundMeasurementsLength == "" || data.woundMeasurementsLength == null || data.woundMeasurementsLength == "undefined"){
	  data.woundMeasurementsLength = "N/A";
	} 
	if(data.woundMeasurementswidth == "" || data.woundMeasurementswidth == null || data.woundMeasurementswidth == "undefined"){
	  data.woundMeasurementswidth = "N/A";
	} 
	if(data.woundMeasurementsdepth == "" || data.woundMeasurementsdepth == null || data.woundMeasurementsdepth == "undefined"){
	  data.woundMeasurementsdepth = "N/A";
	} 

var i = 0;

                       imgs.push(data.woundImg);
					  loc_img.push(data.woundLocationImg);
					  var an =data.woundImg;  
                      
                        x += "<div class='col-md-2'></div><div class='col-md-9 dis_details'>" +"<h4></h4><p><span id='myint'>Etiology </span><span class='det_coln'> : </span><span id='myintdata'> "+ data.etiology +"</span></p><p><span id='myint'>Wound Appearance</span><span class='det_coln'> : </span><span id='myintdata'> "+ data.woundBed +"</span></p><p><span id='myint'>"+"Margin Details </span><span class='det_coln'> : </span><span id='myintdata'>"+ data.woundMarginDetails +"</span></p><p><span id='myint'>"+"Drainage Amount </span> <span class='det_coln'> : </span><span id='myintdata'> "+ data.drainageAmount +"</span></p><p><span id='myint'>"+"Drainage Type </span><span class='det_coln'> : </span><span id='myintdata'> "+ data.drainageType +"</span></p><p><span id='myint'>"+"Nutritional Assessment </span><span class='det_coln'> : </span><span id='myintdata'> "+ data.nutritionalAssessment +"</span></p><p><span id='myint'>"+"Odor </span><span class='det_coln'> : </span><span id='myintdata'> "+ data.odor +"</span></p><p><span id='myint'>"+"Peri Wound </span><span class='det_coln'> : </span><span id='myintdata'> "+ data.periWound +"</span></p><div class='row'><p><span id='myint'>"+"Diagnostic Criteria For Critical Colonization/Biofilm </span><span class='det_coln'> : </span><span id='myintdata'> "+ data.signsOfInfectionForBiofilm +"</span></p></div><div class='row'><p><span id='myint'>"+"Off Loading Device Used </span><span class='det_coln'> : </span><span id='myintdata'> "+ data.offLoadingDeviceUsed +"</span></p></div><div class='row'><p><span id='myint'>"+"Diagnostic Criteria For Wound Infection </span><span class='det_coln'> : </span><span id='myintdata'> "+ data.signsOfInfectionForWOundInfection +"</span></p></div><p><span id='myint'>"+"Adequate Pressure Relief </span><span class='det_coln'> : </span><span id='myintdata'> "+ data.adequatePressureRelief +"</span></p><p><span id='myint'>"+"Bony Prominence Under Ulcer </span><span class='det_coln'> : </span><span id='myintdata'> "+ data.bonyProminenceUnderUlcer +"</span></p><p><span id='myint'>"+"Compliance With Offloading </span><span class='det_coln'> : </span><span id='myintdata'> "+ data.complianceWithOffloading +"</span></p><p><span id='myint'>"+"Compliance with Care Plan</span><span class='det_coln'> : </span><span id='myintdata'> "+ data.compliancewithCarePlan +"</span></p> <p><span id='myint'>Length </span><span class='det_coln'> : </span><span id='myintdata'>"+ data.woundMeasurementsLength+"</span></p><p><span id='myint'>"+"Width </span><span class='det_coln'> : </span><span id='myintdata'> "+ data.woundMeasurementswidth +"</span></p><p><span id='myint'>"+"Depth </span><span class='det_coln'> : </span><span id='myintdata'>"+ data.woundMeasurementsdepth +"</span></p><p><span id='myint'>"+"Pain Scale </span> <span class='det_coln'> : </span><span id='myintdata'> "+ data.painScale +"</span></p><p><span id='myint'>"+"Notes</span> <span class='det_coln'> : </span><span id='myintdata'> "+ data.notes +"</span></p> <p><span id='myint' class='img_nm'>"+"Wound Image <span class='img_coln'> : </span></span><div class='imag_pop' style='background-image: url(images/Noimage.png);background-size: cover;height: 82px;width:120px;'><span id='imagess_"+i+"' style='' value='"+ data.woundImg +"'></span></div></p> <p><span id='myint' class='img_nm'>"+"Post Image <span class='img_coln'> : </span></span><div class='imag_pop' style='background-image: url(images/Noimage.png); background-size: cover;height: 82px;width:120px;'><span id='imagess1_"+i+"' style='' value='"+ data.woundImg +"'></div></p>   <p><span id='myint' class='img_nm'>"+" Wound Location Image<span class='img_coln'> : </span></span><div class='imag_pop' style='background-image: url(images/Noimage.png); background-size: cover;height: 82px;width:120px;'><span id='imagess2_"+i+"' style='' value='"+ data.woundLocationImg +"'></div></p><p><span id='myint' class='img_nm'>"+" Undermining And Tunneling<span class='img_coln'> : </span></span><div class='imag_pop' style='background-image: url(images/Noimage.png); background-size: cover;height: 82px;width:120px;'><span id='imagess3_"+i+"' style='' value='"+ data.underminingAndTunneling +"'></div></p><h3>Treatment Details</h3><div class='row'><p><span id='myint'>"+"Advanced Therapies </span><span class='det_coln'> : </span><span id='myintdata'> <span id='treat1'></span></span></p></div><div class='row'><p><span id='myint'>"+"Cloth Dressings  </span><span class='det_coln'> : </span><span id='myintdata'> <span id='treat2'></span></span></p></div><div class='row'><p><span id='myint'>"+" Creams Or Ointments </span><span class='det_coln'> : </span><span id='myintdata'> <span id='treat3'></span></span></p></div><div class='row'><p><span id='myint'>"+" Foam Dressings </span><span class='det_coln'> : </span><span id='myintdata'> <span id='treat4'></span></span></p></div><div class='row'><p><span id='myint'>"+" Gel Dressings </span><span class='det_coln'> : </span><span id='myintdata'> <span id='treat5'></span></span></p></div></div>"; 
					
						
                           document.getElementById("demo1").innerHTML = x;
		
		
//  }             

// Treatment Details //
	var treatments = { "woundId" :localStorage.getItem('mywound'),"patientId" :patient_id,"createdDate":localStorage.getItem('mywoundvis')}
	console.log(treatments);
		
	$.ajax({
						type: "POST",
                        url: "https://"+host+"/secure/treatment/getTreatment",
						
						 'data':JSON.stringify(treatments),
			                    Accept: "application/json, text/plain",
								contentType: "application/json; charset=latin1",
						
         						crossDomain : true,
        beforeSend : function( xhr ) {
            xhr.setRequestHeader( 'Authorization', token );
        },
						success: function (data) {
                           
							console.log(data);
							
	if(data.advancedTherapies == "" || data.advancedTherapies == null){
	  data.advancedTherapies = "N/A";
	}
	if(data.clothDressings == "" || data.clothDressings == null){
	  data.clothDressings = "N/A";
	}
	if(data.creamsOrOintments == "" || data.creamsOrOintments == null){
	  data.creamsOrOintments = "N/A";
	}
	if(data.foamDressings == "" || data.foamDressings == null){
	  data.foamDressings = "N/A";
	}
	if(data.gelDressings == "" || data.gelDressings == null){
	  data.gelDressings = "N/A";
	}
							
							
 document.getElementById("treat1").innerHTML = data.advancedTherapies;
document.getElementById("treat2").innerHTML = data.clothDressings;
document.getElementById("treat3").innerHTML = data.creamsOrOintments;
document.getElementById("treat4").innerHTML = data.foamDressings;
document.getElementById("treat5").innerHTML = data.gelDressings; 

                        }, error: function (data, textStatus, jqXHR) { 
				if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
				 }		
    }); 
	     



	 
showImgs(0);

fetch('https://'+host+'/secure/woundImg/image/'+data.postImg, { headers: { "Authorization":  token } })

 .then(response => response.blob())
 .then(blob => {
  let url = URL.createObjectURL(blob);
	
 var img1 = document.createElement("img");
   img1.src = url;
   img1.width = "120";
   img1.height = "85"; 
   img1.id = "post_img1";
   img1.alt = "Post Image";
  img1.className = "post_img";
   var post_img = document.getElementsByClassName('post_img');
 document.getElementById("imagess1_"+post_img.length).appendChild(img1);
   
   var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
post_img1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var close_btn = document.getElementById("close");

close_btn.onclick = function() { 
    modal.style.display = "none";
} 
   
    });
	
	
	 fetch('https://'+host+'/secure/woundImg/image/'+loc_img[i], { headers: { "Authorization":  token } })

 .then(response => response.blob())
 .then(blob => {
  let url = URL.createObjectURL(blob);
	
 var img1 = document.createElement("img");
   img1.src = url;
   img1.width = "120";
   img1.height = "85"; 
   img1.id = "location_img1";
   img1.alt = "wound Location Image";
  img1.className = "location_img";
   var location_img = document.getElementsByClassName('location_img');
 document.getElementById("imagess2_"+location_img.length).appendChild(img1);
   
   var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
location_img1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var close_btn = document.getElementById("close");

close_btn.onclick = function() { 
    modal.style.display = "none";
} 
  
    });
	
	fetch('https://'+host+'/secure/woundImg/image/'+"bfc7aeb6-3475-4571-8191-fd3489ca12b0.jpg", { headers: { "Authorization":  token } })

 .then(response => response.blob())
 .then(blob => {
  let url = URL.createObjectURL(blob);
	
 var img1 = document.createElement("img");
   img1.src = url;
   img1.width = "120";
   img1.height = "85"; 
   img1.alt = "undermining And Tunneling Image";
    img1.id = "tunneling_img1";
  img1.className = "tunneling_img";
   var tunneling_img = document.getElementsByClassName('tunneling_img');
 document.getElementById("imagess3_"+tunneling_img.length).appendChild(img1);
   
   var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
tunneling_img1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var close_btn = document.getElementById("close");

close_btn.onclick = function() { 
    modal.style.display = "none";
} 
    });
}

       /*  }, error: function (data, textStatus, jqXHR) {
							
                        }		
        }); */


})





}); 

function showImgs(i) {

fetch('https://'+host+'/secure/woundImg/image/'+imgs[i], { headers: { "Authorization":  token } })

 .then(response => response.blob())
 .then(blob => {
  let url = URL.createObjectURL(blob);
	
 var img1 = document.createElement("img");
   img1.src = url;
   img1.width = "120";
   img1.height = "85"; 
   img1.id = "wound_img1";
   img1.alt = "wound Image";
   img1.className = "wound_img";
   var wound_img = document.getElementsByClassName('wound_img');
 document.getElementById("imagess_"+wound_img.length).appendChild(img1);
  
  
  var modal = document.getElementById('myModal');
//var img = document.getElementById('wound_img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
wound_img1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var close_btn = document.getElementById("close");

close_btn.onclick = function() { 
    modal.style.display = "none";
} 
   });

}


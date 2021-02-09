var one;
var two;
var storedid = localStorage.getItem('facilityId');
  var patient_id = localStorage.getItem('patientId');
  var token = localStorage.getItem('tokens');
 // window.alert(token);   
$(function() {
	
	 var res_visit = localStorage.getItem('reasons');
     var f1img = localStorage.getItem('image1');
	  var f2img = localStorage.getItem('image2');
  
 });

 // reason for visit start //
 
function fun1(){
	
  var new_reason = document.getElementById("add_fn").value;
  var re_wund = 1;
  
  if (new_reason == "")
  {
document.getElementById("err").innerHTML= "Enter Reason for visit!";
return false;
  }

   document.getElementById("err").innerHTML= ""
   
   // window.alert(new_reason);
	
      localStorage.setItem('reasons', new_reason);
      localStorage.setItem('condition', re_wund);
  
   window.location="wound_images.html" ;
  return false;
}

function fun2(){

	var new_reason = document.getElementById("add_ln").value;
	var re_wund = 0;

	
  if (new_reason == "")
  {
  
document.getElementById("err1").innerHTML= "Enter Reason for Revisit!";
return false;
  }else{
document.getElementById("err1").innerHTML= ""
  localStorage.setItem('reasons', new_reason);
  localStorage.setItem('condition', re_wund);
      $("#myModal1").css("display","none") 
	//  document.getElementById("myModal13").className = "In";
    $("#myModal13").css({"display":"block","opacity":"1"}) 

  }
 //   window.alert(new_reason);
	
    
 // $(this).css("display","none")
//  window.location="wound_images.html";
  return false;
}
 // reason foe visit end //

// wound history details for old patient  start//

	var ids = [];
	var imgs = [];
	

$(function() {

                  
		var woundid = localStorage.getItem('woundno');
		var patient_id = localStorage.getItem('patientId');
		var token = localStorage.getItem('tokens');
	
	     $.ajax({
				type: "GET",
                url: "https://"+host+"/secure/ewoundDetails/woundHistory/"+ localStorage.getItem('patientId'),
                       
                beforeSend : function( xhr ) {
                    xhr.setRequestHeader( 'Authorization', token );
                },
         		success: function (data) {
                    var oldhis = data;	
                    console.log(oldhis);
					
                     if(oldhis.length == 0){
					
						 document.getElementById("myres").innerHTML = "No wounds found.";
                      				 
               //        alert("NO Patient details Found !");
                                     }
									 else{
							
					
 var x ="" ;                          
  for (i in oldhis) {
                   // alert(">>"+i);
					//alert("->>>>>>"+oldhis[i].woundImg);
									
	//	<p>"+"DrainageType : "+ oldhis[i].drainageType +"</p>

if(oldhis[i].etiology == "" || oldhis[i].etiology == null || oldhis[i].etiology == "--No-selection--" || oldhis[i].etiology == "undefined"){
	  oldhis[i].etiology = "N/A";
	}
	if(oldhis[i].woundMarginDetails == "" || oldhis[i].woundMarginDetails == null || oldhis[i].woundMarginDetails == "--No-selection--" || oldhis[i].woundMarginDetails == "undefined"){
	  oldhis[i].woundMarginDetails = "N/A";
	}
	if(oldhis[i].drainageAmount == "" || oldhis[i].drainageAmount == null || oldhis[i].drainageAmount == "--No-selection--" || oldhis[i].drainageAmount == "undefined"){
	  oldhis[i].drainageAmount = "N/A";
	}
	if(oldhis[i].nutritionalAssessment == "" || oldhis[i].nutritionalAssessment == null || oldhis[i].nutritionalAssessment == "--No-selection--" || oldhis[i].nutritionalAssessment == "undefined"){
	  oldhis[i].nutritionalAssessment = "N/A";
	}
	if(oldhis[i].signsOfInfectionForBiofilm == "" || oldhis[i].signsOfInfectionForBiofilm == null || oldhis[i].signsOfInfectionForBiofilm == "--No-selection--" || oldhis[i].signsOfInfectionForBiofilm == "undefined"){
	  oldhis[i].signsOfInfectionForBiofilm = "N/A";
	}
	if(oldhis[i].complianceWithOffloading == "" || oldhis[i].complianceWithOffloading == null || oldhis[i].complianceWithOffloading == "--No-selection--" || oldhis[i].complianceWithOffloading == "undefined"){
	  oldhis[i].complianceWithOffloading = "N/A";
	}
	if(oldhis[i].bonyProminenceUnderUlcer == "" || oldhis[i].bonyProminenceUnderUlcer == null || oldhis[i].bonyProminenceUnderUlcer == "--No-selection--" || oldhis[i].bonyProminenceUnderUlcer == "undefined"){
	  oldhis[i].bonyProminenceUnderUlcer = "N/A";
	}
	if(oldhis[i].woundBed == "" || oldhis[i].woundBed == null || oldhis[i].woundBed == "--No-selection--" || oldhis[i].woundBed == "undefined"){
	  oldhis[i].woundBed = "N/A";
	}
	if(oldhis[i].signsOfInfectionForWOundInfection == "" || oldhis[i].signsOfInfectionForWOundInfection == null || oldhis[i].signsOfInfectionForWOundInfection == "--No-selection--" || oldhis[i].signsOfInfectionForWOundInfection == "undefined"){
	  oldhis[i].signsOfInfectionForWOundInfection = "N/A";
	}
	if(oldhis[i].adequatePressureRelief == "" || oldhis[i].adequatePressureRelief == null || oldhis[i].adequatePressureRelief == "--No-selection--" || oldhis[i].adequatePressureRelief == "undefined"){
	  oldhis[i].adequatePressureRelief = "N/A";
	}
	if(oldhis[i].drainageType == "" || oldhis[i].drainageType == null || oldhis[i].drainageType == "--No-selection--" || oldhis[i].drainageType == "undefined"){
	  oldhis[i].drainageType = "N/A";
	}
	
	if(oldhis[i].periWound == "" || oldhis[i].periWound == null || oldhis[i].periWound == "--No-selection--" || oldhis[i].periWound == "undefined"){
	  oldhis[i].periWound = "N/A";
	}
	if(oldhis[i].offLoadingDeviceUsed == "" || oldhis[i].offLoadingDeviceUsed == null || oldhis[i].offLoadingDeviceUsed == "--No-selection--" || oldhis[i].offLoadingDeviceUsed == "undefined"){
	  oldhis[i].offLoadingDeviceUsed = "N/A";
	}
	if(oldhis[i].odor == "" || oldhis[i].odor == null || oldhis[i].odor == "--No-selection--" || oldhis[i].odor == "undefined"){
	  oldhis[i].odor = "N/A";
	}
	if(oldhis[i].createdDate == "" || oldhis[i].createdDate == null){
	  oldhis[i].createdDate = "N/A";
	}else{
	  oldhis[i].createdDate =  oldhis[i].createdDate.slice(0,10);
	//  console.log( oldhis[i].createdDate);
	}

                        imgs.push(oldhis[i].woundImg);
                        var an =oldhis[i].woundImg;
                      //   console.log(an);	
                        x += "<div class='col-md-3'><div class='imag_div' style='background-image: url(images/Noimage.png);background-size: cover;height: 190px;'><div id='imagess_"+i+"' style='' value='"+ oldhis[i].woundImg +"'></div></div></div>" +"<div class='col-md-4' style='margin-left: -4%;margin-top: 1%;'><h4><b>"+"Wound History"+"</b></h4><p><span id='myint'>Etiology </span><span class='det_coln'> : </span><span id='myintdata'> "+ oldhis[i].etiology +"</span></p><p><span id='myint'>"+"Margin Details </span><span class='det_coln'> : </span><span id='myintdata'>"+ oldhis[i].woundMarginDetails +"</span></p><p><span id='myint'>"+"Drainage Amount </span> <span class='det_coln'> : </span><span id='myintdata'> "+ oldhis[i].drainageAmount +"</span></p><p><span id='myint'>"+"Nutritional Assessment </span><span class='det_coln'> : </span><span id='myintdata'> "+ oldhis[i].nutritionalAssessment +"</span></p></div><div class='col-md-4' style='margin-top: 1%;'><h4><b>"+"Wound Measurements"+"</b></h4><p><span id='myint'>Length </span><span class='det_coln'> : </span><span id='myintdata'>"+ oldhis[i].woundMeasurementsLength+"</span></p><p><span id='myint'>"+"Width </span><span class='det_coln'> : </span><span id='myintdata'> "+ oldhis[i].woundMeasurementswidth +"</span></p><p><span id='myint'>"+"Depth </span><span class='det_coln'> : </span><span id='myintdata'>"+ oldhis[i].woundMeasurementsdepth +"</span></p><p><span id='myint'>"+"Pain Scale </span> <span class='det_coln'> : </span><span id='myintdata'> "+ oldhis[i].painScale +"</span></p></div><div class='col-md-2' id='dr' style='margin-left: -85px;margin-top: 1%;'><h4><b>"+"Last Visit"+"</b></h4><p>"+ oldhis[i].createdDate +"</p><p>"+'<a href="#" data-toggle="modal" data-target="#myModal12"> <button type="btn1" class="btn btn-default" value="'+oldhis[i].woundId+','+oldhis[i].createdDate+'" id="teatmentdetails" style="background: #007eff;width:140px;color:#fff;">Treatment Details</button></a>'+ "</p><p>"+'<a href="#" data-toggle="modal" data-target="#myModal1"> <button type="btn3" class="btn btn-danger" style="width:140px;" value="'+oldhis[i].woundId+','+oldhis[i].woundLocationImg+'" id="re_vis">Revisit</button></a><p><button type="btn2" class="btn btn-success" style="width:140px;color:#fff;" value="'+oldhis[i].woundId+','+oldhis[i].createdDate+'" id="viewVisits">View Visits</button></p>'+ "</p></div>"+ "<div class='sep'></div>"; 
						
                        document.getElementById("demo1").innerHTML = x;
}
			
$(document).ready(function(){
				
			 $("button[type='btn1']").click(function(){
				
			   var names = $(this).val();
			//   console.log(names);
			    var mywoundno = names.split(',');
                    
			   localStorage.setItem('mywound', mywoundno[0]);
			    localStorage.setItem('mywoundvis', mywoundno[1].slice(0,10));
	//	 console.log( mywoundno[0]);
	//	  console.log( mywoundno[1].slice(0,10));
		
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
	if(oldhis[i].advancedTherapies == "" || oldhis[i].advancedTherapies == null){
	  oldhis[i].advancedTherapies = "N/A";
	}
	if(oldhis[i].clothDressings == "" || oldhis[i].clothDressings == null){
	  oldhis[i].clothDressings = "N/A";
	}
	if(oldhis[i].creamsOrOintments == "" || oldhis[i].creamsOrOintments == null){
	  oldhis[i].creamsOrOintments = "N/A";
	}
	if(oldhis[i].foamDressings == "" || oldhis[i].foamDressings == null){
	  oldhis[i].foamDressings = "N/A";
	}
	if(oldhis[i].gelDressings == "" || oldhis[i].gelDressings == null){
	  oldhis[i].gelDressings = "N/A";
	}
							
document.getElementById("treat1").innerHTML = data.advancedTherapies;
document.getElementById("treat2").innerHTML = data.clothDressings;
document.getElementById("treat3").innerHTML = data.creamsOrOintments;
document.getElementById("treat4").innerHTML = data.foamDressings;
document.getElementById("treat5").innerHTML = data.gelDressings;

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
		
			});
			
    $("#woundimg_close").click(function(){
//	$("#myModal13").css('display','none');
//	$(".modal-backdrop.in").css('opacity','0');
	window.location="past_details.html";
	});			 
			
$(document).ready(function(){
				
			 $("button[type='btn2']").click(function(){
				  // alert("sdng");
			  var names = $(this).val();
			   console.log(names);
			    var mywoundno = names.split(',');
                    
			   localStorage.setItem('mywound', mywoundno[0]);
			    localStorage.setItem('mywoundvis', mywoundno[1].slice(0,10));
		 console.log( mywoundno[0]);
		  console.log( mywoundno[1].slice(0,10));
		  
		  window.location="patient_visits.html" ;
	
	});
	
	$("button[type='btn3']").click(function(){
				  
			  var names = $(this).val();
			   console.log(names);
			    var mywoundno = names.split(',');
				
			 //  localStorage.setItem('mywound', names);
			     localStorage.setItem('mywound', mywoundno[0]);
			    localStorage.setItem('first_woundLocationImg', mywoundno[1]);
		
//	alert(mywoundno[0]);
//	alert(mywoundno[1]);
	
	});
		
		 });	
          
            } 
 showImgs(0);
	
   }, error: function (data, textStatus, jqXHR) {
            if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
  } 
})

}); 

 

function showImgs(i) {

fetch('https://'+host+'/secure/woundImg/image/'+imgs[i], { headers: { "Authorization":  token } })

 .then(response => response.blob())
 .then(blob => {
  let url = URL.createObjectURL(blob);
//  console.log(url);	
 var img1 = document.createElement("img");
   img1.src = url;
   img1.width = "240";
   img1.height = "193"; 
   
   //document.getElementById("imagess_"+i).appendChild(img1);
  //alert(response);
   img1.className = "wound_img";
   var wound_img = document.getElementsByClassName('wound_img');
   //alert(wound_img.length);
   document.getElementById("imagess_"+wound_img.length).appendChild(img1);
   var ni =wound_img.length;
   if(ni in imgs){
	   showImgs(ni);
   }
    });

} 	

	
var one;
var two;
var storedid = localStorage.getItem('facilityId');
  var patient_id = localStorage.getItem('patientId');
  var token = localStorage.getItem('tokens');
 // window.alert(token);   

// wound visits history details patient start//

	var ids = [];
	var imgs = [];
	
$(function() {
	
	selectingdates();
	
		var woundVisitsdates = { "woundId": localStorage.getItem('mywound'),"patientId":patient_id}
	console.log(woundVisitsdates);
	
	   $.ajax({
				type: "POST",
                  url: "https://"+host+"/secure/ewoundDetails/getAllCreatedDate",
				
                  'data':JSON.stringify(woundVisitsdates),
			                    Accept: "application/json, text/plain",
								contentType: "application/json; charset=latin1",
         						crossDomain : true,      
                beforeSend : function( xhr ) {
                    xhr.setRequestHeader( 'Authorization', token );
                },
         		success: function (data) {	
                    console.log(data);
					
				 var myArray = data.createdDate,
    reduced = Object.keys(myArray.reduce((p,c) => (p[c] = true,p),{}));
    console.log(reduced);
  //	console.log(reduced.length); 
/*	if(reduced.length != 1){
	//    $("#graphs").show();
	 }else{
	 $("#graphs").hide();
	 }  */
// localStorage.setItem('visit_length', reduced.length);
	  
							var result = '';
							var chk_date = reduced;
							
					result += '<option selected="selected" style="display: none;" disabled="disabled" id="def_date">Select Date</option>'
						
						  for (i in chk_date) {	
					//	console.log(chk_date[i]);
					
			    $(data).each(function(){
				result += '<option value="'+chk_date[i]+'">'+chk_date[i]+'</option>'
					  });							
						$('#date').html(result);
}
						document.getElementById("def_date").innerHTML = localStorage.getItem('mywoundvis');
						 var pastdates = document.getElementById("date").value;
						 localStorage.setItem('pastdate', pastdates);
						 
$(".mydateform").click(function() {
	
					
				 var date_details = document.getElementById("date").value;
					var x = document.getElementById("date").selectedIndex;
                    var y = document.getElementById("date").options;
                    var faci_id = document.getElementById("date").value;
					var spe_name = y[x].text;	
					console.log(date_details);
				       
     localStorage.setItem('mywoundvis' , date_details);
	   localStorage.setItem('presentdate' , date_details);
	   
	 selectingdates(); 
	 
	//	setTimeout(function(){ window.location="patient_visits.html" }, 1000);
	//  MyReload();
				
});
           
					
	}, error: function (data, textStatus, jqXHR) {
            if(data.statusText == "error") {
			    document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
  } 
	   });
	   
	  
	
	
});	

	

function selectingdates() {      


		var patient_id = localStorage.getItem('patientId');
		var token = localStorage.getItem('tokens');
	//  console.log(token);

		var woundVisitsPatient = {	"woundId": localStorage.getItem('mywound'),"patientId":patient_id,"createdDate":localStorage.getItem('mywoundvis')}
	console.log(woundVisitsPatient);
	     $.ajax({
				type: "POST",
                url: "https://"+host+"/secure/ewoundDetails/getHistoryAfterRevisit",
				
                  'data':JSON.stringify(woundVisitsPatient),
			                    Accept: "application/json, text/plain",
								contentType: "application/json; charset=latin1",
         						crossDomain : true,      
                beforeSend : function( xhr ) {
                    xhr.setRequestHeader( 'Authorization', token );
                },
         		success: function (data) {
                    var oldhis = data;	
                    console.log(oldhis);
					
                     if(oldhis.length == 0){
					
						 document.getElementById("myres").innerHTML = "No wound details found";
                      				 
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
                        x += "<div class='col-md-3'><div class='imag_div' style='background-image: url(images/Noimage.png);background-size: cover;height: 190px;'><div id='imagess_"+i+"' style='' value='"+ oldhis[i].woundImg +"'></div></div></div>" +"<div class='col-md-4' style='margin-left: -4%;margin-top: 1%;'><h4><b>"+"Wound History"+"</b></h4><p><span id='myint'>Etiology </span><span class='det_coln'> : </span><span id='myintdata'> "+ oldhis[i].etiology +"</span></p><p><span id='myint'>"+"MarginDetails </span><span class='det_coln'> : </span><span id='myintdata'>"+ oldhis[i].woundMarginDetails +"</span></p><p><span id='myint'>"+"DrainageAmount </span> <span class='det_coln'> : </span><span id='myintdata'> "+ oldhis[i].drainageAmount +"</span></p><p><span id='myint'>"+"Nutritional Assessment </span><span class='det_coln'> : </span><span id='myintdata'> "+ oldhis[i].nutritionalAssessment +"</span></p></div><div class='col-md-4' style='margin-top: 1%;'><h4><b>"+"Wound Measurements"+"</b></h4><p><span id='myint'>Length </span><span class='det_coln'> : </span><span id='myintdata'>"+ oldhis[i].woundMeasurementsLength+"</span></p><p><span id='myint'>"+"Width </span><span class='det_coln'> : </span><span id='myintdata'> "+ oldhis[i].woundMeasurementswidth +"</span></p><p><span id='myint'>"+"Depth </span><span class='det_coln'> : </span><span id='myintdata'>"+ oldhis[i].woundMeasurementsdepth +"</span></p><p><span id='myint'>"+"Pain Scale </span> <span class='det_coln'> : </span><span id='myintdata'> "+ oldhis[i].painScale +"</span></p></div><div class='col-md-2' id='dr' style='margin-left: -85px;margin-top: 1%;'><h4><b>"+"Last Visit"+"</b></h4><p>"+ oldhis[i].createdDate +"</p><p>"+'<a href="#" data-toggle="modal" data-target="#myModal12"> <button type="btn1" class="btn btn-default" value="'+oldhis[i].woundId+','+oldhis[i].createdDate+'" id="teatmentdetails" style="background: #007eff;width:140px;color:#fff;">Treatment Details</button></a>'+ "</p><p>"+'<a href="wound-details.html"><button type="btn" class="btn btn-success" style="width:140px;color:#fff;" value="'+oldhis[i].woundId+','+oldhis[i].createdDate+'" id="viewVisits">View More</button></a>'+ "</p></p></div>"+ "<div class='sep'></div>"; 
						
                           document.getElementById("demo1").innerHTML = x;
	
		
}      

 

   showImgs(0);
 //MyReload();

 
$(document).ready(function(){
	 $("button[type='btn']").click(function(){
				
			   var names = $(this).val();
			//   console.log(names);
			    var mywoundno = names.split(',');
                    
			   localStorage.setItem('mywound', mywoundno[0]);
			    localStorage.setItem('mywoundvis', mywoundno[1].slice(0,10));
	 });
	 
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
						if(data.statusText == "error") {
				document.getElementById("data_msg").innerHTML ="Please check your internet connection!";
				setTimeout(function(){$('#onload').modal('hide')}, 3000); 
			}
							
                        }		
    });		
	
		});
});       
          
// showImgs(0);


}
  } 
  
})



}; 

 function MyReload()
{
//	setTimeout(function(){ window.location="patient_visits.html" }, 1000);
  //   window.location.reload();

  var pastdate =  localStorage.getItem('pastdate');
  var presentdate = localStorage.getItem('presentdate');
console.log(pastdate);
console.log(presentdate);
	
			  if( pastdate != presentdate )
				 {
				 window.location="patient_visits.html";
				}
}

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
   
   img1.className = "wound_img"; 
   var wound_img = document.getElementsByClassName('wound_img');
   //alert(wound_img.length);
   document.getElementById("imagess_"+wound_img.length).appendChild(img1);
   var ni =wound_img.length;
   if(ni in imgs){
	   showImgs(ni);
	   MyReload();
	//   window.location="patient_visits.html";
	
	 }
	
    });
	
	

 }
 
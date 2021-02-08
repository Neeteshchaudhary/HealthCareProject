
/* filter js */
 (function(){
    'use strict';
	var $ = jQuery;
	$.fn.extend({
		filterTable: function(){
			return this.each(function(){
				$(this).on('keyup', function(e){
					$('#pat_list .filterTable_no_results').remove();
					 var tableBody = $('#pat_list');
					var $this = $(this), 
                        search = $this.val().toLowerCase(), 
                        target = $this.attr('data-filters'), 
                        $target = $(target), 
                        $rows = $target.find('tbody tr');
                        
					if(search == '') {
						$rows.show(); 
					} else {
						$rows.each(function(){
						    var $this = $(this);
							$this.text().toLowerCase().indexOf(search) === -1 ? $this.hide() : $this.show();
                        })
						        /*   if($this != $(this)){
                           tableBody.append('<tr class="search-sf"><td class="text-muted" colspan="7">No entries found.</td></tr>');
								}else{
									$(".search-sf").hide();
									$(".search-sf").css('display','none');
							// tableBody.append('<tr class="search-sf" style="display:none;"><td class="text-muted" colspan="6">No entries found.</td></tr>');
								}  */
					           
		
				 if($target.find('tbody').length() == 0) {
						
						 //	$(#pat_list).show();
						  //      tableBody.append('<tr class="search-sf"><td></td><td class="text-muted" colspan="6">No entries found.</td></tr>');
						
						}  
							var col_count = $target.find('tr').first().find('td').size();
							var no_results = $('<tr class="filterTable_no_results"><td colspan="'+col_count+'">No results found</td></tr>') 
						$target.find('tbody').append(no_results);
					  
					}
				});
			});
		}
	});
	$('[data-action="filter"]').filterTable();
})(jQuery); 


$(function(){
    // attach table filter plugin to inputs
	$('[data-action="filter"]').filterTable();
	
	$('.container').on('click', '.panel-heading span.filter', function(e){
		var $this = $(this), 
			$panel = $this.parents('.panel');
		
		$panel.find('.panel-body').slideToggle();
		if($this.css('display') != 'none') {
			$panel.find('.panel-body input').focus();
		}
	});
//	$('[data-toggle="tooltip"]').tooltip();
})


/* input js start*/
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
/* input js end */
/* images check box js start */
 /*  $(document).ready(function(e){
    		$(".img-check").click(function(){
				$(this).toggleClass("check");
			});
	});
	
 $(document).ready(function(e){
    		$("#chek_sel").click(function(){
				$(".upld_file").toggle();
			});
	});
	//image pop up start
	 function centerModal() {
    $(this).css('display', 'block');
    var $dialog = $(this).find(".modal-dialog");
    var offset = ($(window).height() - $dialog.height()) / 2;
    // Center modal vertically in window
    $dialog.css("margin-top", offset);
}

$('.modal').on('show.bs.modal', centerModal);
$(window).on("resize", function () {
    $('.modal:visible').each(centerModal);
});   */
/*	
$('.date_submit').click(function(e){
  e.preventDefault();
 
  var element = $(this).parent().parent().parent();
  
  var usercomplaint = $('#complaint').val();
  var currentsymptoms = $('#currentsymptoms').val();
  
  if(usercomplaint == '' || currentsymptoms == ''){
    
    // wigle and show notification
    // Wigle
    var element = $(this).parent().parent().parent();
    $(element).addClass('animated rubberBand');  
    $(element).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(element).removeClass('animated rubberBand');
    });
    
    // Notification
    // reset
    $('.notification.login-alert').removeClass('bounceOutRight notification-show animated bounceInRight');
    // show notification
    $('.notification.login-alert').addClass('notification-show animated bounceInRight');
    
    $('.notification.login-alert').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        setTimeout(function(){
            $('.notification.login-alert').addClass('animated bounceOutRight');
        }, 2000);
    });
  }else{
    $(element).fadeOut(function(){
      $('.logged-in').fadeIn();
    });
  }
});  */

/* images check box js end */


/* second upload images start */
$(document).on('click', '#close-preview', function(){ 
    $('.image-preview').popover('hide');
    // Hover befor close the preview
    $('.image-preview').hover(
        function () {
           $('.image-preview').popover('show');
        }, 
         function () {
           $('.image-preview').popover('hide');
        }
    );    
});

$(function() {
    // Create the close button
    var closebtn = $('<button/>', {
        type:"button",
        text: 'x',
        id: 'close-preview',
        style: 'font-size: initial;',
    });
    closebtn.attr("class","close pull-right");
    // Set the popover default content
    $('.image-preview').click({
        trigger:'manual',
        html:true,
        title: "<strong>Preview</strong>"+$(closebtn)[0].outerHTML,
        content: "There's no image",
        placement:'bottom'
    })
    // Clear event
    $('.image-preview-clear').click(function(){
        $('.image-preview').attr("data-content","").popover('hide');
        $('.image-preview-filename').val("");
        $('.image-preview-clear').hide();
        $('.image-preview-input input:file').val("");
        $(".image-preview-input-title").text("Browse"); 
    }); 
    // Create the preview image
    $(".image-preview-input input:file").change(function (){     
        var img = $('<img/>', {
            id: 'dynamic',
            width:250,
            height:200
        });      
        var file = this.files[0];
        var reader = new FileReader();
        // Set preview image into the popover data-content
        reader.onload = function (e) {
            $(".image-preview-input-title").text("Change");
            $(".image-preview-clear").show();
            $(".image-preview-filename").val(file.name);            
            img.attr('src', e.target.result);
            $(".image-preview").attr("data-content",$(img)[0].outerHTML).popover("show");
        }        
        reader.readAsDataURL(file);
    });  
});
/* second upload images end */
$(document).ready(function(){
    $("#deb_yes1").click(function(){
        $("#pre_upload").show();
		
    });
	 
});

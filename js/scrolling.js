/*******

	***	Anchor Slider by Cedric Dugas   ***
	*** Http://www.position-absolute.com ***
	
	Never have an anchor jumping your content, slide it.

	Don't forget to put an id to your anchor !
	You can use and modify this script for any project you want, but please leave this comment as credit.
	
*****/
		


$(document).ready(function() {
	$("a.anchorLink").anchorAnimate()
});

jQuery.fn.anchorAnimate = function(settings) {

 	settings = jQuery.extend({
		speed : 600
	}, settings);	
	
	return this.each(function(){
		var caller = this
		$(caller).click(function (event) {	
			event.preventDefault()
			var locationHref = window.location.href
			var elementClick = $(caller).attr("href")
			
			var destination = $(elementClick).offset().top;
			$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
				window.location.hash = elementClick
			});
		  	return false;
		})
	})
}

/* NavBar Colors */
   $(document).ready(function () {
       var $navHome = $(".navHome");
       var $navPort = $(".navPort");
       var $navSkills = $(".navSkills");
       var $navCont = $(".navCont");

       $(window).scroll(function () {
           $navHome.css("background-color", ($(window).scrollTop()<640) ? "#326CAE" : "");
           $navHome.css("color", ($(window).scrollTop()<640) ? "#FFFFFF" : "");
           $navPort.css("background-color", (($(window).scrollTop()>=640)&&($(window).scrollTop()<2440)) ? "#43B636" : "");
           $navPort.css("color", (($(window).scrollTop()>=640)&&($(window).scrollTop()<2440)) ? "#FFFFFF" : "");
           $navSkills.css("background-color", (($(window).scrollTop()>=2440)&&($(window).scrollTop()<2850)) ? "#EEEE44" : "");
           $navSkills.css("color", (($(window).scrollTop()>=2440)&&($(window).scrollTop()<2850)) ? "#FFFFFF" : "");
           $navCont.css("background-color", ($(window).scrollTop()>=2850) ? "#74348B" : "");
           $navCont.css("color", ($(window).scrollTop()>=2850) ? "#FFFFFF" : "");
       });
   });
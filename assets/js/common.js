$(document).ready(function(){
	
	$('.popup').magnificPopup({type:'image'});
	
	$.stellar({
		responsive: true,
		horizontalOffset:60
	});
	
	$(".carousel").owlCarousel({
		responsive: {
			0: {
				items: 1,
				nav: true
			}
		},
		navText: ""
	});
	
	
});



$(".top_phone .wrapper .tab").click(function() {
	$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


$(".tabs_header .wrapper .tab").click(function() {
	$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
 

	$(".s_contacts .tab_item").not(":first").hide();
	$(".s_contacts .contacts_top .tab").click(function() {
	$(".s_contacts .contacts_top .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
 

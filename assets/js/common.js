$(document).ready(function(){
	
	$('.popup').magnificPopup({type:'image'});
	$('.popup_c').magnificPopup();
	
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

$(".bottom_phone .wrapper .tab").click(function() {
	$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
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


$("form").submit(function(e) {
	e.preventDefault;
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: $(this).serialize()
	}).done(function() {
		alert("Спасибо за заявку!");
		setTimeout(function() {
			setTimeout(function(){
				var magnificPopup = $.magnificPopup.instance;
				magnificPopup.close();
				
				}, 1000);
		});
			return false;
	});
});



 
$(window).load(function(){
	
	$(".top_header h1").animated("fadeInDown", "fadeInDown");
	$(".top_header h2").animated("fadeInUp", "fadeInUp");
	$(".tabs_header .wrapper").animated("flipInY", "flipInY");
	$(".profy_item").animated("fadeInRight", "fadeOutRight");
	$(".s_profi form").animated("zoomInRight", "fadeOut");
	$(".s_back h3").animated("fadeInUp", "fadeOut");
	$("footer").animated("fadeInUp", "fadeOut");
	
	});
jQuery(document).ready(function (){
	
//document.body.style.backgroundImage = "url('land_page_map.jpg')"; 

$('.prague_page_container').css('display', 'none')
$('.prague_center_container').css('display', 'none');
$('.land_page_container').css('display', 'flex');

$('.city_prague').on('click', function(e){
	$('.land_page_container').css('display', 'none');
	$('.prague_page_container').css('display', 'flex');
	$('.prague_center_container').css('display', 'flex');
	});
	
$(window).on('resize', function(){
	if($(window).width()>530){
			set_neg_left_margin();
		}	
	});

if($(window).width()<530){
	$('.prague_page_background_img').css('margin-left', -1390);	
	$('.prague_page_background_img').css('margin-right', -200);	
		}else{
			set_neg_left_margin();
			}

function set_neg_left_margin(){
	let screen_width=$(window).width();
	console.log(screen_width);
	let img_width=1920;
	let neg_left_margin=screen_width - img_width;
	console.log('set_neg_left_margin function called and its:  '+ neg_left_margin);
	$('.prague_page_background_img').css('margin-left', neg_left_margin);	
}

$('.tour_dtls').on('click', function(){
	console.log('tour button clicked');
	//$('.prague_page_container').css('display', 'none');
	$('.tour_menu_container').css('display', 'none');
	$('.tour_details_container').css('display', 'flex');
	$('.tour_details_container').css('z-index', '20');
	
});

$('.first_row_box3').on('click', function(){
	$('.tour_details_container').css('display', 'none');
	$('.tour_menu_container').css('display', 'flex');
	
})

});//END OF jQuery ready
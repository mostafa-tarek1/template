
//start menu bar

$(".icon").click(function(){
  $('.link').toggle('.show');
})

//end menu bar



//start arrow scroll
$(window).scroll(function(){
	var height = $(window).scrollTop();

	if (height >= 600) {
		$('.arrow').fadeIn(1000)
	}else {
		$('.arrow').fadeOut(1000)
	}

})

$('.arrow').click(function(){

	$('html , body').animate({
		scrollTop : 0
	} , 300);


})
//end arrow scroll

// start dark mode 

$('#dn').click(() => {
  if ($('#dn').is(":checked")) {
    $("body").addClass("dark-class");
  } else {
    $("body").removeClass("dark-class")
  }
})

// end dark mode 

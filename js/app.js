$(function(){

// Initialize Foundation

	$(document).foundation();

// Initialize joyride

	var tour = $('#tour');
	tour.click(function(){
		$(document).foundation('joyride', 'start');
		return false;
	});

});

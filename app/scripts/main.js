$(document).ready(function(){ 


	$('.main').easytabs();

	$(".list__title").click(function(){
		$(this).toggleClass("active");
		$(this).parent().find(".site-nuggets").slideToggle("fast");
	});

	$(".options-trigger").click(function(){
		$(".options").slideToggle("fast");
	});


	// Instance the tour
	var tour = new Tour({
	  steps: [
	  {
	    element: "#tabs",
	    title: "Welcome to Nugget!",
	    content: "Navigate the most shared stories by popularity, by site and by keyword"
	  },
	  {
	    element: "#add",
	    content: "Add a site or a topic to start tracking it",
	    placement: "bottom"
	  },
	  {
	    element: "#options",
	    content: "Logout or change your settings here",
	    placement: "bottom"
	  },
	  {
	    element: "#main",
	    title: "That's it!",
	    content: "Save time, and never miss what’s important in YOUR circle.",
	    placement: "top"
	  }
	]});

	// Initialize the tour
	tour.init();

	tour.start(true);


});
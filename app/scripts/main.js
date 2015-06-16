$(document).ready(function(){ 


	$('.main').easytabs();

	$(".list__title").click(function(){
		$(this).toggleClass("active");
		$(this).parent().find(".site-nuggets").slideToggle("fast");
	});

	$(".options-trigger").click(function(){
		$(".options").slideToggle("fast");
	});

	$(".add-trigger").click(function(){
		$(".adds").slideToggle("fast");
	});

	$(".show-site-input").click(function(){
		$(".input-site").toggle();
		$(".btn--add").toggle();
		$(".adds").slideToggle("fast");
		// $("body").addClass("close-input");
	});
	$(".show-topic-input").click(function(){
		$(".input-topic").toggle();
		$(".btn--add").toggle();
		$(".adds").slideToggle("fast");
		// $("body").addClass("close-input");
	});

	// $(".close-input").click(function (e){

	//     var container = $(".topheader");

	//     if (!container.is(e.target) && container.has(e.target).length === 0){
	//         container.hide();
	//     }
	//     alert("yo");
	// });
	


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
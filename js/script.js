$(document).ready(function() {

    $('#foreground').addClass("foreground-js");
    $( window ).on("load", function() { $('#foreground').addClass("animate"); });

    var maxQuoteHeight;
    var currentQuote = 0;
    $('#quotes .quotetext').addClass("quotetext-js");
    var numberOfQuotes = $('#quotes .quotetext-js').length;
    setQuoteBoxHeight();
    $('#quotes .quotetext-js:eq('+currentQuote+')').addClass("animated fadeInUp");
    setInterval(changeQuote, 8000);
	
	function changeQuote() {
        var lastQuote = currentQuote-1;
        if (lastQuote<0) lastQuote = numberOfQuotes-1;
        $('#quotes .quotetext-js:eq('+lastQuote+')').removeClass("animated fadeOutUp fadeInUp");
		$('#quotes .quotetext-js:eq('+currentQuote+')').addClass("animated fadeOutUp");
		currentQuote++;
		if (currentQuote >= numberOfQuotes) currentQuote = 0;
        $('#quotes .quotetext-js:eq('+currentQuote+')').addClass("animated fadeInUp");
	};

	function setQuoteBoxHeight() {
		var maxQuoteHeight = 0;
		for (var i = 0; i<numberOfQuotes; i++) {
			if (parseInt($('#quotes .quotetext:eq('+i+')').css('height'))>maxQuoteHeight) {
				maxQuoteHeight = parseInt($('#quotes .quotetext:eq('+i+')').css('height'));
			}
		}
		$('#quotes').css('height', maxQuoteHeight + 'px');
	}
    
    $(window).resize(setQuoteBoxHeight);
    
    function isScrolledIntoView(el) {
        return el.position().top <= window.innerHeight+window.scrollY - el.height()/1.5;
    }
	
	$("#contact").addClass("contact-js");
	
    $(window).on("resize scroll",function(e){
        if (isScrolledIntoView($("#contact"))) { $("#contact").addClass("show");}
    });
    
});
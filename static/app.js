$(function() {
	var currentAdj = '';
	var currentNoun = '';

	$('#adjs').bandit({
		speed: [20, 40],
		delay: 0,
		autoStop: [2000, 4000],
		spinButton: '#start',
		stopButton: '#stop',
		spinOnLoad: true,
		done: function(insult) {
			currentAdj = insult;
			if (currentAdj !== '' && currentNoun !== '') {
				updateShareStuff();
				currentAdj = '';
				currentNoun = '';
			}
		}
	});

	$('#nouns').bandit({
		speed: [20, 40],
		delay: 0,
		autoStop: [2000, 4000],
		spinButton: '#start',
		stopButton: '#stop',
		spinOnLoad: true,
		done: function(text) {
			currentNoun = text;
			if (currentAdj !== '' && currentNoun !== '') {
				updateShareStuff(text);
				currentAdj = '';
				currentNoun = '';
			}
		}
	});

	function updateShareStuff() {
		//$('g:plusone').attr('href', document.URL + '?adj=' + encodeURIComponent(currentAdj) + '&nn=' + encodeURIComponent(currentNoun));
		//$('.fb-like').attr('href', document.URL + '?adj=' + encodeURIComponent(currentAdj) + '&nn=' + encodeURIComponent(currentNoun));
		//$('#twitter a').attr('href', document.URL + '?adj=' + encodeURIComponent(currentAdj) + '&nn=' + encodeURIComponent(currentNoun))
		var url = document.URL + '?a=' + currentAdj + '&n=' + currentNoun;
		var mailto = 'mailto:subject=' + encodeURIComponent('A Shakespeare Insult&body=An insult hath been prepared for thee here: ' + url);
		$('#email').attr('href', mailto);
	}

    (function() {
        var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
        po.src = 'https://apis.google.com/js/plusone.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
    })();

	// Facebook.
	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
		fjs.parentNode.insertBefore(js, fjs);
	} (document, 'script', 'facebook-jssdk'));

	// Twitter.
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.
		src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

	$('#social').click(function() {
        $('#social-options').addClass('active');
	});

    $(document).click(function(e) {
		if (e.srcElement !== $('#social').get(0)) {
			$('#social-options').removeClass('active');
		}
	});

    $(document).keyup(function(e) {
		if (e.keyCode == 27) {
			$('#social-options').removeClass('active');	
		}
    });
});

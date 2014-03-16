

var _gaq = _gaq || [];

var GAU = (function(gau) {

	/*******************************
	* Functions
	*******************************/

	var oldFunctions = {
		page:function() { _gaq.push(['_trackPageview']); },
		event:function(category, action, label, value) { _gaq.push(['_trackEvent', category, action, label, (value) ? value : 0]); }
	}

	var newFunctions = {
		page:function() { ga('send', 'pageview'); },
		event:function(category, action, label, value) { ga('send', 'event', category, action, label, (value) ? value : 0); }
	}

	var page = oldFunctions.page;
	var event = oldFunctions.event;

	/*******************************
	* Setup
	*******************************/

	var setup = function(acct, useUniversal, useSSL) {
		var prefix = 'http://www.';
		if (useSSL) prefix = 'https://ssl.';

		if (useUniversal) {
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script', prefix + 'google-analytics.com/analytics.js','ga');
			ga('create', acct, 'auto');	
			page = newFunctions.page;
			event = newFunctions.event;
		} else {
			(function() {
				var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
				ga.src =  prefix + 'google-analytics.com/ga.js';
				var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			})();
			_gaq.push(['_setAccount', acct]);
		}
	};

	//exports

	gau.setup = setup;
	gau.page = page;
	gau.event = event;
	return gau;

}(GAU || {}));


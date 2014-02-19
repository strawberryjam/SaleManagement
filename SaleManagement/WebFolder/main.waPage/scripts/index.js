
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var btnLogout = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	btnLogout.click = function btnLogout_click (event)// @startlock
	{// @endlock
		WAF.directory.logout({
		    onSuccess: function(event) {
		        window.location.href = "/index/";
		    },
		    onError: function(error) {
		        jAlert(error['error'][0].message,"アラート");
		    }
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("btnLogout", "click", btnLogout.click, "WAF");
// @endregion
};// @endlock

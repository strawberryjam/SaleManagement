
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var btnSearch = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	btnSearch.click = function btnSearch_click (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("btnSearch", "click", btnSearch.click, "WAF");
// @endregion
};// @endlock

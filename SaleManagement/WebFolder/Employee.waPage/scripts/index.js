
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var btnAddNew = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	btnAddNew.click = function btnAddNew_click (event)// @startlock
	{// @endlock
		// Add your code here
		$$('empcontainer').selectTab(2);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("btnAddNew", "click", btnAddNew.click, "WAF");
// @endregion
};// @endlock

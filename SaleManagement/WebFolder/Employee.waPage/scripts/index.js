
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var icoSClose = {};	// @icon
	var btnAddNew = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	icoSClose.click = function icoSClose_click (event)// @startlock
	{// @endlock
		// Add your code here
		$$('empcontainer').selectTab(1);
	};// @lock

	btnAddNew.click = function btnAddNew_click (event)// @startlock
	{// @endlock
		// Add your code here
		$$('empcontainer').selectTab(2);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("icoSClose", "click", icoSClose.click, "WAF");
	WAF.addListener("btnAddNew", "click", btnAddNew.click, "WAF");
// @endregion
};// @endlock

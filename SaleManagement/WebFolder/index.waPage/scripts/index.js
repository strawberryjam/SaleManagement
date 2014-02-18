
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var btnLogin = {};	// @image
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		$$("txtusername").focus();
	};// @lock

	btnLogin.click = function btnLogin_click (event)// @startlock
	{// @endlock
		var userName = $.trim($$("txtusername").getValue());
		var password = $.trim($$("txtpassword").getValue());
		if (userName != "" && password != "") {
		    WAF.directory.login({
		        onSuccess: function(event) {
		            if (event.result === true) {
		                window.location.href = "/supplier/";
		            }
		            else {
		                $$("iconuswaring").show();
		                $$("iconpwwaring").show();
		            }
		        }
		    }, userName, password);
		}
		else {
		    if (userName == "" && password == "") {
		        $$("iconuswaring").show();
		        $$("iconpwwaring").show();
		        $$("txtusername").focus();
		    }
		    else if (userName == "") {
		        $$("iconuswaring").show();
		        $$("iconpwwaring").hide();
		        $$("txtusername").focus();
		    }
		    else {
		        $$("iconuswaring").hide();
		        $$("iconpwwaring").show();
		        $$("txtpassword").focus();
		    }
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("btnLogin", "click", btnLogin.click, "WAF");
// @endregion
};// @endlock

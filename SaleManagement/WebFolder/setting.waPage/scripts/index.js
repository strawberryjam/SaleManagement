
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var txtUrl = {};	// @textField
	var txtEmail = {};	// @textField
	var txtFax = {};	// @textField
	var txtTel = {};	// @textField
	var txtAddress = {};	// @textField
	var txtPostcode = {};	// @textField
	var txtFurigana = {};	// @textField
	var icoSClose = {};	// @icon
	var icoSSave = {};	// @icon
	var txtCompany = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		var cursetting = sources.setting.getFirst();
		if(cursetting==null)
			sources.setting.newEntity();
	};// @lock

	txtUrl.keydown = function txtUrl_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtFurigana").focus();
		}
	};// @lock

	txtEmail.keydown = function txtEmail_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtUrl").focus();
		}
	};// @lock

	txtFax.keydown = function txtFax_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtEmail").focus();
		}
	};// @lock

	txtTel.keydown = function txtTel_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtFax").focus();
		}
	};// @lock

	txtAddress.keydown = function txtAddress_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtTel").focus();
		}
	};// @lock

	txtPostcode.keydown = function txtPostcode_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtAddress").focus();
		}
	};// @lock

	txtFurigana.keydown = function txtFurigana_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtPostcode").focus();
		}
	};// @lock

	icoSClose.click = function icoSClose_click (event)// @startlock
	{// @endlock
		window.location.href = "/main/"
	};// @lock

	icoSSave.click = function icoSSave_click (event)// @startlock
	{// @endlock
		sources.setting.save({
		    onSuccess: function(event) {
		        jAlert("保存しました。", "アラート", function() {
		            //Cap nhat datasource cho supplier
		            sources.setting.addEntity(sources.setting.getCurrentElement());
					window.location.href = "/main/"
		        });

		    },
		    onError: function(error) {
		        jAlert(error['error'][0].message, "アラート");
		    }
		});
	};// @lock

	txtCompany.keydown = function txtCompany_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtFurigana").focus();
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("txtUrl", "keydown", txtUrl.keydown, "WAF");
	WAF.addListener("txtEmail", "keydown", txtEmail.keydown, "WAF");
	WAF.addListener("txtFax", "keydown", txtFax.keydown, "WAF");
	WAF.addListener("txtTel", "keydown", txtTel.keydown, "WAF");
	WAF.addListener("txtAddress", "keydown", txtAddress.keydown, "WAF");
	WAF.addListener("txtPostcode", "keydown", txtPostcode.keydown, "WAF");
	WAF.addListener("txtFurigana", "keydown", txtFurigana.keydown, "WAF");
	WAF.addListener("icoSClose", "click", icoSClose.click, "WAF");
	WAF.addListener("icoSSave", "click", icoSSave.click, "WAF");
	WAF.addListener("txtCompany", "keydown", txtCompany.keydown, "WAF");
// @endregion
};// @endlock

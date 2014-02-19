WAF.Widget.prototype.center = function(){
 var jQObject = this.$domNode;
 jQObject.css({
  "position" : "absolute",
  "top"  : (($(window).height() - jQObject.outerHeight()) / 2) +  $(window).scrollTop() - 70,
  "left"  : (($(window).width() - jQObject.outerWidth()) / 2) + $(window).scrollLeft()
 });
 
 // Bonus : center the $$ object even if we resize the window
 $(window).resize(function(){
  jQObject.css({
   "position" : "absolute",
   "top"  : (($(window).height() - jQObject.outerHeight()) / 2) +  $(window).scrollTop() - 70,
   "left"  : (($(window).width() - jQObject.outerWidth()) / 2) + $(window).scrollLeft()
  });
 });
 return this;
}
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var btnLogin = {};	// @image
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		$$("loginContainer").center();
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
		                window.location.href = "/main/";
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

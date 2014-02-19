
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var txtFax = {};	// @textField
	var txtTel = {};	// @textField
	var txtAddress = {};	// @textField
	var txtPostCode = {};	// @textField
	var txtFurigana = {};	// @textField
	var icoShClose = {};	// @icon
	var icoShSave = {};	// @icon
	var icoShDel = {};	// @icon
	var icoShLast = {};	// @icon
	var icoShNext = {};	// @icon
	var icoShPrev = {};	// @icon
	var icoShFirst = {};	// @icon
	var txtShopname = {};	// @textField
	var txtShopcode = {};	// @textField
	var btnDelete = {};	// @button
	var btnCreate = {};	// @button
	var btnSearch = {};	// @button
	var btnSubselected = {};	// @button
	var btnShowall = {};	// @button
	var ShopDataGrid = {};	// @dataGrid
	var btnLogout = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	txtFax.keydown = function txtFax_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			var seq = $.trim($$("txtShopcode").getValue());
			if(seq!=""){
				var isNew = sources.shop.isNewElement();
				sources.shop.save({
			        onSuccess: function(event) {
			        	if(isNew){
			        		jAlert("保存しました。","アラート",function(){
			        			//Cap nhat datasource cho shop
								sources.shop.addEntity(sources.shop.getCurrentElement());
								
								//New Entity
								sources.shop.newEntity();
								
								//Set focus cho input
								$$("txtShopcode").focus();
			        		});
				        }else{
				        	//Close Input
							$$("shopcontainer").selectTab(1);
				        }
			        },
			        onError: function(error) {
			        	jAlert(error['error'][0].message,"アラート");
			        }
			    });
			}else{
				$$("txtShopcode").focus();
			}
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

	txtPostCode.keydown = function txtPostCode_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtAddress").focus();
		}
	};// @lock

	txtFurigana.keydown = function txtFurigana_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtPostCode").focus();
		}
	};// @lock

	icoShClose.click = function icoShClose_click (event)// @startlock
	{// @endlock
		//Close Input
		$$("shopcontainer").selectTab(1);
	};// @lock

	icoShSave.click = function icoShSave_click (event)// @startlock
	{// @endlock
		var isNew = sources.shop.isNewElement();
		sources.shop.save({
	        onSuccess: function(event) {
	        	if(isNew){
	        		jAlert("保存しました。","アラート",function(){
	        			//Cap nhat datasource cho shop
						sources.shop.addEntity(sources.shop.getCurrentElement());
						
						//New Entity
						sources.shop.newEntity();
						
						//Set focus cho input
						$$("txtShopcode").focus();
	        		});
		        }else{
		        	//Close Input
					$$("shopcontainer").selectTab(1);
		        }
	        },
	        onError: function(error) {
	        	jAlert(error['error'][0].message,"アラート");
	        }
	    });
	};// @lock

	icoShDel.click = function icoShDel_click (event)// @startlock
	{// @endlock
		var isNew = sources.shop.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			jConfirm("本当にこのレコードを削除してよろしいですか。?","確認",function(flag){
				if(flag){
					sources.shop.removeCurrent({
				        onSuccess: function(event) {
				        	
					        //Close Input
							$$("shopcontainer").selectTab(1);
				        },
				        onError: function(error) {
				        	jAlert(error['error'][0].message,"アラート");
				        }
				    });
				}
			});
		}
	};// @lock

	icoShLast.click = function icoShLast_click (event)// @startlock
	{// @endlock
		var isNew = sources.shop.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
		    sources.shop.save({
		        onSuccess: function(event) {
		            var last = sources.shop.length;
		            if (last > 1) {
		                sources.shop.select(last - 1, {
		                    onError: function(error) {
		                        jAlert(error['error'][0].message,"アラート");
		                    }
		                });
		            }
		        },
		        onError: function(error) {
		        	jAlert(error['error'][0].message,"アラート");
		        }
		    });
		}
	};// @lock

	icoShNext.click = function icoShNext_click (event)// @startlock
	{// @endlock
		var isNew = sources.shop.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			sources.shop.save({
		        onSuccess: function(event) {
		        	sources.shop.selectNext();
		        },
		        onError: function(error) {
		        	jAlert(error['error'][0].message,"アラート");
		        }
		    });
		}
	};// @lock

	icoShPrev.click = function icoShPrev_click (event)// @startlock
	{// @endlock
		var isNew = sources.shop.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			sources.shop.save({
		        onSuccess: function(event) {
		        	sources.shop.selectPrevious();
		        },
		        onError: function(error) {
		        	jAlert(error['error'][0].message,"アラート");
		        }
		    });
		}
	};// @lock

	icoShFirst.click = function icoShFirst_click (event)// @startlock
	{// @endlock
		var isNew = sources.shop.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			sources.shop.save({
		        onSuccess: function(event) {
		        	sources.shop.select(0,
		        	{
				        onError: function(error) {
				        	jAlert(error['error'][0].message,"アラート");
				        }
				    });
		        },
		        onError: function(error) {
		        	jAlert(error['error'][0].message,"アラート");
		        }
		    });
		}
	};// @lock

	txtShopname.keydown = function txtShopname_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtFurigana").focus();
		}
	};// @lock

	txtShopcode.keydown = function txtShopcode_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtShopname").focus();
		}
	};// @lock

	btnDelete.click = function btnDelete_click (event)// @startlock
	{// @endlock
		var selection = sources.shop.getSelection();
		var numSel = selection.countSelected();
		if (numSel > 0) {
		    jConfirm("本当にこのレコードを削除してよろしいですか。?", "確認", function(flag) {
		        if (flag) {
		            var posArr = selection.getSelectedRows();
		            WAF.sources.shop.delSelected({
		                onSuccess: function(evt) {
		                    WAF.sources.shop.setEntityCollection(evt.result);
		                }
		            }, posArr);
		        }
		    });
		}
	};// @lock

	btnCreate.click = function btnCreate_click (event)// @startlock
	{// @endlock
		//New Entity
		sources.shop.newEntity();
		
		//Show Input
		$$("shopcontainer").selectTab(2);
		
		//Remove readonly cho input
		$$("txtShopcode").setReadOnly(false);
		
		//Set focus cho input
		$$("txtShopcode").focus();
	};// @lock

	btnSearch.click = function btnSearch_click (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	btnSubselected.click = function btnSubselected_click (event)// @startlock
	{// @endlock
		function buildSelection(event)
     	{
     		var collec = event.entityCollection;
         	sources.shop.setEntityCollection(collec);
     	}
     	var selection = sources.shop.getSelection();
  		var collection = sources.shop.getEntityCollection();
        collection.buildFromSelection(selection, { onSuccess: buildSelection });
	};// @lock

	btnShowall.click = function btnShowall_click (event)// @startlock
	{// @endlock
		sources.shop.allEntities({ keepOrderBy: true } );
	};// @lock

	ShopDataGrid.onRowDblClick = function ShopDataGrid_onRowDblClick (event)// @startlock
	{// @endlock
		//Show Input
		$$("shopcontainer").selectTab(2);
		
		//Set readonly cho input
		$$("txtShopcode").setReadOnly(true);
		
		//Set focus cho input
		$$("txtShopname").focus();
	};// @lock

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
	WAF.addListener("txtFax", "keydown", txtFax.keydown, "WAF");
	WAF.addListener("txtTel", "keydown", txtTel.keydown, "WAF");
	WAF.addListener("txtAddress", "keydown", txtAddress.keydown, "WAF");
	WAF.addListener("txtPostCode", "keydown", txtPostCode.keydown, "WAF");
	WAF.addListener("txtFurigana", "keydown", txtFurigana.keydown, "WAF");
	WAF.addListener("icoShClose", "click", icoShClose.click, "WAF");
	WAF.addListener("icoShSave", "click", icoShSave.click, "WAF");
	WAF.addListener("icoShDel", "click", icoShDel.click, "WAF");
	WAF.addListener("icoShLast", "click", icoShLast.click, "WAF");
	WAF.addListener("icoShNext", "click", icoShNext.click, "WAF");
	WAF.addListener("icoShPrev", "click", icoShPrev.click, "WAF");
	WAF.addListener("icoShFirst", "click", icoShFirst.click, "WAF");
	WAF.addListener("txtShopname", "keydown", txtShopname.keydown, "WAF");
	WAF.addListener("txtShopcode", "keydown", txtShopcode.keydown, "WAF");
	WAF.addListener("btnDelete", "click", btnDelete.click, "WAF");
	WAF.addListener("btnCreate", "click", btnCreate.click, "WAF");
	WAF.addListener("btnSearch", "click", btnSearch.click, "WAF");
	WAF.addListener("btnSubselected", "click", btnSubselected.click, "WAF");
	WAF.addListener("btnShowall", "click", btnShowall.click, "WAF");
	WAF.addListener("ShopDataGrid", "onRowDblClick", ShopDataGrid.onRowDblClick, "WAF");
	WAF.addListener("btnLogout", "click", btnLogout.click, "WAF");
// @endregion
};// @endlock

﻿
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var txtFirstPayMoney = {};	// @textField
	var txtFax = {};	// @textField
	var txtLastPaydate = {};	// @textField
	var txtInitBalance = {};	// @textField
	var txtBankInfo = {};	// @textField
	var txtEmail = {};	// @textField
	var txtEmpCode = {};	// @textField
	var txtTel = {};	// @textField
	var txtAddress = {};	// @textField
	var txtPostCode = {};	// @textField
	var txtFurigana = {};	// @textField
	var icoSClose = {};	// @icon
	var icoSSave = {};	// @icon
	var icoSDel = {};	// @icon
	var icoSLast = {};	// @icon
	var icoSNext = {};	// @icon
	var icoSPrev = {};	// @icon
	var icoSFirst = {};	// @icon
	var txtSupName = {};	// @textField
	var txtSupCode = {};	// @textField
	var btnDelete = {};	// @button
	var btnCreate = {};	// @button
	var btnSearch = {};	// @button
	var btnSubselected = {};	// @button
	var btnShowall = {};	// @button
	var SupDataGrid = {};	// @dataGrid
	var btnLogout = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	txtFirstPayMoney.keydown = function txtFirstPayMoney_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtPostCode").focus();
		}
	};// @lock

	txtFax.keydown = function txtFax_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtEmpCode").focus();
		}
	};// @lock

	txtLastPaydate.keydown = function txtLastPaydate_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtPostCode").focus();
		}
	};// @lock

	txtInitBalance.keydown = function txtInitBalance_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtFurigana").focus();
		}
	};// @lock

	txtBankInfo.keydown = function txtBankInfo_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			var seq = $.trim($$("txtSupCode").getValue());
			if(seq!=""){
				var isNew = sources.supplier.isNewElement();
				sources.supplier.save({
			        onSuccess: function(event) {
			        	if(isNew){
			        		jAlert("保存しました。","アラート",function(){
			        			//Cap nhat datasource cho customer
								sources.supplier.addEntity(sources.supplier.getCurrentElement());
								
								//New Entity
								sources.supplier.newEntity();
								
								//Set focus cho input
								$$("txtSupCode").focus();
			        		});
				        }else{
				        	//Close Input
							$$("supcontainer").selectTab(1);
				        }
			        },
			        onError: function(error) {
			        	jAlert(error['error'][0].message,"アラート");
			        }
			    });
			}else{
				$$("txtSupCode").focus();
			}
		}
	};// @lock

	txtEmail.keydown = function txtEmail_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtBankInfo").focus();
		}
	};// @lock

	txtEmpCode.keydown = function txtEmpCode_keydown (event)// @startlock
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

	txtPostCode.keydown = function txtPostCode_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtAddress").focus();
		}
	};// @lock

	txtFurigana.keydown = function txtFurigana_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtLastPaydate").focus();
		}
	};// @lock

	icoSClose.click = function icoSClose_click (event)// @startlock
	{// @endlock
		//Close Input
		$$("supcontainer").selectTab(1);
	};// @lock

	icoSSave.click = function icoSSave_click (event)// @startlock
	{// @endlock
		var isNew = sources.supplier.isNewElement();
		sources.supplier.save({
	        onSuccess: function(event) {
	        	if(isNew){
	        		jAlert("保存しました。","アラート",function(){
	        			//Cap nhat datasource cho supplier
						sources.supplier.addEntity(sources.supplier.getCurrentElement());
						
						//New Entity
						sources.supplier.newEntity();
						
						//Set focus cho input
						$$("txtSupCode").focus();
	        		});
		        }else{
		        	//Close Input
					$$("supcontainer").selectTab(1);
		        }
	        },
	        onError: function(error) {
	        	jAlert(error['error'][0].message,"アラート");
	        }
	    });
	};// @lock

	icoSDel.click = function icoSDel_click (event)// @startlock
	{// @endlock
		var isNew = sources.supplier.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			jConfirm("本当にこのレコードを削除してよろしいですか。?","確認",function(flag){
				if(flag){
					sources.supplier.removeCurrent({
				        onSuccess: function(event) {
				        	
					        //Close Input
							$$("supcontainer").selectTab(1);
				        },
				        onError: function(error) {
				        	jAlert(error['error'][0].message,"アラート");
				        }
				    });
				}
			});
		}sss
	};// @lock

	icoSLast.click = function icoSLast_click (event)// @startlock
	{// @endlock
		var isNew = sources.supplier.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
		    sources.supplier.save({
		        onSuccess: function(event) {
		            var last = sources.supplier.length;
		            if (last > 1) {
		                sources.supplier.select(last - 1, {
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

	icoSNext.click = function icoSNext_click (event)// @startlock
	{// @endlock
		var isNew = sources.supplier.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			sources.supplier.save({
		        onSuccess: function(event) {
		        	sources.supplier.selectNext();
		        },
		        onError: function(error) {
		        	jAlert(error['error'][0].message,"アラート");
		        }
		    });
		}
	};// @lock

	icoSPrev.click = function icoSPrev_click (event)// @startlock
	{// @endlock
		var isNew = sources.supplier.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			sources.supplier.save({
		        onSuccess: function(event) {
		        	sources.supplier.selectPrevious();
		        },
		        onError: function(error) {
		        	jAlert(error['error'][0].message,"アラート");
		        }
		    });
		}
	};// @lock

	icoSFirst.click = function icoSFirst_click (event)// @startlock
	{// @endlock
		var isNew = sources.supplier.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			sources.supplier.save({
		        onSuccess: function(event) {
		        	sources.supplier.select(0,
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

	txtSupName.keydown = function txtSupName_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtInitBalance").focus();
		}
	};// @lock

	txtSupCode.keydown = function txtSupCode_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtSupName").focus();
		}
	};// @lock

	btnDelete.click = function btnDelete_click (event)// @startlock
	{// @endlock
		var selection = sources.supplier.getSelection();
		var numSel = selection.countSelected();
		if (numSel > 0) {
		    jConfirm("本当にこのレコードを削除してよろしいですか。?", "確認", function(flag) {
		        if (flag) {
		            var posArr = selection.getSelectedRows();
		            WAF.sources.supplier.delSelected({
		                onSuccess: function(evt) {
		                    WAF.sources.supplier.setEntityCollection(evt.result);
		                }
		            }, posArr);
		        }
		    });
		}
	};// @lock

	btnCreate.click = function btnCreate_click (event)// @startlock
	{// @endlock
		//New Entity
		sources.supplier.newEntity();
		
		//Show Input
		$$("supcontainer").selectTab(2);
		
		//Remove readonly cho input
		$$("txtSupCode").setReadOnly(false);
		
		//Set focus cho input
		$$("txtSupCode").focus();
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
         	sources.supplier.setEntityCollection(collec);
     	}
     	var selection = sources.supplier.getSelection();
  		var collection = sources.supplier.getEntityCollection();
        collection.buildFromSelection(selection, { onSuccess: buildSelection });
	};// @lock

	btnShowall.click = function btnShowall_click (event)// @startlock
	{// @endlock
		sources.supplier.allEntities({ keepOrderBy: true } );
	};// @lock

	SupDataGrid.onRowDblClick = function SupDataGrid_onRowDblClick (event)// @startlock
	{// @endlock
		//Show Input
		$$("supcontainer").selectTab(2);
		
		//Set readonly cho input
		$$("txtSupCode").setReadOnly(true);
		
		//Set focus cho input
		$$("txtSupName").focus();
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
	WAF.addListener("txtFirstPayMoney", "keydown", txtFirstPayMoney.keydown, "WAF");
	WAF.addListener("txtFax", "keydown", txtFax.keydown, "WAF");
	WAF.addListener("txtLastPaydate", "keydown", txtLastPaydate.keydown, "WAF");
	WAF.addListener("txtInitBalance", "keydown", txtInitBalance.keydown, "WAF");
	WAF.addListener("txtBankInfo", "keydown", txtBankInfo.keydown, "WAF");
	WAF.addListener("txtEmail", "keydown", txtEmail.keydown, "WAF");
	WAF.addListener("txtEmpCode", "keydown", txtEmpCode.keydown, "WAF");
	WAF.addListener("txtTel", "keydown", txtTel.keydown, "WAF");
	WAF.addListener("txtAddress", "keydown", txtAddress.keydown, "WAF");
	WAF.addListener("txtPostCode", "keydown", txtPostCode.keydown, "WAF");
	WAF.addListener("txtFurigana", "keydown", txtFurigana.keydown, "WAF");
	WAF.addListener("icoSClose", "click", icoSClose.click, "WAF");
	WAF.addListener("icoSSave", "click", icoSSave.click, "WAF");
	WAF.addListener("icoSDel", "click", icoSDel.click, "WAF");
	WAF.addListener("icoSLast", "click", icoSLast.click, "WAF");
	WAF.addListener("icoSNext", "click", icoSNext.click, "WAF");
	WAF.addListener("icoSPrev", "click", icoSPrev.click, "WAF");
	WAF.addListener("icoSFirst", "click", icoSFirst.click, "WAF");
	WAF.addListener("txtSupName", "keydown", txtSupName.keydown, "WAF");
	WAF.addListener("txtSupCode", "keydown", txtSupCode.keydown, "WAF");
	WAF.addListener("btnDelete", "click", btnDelete.click, "WAF");
	WAF.addListener("btnCreate", "click", btnCreate.click, "WAF");
	WAF.addListener("btnSearch", "click", btnSearch.click, "WAF");
	WAF.addListener("btnSubselected", "click", btnSubselected.click, "WAF");
	WAF.addListener("btnShowall", "click", btnShowall.click, "WAF");
	WAF.addListener("SupDataGrid", "onRowDblClick", SupDataGrid.onRowDblClick, "WAF");
	WAF.addListener("btnLogout", "click", btnLogout.click, "WAF");
// @endregion
};// @endlock
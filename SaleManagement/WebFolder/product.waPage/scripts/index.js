﻿
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var productDataGrid = {};	// @dataGrid
	var btnDelete = {};	// @button
	var txtSupName = {};	// @textField
	var txtSupCode = {};	// @textField
	var txtSalePrice = {};	// @textField
	var txtRetailPrice = {};	// @textField
	var txtUnitPrice = {};	// @textField
	var txtUnit = {};	// @textField
	var txtBarcode = {};	// @textField
	var txtProductName = {};	// @textField
	var btnSubselected = {};	// @button
	var btnShowall = {};	// @button
	var txtProductCode = {};	// @textField
	var btnCreate = {};	// @button
	var txtPostcode = {};	// @textField
	var txtempName = {};	// @textField
	var txtempCode = {};	// @textField
	var icoSDel = {};	// @icon
	var icoSLast = {};	// @icon
	var icoSFirst = {};	// @icon
	var icoSNext = {};	// @icon
	var icoSPrev = {};	// @icon
	var icoSSave = {};	// @icon
	var icoSClose = {};	// @icon
	var btnAddNew = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	productDataGrid.onRowDblClick = function productDataGrid_onRowDblClick (event)// @startlock
	{// @endlock
		//Show Input
		$$("productcontainer").selectTab(2);
		
		//Set readonly cho input
		$$("txtSupCode").setReadOnly(true);
		
		//Set focus cho input
		$$("txtProductCode").focus();
	};// @lock

	btnDelete.click = function btnDelete_click (event)// @startlock
	{// @endlock
		
		var selection = sources.product.getSelection();
		var numSel = selection.countSelected();
		if (numSel > 0) {
		    jConfirm("本当にこのレコードを削除してよろしいですか。?", "確認", function(flag) {
		        if (flag) {
		            var posArr = selection.getSelectedRows();
		            WAF.sources.product.delSelected({
		                onSuccess: function(evt) {
		                    WAF.sources.product.setEntityCollection(evt.result);
		                }
		            }, posArr);
		        }
		    });
		}
	};// @lock

	txtSupName.keydown = function txtSupName_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtSupCode").focus();
		}
	};// @lock

	txtSupCode.keydown = function txtSupCode_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtProductCode").focus();
		}
	};// @lock

	txtSalePrice.keydown = function txtSalePrice_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtSupCode").focus();
		}
	};// @lock

	txtRetailPrice.keydown = function txtRetailPrice_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtSalePrice").focus();
		}
	};// @lock

	txtUnitPrice.keydown = function txtUnitPrice_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtRetailPrice").focus();
		}
	};// @lock

	txtUnit.keydown = function txtUnit_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtUnitPrice").focus();
		}
	};// @lock

	txtBarcode.click = function txtBarcode_click (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	txtBarcode.keydown = function txtBarcode_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtUnit").focus();
		}
	};// @lock

	txtProductName.keydown = function txtProductName_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtBarcode").focus();
		}
	};// @lock

	btnSubselected.click = function btnSubselected_click (event)// @startlock
	{// @endlock
		function buildSelection(event)
     	{
     		var collec = event.entityCollection;
         	sources.product.setEntityCollection(collec);
     	}
     	var selection = sources.product.getSelection();
  		var collection = sources.product.getEntityCollection();
        collection.buildFromSelection(selection, { onSuccess: buildSelection });
	};// @lock

	btnShowall.click = function btnShowall_click (event)// @startlock
	{// @endlock
		sources.product.allEntities({ keepOrderBy: true } );
	};// @lock

	txtProductCode.keydown = function txtProductCode_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtProductName").focus();
		}
	};// @lock

	btnCreate.click = function btnCreate_click (event)// @startlock
	{// @endlock
	
		//New Entity
		sources.product.newEntity();
		 
		//Show Input
		$$("productcontainer").selectTab(2);
		
		//Remove readonly cho input
		$$("txtBarcode").setReadOnly(false);
		
		//Set focus cho input
		$$("txtProductCode").focus();
	};// @lock

	txtPostcode.keydown = function txtPostcode_keydown (event)// @startlock
	{// @endlock
		// Add your code here
		if(event.keyCode == 13){
			$$("txtAddress").focus();
		}
	};// @lock

	txtempName.keydown = function txtempName_keydown (event)// @startlock
	{// @endlock
		// Add your code here
		if(event.keyCode == 13){
			$$("txtFurigana").focus();
		}
	};// @lock

	txtempCode.keydown = function txtempCode_keydown (event)// @startlock
	{// @endlock
		// Add your code here
		if(event.keyCode == 13){
			$$("txtempName").focus();
		}
	};// @lock

	icoSDel.click = function icoSDel_click (event)// @startlock
	{// @endlock
		// Add your code here
		
		var selection = sources.product.getSelection();
		var numSel = selection.countSelected();
		if (numSel > 0) {
		    jConfirm("本当にこのレコードを削除してよろしいですか。?", "確認", function(flag) {
		        if (flag) {
		            var posArr = selection.getSelectedRows();
		            WAF.sources.product.delSelected({
		                onSuccess: function(evt) {
		                    WAF.sources.product.setEntityCollection(evt.result);
		                    $$("productcontainer").selectTab(1);
		                }
		            }, posArr);
		        }

		    });
		}
	};// @lock

	icoSLast.click = function icoSLast_click (event)// @startlock
	{// @endlock
		// Add your code here
		var isNew = sources.product.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
		    sources.product.save({
		        onSuccess: function(event) {
		            var last = sources.product.length;
		            if (last > 1) {
		                sources.product.select(last - 1, {
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
		}s
	};// @lock

	icoSFirst.click = function icoSFirst_click (event)// @startlock
	{// @endlock
		// Add your code here
		var isNew = sources.product.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			sources.product.save({
		        onSuccess: function(event) {
		        	sources.product.select(0,
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

	icoSNext.click = function icoSNext_click (event)// @startlock
	{// @endlock
		// Add your code here
		var isNew = sources.product.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			sources.product.save({
		        onSuccess: function(event) {
		        	sources.product.selectNext();
		        },
		        onError: function(error) {
		        	jAlert(error['error'][0].message,"アラート");
		        }
		    });
		}
	};// @lock

	icoSPrev.click = function icoSPrev_click (event)// @startlock
	{// @endlock
		// Add your code here
		var isNew = sources.product.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			sources.product.save({
		        onSuccess: function(event) {
		        	sources.product.selectPrevious();
		        },
		        onError: function(error) {
		        	jAlert(error['error'][0].message,"アラート");
		        }
		    });
		}
	};// @lock

	icoSSave.click = function icoSSave_click (event)// @startlock
	{// @endlock
		// Add your code here		
		if($$('txtProductCode').getValue()==''){
			 alert('ma san pham khong duoc rong');
			 return ;
	    }
		var isNew = sources.product.isNewElement();
		sources.product.save({
	        onSuccess: function(event) {
	        	if(isNew){
	        		jAlert("保存しました。","アラート",function(){
	        			//Cap nhat datasource cho supplier
						sources.product.addEntity(sources.product.getCurrentElement());
						
						//New Entity
						sources.product.newEntity();
						
						//Set focus cho input
						$$("txtProductCode").focus();
	        		});
		        }else{
		        	//Close Input
					$$("productcontainer").selectTab(1);
		        }
	        },
	        onError: function(error) {
	        	jAlert(error['error'][0].message,"アラート");
	        }
	    });
		
	};// @lock

	icoSClose.click = function icoSClose_click (event)// @startlock
	{// @endlock
				
		$$('productcontainer').selectTab(1);
		
	};// @lock

	btnAddNew.click = function btnAddNew_click (event)// @startlock
	{// @endlock
		//New Entity
		sources.product.newEntity();
		
		// Add your code here
		$$('productcontainer').selectTab(2);
		
		$$("txtempCode").setReadOnly(false);
		
		//Set focus cho input
		$$("txtempCode").focus();
		
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("productDataGrid", "onRowDblClick", productDataGrid.onRowDblClick, "WAF");
	WAF.addListener("btnDelete", "click", btnDelete.click, "WAF");
	WAF.addListener("txtBarcode", "click", txtBarcode.click, "WAF");
	WAF.addListener("txtSupName", "keydown", txtSupName.keydown, "WAF");
	WAF.addListener("txtSupCode", "keydown", txtSupCode.keydown, "WAF");
	WAF.addListener("txtSalePrice", "keydown", txtSalePrice.keydown, "WAF");
	WAF.addListener("txtRetailPrice", "keydown", txtRetailPrice.keydown, "WAF");
	WAF.addListener("txtUnitPrice", "keydown", txtUnitPrice.keydown, "WAF");
	WAF.addListener("txtUnit", "keydown", txtUnit.keydown, "WAF");
	WAF.addListener("txtBarcode", "keydown", txtBarcode.keydown, "WAF");
	WAF.addListener("txtProductName", "keydown", txtProductName.keydown, "WAF");
	WAF.addListener("btnSubselected", "click", btnSubselected.click, "WAF");
	WAF.addListener("btnShowall", "click", btnShowall.click, "WAF");
	WAF.addListener("txtProductCode", "keydown", txtProductCode.keydown, "WAF");
	WAF.addListener("btnCreate", "click", btnCreate.click, "WAF");
	WAF.addListener("txtPostcode", "keydown", txtPostcode.keydown, "WAF");
	WAF.addListener("txtempName", "keydown", txtempName.keydown, "WAF");
	WAF.addListener("txtempCode", "keydown", txtempCode.keydown, "WAF");
	WAF.addListener("icoSDel", "click", icoSDel.click, "WAF");
	WAF.addListener("icoSLast", "click", icoSLast.click, "WAF");
	WAF.addListener("icoSFirst", "click", icoSFirst.click, "WAF");
	WAF.addListener("icoSNext", "click", icoSNext.click, "WAF");
	WAF.addListener("icoSPrev", "click", icoSPrev.click, "WAF");
	WAF.addListener("icoSSave", "click", icoSSave.click, "WAF");
	WAF.addListener("icoSClose", "click", icoSClose.click, "WAF");
	WAF.addListener("btnAddNew", "click", btnAddNew.click, "WAF");
// @endregion
};// @endlock

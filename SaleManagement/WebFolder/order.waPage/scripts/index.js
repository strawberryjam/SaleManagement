
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var txtTotalMoney = {};	// @textField
	var txtTotalQuantity = {};	// @textField
	var txtNote = {};	// @textField
	var txtSupCode = {};	// @textField
	var txtShopcode = {};	// @textField
	var txtDeliveryDate = {};	// @textField
	var txtEmployeeCode = {};	// @textField
	var icoSClose = {};	// @icon
	var icoSSave = {};	// @icon
	var icoSDel = {};	// @icon
	var icoSLast = {};	// @icon
	var icoSNext = {};	// @icon
	var icoSPrev = {};	// @icon
	var icoSFirst = {};	// @icon
	var txtOrderDate = {};	// @textField
	var txtOrderCode = {};	// @textField
	var btnDelete = {};	// @button
	var btnCreate = {};	// @button
	var btnSearch = {};	// @button
	var btnSubselected = {};	// @button
	var btnShowall = {};	// @button
	var OrderDataGrid = {};	// @dataGrid
	var btnLogout = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	txtTotalMoney.keydown = function txtTotalMoney_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtOrderDate").focus();
		}
	};// @lock

	txtTotalQuantity.keydown = function txtTotalQuantity_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtOrderDate").focus();
		}
	};// @lock

	txtNote.keydown = function txtNote_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtEmail").focus();
		}
	};// @lock

	txtSupCode.keydown = function txtSupCode_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtEmail").focus();
		}
	};// @lock

	txtShopcode.keydown = function txtShopcode_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtEmail").focus();
		}
	};// @lock

	txtDeliveryDate.keydown = function txtDeliveryDate_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtFurigana").focus();
		}
	};// @lock

	txtEmployeeCode.keydown = function txtEmployeeCode_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtEmail").focus();
		}
	};// @lock

	icoSClose.click = function icoSClose_click (event)// @startlock
	{// @endlock
		//Close Input
		$$("ordercontainer").selectTab(1);
	};// @lock

	icoSSave.click = function icoSSave_click (event)// @startlock
	{// @endlock
		var arrdetaildata = [];
		$(".orderdetail .waf-datagrid-row-inside").each(function(){
			var row = $(this);
			var detaildata = {};
			detaildata.ID = row.find(".waf-dataGrid-col-0 input").val();
			detaildata.ProductCode = row.find(".waf-dataGrid-col-1 input").val();
			detaildata.ProductName = row.find(".waf-dataGrid-col-2 input").val();
			detaildata.Unit = row.find(".waf-dataGrid-col-3 input").val();
			detaildata.UnitPrice = row.find(".waf-dataGrid-col-4 input").val();
			detaildata.RetailPrice = row.find(".waf-dataGrid-col-5 input").val();
			detaildata.Money = row.find(".waf-dataGrid-col-6 input").val();
			arrdetaildata.push(detaildata);
		});
		
		var isNew = sources.order.isNewElement();
		sources.order.save({
	        onSuccess: function(event) {
	        	if(arrdetaildata.length > 0){
	        		var curOrder = sources.order.getCurrentElement();	        		
	        		$.each(arrdetaildata,function(data){
	        			if (data.ID == "0") {
						    sources.orderdetail.newEntity();
						    sources.orderdetail.RID.set(sources.order);
							sources.orderdetail.ProductCode = data.ProductCode;
							sources.orderdetail.ProductName = data.ProductName;
							sources.orderdetail.Unit = data.Unit;
							sources.orderdetail.UnitPrice = data.UnitPrice;
							sources.orderdetail.RetailPrice = data.RetailPrice;
							sources.orderdetail.Money = data.Money;
							sources.orderdetail.save({
							    onSuccess: function(event) {
							        //Cap nhat datasource cho orderdetail
							        sources.orderdetail.addEntity(sources.orderdetail.getCurrentElement());
							    },
							    onError: function(error) {
							        jAlert(error['error'][0].message, "アラート");
							    }
							});
						}
						else {
							sources.orderdetail.query("ID = "+data.ID, {
						        onSuccess: function(event){
						            vResult = arrComp.length + " element(s) found."
						            sources.vResult.sync();
						        }
					        });
						}
						
						console.log();
	        		});
	        	}
	        	
	        	if(isNew){
	        		jAlert("保存しました。","アラート",function(){
	        			//Cap nhat datasource cho order
						sources.order.addEntity(currentElement);
						
						//New Entity
						sources.order.newEntity();
						
						//Set focus cho input
						$$("txtOrderCode").focus();
	        		});
		        }else{
		        	//Close Input
					$$("ordercontainer").selectTab(1);
		        }
	        },
	        onError: function(error) {
	        	jAlert(error['error'][0].message,"アラート");
	        }
	    });
	};// @lock

	icoSDel.click = function icoSDel_click (event)// @startlock
	{// @endlock
		var isNew = sources.order.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			jConfirm("本当にこのレコードを削除してよろしいですか。?","確認",function(flag){
				if(flag){
					sources.order.removeCurrent({
				        onSuccess: function(event) {
				        	
					        //Close Input
							$$("ordercontainer").selectTab(1);
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
		var isNew = sources.order.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
		    sources.order.save({
		        onSuccess: function(event) {
		            var last = sources.order.length;
		            if (last > 1) {
		                sources.order.select(last - 1, {
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
		var isNew = sources.order.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			sources.order.save({
		        onSuccess: function(event) {
		        	sources.order.selectNext();
		        },
		        onError: function(error) {
		        	jAlert(error['error'][0].message,"アラート");
		        }
		    });
		}
	};// @lock

	icoSPrev.click = function icoSPrev_click (event)// @startlock
	{// @endlock
		var isNew = sources.order.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			sources.order.save({
		        onSuccess: function(event) {
		        	sources.order.selectPrevious();
		        },
		        onError: function(error) {
		        	jAlert(error['error'][0].message,"アラート");
		        }
		    });
		}
	};// @lock

	icoSFirst.click = function icoSFirst_click (event)// @startlock
	{// @endlock
		var isNew = sources.order.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			sources.order.save({
		        onSuccess: function(event) {
		        	sources.order.select(0,
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

	txtOrderDate.keydown = function txtOrderDate_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtInitBalance").focus();
		}
	};// @lock

	txtOrderCode.keydown = function txtOrderCode_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtOrderDate").focus();
		}
	};// @lock

	btnDelete.click = function btnDelete_click (event)// @startlock
	{// @endlock
		var selection = sources.order.getSelection();
		var numSel = selection.countSelected();
		if (numSel > 0) {
		    jConfirm("本当にこのレコードを削除してよろしいですか。?", "確認", function(flag) {
		        if (flag) {
		            var posArr = selection.getSelectedRows();
		            WAF.sources.order.delSelected({
		                onSuccess: function(evt) {
		                    WAF.sources.order.setEntityCollection(evt.result);
		                }
		            }, posArr);
		        }
		    });
		}
	};// @lock

	btnCreate.click = function btnCreate_click (event)// @startlock
	{// @endlock
		//New Entity
		sources.order.newEntity();
		
		//Show Input
		$$("ordercontainer").selectTab(2);
		
		//Remove readonly cho input
		$$("txtOrderCode").setReadOnly(false);
		
		//Set focus cho input
		$$("txtOrderCode").focus();
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
         	sources.order.setEntityCollection(collec);
     	}
     	var selection = sources.order.getSelection();
  		var collection = sources.order.getEntityCollection();
        collection.buildFromSelection(selection, { onSuccess: buildSelection });
	};// @lock

	btnShowall.click = function btnShowall_click (event)// @startlock
	{// @endlock
		sources.order.allEntities({ keepOrderBy: true } );
	};// @lock

	OrderDataGrid.onRowDblClick = function OrderDataGrid_onRowDblClick (event)// @startlock
	{// @endlock
		//Show Input
		$$("ordercontainer").selectTab(2);
		
		//Set readonly cho input
		$$("txtOrderCode").setReadOnly(true);
		
		//Set focus cho input
		$$("txtOrderDate").focus();
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
	WAF.addListener("txtTotalMoney", "keydown", txtTotalMoney.keydown, "WAF");
	WAF.addListener("txtTotalQuantity", "keydown", txtTotalQuantity.keydown, "WAF");
	WAF.addListener("txtNote", "keydown", txtNote.keydown, "WAF");
	WAF.addListener("txtSupCode", "keydown", txtSupCode.keydown, "WAF");
	WAF.addListener("txtShopcode", "keydown", txtShopcode.keydown, "WAF");
	WAF.addListener("txtDeliveryDate", "keydown", txtDeliveryDate.keydown, "WAF");
	WAF.addListener("txtEmployeeCode", "keydown", txtEmployeeCode.keydown, "WAF");
	WAF.addListener("icoSClose", "click", icoSClose.click, "WAF");
	WAF.addListener("icoSSave", "click", icoSSave.click, "WAF");
	WAF.addListener("icoSDel", "click", icoSDel.click, "WAF");
	WAF.addListener("icoSLast", "click", icoSLast.click, "WAF");
	WAF.addListener("icoSNext", "click", icoSNext.click, "WAF");
	WAF.addListener("icoSPrev", "click", icoSPrev.click, "WAF");
	WAF.addListener("icoSFirst", "click", icoSFirst.click, "WAF");
	WAF.addListener("txtOrderDate", "keydown", txtOrderDate.keydown, "WAF");
	WAF.addListener("txtOrderCode", "keydown", txtOrderCode.keydown, "WAF");
	WAF.addListener("btnDelete", "click", btnDelete.click, "WAF");
	WAF.addListener("btnCreate", "click", btnCreate.click, "WAF");
	WAF.addListener("btnSearch", "click", btnSearch.click, "WAF");
	WAF.addListener("btnSubselected", "click", btnSubselected.click, "WAF");
	WAF.addListener("btnShowall", "click", btnShowall.click, "WAF");
	WAF.addListener("OrderDataGrid", "onRowDblClick", OrderDataGrid.onRowDblClick, "WAF");
	WAF.addListener("btnLogout", "click", btnLogout.click, "WAF");
// @endregion
};// @endlock

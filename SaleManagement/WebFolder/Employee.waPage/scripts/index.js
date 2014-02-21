WAF.Widget.prototype.center = function(){
	var jQObject = this.$domNode;
	jQObject.css({
		"position"	: "absolute",
		"top"		: (($(window).height() - jQObject.outerHeight()) / 2) +  $(window).scrollTop() - 70,
		"left"		: (($(window).width() - jQObject.outerWidth()) / 2) + $(window).scrollLeft()
	});
	
	// Bonus : center the $$ object even if we resize the window
	$(window).resize(function(){
		jQObject.css({
			"position"	: "absolute",
			"top"		: (($(window).height() - jQObject.outerHeight()) / 2) +  $(window).scrollTop() - 70,
			"left"		: (($(window).width() - jQObject.outerWidth()) / 2) + $(window).scrollLeft()
		});
	});
	return this;
}

var GlobalQuery="";

WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var btnClearSearch = {};	// @button
	var btnAddSearch = {};	// @button
	var btnSearch = {};	// @button
	var btnOK = {};	// @button
	var btnCancel = {};	// @button
	var btnDel = {};	// @button
	var btnSubSelect = {};	// @button
	var btnShowAll = {};	// @button
	var empDataGrid = {};	// @dataGrid
	var txtTel = {};	// @textField
	var txtAddress = {};	// @textField
	var txtPostcode = {};	// @textField
	var txtFurigana = {};	// @textField
	var txtempName = {};	// @textField
	var txtempCode = {};	// @textField
	var icoSDel = {};	// @icon
	var icoSLast = {};	// @icon
	var icoSFirst = {};	// @icon
	var icoSNext = {};	// @icon
	var icoSPrev = {};	// @icon
	var txtEmail = {};	// @textField
	var icoSSave = {};	// @icon
	var icoSClose = {};	// @icon
	var btnAddNew = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	btnClearSearch.click = function btnClearSearch_click (event)// @startlock
	{// @endlock
		// Add your code here
		var count,nameSelector;
		// Add your code here
		for(count=4;count>0;count--){
			nameSelector='ctnSearch'+'_'+count;
			if($$(nameSelector).isVisible()==true)
			{
				$$(nameSelector).hide();
				break;
			}
		}
	};// @lock

	btnAddSearch.click = function btnAddSearch_click (event)// @startlock
	{// @endlock
		var count,nameSelector;
		// Add your code here
		for(count=1;count<5;count++){
			nameSelector='ctnSearch'+'_'+count;
			if($$(nameSelector).isVisible()==false)
			{
				$$(nameSelector).show();
				break;
			}
		}
		
	};// @lock

	btnSearch.click = function btnSearch_click (event)// @startlock
	{// @endlock
		// Add your code here
		$$('dlgSearch').center();
		$$('dlgSearch').displayDialog();
	};// @lock

	btnOK.click = function btnOK_click (event)// @startlock
	{// @endlock
		var destSet,nameExact;
		//$$('dialog1').closeDialog(); //ok button
		var exact=$$('cbxExact').getValue();
		var valSearch="*"+$$('txtValueSearch').getValue()+"*";
		
		if(exact=="Exact"){
			valSearch=$$('txtValueSearch').getValue();
		}
		var fieldSearch= $$('cbxFieldName').getValue();
		stringQuery=fieldSearch+' = '+'"'+valSearch+'"';
		
		//Duyet
		for(count=1;count<5;count++)
		{
			
			nameContainer='ctnSearch'+'_'+count;
			if($$(nameContainer).isVisible()==true)
			{
				
				//paramsCount=count+1;
				
				nameAndOr='cbxAndOr'+'_'+count;
				nameFieldSearch='cbxFieldName'+'_'+count;
				nameValueSearch='txtValueSearch'+'_'+count;
				nameExact='cbxExact'+'_'+count;
				numExact=$$(nameExact).getValue();
				var valSearchn="*"+$$(nameValueSearch).getValue()+"*";
				if(numExact=="Exact")
				{
					valSearchn=$$(nameValueSearch).getValue();
				}
				
				//valSearchn=$$(nameValueSearch).getValue();
				
				stringQuery=stringQuery + ' ' + $$(nameAndOr).getValue()+' '+$$(nameFieldSearch).getValue()+' = '+'"'+valSearchn+'"';
			}
			
			
		}
		
		$$('txtTest').setValue(stringQuery);
		if($$('chxSearchOnAllData').getValue()==true){
			if(GlobalQuery==""){
				GlobalQuery=stringQuery;
			}else{
				GlobalQuery=GlobalQuery +" OR "+ stringQuery;
			}	
			
			$$('txtTest').setValue(GlobalQuery);
			sources.employee.query(GlobalQuery);

//        	}

		}else{
			sources.employee.filterQuery(stringQuery);
			GlobalQuery=stringQuery;
			//$$('txtTest').setValue(GlobalQuery);
		}
	    //GlobalQuery=GlobalQuery+" OR "+stringQuery;
	};// @lock

	btnCancel.click = function btnCancel_click (event)// @startlock
	{// @endlock
		$$('dlgSearch').closeDialog(); //cancel button
	};// @lock

	btnDel.click = function btnDel_click (event)// @startlock
	{// @endlock
		// Add your code here
		var selection = sources.employee.getSelection();
		var numSel = selection.countSelected();
		if (numSel > 0) {
		    jConfirm("本当にこのレコードを削除してよろしいですか。?", "確認", function(flag) {
		        if (flag) {
		            var posArr = selection.getSelectedRows();
		            WAF.sources.employee.delSelected({
		                onSuccess: function(evt) {
		                    WAF.sources.employee.setEntityCollection(evt.result);
		                }
		            }, posArr);
		        }
		    });
		}
	};// @lock

	btnSubSelect.click = function btnSubSelect_click (event)// @startlock
	{// @endlock
		// Add your code here
		function buildSelection(event)
     	{
     		var collec = event.entityCollection;
         	sources.employee.setEntityCollection(collec);
     	}
     	var selection = sources.employee.getSelection();
  		var collection = sources.employee.getEntityCollection();
        collection.buildFromSelection(selection, { onSuccess: buildSelection });
	};// @lock

	btnShowAll.click = function btnShowAll_click (event)// @startlock
	{// @endlock
		// Add your code here
		sources.employee.allEntities({ keepOrderBy: true } );
		GlobalQuery="";
	};// @lock

	empDataGrid.onRowDblClick = function empDataGrid_onRowDblClick (event)// @startlock
	{// @endlock
		// Add your code here
		$$("empcontainer").selectTab(2);
		
		//Set readonly cho input
		$$("txtempCode").setReadOnly(true);
		
		//Set focus cho input
		$$("txtempName").focus();
	};// @lock

	txtTel.keydown = function txtTel_keydown (event)// @startlock
	{// @endlock
		// Add your code here
		if(event.keyCode == 13){
			$$("txtEmail").focus();
		}
	};// @lock

	txtAddress.keydown = function txtAddress_keydown (event)// @startlock
	{// @endlock
		// Add your code here
		if(event.keyCode == 13){
			$$("txtTel").focus();
		}
	};// @lock

	txtPostcode.keydown = function txtPostcode_keydown (event)// @startlock
	{// @endlock
		// Add your code here
		if(event.keyCode == 13){
			$$("txtAddress").focus();
		}
	};// @lock

	txtFurigana.keydown = function txtFurigana_keydown (event)// @startlock
	{// @endlock
		// Add your code here
		if(event.keyCode == 13){
			$$("txtPostcode").focus();
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
		var selection = sources.employee.getSelection();
		var numSel = selection.countSelected();
		if (numSel > 0) {
		    jConfirm("本当にこのレコードを削除してよろしいですか。?", "確認", function(flag) {
		        if (flag) {
		            var posArr = selection.getSelectedRows();
		            WAF.sources.employee.delSelected({
		                onSuccess: function(evt) {
		                    WAF.sources.employee.setEntityCollection(evt.result);
		                }
		            }, posArr);
		        }

		    });
		}
	};// @lock

	icoSLast.click = function icoSLast_click (event)// @startlock
	{// @endlock
		// Add your code here
		var isNew = sources.employee.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
		    sources.employee.save({
		        onSuccess: function(event) {
		            var last = sources.employee.length;
		            if (last > 1) {
		                sources.employee.select(last - 1, {
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

	icoSFirst.click = function icoSFirst_click (event)// @startlock
	{// @endlock
		// Add your code here
		var isNew = sources.employee.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			sources.employee.save({
		        onSuccess: function(event) {
		        	sources.employee.select(0,
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
		var isNew = sources.employee.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			sources.employee.save({
		        onSuccess: function(event) {
		        	sources.employee.selectNext();
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
		var isNew = sources.employee.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			sources.employee.save({
		        onSuccess: function(event) {
		        	sources.employee.selectPrevious();
		        },
		        onError: function(error) {
		        	jAlert(error['error'][0].message,"アラート");
		        }
		    });
		}
	};// @lock

	txtEmail.keydown = function txtEmail_keydown (event)// @startlock
	{// @endlock
		// Add your code here
		if(event.keyCode == 13){
			var seq = $.trim($$("txtempCode").getValue());
			if(seq!=""){
				var isNew = sources.employee.isNewElement();
				sources.employee.save({
			        onSuccess: function(event) {
			        	if(isNew){
			        		jAlert("保存しました。","アラート",function(){
			        			//Cap nhat datasource cho customer
								sources.employee.addEntity(sources.employee.getCurrentElement());
								
								//New Entity
								sources.employee.newEntity();
								
								//Set focus cho input
								$$("txtempCode").focus();
			        		});
				        }else{
				        	//Close Input
							$$("empcontainer").selectTab(1);
				        }
			        },
			        onError: function(error) {
			        	jAlert(error['error'][0].message,"アラート");
			        }
			    });
			}else{
				$$("txtempCode").focus();
			}
		}
		
	};// @lock

	icoSSave.click = function icoSSave_click (event)// @startlock
	{// @endlock
		// Add your code here
		var isNew = sources.employee.isNewElement();
		sources.employee.save({
	        onSuccess: function(event) {
	        	if(isNew){
	        		jAlert("保存しました。","アラート",function(){
	        			//Cap nhat datasource cho supplier
						sources.employee.addEntity(sources.employee.getCurrentElement());
						
						//New Entity
						sources.employee.newEntity();
						
						//Set focus cho input
						$$("txtempCode").focus();
	        		});
		        }else{
		        	//Close Input
					$$("empcontainer").selectTab(1);
		        }
	        },
	        onError: function(error) {
	        	jAlert(error['error'][0].message,"アラート");
	        }
	    });
		
	};// @lock

	icoSClose.click = function icoSClose_click (event)// @startlock
	{// @endlock
				
		$$('empcontainer').selectTab(1);
		
	};// @lock

	btnAddNew.click = function btnAddNew_click (event)// @startlock
	{// @endlock
		//New Entity
		sources.employee.newEntity();
		
		// Add your code here
		$$('empcontainer').selectTab(2);
		
		$$("txtempCode").setReadOnly(false);
		
		//Set focus cho input
		$$("txtempCode").focus();
		
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("btnClearSearch", "click", btnClearSearch.click, "WAF");
	WAF.addListener("btnAddSearch", "click", btnAddSearch.click, "WAF");
	WAF.addListener("btnSearch", "click", btnSearch.click, "WAF");
	WAF.addListener("btnOK", "click", btnOK.click, "WAF");
	WAF.addListener("btnCancel", "click", btnCancel.click, "WAF");
	WAF.addListener("btnDel", "click", btnDel.click, "WAF");
	WAF.addListener("btnSubSelect", "click", btnSubSelect.click, "WAF");
	WAF.addListener("btnShowAll", "click", btnShowAll.click, "WAF");
	WAF.addListener("empDataGrid", "onRowDblClick", empDataGrid.onRowDblClick, "WAF");
	WAF.addListener("txtTel", "keydown", txtTel.keydown, "WAF");
	WAF.addListener("txtAddress", "keydown", txtAddress.keydown, "WAF");
	WAF.addListener("txtPostcode", "keydown", txtPostcode.keydown, "WAF");
	WAF.addListener("txtFurigana", "keydown", txtFurigana.keydown, "WAF");
	WAF.addListener("txtempName", "keydown", txtempName.keydown, "WAF");
	WAF.addListener("txtempCode", "keydown", txtempCode.keydown, "WAF");
	WAF.addListener("icoSDel", "click", icoSDel.click, "WAF");
	WAF.addListener("icoSLast", "click", icoSLast.click, "WAF");
	WAF.addListener("icoSFirst", "click", icoSFirst.click, "WAF");
	WAF.addListener("icoSNext", "click", icoSNext.click, "WAF");
	WAF.addListener("icoSPrev", "click", icoSPrev.click, "WAF");
	WAF.addListener("txtEmail", "keydown", txtEmail.keydown, "WAF");
	WAF.addListener("icoSSave", "click", icoSSave.click, "WAF");
	WAF.addListener("icoSClose", "click", icoSClose.click, "WAF");
	WAF.addListener("btnAddNew", "click", btnAddNew.click, "WAF");
// @endregion
};// @endlock

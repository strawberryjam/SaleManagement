﻿WAF.Widget.prototype.center = function(){
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
	var textField9 = {};	// @textField
	var textField8 = {};	// @textField
	var textField7 = {};	// @textField
	var txt = {};	// @textField
	var textField1 = {};	// @textField
	var cbxExact_4 = {};	// @combobox
	var cbxExact_3 = {};	// @combobox
	var cbxExact_2 = {};	// @combobox
	var cbxExact_1 = {};	// @combobox
	var cbxExact = {};	// @combobox
	var btnClearSearch = {};	// @button
	var btnAddSearch = {};	// @button
	var btnSearch = {};	// @button
	var btnOK = {};	// @button
	var btnCancel = {};	// @button
	var btnDel = {};	// @button
	var btnSubSelect = {};	// @button
	var btnShowAll = {};	// @button
	var empDataGrid = {};	// @dataGrid
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

	textField9.keydown = function textField9_keydown (event)// @startlock
	{// @endlock
		// Add your code here
		if(event.keyCode == 13){
			$$("txtempName").focus();
		}
	};// @lock

	textField8.keydown = function textField8_keydown (event)// @startlock
	{// @endlock
		// Add your code here
		if(event.keyCode == 13){
			$$("txtempName").focus();
		}
	};// @lock

	textField7.keydown = function textField7_keydown (event)// @startlock
	{// @endlock
		// Add your code here
		if(event.keyCode == 13){
			$$("txtempName").focus();
		}
	};// @lock

	txt.keydown = function txt_keydown (event)// @startlock
	{// @endlock
		// Add your code here
		if(event.keyCode == 13){
			$$("txtempName").focus();
		}
	};// @lock

	textField1.keydown = function textField1_keydown (event)// @startlock
	{// @endlock
		// Add your code here
		if(event.keyCode == 13){
			$$("txtFurigana").focus();
		}
	};// @lock

	cbxExact_4.change = function cbxExact_4_change (event)// @startlock
	{// @endlock
		// Add your code here
		if($$('cbxExact_4').getValue()=='の範囲の')
		{
			$$('ctnBetween_4').show();
			$$('txtValueSearch_4').hide();
			
		}else{
			$$('ctnBetween_4').hide();
			$$('txtValueSearch_4').show();
		}
	};// @lock

	cbxExact_3.change = function cbxExact_3_change (event)// @startlock
	{// @endlock
		// Add your code here
		if($$('cbxExact_3').getValue()=='の範囲の')
		{
			$$('ctnBetween_3').show();
			$$('txtValueSearch_3').hide();
			
		}else{
			$$('ctnBetween_3').hide();
			$$('txtValueSearch_3').show();
		}
	};// @lock

	cbxExact_2.change = function cbxExact_2_change (event)// @startlock
	{// @endlock
		// Add your code here
		if($$('cbxExact_2').getValue()=='の範囲の')
		{
			$$('ctnBetween_2').show();
			$$('txtValueSearch_2').hide();
			
		}else{
			$$('ctnBetween_2').hide();
			$$('txtValueSearch_2').show();
		}
	};// @lock

	cbxExact_1.change = function cbxExact_1_change (event)// @startlock
	{// @endlock
		// Add your code here
		if($$('cbxExact_1').getValue()=='の範囲の')
		{
			$$('ctnBetween_1').show();
			$$('txtValueSearch_1').hide();
			
		}else{
			$$('ctnBetween_1').hide();
			$$('txtValueSearch_1').show();
		}
	};// @lock

	cbxExact.change = function cbxExact_change (event)// @startlock
	{// @endlock
		// Add your code here
		if($$('cbxExact').getValue()=='の範囲の')
		{
			$$('ctnBetween').show();
			$$('txtValueSearch').hide();
			
		}else{
			$$('ctnBetween').hide();
			$$('txtValueSearch').show();
		}
	};// @lock

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
		var destSet,nameExact,valSearch,tempvalSearch,mainOperator,mainOperatorBTfirst,mainOperatorBTlast,namevalSearchBTfirst,namevalSearchBTlast;
		//$$('dialog1').closeDialog(); //ok button
		var exact=$$('cbxExact').getValue();
		var fieldSearch= $$('cbxFieldName').getValue();
		
		//Dieu kien search
		switch(exact)
		{
			case 'を含む':mainOperator=' = ';
						valSearch="*"+$$('txtValueSearch').getValue()+"*";
						stringQuery=fieldSearch+mainOperator+'"'+valSearch+'"';
						break;
			case 'を含まない': mainOperator=' != ';
						valSearch="*"+$$('txtValueSearch').getValue()+"*";
						stringQuery=fieldSearch+mainOperator+'"'+valSearch+'"';
						break;
			case 'である': mainOperator=' = ';
						valSearch=$$('txtValueSearch').getValue();
						stringQuery=fieldSearch+mainOperator+'"'+valSearch+'"';
						break;
			case 'ではない': mainOperator=' != ';
						valSearch=$$('txtValueSearch').getValue();
						stringQuery=fieldSearch+mainOperator+'"'+valSearch+'"';
						break;
			case 'より大きい': mainOperator=' > ';
						valSearch=$$('txtValueSearch').getValue();
						stringQuery=fieldSearch+mainOperator+'"'+valSearch+'"';
						break;
			case '以上の': mainOperator=' >= ';
						valSearch=$$('txtValueSearch').getValue();
						stringQuery=fieldSearch+mainOperator+'"'+valSearch+'"';
						break;
			case 'より小さい': mainOperator=' < ';
						valSearch=$$('txtValueSearch').getValue();
						stringQuery=fieldSearch+mainOperator+'"'+valSearch+'"';
						break;
			case '以下の': mainOperator=' <= ';
						valSearch=$$('txtValueSearch').getValue();
						stringQuery=fieldSearch+mainOperator+'"'+valSearch+'"';
						break;
			case 'で始まる': mainOperator=' = ';
						valSearch=$$('txtValueSearch').getValue()+"*";
						stringQuery=fieldSearch+mainOperator+'"'+valSearch+'"';
						break;
			case 'で終わる': mainOperator=' = ';
						valSearch="*"+$$('txtValueSearch').getValue();
						stringQuery=fieldSearch+mainOperator+'"'+valSearch+'"';
						break;
			case 'の範囲の': mainOperatorBTfirst=' >= ';
						valSearchBTfirst=$$('txtValueSearchBTfirst').getValue();
						mainOperatorBTlast=' <= ';
						valSearchBTlast=$$('txtValueSearchBTlast').getValue();
						stringQuery=' ('+fieldSearch+mainOperatorBTfirst+'"'+valSearchBTfirst+'"'+" AND "+fieldSearch+mainOperatorBTlast+'"'+valSearchBTlast+'"'+') ';
						break;
																															
		}	
		
		
//		if(exact=="Exact"){
//			valSearch=$$('txtValueSearch').getValue();
//		}
		
		//sstringQuery=fieldSearch+mainOperator+'"'+valSearch+'"';
		
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
				
				namevalSearchBTfirst='txtValueSearchBTfirst'+'_'+count;
				namevalSearchBTlast='txtValueSearchBTlast'+'_'+count;
//				var valSearchn="*"+$$(nameValueSearch).getValue()+"*";
//				if(numExact=="Exact")
//				{
//					valSearchn=$$(nameValueSearch).getValue();
//				}
				//dieu kien search
				switch(numExact)
				{
				case 'を含む':mainOperator=' = ';
						valSearch="*"+$$(nameValueSearch).getValue()+"*";
						stringQuery=stringQuery + ' ' + $$(nameAndOr).getValue()+' '+$$(nameFieldSearch).getValue()+mainOperator+'"'+valSearch+'"';
						break;
				case 'を含まない': mainOperator=' != ';
						valSearch="*"+$$(nameValueSearch).getValue()+"*";
						stringQuery=stringQuery + ' ' + $$(nameAndOr).getValue()+' '+$$(nameFieldSearch).getValue()+mainOperator+'"'+valSearch+'"';
						break;
				case 'である': mainOperator=' = ';
						valSearch=$$(nameValueSearch).getValue();
						stringQuery=stringQuery + ' ' + $$(nameAndOr).getValue()+' '+$$(nameFieldSearch).getValue()+mainOperator+'"'+valSearch+'"';
						break;
				case 'ではない': mainOperator=' != ';
						valSearch=$$(nameValueSearch).getValue();
						stringQuery=stringQuery + ' ' + $$(nameAndOr).getValue()+' '+$$(nameFieldSearch).getValue()+mainOperator+'"'+valSearch+'"';
						break;
				case 'より大きい': mainOperator=' > ';
						valSearch=$$(nameValueSearch).getValue();
						stringQuery=stringQuery + ' ' + $$(nameAndOr).getValue()+' '+$$(nameFieldSearch).getValue()+mainOperator+'"'+valSearch+'"';
						break;
				case '以上の': mainOperator=' >= ';
						valSearch=$$(nameValueSearch).getValue();
						stringQuery=stringQuery + ' ' + $$(nameAndOr).getValue()+' '+$$(nameFieldSearch).getValue()+mainOperator+'"'+valSearch+'"';
						break;
				case 'より小さい': mainOperator=' < ';
						valSearch=$$(nameValueSearch).getValue();
						stringQuery=stringQuery + ' ' + $$(nameAndOr).getValue()+' '+$$(nameFieldSearch).getValue()+mainOperator+'"'+valSearch+'"';
						break;
				case '以下の': mainOperator=' <= ';
						valSearch=$$(nameValueSearch).getValue();
						stringQuery=stringQuery + ' ' + $$(nameAndOr).getValue()+' '+$$(nameFieldSearch).getValue()+mainOperator+'"'+valSearch+'"';
						break;
				case 'で始まる': mainOperator=' = ';
						valSearch=$$(nameValueSearch).getValue()+"*";
						stringQuery=stringQuery + ' ' + $$(nameAndOr).getValue()+' '+$$(nameFieldSearch).getValue()+mainOperator+'"'+valSearch+'"';
						break;
				case 'で終わる': mainOperator=' = ';
						valSearch="*"+$$(nameValueSearch).getValue();
						stringQuery=stringQuery + ' ' + $$(nameAndOr).getValue()+' '+$$(nameFieldSearch).getValue()+mainOperator+'"'+valSearch+'"';
						break;
				case 'の範囲の': mainOperatorBTfirst=' >= ';
						valSearchBTfirst=$$(namevalSearchBTfirst).getValue();
						mainOperatorBTlast=' <= ';
						valSearchBTlast=$$(namevalSearchBTlast).getValue();
						stringQuery=stringQuery + ' ' + $$(nameAndOr).getValue()+' ('+$$(nameFieldSearch).getValue()+mainOperatorBTfirst+'"'+valSearchBTfirst+'"'+" AND "+$$(nameFieldSearch).getValue()+mainOperatorBTlast+'"'+valSearchBTlast+'"'+') ';
						break;
																															
			}	
				
				
				//valSearchn=$$(nameValueSearch).getValue();
				
				//stringQuery=stringQuery + ' ' + $$(nameAndOr).getValue()+' '+$$(nameFieldSearch).getValue()+' = '+'"'+valSearchn+'"';
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
			sources.paymentOut.query(GlobalQuery);

//        	}

		}else{
			sources.paymentOut.filterQuery(stringQuery);
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
		var selection = sources.paymentOut.getSelection();
		var numSel = selection.countSelected();
		if (numSel > 0) {
		    jConfirm("本当にこのレコードを削除してよろしいですか。?", "確認", function(flag) {
		        if (flag) {
		            var posArr = selection.getSelectedRows();
		            WAF.sources.paymentOut.delSelected({
		                onSuccess: function(evt) {
		                    WAF.sources.paymentOut.setEntityCollection(evt.result);
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
         	sources.paymentOut.setEntityCollection(collec);
     	}
     	var selection = sources.paymentOut.getSelection();
  		var collection = sources.paymentOut.getEntityCollection();
        collection.buildFromSelection(selection, { onSuccess: buildSelection });
	};// @lock

	btnShowAll.click = function btnShowAll_click (event)// @startlock
	{// @endlock
		// Add your code here
		sources.paymentOut.allEntities({ keepOrderBy: true } );
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
		var selection = sources.paymentOut.getSelection();
		var numSel = selection.countSelected();
		if (numSel > 0) {
		    jConfirm("本当にこのレコードを削除してよろしいですか。?", "確認", function(flag) {
		        if (flag) {
		            var posArr = selection.getSelectedRows();
		            WAF.sources.paymentOut.delSelected({
		                onSuccess: function(evt) {
		                    WAF.sources.paymentOut.setEntityCollection(evt.result);
		                }
		            }, posArr);
		        }

		    });
		}
	};// @lock

	icoSLast.click = function icoSLast_click (event)// @startlock
	{// @endlock
		// Add your code here
		var isNew = sources.paymentOut.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
		    sources.paymentOut.save({
		        onSuccess: function(event) {
		            var last = sources.paymentOut.length;
		            if (last > 1) {
		                sources.paymentOut.select(last - 1, {
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
		var isNew = sources.paymentOut.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			sources.paymentOut.save({
		        onSuccess: function(event) {
		        	sources.paymentOut.select(0,
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
		var isNew = sources.paymentOut.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			sources.paymentOut.save({
		        onSuccess: function(event) {
		        	sources.paymentOut.selectNext();
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
		var isNew = sources.paymentOut.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			sources.paymentOut.save({
		        onSuccess: function(event) {
		        	sources.paymentOut.selectPrevious();
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
		var isNew = sources.paymentOut.isNewElement();
		sources.paymentOut.save({
	        onSuccess: function(event) {
	        	if(isNew){
	        		jAlert("保存しました。","アラート",function(){
	        			//Cap nhat datasource cho supplier
						sources.paymentOut.addEntity(sources.paymentOut.getCurrentElement());
						
						//New Entity
						sources.paymentOut.newEntity();
						
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
		sources.paymentOut.newEntity();
		
		// Add your code here
		$$('empcontainer').selectTab(2);
		
		$$("txtempCode").setReadOnly(false);
		
		//Set focus cho input
		$$("txtempCode").focus();
		
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("textField9", "keydown", textField9.keydown, "WAF");
	WAF.addListener("textField8", "keydown", textField8.keydown, "WAF");
	WAF.addListener("textField7", "keydown", textField7.keydown, "WAF");
	WAF.addListener("txt", "keydown", txt.keydown, "WAF");
	WAF.addListener("textField1", "keydown", textField1.keydown, "WAF");
	WAF.addListener("cbxExact_4", "change", cbxExact_4.change, "WAF");
	WAF.addListener("cbxExact_3", "change", cbxExact_3.change, "WAF");
	WAF.addListener("cbxExact_2", "change", cbxExact_2.change, "WAF");
	WAF.addListener("cbxExact_1", "change", cbxExact_1.change, "WAF");
	WAF.addListener("cbxExact", "change", cbxExact.change, "WAF");
	WAF.addListener("btnClearSearch", "click", btnClearSearch.click, "WAF");
	WAF.addListener("btnAddSearch", "click", btnAddSearch.click, "WAF");
	WAF.addListener("btnSearch", "click", btnSearch.click, "WAF");
	WAF.addListener("btnOK", "click", btnOK.click, "WAF");
	WAF.addListener("btnCancel", "click", btnCancel.click, "WAF");
	WAF.addListener("btnDel", "click", btnDel.click, "WAF");
	WAF.addListener("btnSubSelect", "click", btnSubSelect.click, "WAF");
	WAF.addListener("btnShowAll", "click", btnShowAll.click, "WAF");
	WAF.addListener("empDataGrid", "onRowDblClick", empDataGrid.onRowDblClick, "WAF");
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

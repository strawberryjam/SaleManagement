var isdlgclose = false;
function draw_detail(detaildata) {
    var detail = "";
    var container = '<div style="width: 668px; height: 135px;" class="container">';
    var row = '<div style="width: 668px; height: 27px; top: 0px;" class="waf-widget-content waf-dataGrid-row waf-widget-even">';
    var rowinside = '<div style="width: 668px; height: 27px;" class="waf-datagrid-row-inside">';
    var col0 = '<div style="width: 50px; height: 27px;" class="waf-dataGrid-cell waf-dataGrid-col-0">';
    var col1 = '<div style="width: 100px; height: 27px;" class="waf-dataGrid-cell waf-dataGrid-col-1">';
    var col2 = '<div style="width: 150px; height: 27px;" class="waf-dataGrid-cell waf-dataGrid-col-2">';
    var col3 = '<div style="width: 60px; height: 27px;" class="waf-dataGrid-cell waf-dataGrid-col-3">';
    var col4 = '<div style="width: 60px; height: 27px;" class="waf-dataGrid-cell waf-dataGrid-col-4">';
    var col5 = '<div style="width: 80px; height: 27px;" class="waf-dataGrid-cell waf-dataGrid-col-5">';
    var col6 = '<div style="width: 120px; height: 27px;" class="waf-dataGrid-cell waf-dataGrid-col-6">';
    var col7 = '<div style="width: 30px; height: 27px;" class="waf-dataGrid-cell waf-dataGrid-col-7">';
    if (detaildata.length > 0) {
        $.each(detaildata, function(idx, data) {
        	if((idx%2)!= 0)
        		row = '<div style="width: 668px; height: 27px; top: 0px;" class="waf-widget-content waf-dataGrid-row waf-widget-odd">';
        	else
        		row = '<div style="width: 668px; height: 27px; top: 0px;" class="waf-widget-content waf-dataGrid-row waf-widget-even">';		
            detail += row + rowinside;
            detail += col0;
            detail += '<input name="ID" value="' + data.ID + '" type="hidden">';
            detail += '<div class="content center">' + (idx + 1) + '</div>';
            detail += '</div>';
            detail += col1;
            detail += '<input title="" name="ProductCode" value="' + data.ProductCode + '" class="content-edit waf-state-focus ileft" type="text">';
            detail += '</div>';
            detail += col2;
            detail += '<input title="" name="ProductName" value="' + data.ProductName + '" class="content-edit waf-state-focus ileft" type="text">';
            detail += '</div>';
            detail += col3;
            detail += '<input title="" name="Unit" value="' + data.Unit + '" class="content-edit waf-state-focus icenter" type="text">';
            detail += '</div>';
            detail += col4;
            detail += '<input title="" name="UnitPrice" value="' + (data.UnitPrice == null ? '' : formatnum(data.UnitPrice)) + '" class="content-edit waf-state-focus iright" type="text">';
            detail += '</div>';
            detail += col5;
            detail += '<input title="" name="RetailPrice" value="' + (data.RetailPrice == null ? '' : formatnum(data.RetailPrice)) + '" class="content-edit waf-state-focus iright" type="text">';
            detail += '</div>';
            detail += col6;
            detail += '<input title="" name="Money" value="' + (data.Money == null ? '' : formatnum(data.Money)) + '" class="content-edit waf-state-focus iright lastinput" type="text">';
            detail += '</div>';
            detail += col7;
            detail += '<input class="checkbox" type="checkbox">';
            detail += '</div>';
            detail += '</div>';
            detail += '</div>';
        });
        
    }else{
    	for(var idx = 0; idx < 6; idx++){
    		if((idx%2)!= 0)
        		row = '<div style="width: 668px; height: 27px; top: 0px;" class="waf-widget-content waf-dataGrid-row waf-widget-odd">';
        	else
        		row = '<div style="width: 668px; height: 27px; top: 0px;" class="waf-widget-content waf-dataGrid-row waf-widget-even">';		
            detail += row + rowinside;
            detail += col0;
            detail += '<input name="ID" value="0" type="hidden">';
            detail += '<div class="content center">' + (idx + 1) + '</div>';
            detail += '</div>';
            detail += col1;
            detail += '<input title="" name="ProductCode" value="" class="content-edit waf-state-focus ileft" type="text">';
            detail += '</div>';
            detail += col2;
            detail += '<input title="" name="ProductName" value="" class="content-edit waf-state-focus ileft" type="text">';
            detail += '</div>';
            detail += col3;
            detail += '<input title="" name="Unit" value="" class="content-edit waf-state-focus icenter" type="text">';
            detail += '</div>';
            detail += col4;
            detail += '<input title="" name="UnitPrice" value="" class="content-edit waf-state-focus iright" type="text">';
            detail += '</div>';
            detail += col5;
            detail += '<input title="" name="RetailPrice" value="" class="content-edit waf-state-focus iright" type="text">';
            detail += '</div>';
            detail += col6;
            detail += '<input title="" name="Money" value="" class="content-edit waf-state-focus iright lastinput" type="text">';
            detail += '</div>';
            detail += col7;
            detail += '<input class="checkbox" type="checkbox">';
            detail += '</div>';
            detail += '</div>';
            detail += '</div>';
    	}
    }
    detail = container + detail + '</div>';
    return detail;
};
function draw_emprow(keycode){
	var emprow 		= "";
	var row 		= '<div style="width: 668px; height: 27px; top: 0px;" class="waf-widget-content waf-dataGrid-row waf-widget-even">';
    var rowinside 	= '<div style="width: 668px; height: 27px;" class="waf-datagrid-row-inside">';
    var col0 		= '<div style="width: 50px; height: 27px;" class="waf-dataGrid-cell waf-dataGrid-col-0">';
    var col1		= '<div style="width: 100px; height: 27px;" class="waf-dataGrid-cell waf-dataGrid-col-1">';
    var col2 		= '<div style="width: 150px; height: 27px;" class="waf-dataGrid-cell waf-dataGrid-col-2">';
    var col3 		= '<div style="width: 60px; height: 27px;" class="waf-dataGrid-cell waf-dataGrid-col-3">';
    var col4 		= '<div style="width: 60px; height: 27px;" class="waf-dataGrid-cell waf-dataGrid-col-4">';
    var col5 		= '<div style="width: 80px; height: 27px;" class="waf-dataGrid-cell waf-dataGrid-col-5">';
    var col6 		= '<div style="width: 120px; height: 27px;" class="waf-dataGrid-cell waf-dataGrid-col-6">';
    var col7 		= '<div style="width: 30px; height: 27px;" class="waf-dataGrid-cell waf-dataGrid-col-7">';
    var rowlength 	= $(".orderdetail .waf-widget-body .waf-dataGrid-row").length;
    if((rowlength+1)%2 != 0)
    	row 		= '<div style="width: 668px; height: 27px; top: 0px;" class="waf-widget-content waf-dataGrid-row waf-widget-odd">';
    emprow += row+rowinside;
    emprow += col0;
    emprow += '<input name="ID" value="0" type="hidden">';
    emprow += '<div class="content center">' + (rowlength + 1) + '</div>';
    emprow += '</div>';
    emprow += col1;
    emprow += '<input title="" name="ProductCode" value="" class="content-edit waf-state-focus ileft" type="text">';
    emprow += '</div>';
    emprow += col2;
    emprow += '<input title="" name="ProductName" value="" class="content-edit waf-state-focus ileft" type="text">';
    emprow += '</div>';
    emprow += col3;
    emprow += '<input title="" name="Unit" value="" class="content-edit waf-state-focus icenter" type="text">';
    emprow += '</div>';
    emprow += col4;
    emprow += '<input title="" name="UnitPrice" value="" class="content-edit waf-state-focus iright" type="text">';
    emprow += '</div>';
    emprow += col5;
    emprow += '<input title="" name="RetailPrice" value="" class="content-edit waf-state-focus iright" type="text">';
    emprow += '</div>';
    emprow += col6;
    emprow += '<input title="" name="Money" value="" class="content-edit waf-state-focus iright" type="text">';
    emprow += '</div>';
    emprow += col7;
    emprow += '<input class="checkbox" type="checkbox">';
    emprow += '</div>';
    emprow += '</div>';
    emprow += '</div>';
    var container = $(".orderdetail .waf-widget-body .container").append(emprow);
    $(".orderdetail .waf-widget-body").scrollTop(195);   
	$(container).find('.waf-datagrid-row-inside:last .waf-dataGrid-col-1 input').focus();
}
function order_navigator(doList){
	var isNew = sources.order.isNewElement();
	if (isNew) {
	    return false;
	}
	else {
		sources.order.TotalQuantity = unformatnum($$("txtTotalQuantity").getValue());
		sources.order.TotalMoney = unformatnum($$("txtTotalMoney").getValue());
	    sources.order.save({
	        onSuccess: function(event) {
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
	        	if(arrdetaildata.length > 0){
	        		$.each(arrdetaildata,function(idx,data){
	        			if (data.ID == "0") {
						    sources.orderdetail.newEntity();
						    sources.orderdetail.RID.set(sources.order);
							sources.orderdetail.ProductCode = data.ProductCode;
							sources.orderdetail.ProductName = data.ProductName;
							sources.orderdetail.Unit = data.Unit;
							sources.orderdetail.UnitPrice = unformatnum(data.UnitPrice);
							sources.orderdetail.RetailPrice = unformatnum(data.RetailPrice);
							sources.orderdetail.Money = unformatnum(data.Money);
							sources.orderdetail.save({
							    onSuccess: function(event) {
							        //Cap nhat datasource cho orderdetail
							        sources.orderdetail.addEntity(sources.orderdetail.getCurrentElement());
							    },
							    onError: function(error) {
							        jAlert(error['error'][0].message, "アラート");
							        return false;
							    }
							});
						}
						else {
							sources.orderdetail.query("ID = "+data.ID, {
						        onSuccess: function(event){
						            sources.orderdetail.ProductCode = data.ProductCode;
									sources.orderdetail.ProductName = data.ProductName;
									sources.orderdetail.Unit = data.Unit;
									sources.orderdetail.UnitPrice = unformatnum(data.UnitPrice);
									sources.orderdetail.RetailPrice = unformatnum(data.RetailPrice);
									sources.orderdetail.Money = unformatnum(data.Money);
									sources.orderdetail.save({
									    onError: function(error) {
									        jAlert(error['error'][0].message, "アラート");
									        return false;
									    }
									});
									
						        },
						        onError: function(error) {
							        jAlert(error['error'][0].message, "アラート");
							        return false;
							    }
					        });
					        
					        
						}
						sleep(100);
	        		});
	        	}
	        	switch (doList) {
	        	case 'first':
				    sources.order.select(0, {
				        onError: function(error) {
				        	jAlert(error['error'][0].message,"アラート");
				        }
				    });
				    break;
				case 'prev':
				    sources.order.selectPrevious();
				    break;
				case 'next':
				    sources.order.selectNext();
				    break;
				case 'last':
				    var last = sources.order.length;
		            if (last > 1) {
		                sources.order.select(last - 1, {
		                    onError: function(error) {
		                        jAlert(error['error'][0].message,"アラート");
		                    }
		                });
		            }
				    break;
				};
				var detaildata = Order.load_orderdetail(sources.order.ID);
				var detailhtml = draw_detail(detaildata);
				$$("txtTotalQuantity").setValue(formatnum(sources.order.TotalQuantity));
				$$("txtTotalMoney").setValue(formatnum(sources.order.TotalMoney));
				$(".orderdetail .waf-widget-body").empty().append(detailhtml);
	        	
	        },
	        onError: function(error) {
	        	jAlert(error['error'][0].message,"アラート");
	        }
	    });
	}
}
function sum_money(){
	var summoney = 0;
	$(".orderdetail .waf-widget-body .waf-dataGrid-row").each(function(){
		var money = $.trim($(this).find(".waf-datagrid-row-inside .waf-dataGrid-col-6 input").val());
		if(money == "")
			money = 0;
		money = unformatnum(money);
		summoney += parseInt(money);
	});
	$("#txtTotalMoney").val(formatnum(summoney));
}
function sum_unitprice(){
	var sumunitprice = 0;
	$(".orderdetail .waf-widget-body .waf-dataGrid-row").each(function(){
		var unitprice = $.trim($(this).find(".waf-datagrid-row-inside .waf-dataGrid-col-4 input").val());
		if(unitprice == "")
			unitprice = 0;
		unitprice = unformatnum(unitprice);
		sumunitprice += parseInt(unitprice);
	});
	$("#txtTotalQuantity").val(formatnum(sumunitprice));
}
function cal_money(obj){
	var currow = $(obj).closest(".waf-datagrid-row-inside");
	var UnitPrice = unformatnum(currow.find('.waf-dataGrid-col-4 input').val());
	var RetailPrice = unformatnum(currow.find('.waf-dataGrid-col-5 input').val());
	var Money = parseInt(UnitPrice)*parseInt(RetailPrice);
	currow.find('.waf-dataGrid-col-6 input').val(formatnum(Money));
}
function _init() {
    $(".content-edit").live({
        keydown: function(event) {
            var name = $(this).attr("name");
            switch (name) {
            case 'ProductCode':
            	if (event.keyCode == 13)
            		$(this).closest(".waf-datagrid-row-inside").find('.waf-dataGrid-col-2 input').select();
            break;
            case 'ProductName':
            	if (event.keyCode == 13)
            		$(this).closest(".waf-datagrid-row-inside").find('.waf-dataGrid-col-3 input').select();
            break;
            case 'Unit':
            	if (event.keyCode == 13)
            		$(this).closest(".waf-datagrid-row-inside").find('.waf-dataGrid-col-4 input').select();
            break;
            case 'UnitPrice':
            	if (event.keyCode == 13)
            		$(this).closest(".waf-datagrid-row-inside").find('.waf-dataGrid-col-5 input').select();
            break;
            case 'RetailPrice':
            	if (event.keyCode == 13)
            		$(this).closest(".waf-datagrid-row-inside").find('.waf-dataGrid-col-6 input').select();
            break;
            case 'Money':
                //Enter or Tab
                if (event.keyCode == 13 || event.keyCode == 9) {
                    var currrow = $(this).closest(".waf-dataGrid-row");
                    if (currrow.next('.waf-dataGrid-row').length == 0) {
                        draw_emprow(event.keyCode);
                    }else{
                    	currrow.next('.waf-dataGrid-row').find('.waf-datagrid-row-inside .waf-dataGrid-col-1 input').select()
                    }

                }
                break;
            }
        },
        change: function(event) {
        	var name = $(this).attr("name");
            switch (name) {
            case 'ProductCode':
            	
                break;
            case 'UnitPrice':
            	sum_unitprice();
            	cal_money($(this));
            	sum_money();
                break;
            case 'RetailPrice':
            	sum_unitprice();
            	cal_money($(this));
            	sum_money();
                break;
            case 'Money':
                sum_money();
                break;
            }

        },
        focusin: function(event){
        	var name = $(this).attr("name");
        	var val = $(this).val();
            switch (name) {
            case 'UnitPrice':
            	$(this).val(unformatnum(val));
                break;
            case 'RetailPrice':
            	$(this).val(unformatnum(val));
                break;
            case 'Money':
                $(this).val(unformatnum(val));
                break;
            }
        },
        focusout: function(event){
        	var name = $(this).attr("name");
        	var val = $(this).val();
            switch (name) {
            case 'UnitPrice':
            	$(this).val(formatnum(val));
                break;
            case 'RetailPrice':
            	$(this).val(formatnum(val));
                break;
            case 'Money':
                $(this).val(formatnum(val));
                break;
            }
        }
    });
}
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
	var isdlgclosesss = {};	// @icon
	var subdatagrid = {};	// @dataGrid
	var documentEvent = {};	// @document
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

	isdlgclosesss.click = function isdlgclosesss_click (event)// @startlock
	{// @endlock
		$$("dlgselect").closeDialog();
	};// @lock

	subdatagrid.onRowClick = function subdatagrid_onRowClick (event)// @startlock
	{// @endlock
		isdlgclose = true;
		$$("dlgselect").closeDialog();
		$$("txtSupCode").setValue(sources.supplier.SupCode);
		$$("txtSupName").setValue(sources.supplier.SupName);
		$$("txtShopcode").focus();
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		_init();
	};// @lock

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

	txtSupCode.change = function txtSupCode_change (event)// @startlock
	{// @endlock
		if (isdlgclose == false) {
		    var val = $.trim($$("txtSupCode").getValue());
		    if (val == "") $$("txtSupName").setValue("");
		    else {
		        if (val == "@") sources.supplier.allEntities();
		        else {
		            val = val.replace(/@/g, "");
		            sources.supplier.query("'SupCode' = :1 ", "*" + val + "*");
		        }
		        $$("dlgselect").center();
		    	$$("dlgselect").displayDialog();
		    	$$("txtSearch").focus();
		    }
		}
		isdlgclose = false;
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
		var isNew = sources.order.isNewElement();
		sources.order.TotalQuantity = unformatnum($$("txtTotalQuantity").getValue());
		sources.order.TotalMoney = unformatnum($$("txtTotalMoney").getValue());
		sources.order.save({
	        onSuccess: function(event) {
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
	        	if(arrdetaildata.length > 0){
	        		$.each(arrdetaildata,function(idx,data){
	        			if (data.ID == "0") {
						    sources.orderdetail.newEntity();
						    sources.orderdetail.RID.set(sources.order);
							sources.orderdetail.ProductCode = data.ProductCode;
							sources.orderdetail.ProductName = data.ProductName;
							sources.orderdetail.Unit = data.Unit;
							sources.orderdetail.UnitPrice = unformatnum(data.UnitPrice);
							sources.orderdetail.RetailPrice = unformatnum(data.RetailPrice);
							sources.orderdetail.Money = unformatnum(data.Money);
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
						            sources.orderdetail.ProductCode = data.ProductCode;
									sources.orderdetail.ProductName = data.ProductName;
									sources.orderdetail.Unit = data.Unit;
									sources.orderdetail.UnitPrice = unformatnum(data.UnitPrice);
									sources.orderdetail.RetailPrice = unformatnum(data.RetailPrice);
									sources.orderdetail.Money = unformatnum(data.Money);
									sources.orderdetail.save({
									    onError: function(error) {
									        jAlert(error['error'][0].message, "アラート");
									    }
									});
									
						        },
						        onError: function(error) {
							        jAlert(error['error'][0].message, "アラート");
							    }
					        });
						}
						sleep(100);
	        		});
	        	}
	        	
	        	if(isNew){
	        		jAlert("保存しました。","アラート",function(){var detailhtml = draw_detail([]);
		
						//Reload detail
						var detailhtml = draw_detail([]);
						$(".orderdetail .waf-widget-body").empty().append(detailhtml);
	        			
	        			
	        			//Cap nhat datasource cho order
						sources.order.addEntity(sources.order.getCurrentElement());
						
						
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
		}
	};// @lock

	icoSLast.click = function icoSLast_click (event)// @startlock
	{// @endlock
		order_navigator('last');
	};// @lock

	icoSNext.click = function icoSNext_click (event)// @startlock
	{// @endlock
		order_navigator('next');
	};// @lock

	icoSPrev.click = function icoSPrev_click (event)// @startlock
	{// @endlock
		order_navigator('prev');
	};// @lock

	icoSFirst.click = function icoSFirst_click (event)// @startlock
	{// @endlock
		order_navigator('first');
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
		var detailhtml = draw_detail([]);
		
		//Show Input
		$$("ordercontainer").selectTab(2);
		
		$(".orderdetail .waf-widget-body").empty().append(detailhtml);
		
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
		//Select detail
		var detaildata = Order.load_orderdetail(sources.order.ID);
		var detailhtml = draw_detail(detaildata);
		$$("txtTotalQuantity").setValue(formatnum(sources.order.TotalQuantity));
		$$("txtTotalMoney").setValue(formatnum(sources.order.TotalMoney));
		//Show Input
		$$("ordercontainer").selectTab(2);
		$(".orderdetail .waf-widget-body").empty().append(detailhtml);
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
	WAF.addListener("isdlgclosesss", "click", isdlgclosesss.click, "WAF");
	WAF.addListener("subdatagrid", "onRowClick", subdatagrid.onRowClick, "WAF");
	WAF.addListener("txtSupCode", "change", txtSupCode.change, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
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

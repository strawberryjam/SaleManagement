/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'Order' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(Order.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/
exports.load_orderdetail = function load_orderdetail(ID) {
    var order = ds.Order.find("ID = " + ID);
    var orderdetail = order.orderdetailCollection;
    return orderdetail;
};
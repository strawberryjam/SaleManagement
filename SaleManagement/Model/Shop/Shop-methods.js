

(model.Shop.collectionMethods.delSelected = function(selectedRows) {
	//Create an empty collection, that will be filled with entities to delete
	var toDelete = ds.Shop.createEntityCollection();

	// Fill the collection to delete
	selectedRows.forEach(function(rowNum) {
	    toDelete.add(this[rowNum]);
	}, this);

	// Reduce current collection
	var newColl = this.minus(toDelete);
	// Delete what needs to be deleted
	toDelete.remove();
	// Return the new collection
	return newColl;
}).scope = "public";


(model.Shop.collectionMethods.setSessionInfo = function(name, value) {
	sessionStorage.lock();
	sessionStorage[name] = value;
	sessionStorage.unlock();
}).scope = "public";


(model.Shop.collectionMethods.getSessionInfo = function(name) {
	return sessionStorage[name];
}).scope = "public";
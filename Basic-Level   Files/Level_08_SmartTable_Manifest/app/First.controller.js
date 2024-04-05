
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/odata/v4/ODataModel"
	], function (Controller, ODataModel) { 
	'use strict';

        var oModel = new JSONModel(); 

	return Controller.extend("app.First",{

		onInit: function () {

			var oModel = new ODataModel({
				serviceUrl : "https://services.odata.org/TripPinRESTierService/(S(po15j3rhuv503vpmxcq2bkd3))/"
			});

			console.log(oModel);

			
			this.getView().setModel(oModel);

		},

		





        onEdit: function() {
			this.byId("editButton").setVisible(false);
			this.byId("saveButton").setVisible(true);
			this.byId("cancelButton").setVisible(true);
		},

		onSave: function() {
			this.byId("saveButton").setVisible(false);
			this.byId("cancelButton").setVisible(false);
			this.byId("editButton").setVisible(true);
		},

		onCancel: function() {
			this.byId("cancelButton").setVisible(false);
			this.byId("saveButton").setVisible(false);
			this.byId("editButton").setVisible(true);
		},

	});


});
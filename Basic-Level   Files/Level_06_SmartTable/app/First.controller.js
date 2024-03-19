
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
	], function (Controller, JSONModel, MessageToast) { 
	'use strict';

	return Controller.extend("app.First",{


		onInit: function () {

			
				var sURL = "https://services.odata.org/Northwind/Northwind.svc/$metadata";		
				var oModel = new sap.ui.model.odata.v2.ODataModel(sURL, {
					json: true
				});	

			   
			   this.getView().setModel(oModel, "model");


		},



		



	});


});
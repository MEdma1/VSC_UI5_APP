
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
	], function (Controller, JSONModel, MessageToast) { 
	'use strict';

	return Controller.extend("app.First",{


		onInit: function () {

			// get the path to the JSON file
			var sPath = jQuery.sap.getModulePath("../Level_05_Table/app", "data.json"); 
			console.log(sPath);
			// initialize the model with the JSON file
			var oModel = new JSONModel(sPath);
			console.log(oModel);
			// set the model to the view
			this.getView().setModel(oModel, "model");


		},



		



	});


});

sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
	], function (Controller, JSONModel, MessageToast) { 
	'use strict';

	return Controller.extend("app.First",{


		onInit: function () {

			// get the path to the JSON file
			var sPath = jQuery.sap.getModulePath("../Level_05/app", "data2.json"); 
			var oJsonData = {
				firstName: "John",
				lastName: "Doe",
				address:[{city:"Heidelberg"}],
				enabled: true
			};
			console.log("testing T1");
			console.log(sPath);
			console.log(oJsonData);
			// initialize the model with the JSON file
			var oModel = new JSONModel(oJsonData);
			console.log(oModel);
			console.log(oModel.oData.firstName);			
			// set the model to the view
			this.getView().setModel(oModel, "jsonFile");

		},


		handlePress : function(){
			MessageToast.show("VSC-Output done!");
		}
	});


});
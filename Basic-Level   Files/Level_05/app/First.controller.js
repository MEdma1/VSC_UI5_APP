
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
	], function (Controller, JSONModel, MessageToast) { 
	'use strict';

	return Controller.extend("app.First",{


		onInit: function () {
			const oModel = new JSONModel();
			this.getView().setModel("./data2.json");
		},


		handlePress : function(){
			MessageToast.show("VSC-Output done!");
		}
	});


});
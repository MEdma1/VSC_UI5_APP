
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
	], function (Controller, JSONModel, MessageToast) { 
	'use strict';

	return Controller.extend("app.First",{


		onInit: function () {

			
		    var oData = {
				"names" : [ {
					   id : 1,
						Name : "Dinosaurus",
						Place : "Mountain"
						}, {
						
					   id : 2,
						Name : "Elephant",
						Place : "Forest"
						}, {
						id : 3,
						Name : "Whale",
						Place : "Sea"
						}, {
						id : 4,
						Name : "Duck",
						Place : "Water"
						}, {
						id : 5,
						Name : "Monkey",
						Place : "Tree"
						} ]
			   };
						 
   			   //var sPath = jQuery.sap.getModulePath("../Basic-Level   Files/app", "data_Tbl.json"); 

			   
			   var oModel = new JSONModel(oData);
			   this.getView().setModel(oModel, "model");


		},



		



	});


});
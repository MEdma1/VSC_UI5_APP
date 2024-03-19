
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
					 Name : "Henrik",
					 Place : "Mountain"
					 }, {
					 
					id : 2,
					 Name : "Stefan",
					 Place : "Forest"
					 }, {
					 id : 3,
					 Name : "Uwe",
					 Place : "Sea"
					 }, {
					 id : 4,
					 Name : "Helmut",
					 Place : "Water"
					 }, {
					 id : 5,
					 Name : "Jacob",
					 Place : "Tree"
					 } ]
			   };
						 
   			   //var sPath = jQuery.sap.getModulePath("../Basic-Level   Files/app", "data_Tbl.json"); 

			   
			   var oModel = new JSONModel(oData);
			   this.getView().setModel(oModel, "model");


		},



		



	});


});
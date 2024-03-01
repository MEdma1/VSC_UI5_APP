
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
	], function (Controller, MessageToast) { 
	'use strict';
	return Controller.extend("app.First",{
		handlePress : function(){
			MessageToast.show("VSC-Output done!");
		}
	});
});
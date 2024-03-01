sap.ui.define([
	"sap/m/Button",
	"sap/m/MessageToast"
], function (Button, MessageToast) {
	"use strict";

	new Button({
		text: "Output",
		press: function () {
			MessageToast.show("Hello!", {    
			my: "center center",       
			at: "center center", });
		}
	}).placeAt("content");

});
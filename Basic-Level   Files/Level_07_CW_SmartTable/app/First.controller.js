
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
	], function (Controller, JSONModel, MessageToast) { 
	'use strict';

	return Controller.extend("app.First",{


		onInit: function () {

		},


		
        onAfterRendering : function(){
            // this.onGetRequest('https://services.odata.org/V4/(S(epugafwj5m0rg30yoxbtltlk))/TripPinServiceRW/?$format=json');
			this.onGetRequest('https://services.odata.org/V3/Northwind/Northwind.svc/Products?$format=json');
        },




        onGetRequest : function(url){
            fetch(url)
            .then((res)=>res.json())
            .then((param)=>{
                this.getView().setModel(new JSONModel(param));
            });
        }





	});


});

sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
	], function (Controller, JSONModel, MessageToast) { 
	'use strict';

        var oModel = new JSONModel(); 

	return Controller.extend("app.First",{

        

		onInit: function () {

		},

		
        onAfterRendering : function(){
			this.onGetRequest('https://services.odata.org/TripPinRESTierService/(S(zdjpqz5q4hlpngaq3zdkdzzv))/Airports?$format=json');
        },



        onGetRequest : function(url){
            fetch(url)
            .then((res)=>res.json())
            .then((param)=>{
                this.getView().setModel(new JSONModel(param));

                oModel(param);
                console.log(oModel);

            });
        },












        onEdit: function() {
			// this.aProductCollection = deepExtend([], this.oModel.getProperty("/value"));
			this.byId("editButton").setVisible(false);
			this.byId("saveButton").setVisible(true);
			this.byId("cancelButton").setVisible(true);
			// this.rebindTable(this.oEditableTemplate, "Edit");
		},

		onSave: function() {
			this.byId("saveButton").setVisible(false);
			this.byId("cancelButton").setVisible(false);
			this.byId("editButton").setVisible(true);
			// this.rebindTable(this.oReadOnlyTemplate, "Navigation");
		},

		onCancel: function() {
			this.byId("cancelButton").setVisible(false);
			this.byId("saveButton").setVisible(false);
			this.byId("editButton").setVisible(true);
			// this.oModel.setProperty("/ProductCollection", this.aProductCollection);
			// this.rebindTable(this.oReadOnlyTemplate, "Navigation");
		},

		// rebindTable: function(oTemplate, sKeyboardMode) {
			// this.oTable.bindItems({
			// 	path: "/ProductCollection",
			// 	template: oTemplate,
			// 	templateShareable: true,
			// 	key: "ProductID"
			// });
		// },

	});


});
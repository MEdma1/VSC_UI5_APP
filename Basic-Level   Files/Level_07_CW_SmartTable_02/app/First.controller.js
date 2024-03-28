
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/odata/v4/ODataModel"
	// 'sap/ui/model/odata/v2/ODataModel'
	], function (Controller, JSONModel, ODataModel) { 
	'use strict';

	return Controller.extend("app.First",{

        

		onInit: function () {

			// var oModel1 = new sap.ui.model.odata.ODataModel("http://services.odata.org/Northwind/Northwind.svc/Products")
			// var oModel1 = new ODataModel("https://services.odata.org/V3/northwind/Northwind.svc/$metadata/");
			// var oModel2 = new ODataModel({serviceUrl: "https://services.odata.org/V3/northwind/Northwind.svc/"});

			var array = [{
                "name" : "Dinesh",
                "id" : "123"
            },
            {
                "name" : "Nikhil",
                "id" : "456"
            },{
                "name" : "Pulkit",
                "id" : "789"
            }];

            var model = new sap.ui.model.json.JSONModel();

            model.setData({
                tableSet: array
            });

			console.log(model);

            this.getView().byId("smartTable_ResponsiveTable").setModel(model);
            




		},

		
        onAfterRendering : function(){
			this.onGetRequest('https://services.odata.org/V3/Northwind/Northwind.svc/Products?$format=json');
        },


		





        onGetRequest : function(url){
            fetch(url)
            .then((res)=>res.json())
            .then((param)=>{
                this.getView().setModel(new JSONModel(param));
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
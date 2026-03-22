sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/core/Fragment',
	'sap/m/MessageToast',
	"sap/m/MenuItem"
], (Controller, Fragment,MessageToast,MenuItem) => {
    "use strict";

    return Controller.extend("com.akshay.menu.controller.Page", {
        	onPress: function () {
				var oView = this.getView(),
					oButton = oView.byId("button");

				if (!this._oMenuFragment) {
					this._oMenuFragment = Fragment.load({
						id: oView.getId(),
						name: "com.akshay.menu.fragment.Menu",
						controller: this
					}).then(function(oMenu) {
						oMenu.openBy(oButton);
						this._oMenuFragment = oMenu;
						return this._oMenuFragment;
					}.bind(this));
				} else if (this._oMenuFragment.isOpen()) {
					this._oMenuFragment.close();
				} else {
					this._oMenuFragment.openBy(oButton);
				}
			},
			onMenuAction: function(oEvent) {
				var oItem = oEvent.getParameter("item"),
					sItemPath = "";

				while (oItem instanceof MenuItem) {
					sItemPath = oItem.getText() + " > " + sItemPath;
					oItem = oItem.getParent();
				}

				sItemPath = sItemPath.substr(0, sItemPath.lastIndexOf(" > "));

				MessageToast.show("Action triggered on item: " + sItemPath);
			}
    });
});
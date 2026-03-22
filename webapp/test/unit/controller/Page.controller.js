/*global QUnit*/

sap.ui.define([
	"com/akshay/menu/controller/Page.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Page Controller");

	QUnit.test("I should test the Page controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

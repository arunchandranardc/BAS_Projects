/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"compoc./automation_tool_v1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});

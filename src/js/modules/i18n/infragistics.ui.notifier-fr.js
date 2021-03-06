﻿/*!@license
* Infragistics.Web.ClientUI Notifier localization resources <build_number>
*
* Copyright (c) 2011-<year> Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define( [
			"jquery"
		], factory );
	} else {
		factory(jQuery);
	}
}
(function($) {
$.ig = $.ig || {};

if (!$.ig.Notifier) {
	$.ig.Notifier = {};

	$.extend($.ig.Notifier, {
		locale: {
		    successMsg: "Réussite",
		    errorMsg: "Erreur",
		    warningMsg: "Avertissement",
		    notSupportedState: "État de notification non pris en charge ! Utilisez un des états pris en charge 'success', 'info', 'warning', 'error'",
		    notSupportedMode: "Mode de notification non pris en charge ! Utilisez un des modes pris en charge 'auto', 'popover', 'inline'"
		}
	});

}
}));// REMOVE_FROM_COMBINED_FILES

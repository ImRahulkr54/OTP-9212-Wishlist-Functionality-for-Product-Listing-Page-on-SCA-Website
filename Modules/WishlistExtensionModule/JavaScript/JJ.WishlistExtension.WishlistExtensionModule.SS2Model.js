// Model.js
// -----------------------
// @module Case
define("JJ.WishlistExtension.WishlistExtensionModule.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/WishlistExtensionModule/SuiteScript2/WishlistExtensionModule.Service.ss"
            ),
            true
        )
});
});

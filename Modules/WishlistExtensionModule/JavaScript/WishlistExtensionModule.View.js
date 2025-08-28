// @module JJ.WishlistExtension.WishlistExtensionModule
define('JJ.WishlistExtension.WishlistExtensionModule.View'
,	[
	'jj_wishlistextension_wishlistextensionmodule.tpl' 

	, 'facets_item_cell_grid_extension.tpl'
	
	,	'JJ.WishlistExtension.WishlistExtensionModule.SS2Model'
	
	,	'Backbone'
    ]
, function (
	jj_wishlistextension_wishlistextensionmodule_tpl

	, facetsItemCellGridExtension
	
	,	WishlistExtensionModuleSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class JJ.WishlistExtension.WishlistExtensionModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: jj_wishlistextension_wishlistextensionmodule_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new WishlistExtensionModuleModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return JJ.WishlistExtension.WishlistExtensionModule.View.Context
	,	getContext: function getContext()
		{
			//@class JJ.WishlistExtension.WishlistExtensionModule.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});

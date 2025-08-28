const { template } = require("underscore");


define(
	'JJ.WishlistExtension.WishlistExtensionModule'

,   [
		'JJ.WishlistExtension.WishlistExtensionModule.View' ,
		'Facets.ItemCell.View' ,
		'ProductDetails.AddToProductList.View' ,
		'ProductDetails.Full.View' ,
		'ProductDetails.Base.View' ,
		'Item.Model' ,
		'underscore' ,
		'jQuery'
	
	]
,   function (
		WishlistExtensionModuleView ,
		FacetsItemCellView ,
		ProductDetailsAddToProductListView ,
		ProductDetailsFullView ,
		ProductDetailsBaseView ,
		ItemModel ,
		_ ,
		jQuery
		
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			//var layout = container.getComponent('Layout');
			
			  /* if(layout)
			{
				layout.addChildView('Cart.QuickAddToCart', function() { 
					return new WishlistExtensionModuleView({ container: container });
				});
			}  */

				try {

          _.extend(FacetsItemCellView.prototype.childViews, {
            AddToProductList: function () {
				//console.log(this.model);
              return new ProductDetailsAddToProductListView({
                model: this.model,
                application: this.options.application,
              });
            },
          }); 

		  /* _.extend(FacetsItemCellView.prototype.childViews, {

        AddToProductList: function () {
          const model = this.model;

          // Add validation methods if not already present
          if (typeof model.areAttributesValid !== "function") {
            _.extend(model, {
              areAttributesValid: function () {
                const quantity = this.get("quantity");
                const options = this.get("options");
                const item = this.get("item");

                const isQuantityValid =
                  typeof quantity === "number" && quantity > 0;
                const isItemValid = item && item.internalid;
                const isOptionsValid = options && typeof options === "object";

                return isQuantityValid && isItemValid && isOptionsValid;
              },

              isValid: function () {
                return this.areAttributesValid();
              },
            });
          }
          console.log(this.model);
          return new ProductDetailsAddToProductListView({
            model: model,
            application: this.options.application,
          });
        },
      }); */


		  /* _.extend(ItemModel.prototype, {
        areAttributesValid: function (attributes, validators) {
          const current_validation = _.extend({}, this.validation);
          _.extend(this.validation, validators || {});
          const result = this.isValid(attributes);
          this.validation = current_validation;
          return result;
        },
      }); */

          /* _.extend(ProductDetailsFullView.prototype, {

            initialize: function initialize() {
              ProductDetailsBaseView.prototype.initialize.apply(this, arguments);
              this.model.on("change", this.updateURL, this);
			  console.log(this.model);
            },

            childViews: _.extend({}, ProductDetailsFullView.prototype.childViews, {
              AddToProductList: function () {
                console.log("test", this);
                return new AddToProductListView({
                  model: this.model,
                  application: this.options.application,
                });
              },
            }),
          }); */

        } catch (e) {

          console.log(e.message);

        }

			/* _.extend(FacetsItemCellView.prototype, {
                template:facetsItemCellGridExtension 
			}); */

		}
	};
});

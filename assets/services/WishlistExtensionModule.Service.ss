
function service(request, response)
{
	'use strict';
	try 
	{
		require('JJ.WishlistExtension.WishlistExtensionModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('JJ.WishlistExtension.WishlistExtensionModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}
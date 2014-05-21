!function(){

	var   Class 		= require('ee-class')
		, log 			= require('ee-log');



	module.exports = new Class({

		init: function(options) {
			if (options) {
				this.path 			= options.path  		|| "";
				this.data 			= options.data  		|| null;
				this.filename 		= options.filename  	|| "";
				this.abspath 		= options.abspath  		|| "";
				this.mimeType 		= options.mimeType  	|| "";
				this.charset 		= options.charset  		|| "";
				this.etag 			= options.etag;
				this.contentType 	= this.mimeType + ( this.charset ? "; charset=" + this.charset : "" );
			}
		}

	});
}();

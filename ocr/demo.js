var api = require("project-oxford-ocr-api");
var fs = require("fs");
api.API_KEY = '15d25e801e874ff0a3c38bbb7fcc6067' // SET THE KEY HERE 
 
api.fromStream(
	// C:\\Users\\cuiyuxuan\\Desktop\\New folder\\1.jpg
	// C:\\Users\\cuiyuxuan\\Desktop\\New folder\\Adjusted Estimate.pdf
		{ data : fs.createReadStream("C:\\Users\\cuiyuxuan\\Desktop\\New folder\\1.jpg")}, 
	    function(error, response, result)
		{
			if(error) {
				console.log(error);
			}
			else if(response) {
				console.log(response);
			}

		    //console.log(result);
		    console.log(result.getAllText());
		    //console.log(result.getTextByFlowDirection());
		});
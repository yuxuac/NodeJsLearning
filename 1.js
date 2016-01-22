var edge = require('edge');

process.stdin.setEncoding('utf8');

var helloworld = edge.func(function() {/*

    using System;
    using System.Text.RegularExpressions;
    using System.Threading.Tasks;

    public class Startup
    {
        private Regex RegexValidVehicleRegistrationNumber = new Regex(@"^(([\u4e00-\u9fa5]{1}[A-Z]{1})[-]?|([wW][Jj][\u4e00-\u9fa5]{1}[-]?)|([a-zA-Z]{2}))[A-Za-z0-9]{5}$", RegexOptions.Compiled);
        
        public async Task<object> Invoke(object input)
        {
            var item = input.ToString().Trim();

            // bool as return tyep
            return await new TaskFactory<bool>().StartNew((i) => 
            { 
                return RegexValidVehicleRegistrationNumber.IsMatch(i.ToString()); 
            }, 
            item);
        }
    }
*/});

console.log();

if(process.argv.length > 2) {
	var vehicleregistrationNumber = process.argv[2];

	helloworld(vehicleregistrationNumber, function(error, result){
	    if(error) throw error;
        console.log(vehicleregistrationNumber + ':' + result);
    });
}else{
	console.log('Please provide vehicleregistrationNumber');
}

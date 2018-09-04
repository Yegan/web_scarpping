let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");
let tables = [];

request("http://racing.hkjc.com/racing/Info/meeting/RaceCard/english/Local/", function(err, res, body){
if (err, res.statusCode === 200){
	
	let $ = cheerio.load(body); 
	$('table', 'div.rowDiv10').each(function() {
	let table = 	$(this).attr('table');
	
	tables.push(table);	
	})
	
	for(var i = 0; tables.length; i++){
		request(tables [i]).pipe(fs.createWriteStream('raceCard' + i + '.csv'));
	}	


}



});

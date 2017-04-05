
// node libraries
var csv = require("fast-csv");
var fs = require("fs");
var levenshtein = require("levenshtein"); 
 
// variables for csv input
var data_coords=[];  // csv data with coordinates
var data_id=[];  	// csv data with id


var dataFolder= "../data/";
var latLonInputFileName = "address_LAT_LON.csv";
var idInputFileName = "address_ID.csv";
var outputFolder= "../results/";

// count to check weather both files were read completely
var dataReadyCount =0;

//array for results
var results =[]; 
 
// read input CSVs
csv
 .fromPath(dataFolder + latLonInputFileName)
 .on("data", function(data){
	 data_coords.push(data);
 }). on("end", function(){
	dataReadyCount++;
	compareShit()
 })
 
 csv
 .fromPath(dataFolder + idInputFileName)
 .on("data", function(data){
     data_id.push(data)
 }). on("end", function(){
	dataReadyCount++
	compareShit()
 })
 
 
 // compare shit
 var compareShit = function(){
	 
	 if(dataReadyCount === 2 && data_coords.length > 0 && data_id.length > 0){
		 var results =[]; 
		 // iteate over data with id
		 
		 for(var i= 0; i < data_coords.length; i++){
			 
			 console.log("data_coords: "+i)
			 
			 // variable to save lowest distance (set to very high in beginning)
			 var bestdist=999999;
			 
			 // variable to save bestmatch
			 var bestmatch;
			 
			 // iteate over data with lat lon
			 
			 for(var j= 0; j < data_id.length; j++){
				 
				//calculate levenshteindistance by adding distances for each field for all fields ... this is very simple an should be weighted or somehow made much more clever ;))				
				 
				var dist = 
					new levenshtein(data_coords[i][0],data_id[j][0]).distance +   
					new levenshtein(data_coords[i][1],data_id[j][1]).distance +
					new levenshtein(data_coords[i][2],data_id[j][2]).distance +
					new levenshtein(data_coords[i][3],data_id[j][3]).distance +
					new levenshtein(data_coords[i][4],data_id[j][4]).distance 
					
					if(bestdist > dist){
						//save best match if is lowest distance
						bestmatch = [data_coords[i][0],data_coords[i][1],data_coords[i][2],data_coords[i][3],data_coords[i][4],data_coords[i][5],data_coords[i][6],data_id[j][5],dist]
						bestdist=dist;
					}
			 }
			 results.push(bestmatch);
		 }

		 //write results to results csv
		 
		 var ws = fs.createWriteStream(outputFolder+"results.csv");
		csv
		   .write(results, {headers: false})
		   .pipe(ws);
		 
	 } 
 }
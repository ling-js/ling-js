/*function createHTML(){
	$('#one').html(
		"<div id='resultpanel' class='panel-panel-default'>" +
  		"<div class='panel panel-default'>" + 
    	"<div class='panel-heading'>" +
    	"<a data-toggle='collapse' data-target='#dataset1' class='text-muted'><span aria-hidden='true' class='glyphicon glyphicon-open'></span>                Dataset 1</a></div><span id="dataset1" class="panel-body panel-collapse collapse out">"
      + "<p id='quality'>Metadata:</p>"
      + "<p id='resolution1'></p>"
      + "<form>"
      + "<container>"
      +"    <input id='rgb' type='radio' name='color' value='RGB' onclick='toggleDrop(1,2)'/> RGB<br/>"
      +"    <!--span.panel-body.panel-collapse.collapse.out(id='dropd1')-->"
      +"    <label for="rgb" id="dropd1"> Red band:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      +"    <li class="dropdown btn btn-default"><span class="glyphicon glyphicon-th-list"> Select <span class="caret"></span></span>"
      +"        <ul data-toggle="dropdown" class="dropdown-menu dropdown-toggle">"
      +"          <li><a href="#">Band 1</a></li>"
      +"          <li> <a href="#">Band 2</a></li>"
      +"          <li><a href="#">Band 3</a></li>"
      +"          <li> <a href="#">Band 4</a></li>"
      +"          <li><a href="#">Band 5</a></li>"
      +"          <li> <a href="#">Band 6</a></li>"
      +"          <li><a href="#">Band 7</a></li>"
      +"          <li> <a href="#">Band 8</a></li>"
      +"          <li><a href="#">Band 8a</a></li>"
      +"          <li><a href="#">Band 9</a></li>"
      +"          <li> <a href="#">Band 10</a></li>"
      +"          <li><a href="#">Band 11</a></li>"
      +"          <li> <a href="#">Band 12</a></li>"
      +"        </ul>"
      +"      </li><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min-Value:"
      +"      <input type="number" name="minValue" id="minRed" placeholder="0" value="0"/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Max-Value:"
      +"      <input type="number" name="maxValue" maxlength="5" placeholder="65536" value="65536"/><br/><br/> Green band:&nbsp;&nbsp;"
      +"      <li class="dropdown btn btn-default"><span class="glyphicon glyphicon-th-list"> Select <span class="caret"></span></span>"
      +"        <ul data-toggle="dropdown" class="dropdown-menu dropdown-toggle">"
      +"          <li><a href="#">Band 1</a></li>"
      +"          <li> <a href="#">Band 2</a></li>"
      +"          <li><a href="#">Band 3</a></li>"
      +"          <li> <a href="#">Band 4</a></li>"
      +"          <li><a href="#">Band 5</a></li>"
      +"          <li> <a href="#">Band 6</a></li>"
      +"         <li><a href="#">Band 7</a></li>"
      +"          <li> <a href="#">Band 8</a></li>"
      +"          <li><a href="#">Band 8a</a></li>"
      +"          <li><a href="#">Band 9</a></li>"
      +"          <li> <a href="#">Band 10</a></li>"
      +"          <li><a href="#">Band 11</a></li>"
      +"          <li> <a href="#">Band 12</a></li>"
      +"        </ul>"
      +"      </li><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min-Value:"
      +"      <input type="number" name="minValue" maxlength="5" placeholder="0" value="0"/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Max-Value:"
      +"      <input type="number" name="maxValue" maxlength="5" placeholder="65536" value="65536"/><br/><br/> Blue band:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      +"      <li class="dropdown btn btn-default"><span class="glyphicon glyphicon-th-list"> Select <span class="caret"></span></span>"
      +"        <ul data-toggle="dropdown" class="dropdown-menu dropdown-toggle">"
      +"          <li><a href="#">Band 1</a></li>"
      +"          <li> <a href="#">Band 2</a></li>"
        +"        <li><a href="#">Band 3</a></li>"
        +"        <li> <a href="#">Band 4</a></li>"
        +"        <li><a href="#">Band 5</a></li>"
        +"        <li> <a href="#">Band 6</a></li>"
        +"        <li><a href="#">Band 7</a></li>"
        +"        <li> <a href="#">Band 8</a></li>"
        +"        <li><a href="#">Band 8a</a></li>"
        +"        <li><a href="#">Band 9</a></li>"
        +"        <li> <a href="#">Band 10</a></li>"
        +"        <li><a href="#">Band 11</a></li>"
        +"        <li> <a href="#">Band 12</a></li>"
        +"      </ul>"
        +"    </li><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min-Value:"
        +"    <input type="number" name="minValue" maxlength="5" placeholder="0" value="0"/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Max-Value:"
        +"    <input type="number" name="maxValue" maxlength="5" placeholder="65536" value="65536"/><br/>"
        +"  </label><br/>"
        +"  <input id="grey" type="radio" name="color" value="Greyscale" onclick="toggleDrop(2,1)"/> Greyscale<br/>"
        +"  <!--span.panel-body.panel-collapse.collapse.out(id='dropd2')-->"
        +"  <label for="grey" id="dropd2"> Choose a band:&nbsp;&nbsp;"
        +"    <li class="dropdown btn btn-default"><span class="glyphicon glyphicon-th-list"> Select <span class="caret"></span></span>"
        +"      <ul data-toggle="dropdown" class="dropdown-menu dropdown-toggle">"
        +"        <li><a href="#">Band 1</a></li>"
        +"        <li> <a href="#">Band 2</a></li>"
        +"        <li><a href="#">Band 3</a></li>"
        +"         <li> <a href="#">Band 4</a></li>"
        +"         <li><a href="#">Band 5</a></li>"
        +"        <li> <a href="#">Band 6</a></li>"
        +"        <li><a href="#">Band 7</a></li>"
        +"        <li> <a href="#">Band 8</a></li>"
        +"        <li><a href="#">Band 8a</a></li>"
        +"        <li><a href="#">Band 9</a></li>"
        +"        <li> <a href="#">Band 10</a></li>"
        +"        <li><a href="#">Band 11</a></li>"
        +"        <li> <a href="#">Band 12</a></li>"
        +"      </ul>"
        +"    </li><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min-Value:"
        +"    <input type="number" name="minValue" maxlength="5" placeholder="0" value="0"/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Max-Value:"
        +"    <input type="number" name="maxValue" maxlength="5" placeholder="65000" value="65000"/><br/><br/>"
        +"  </label>"
        +"</container>Choose your opacity:"
        +"<input type="range" name="ageInputName" id="ageInputId" value="0" min="0" max="100" oninput="ageOutputId.value= 'Opacity Level:' + ageInputId.value"/>"
        +"<output name="ageOutputName" id="ageOutputId">Opacity Level: 0</output>"
      +"</form>"
      +"<div class="form-group">"
        +"<button id="show" onclick="" class="btn btn-primary"><span class="glyphicon glyphicon-search"></span> Show this dataset</button>"
      +"</div></span>"
  +"</div>"
+"</div>"
);}*/


function createInnerHTML(length){
	for(i=1;i < length+1; i++){
		$('#one').html($('#one').html() + '<div class="panel panel-default"> <div class="panel-heading"><a class="text-muted" data-toggle="collapse" data-target="#dataset' + i + '"><span class="glyphicon glyphicon-open" aria-hidden="true"></span> Dataset'+ i +'</a></div><span class="panel-body panel-collapse collapse out" id="dataset'+i+'"> <p id="quality">Metadata:</p> <p id="resolution'+i+'"></p> ' 
										+ ' <form id="showData' + i + '" method="POST"> <container> <input id="rgb'+i+'" type="radio" name="rgbbool'+ i +'" value="true" onclick="toggleDrop('+(i*2)+','+((i*2)+1)+')"/> RGB<br/> <label for="rgb" class="dropd" id="dropd'+(i*2)+'"> ' 
										+ ' Red band:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <select name="rcn" id="rgbselect' + ((i*3)-2)+ '"> <option selected="selected" disabled="disabled">Pick a band</option> <option value="B1">Band 1</option> <option value="B2">Band 2</option> <option value="B3">Band 3</option> <option value="B4">Band 4</option> <option value="B5">Band 5</option> <option value="B6">Band 6</option> <option value="B7">Band 7</option> <option value="B8">Band 8</option> <option value="B8a">Band 8a</option> <option value="B9">Band 9</option> <option value="B10">Band 10</option> <option value="B11">Band 11</option> <option value="B12">Band 12</option> </select> <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ' 
										+ ' Min-Value: <input type="number" name="rcmin" id="minRed" placeholder="0" value="0"/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ' 
										+ ' Max-Value: <input type="number" name="rcmax" maxlength="5" placeholder="65536" value="65536"/><br/><br/> ' 
										+ ' Green band:&nbsp;&nbsp; <select name="gcn" id="rgbselect' + ((i*3)-1)+ '" value="0"> <option selected="selected" disabled="disabled" value="0">Pick a band</option> <option value="B1">Band 1</option> <option value="B2">Band 2</option> <option value="B3">Band 3</option> <option value="B4">Band 4</option> <option value="B5">Band 5</option> <option value="B6">Band 6</option> <option value="B7">Band 7</option> <option value="B8">Band 8</option> <option value="B8a">Band 8a</option> <option value="B9">Band 9</option> <option value="B10">Band 10</option> <option value="B11">Band 11</option> <option value="B12">Band 12</option> </select> <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ' 
										+ ' Min-Value: <input type="number" name="gcmin" maxlength="5" placeholder="0" value="0"/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ' 
										+ ' Max-Value: <input type="number" name="gcmax" maxlength="5" placeholder="65536" value="65536"/><br/><br/> ' 
										+ ' Blue band:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <select name="bcn" id="rgbselect' + (i*3)+ '" value="0"> <option selected="selected" disabled="disabled" value="0">Pick a band</option> <option value="B1">Band 1</option> <option value="B2">Band 2</option> <option value="B3">Band 3</option> <option value="B4">Band 4</option> <option value="B5">Band 5</option> <option value="B6">Band 6</option> <option value="B7">Band 7</option> <option value="B8">Band 8</option> <option value="B8a">Band 8a</option> <option value="B9">Band 9</option> <option value="B10">Band 10</option> <option value="B11">Band 11</option> <option value="B12">Band 12</option> </select> <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ' 
										+ ' Min-Value: <input type="number" name="bcmin" maxlength="5" placeholder="0" value="0"/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ' 
										+ ' Max-Value: <input type="number" name="bcmax" maxlength="5" placeholder="65536" value="65536"/><br/> </label><br/> ' 
										+ ' <input id="grey'+i+'" type="radio" name="rgbbool'+ i +'" value="false" onclick="toggleDrop('+((i*2)+1)+','+(i*2)+')"/> Greyscale<br/> <label for="grey" class="dropd" id="dropd'+((i*2)+1)+'"> ' 
										+ ' Choose a band:&nbsp;&nbsp; <select name="gsc" id="greyselect" value="0"> <option selected="selected" disabled="disabled" value="0">Pick a band</option> <option value="B1">Band 1</option> <option value="B2">Band 2</option> <option value="B3">Band 3</option> <option value="B4">Band 4</option> <option value="B5">Band 5</option> <option value="B6">Band 6</option> <option value="B7">Band 7</option> <option value="B8">Band 8</option> <option value="B8a">Band 8a</option> <option value="B9">Band 9</option> <option value="B10">Band 10</option> <option value="B11">Band 11</option> <option value="B12">Band 12</option> </select><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ' 
										+ ' Min-Value: <input type="number" name="gcmin" maxlength="5" placeholder="0" value="0"/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ' 
										+ ' Max-Value: <input type="number" name="gcmax" maxlength="5" placeholder="65536" value="65536"/><br/><br/> </label> </container> <br/> ' 
										+ ' <p>Choose your opacity:</p> <input type="range" name="ageInputName" id="ageInputId'+i+'" value="0" min="0" max="100" oninput="showOpacityLevel('+i+')"/><output name="ageOutputName" id="ageOutputId'+i+'">Opacity Level: 0</output> <br/> ' 
										+ ' <button type="submit" class="btn btn-primary"><span class="glyphicon glyphicon-search"></span> Show this dataset</button> </form> </span> </div>');
	}
	return $('#one').html();
}

function createHTML(length){
	$('#one').html('<div class="panel-panel-default" id="resultpanel">'
	+ createInnerHTML(length) + '</div>');
	for(var j=1; j<(length+1); j++){
		$('#showData'+ j).submit(function(e) {
		    e.preventDefault();
		    console.log($('#rgbselect1').val());
		    console.dir(radioValue(document.getElementsByName('rgbbool3')));
		    //Prüfe ob die Eingabefelder für die Marker nicht leer sind
		    if (  
		    		(((radioValue(document.getElementsByName('rgbbool'+ j))) == "true") && ($('#rgbselect'+ ((j*3)-2)).val()  !== null) && ($('#rgbselect'+ ((j*3)-1)).val()  !== null) && ($('#rgbselect'+ (j*3)).val()  !== null)) 
		    	|| 	(((radioValue(document.getElementsByName('rgbbool'+ j))) == "false") && ($('#greyselect').val() !== null))){
		    		console.log("trueee: " + j); 
			        var that = this;
			        // submit via ajax
			        $.ajax({
			          data: $(that).serialize(),
			          type: $(that).attr('method'),
			          url:  'gis-bigdata.uni-muenster.de:14014/generate?',
			          error: function(xhr, status, err) {
			            console.log("Error while loading Data");
			            alert("Error while loading Data");
			          },
			          success: function(res) {
			             console.log("Data successfully loaded.");
			          }
			        });
		    	}	
		    else {
		    	console.log("falseeeee: " + j);
		    	alert("Please define requested values before clicking the Show this dataset -Button");
			}
		});
		console.log("Submit overwritten.")
	}
	console.dir($('#one').html());
}


//<select> <option selected="selected" disabled="disabled">Pick a band</option> <option value="1">Band 1</option> <option value="2">Band 2</option> <option value="3">Band 3</option> <option value="4">Band 4</option> <option value="5">Band 5</option> <option value="6">Band 6</option> <option value="7">Band 7</option> <option value="8">Band 8</option> <option value="8a">Band 8a</option> <option value="9">Band 9</option> <option value="10">Band 10</option> <option value="11">Band 11</option> <option value="12">Band 12</option> </select>

//<li class="dropdown btn btn-default"><span class="glyphicon glyphicon-th-list"> Select <span class="caret"></span></span> <ul class="dropdown-menu dropdown-toggle" data-toggle="dropdown"> <li><a href="#">Band 1</a></li> <li> <a href="#">Band 2</a></li> <li><a href="#">Band 3</a></li> <li> <a href="#">Band 4</a></li> <li><a href="#">Band 5</a></li> <li> <a href="#">Band 6</a></li> <li><a href="#">Band 7</a></li> <li> <a href="#">Band 8</a></li> <li><a href="#">Band 8a</a></li> <li><a href="#">Band 9</a></li> <li> <a href="#">Band 10</a></li> <li><a href="#">Band 11</a></li> <li> <a href="#">Band 12</a></li> </ul> </li>
function radioValue(radios){

	for (var i = 0, length = radios.length; i < length; i++)
	{
		if (radios[i].checked)
		{
		  return(radios[i].value);
		}	
	}
	return "unknown";
}


function showOpacityLevel(i){
	$('#ageOutputId'+ i ).html('Opacity Level:' + $('#ageInputId'+ i ).val());
}





function visualizeMetadata(res){





  for(i=0; i < res.length; i++){
  	console.log(i)
$('#resolution' + (i+1)  ).html(
"<b> Cloud Coverage Assesment: </b>" + res[i].CLOUD_COVERAGE_ASSESSMENT +  "</br>" +
"<b> Datatake Sensing Start: </b>" + res[i].DATATAKE_1_DATATAKE_SENSING_START + "</br>" +
"<b> Datatkae Type: </b>" + res[i].DATATAKE_1_DATATAKE_TYPE + "</br>" +
"<b> Datatake ID: </b>" + res[i].DATATAKE_1_ID + "</br>" +
"<b> Sensing Orbit Direction: </b>" + res[i].DATATAKE_1_SENSING_ORBIT_DIRECTION + "</br>" +
"<b> Sensing Orbit Number: </b>" + res[i].DATATAKE_1_SENSING_ORBIT_NUMBER + "</br>" +
"<b> Spacecraft Name: </b>" + res[i].DATATAKE_1_SPACECRAFT_NAME + "</br>" +
"<b> Degraded ANC Data Percentage: </b>" + res[i].DEGRADED_ANC_DATA_PERCENTAGE + "</br>" +
"<b> Degraded MSI Data Percentage: </b>" + res[i].DEGRADED_MSI_DATA_PERCENTAGE + "</br>" +
"<b> Footprint: </b>" + res[i].FOOTPRINT + "</br>" +
"<b> Format Correctness Flag: </b>" + res[i].FORMAT_CORRECTNESS_FLAG + "</br>" +
"<b> General Quality Flag: </b>" + res[i].GENERAL_QUALITY_FLAG + "</br>" +
"<b> Generation Time: </b>" + res[i].GENERATION_TIME + "</br>" +
"<b> Geometric Quality Flag: </b>" + res[i].GEOMETRIC_QUALITY_FLAG + "</br>" +
"<b> Preview Geo Info: </b>" + res[i].PREVIEW_GEO_INFO + "</br>" +
"<b> Preview Image-Url: </b>" + res[i].PREVIEW_IMAGE_URL +"</br>" +
"<b> Processing Baseline: </b>" + res[i].PROCESSING_BASELINE + "</br>" +
"<b> Processing Level: </b>" + res[i].PROCESSING_LEVEL + "</br>" +
"<b> Product Start Time: </b>" + res[i].PRODUCT_START_TIME + "</br>" +
"<b> Product Stop Time: </b>" + res[i].PRODUCT_STOP_TIME + "</br>" +
"<b> PRODUCT_TYPE: </b>" + res[i].PRODUCT_TYPE + "</br>" +
"<b> PRODUCT_URI: </b>" + res[i].PRODUCT_URI + "</br>" +
"<b> Quantification Value: </b>" + res[i].QUANTIFICATION_VALUE + "</br>" +
"<b> Radiometric Quality Flag: </b>" + res[i].RADIOMETRIC_QUALITY_FLAG + "</br>"+
"<b> Reference Band: </b>" + res[i].REFERENCE_BAND + "</br>" +
"<b> Reflectance Conversion U: </b>" + res[i].REFLECTANCE_CONVERSION_U + "</br>" +
"<b> Sensor Quality Flag: </b>" + res[i].SENSOR_QUALITY_FLAG + "</br>" +
"<b> Special Value Nodata: </b>" + res[i].SPECIAL_VALUE_NODATA + "</br>" +
"<b> Special Value Saturated: </b>" + res[i].SPECIAL_VALUE_SATURATED + "</br>" +
"<b> Subdataset 1 Description: </b>" + res[i].SUBDATASET_1_DESC + "</br>" +
"<b> Subdataset 1 Name: </b>" + res[i].SUBDATASET_1_NAME + "</br>" +
"<b> Subdataset 2 Description: </b>" + res[i].SUBDATASET_2_DESC + "</br>" +
"<b> Subdataset 2 Name: </b>" + res[i].SUBDATASET_2_NAME + "</br>" +
"<b> Subdataset 3 Description: </b>" + res[i].SUBDATASET_3_DESC + "</br>" +
"<b> Subdataset 3 Name: </b>" + res[i].SUBDATASET_3_NAME + "</br>" +
"<b> Subdataset 4 Description: </b>" + res[i].SUBDATASET_4_DESC + "</br>" +
"<b> Subdataset 4 Name: </b>" + res[i].SUBDATASET_4_NAME + "</br>");
};

}


function toggleDrop(i,j){
	$('#dropd'+i).show();
	$('#dropd'+j).hide();
}

/*function detectLong(output){
    var vorzeichen;
  if(output< 0){
    vorzeichen = -1;
  }
  else{
    vorzeichen = 1;
  }

  output=Math.abs(output);
  var zahl = Math.floor(output/180)%2;
  console.log(zahl);
  output= output%180;
  if(zahl === 0){
    output = output*vorzeichen;
  }
  else {
    console.log(output);
    output = output - (output*vorzeichen);
  }
  console.log('output= ' +  output); 
  return output; 

  }*/
/*$(document).ready(function() {	
	$('.showData1').submit(function(e) {
	    e.preventDefault();
	    console.log("Document Ready");
	    console.log($('.rgbselect').val());
	    //Prüfe ob die Eingabefelder für die Marker nicht leer sind
	    if ( 
	    		((rgbbool == true) && ($('.rgbselect').val()  !== "0")) 
	    	|| 	((rgbbool == false) && ($('#greyselect').val() !== "0"))){
		        var that = this;
		        // submit via ajax
		        $.ajax({
		          data: $(that).serialize(),
		          type: $(that).attr('method'),
		          url:  $(that).attr('action'),
		          error: function(xhr, status, err) {
		            console.log("Error while loading Data");
		            alert("Error while loading Data");
		          },
		          success: function(res) {
		             console.log("Data successfully loaded.");
		          }
		        });
	    	}
	    else {
	    	alert("Please define requested values before clicking the Show this dataset -Button");
		}
	});
});*/

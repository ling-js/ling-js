/*(function createTCISubmitHandler(res, j, opacity){
	$('#showTCI'+ j).submit(function(e) {

	}
}*/

/**
 * Erstellt Submithandler für L1C Datasets
 *
 *@param res Ergebniss aus Suchanfrage
 *@param j Index der id des Datasets, zu dem der Submithandler erzeugt werden soll
 *@param opacity aktuelle opacity-Wert
 */
function createL1CSubmitHandler(res, j, opacity){
	$('#showData'+ j).submit(function(e) {
		spinnerShow(document.getElementById('map'));
		e.preventDefault();
	    //Prüfe ob die Eingabefelder für die Marker nicht leer sind
	    if (
	    (	//Check if radio button option "RGB" is checked and all 3 bands are choosen at rgb
	    	//Prüfe ob Radio Button auf RGB steht und alle 3 Bänder angegeben wurden
			((radioValue(document.getElementsByName('rgbbool'),j)) == "true") &&
			($('#rgbselect'+ ((j*3)-2)).val()  !== null) &&
			($('#rgbselect'+ ((j*3)-1)).val() !== null) &&
			($('#rgbselect'+ (j*3)).val()  !== null)
	    ) || (
	    	//or check if radio button option "Greyscale" is checked and one band is choosen at greyscale
	    	//oder ob Radio Button auf Greyscale steht und dort 1 Band angegeben wurde
			((radioValue(document.getElementsByName('rgbbool'),j)) == "false") &&
	        ($('#greyselect'+ j).val() !== null))
		)//if true than go on with submitting
	    {
	    	// create some hidden inputs, to append name of Subdataset of choosen bands
    		var redSDNInput = $('<input type="hidden" name="rcdn" value=' + subdataL1CName(res, $('#rgbselect'+ ((j*3)-2)).val(), j) + '>');
	        var greenSDNInput = $('<input type="hidden" name="gcdn" value=' + subdataL1CName(res, $('#rgbselect'+ ((j*3)-1)).val(), j) + '>');
	        var blueSDNInput = $('<input type="hidden" name="bcdn" value=' + subdataL1CName(res, $('#rgbselect'+ ((j*3))).val(), j) + '>');
	        var greySDNInput = $('<input type="hidden" name="gscdn" value=' + subdataL1CName(res, $('#greyselect'+ j).val(), j) + '>');

	        //append input values to POST-data-object
	        $(this).append(redSDNInput);
	        $(this).append(greenSDNInput);
	        $(this).append(blueSDNInput);
	        $(this).append(greySDNInput);

			//Array for ValueLookUp
			var bands = [];
			bands.push($('#rgbselect'+ ((j*3)-2)).val());
			bands.push($('#rgbselect'+ ((j*3)-1)).val());
			bands.push($('#rgbselect'+ ((j*3))).val());
			bands.push($('#greyselect'+ j).val());
			var names = [];
			names.push(redSDNInput[0].value);
			names.push(greenSDNInput[0].value);
			names.push(blueSDNInput[0].value);
			names.push(greySDNInput[0].value);

			var that = this;
	        // submit via ajax
	        $.ajax({
	        	data: $(that).serialize(),
	        	type: $(that).attr('method'),
	        	url:  'http://gis-bigdata.uni-muenster.de:14014/generate?',
	        	error: function(xhr, status, err) {
		            console.log("Error while loading Data");
					spinnerHide(document.getElementById('map'));
		            alert("Error while loading Data");
	          	},
	          	success: function(res) {
					//remove all Datasets that were visualized before
					removeDatasets();
					//end of Spinner visualization
					spinnerHide(document.getElementById('map'));
	            	console.log("Data successfully loaded.");

	            	// create lyr with requested data
	            	lyr = L.tileLayer(
						'http://gis-bigdata.uni-muenster.de:14014/data/' + res + '/{z}/{x}/{-y}.png',
						{
						  tms: true,
						  continuousWorld: true,
							opacity: 100,
						}

					);
		            // add layer to Map and name it like the Dataset it was requested from 
					layerControl.addOverlay(lyr, "Dataset "+j);
					map.addLayer(lyr);
					zoomToLayer(j);
					//ValueLookUp
					drawInvisPolygon(j, names, bands, (radioValue(document.getElementsByName('rgbbool'),j)));
					$('#dataset'+j).append('<div id="opacitySlider" style="padding: 15px; padding-top: 0px"> <p>Choose your opacity:</p> <input type="range" name="opacity" id="opacityId'+j+'" value="'+opacity+'" min="0" max="100" oninput="showOpacityLevel('+j+')" onchange="opacityChanger('+j+')"/><output name="opacityOutput" id="opacityOutputId'+j+'">Opacity Level: '+opacity+'%</output> </div>');
					opacityChanger(j);
				}
	        });
	        redSDNInput.remove();
	        greenSDNInput.remove();
	        blueSDNInput.remove();
	        greySDNInput.remove();
	    }
	    // if not all needed inputs are filled by the user, give error and do not submit anything
		else
		{
    		//console.log("falseeeee: " + j);
			spinnerHide(document.getElementById('map'));
	    	alert("Please define requested values before clicking the Show this dataset -Button");
		}
	});
		//console.log("Submit overwritten.")
}



/**
 * Erstellt Submithandler für L2A Datasets
 *
 *@param res Ergebniss aus Suchanfrage
 *@param j Index der id des Datasets, zu dem der Submithandler erzeugt werden soll
 *@param opacity aktuelle opacity-Wert
 *@param i = (index der id des Datensetz) - (length des L1C-Arrays)
 */
function createL2ASubmitHandler(res, j, opacity, i){
	$('#showL2AData'+ j).submit(function(e) {
		spinnerShow(document.getElementById('map'));
		e.preventDefault();
	    //Prüfe ob die Eingabefelder für die Marker nicht leer sind
	    console.log("hello!");
	    if (
	    (
	    	console.dir(document.getElementsByName('rgbbool')) &&
	    	//Check if radio button option "RGB" is checked and all 3 bands are choosen at rgb
	    	//Prüfe ob Radio Button auf RGB steht und alle 3 Bänder angegeben wurden
			((radioValue(document.getElementsByName('rgbbool'),j)) == "true") &&
			($('#rgbselect'+ ((j*3)-2)).val()  !== null) &&
			($('#rgbselect'+ ((j*3)-1)).val() !== null) &&
			($('#rgbselect'+ (j*3)).val()  !== null)
	    ) || (
	    	//or check if radio button option "Greyscale" is checked and one band is choosen at greyscale
	    	//oder ob Radio Button auf Greyscale steht und dort 1 Band angegeben wurde
			((radioValue(document.getElementsByName('rgbbool'),j)) == "false") &&
	        ($('#greyselect'+ j).val() !== null))
		) //if true than go on with submitting
	    {
	    	// create some hidden inputs, to append name of Subdataset of choosen bands
    		var redSDNInput = $('<input type="hidden" name="rcdn" value=' + subdataL2AName(res, $('#rgbselect'+ ((j*3)-2)).val(), i) + '>');
    		console.log('this is #rgbselect'+ ((j*3)-2));
	        var greenSDNInput = $('<input type="hidden" name="gcdn" value=' + subdataL2AName(res, $('#rgbselect'+ ((j*3)-1)).val(), i) + '>');
	        var blueSDNInput = $('<input type="hidden" name="bcdn" value=' + subdataL2AName(res, $('#rgbselect'+ (j*3)).val(), i) + '>');
	        var greySDNInput = $('<input type="hidden" name="gscdn" value=' + subdataL2AName(res, $('#greyselect'+ j).val(), i) + '>');
	        console.log('this is #greyselect'+ j);

	        //append input values to POST-data-object
	        $(this).append(redSDNInput);
	        $(this).append(greenSDNInput);
	        $(this).append(blueSDNInput);
	        $(this).append(greySDNInput);

			//Array for ValueLookUp
			var bands = [];
			bands.push($('#rgbselect'+ ((j*3)-2)).val());
			bands.push($('#rgbselect'+ ((j*3)-1)).val());
			bands.push($('#rgbselect'+ ((j*3))).val());
			bands.push($('#greyselect'+ j).val());
			var names = [];
			names.push(redSDNInput[0].value);
			names.push(greenSDNInput[0].value);
			names.push(blueSDNInput[0].value);
			names.push(greySDNInput[0].value);

	        var that = this;
	        console.log($(that).serialize());
	        // submit via ajax
	        $.ajax({
	          	data: $(that).serialize(),
		        type: $(that).attr('method'),
		        url:  'http://gis-bigdata.uni-muenster.de:14014/generate?',
		        error: function(xhr, status, err) {
	            	console.log("Error while loading Data");
					spinnerHide(document.getElementById('map'));
		            alert("Error while loading Data");
	          	},
	          	success: function(res) {
	  				//remove all Datasets that were visualized before
					removeDatasets();
					//end of Spinner visualization
					spinnerHide(document.getElementById('map'));
	                console.log("Data successfully loaded.");

	                // create lyr with requested data
		            lyr = L.tileLayer(
						'http://gis-bigdata.uni-muenster.de:14014/data/' + res + '/{z}/{x}/{-y}.png',
						{
						  tms: true,
						  continuousWorld: true,
							opacity: 100,
						}

					);
		            // add layer to Map and name it like the Dataset it was requested from 
				    layerControl.addOverlay(lyr, "Dataset "+j);
					map.addLayer(lyr);
					zoomToLayer(j);

					//ValueLookUp
					drawInvisPolygon(j, names, bands,(radioValue(document.getElementsByName('rgbbool'),j)));
					$('#dataset'+j).append('<div id="opacitySlider" style="padding: 15px; padding-top: 0px"> <p>Choose your opacity:</p> <input type="range" name="opacity" id="opacityId'+j+'" value="'+opacity+'" min="0" max="100" oninput="showOpacityLevel('+j+')" onchange="opacityChanger('+j+')"/><output name="opacityOutput" id="opacityOutputId'+j+'">Opacity Level: '+opacity+'%</output> </div>');
					opacityChanger(j);
				}
	        });

	        //empty hidden Inputs
	        redSDNInput.remove();
	        greenSDNInput.remove();
	        blueSDNInput.remove();
	        greySDNInput.remove();
	    }
	   	// if not all needed inputs are filled by the user, give error and do not submit anything
		else
		{
    		//console.log("falseeeee: " + j);
			spinnerHide(document.getElementById('map'));
	    	alert("Please define requested values before clicking the Show this dataset -Button");
		}
	});
		//console.log("Submit overwritten.")
}



/**
 * Returns subdatasetname of a given band from L1C datasets
 *
 *@param res Object with all Datasets user can choose from
 *@param value choosen band 
 *@param j Index+1 of Dataset the band was choosen from
 */
function subdataL1CName(res, value, j){
	console.log("Started subdataName.");
	var index = ["B2", "B3", "B4", "B8", "B5", "B6", "B7", "B8a", "B11", "B12", "B1", "B9", "B10"].indexOf(value);
	console.log(index);
	if(index < 0){
		return "";
	}
	if(index < 4){
		return res[j-1].SUBDATASET_1_NAME;
	}
	else if (index > 9) {
		return res[j-1].SUBDATASET_3_NAME;
	}
	else
		return res[j-1].SUBDATASET_2_NAME;
}

/**
 * Returns Product-URI of a given band from L2A datasets
 *
 *@param res Object with all Datasets user can choose from
 *@param value choosen band 
 *@param j Index+1 of Dataset the band was choosen from
 */
function subdataL2AName(res, value, j){
	console.log("Started subdataName.");
	if(value == null){
		return "";
	}
	else{
		return res[j-1].PRODUCT_URI_2A;
	}
}

/**
 * returns the value of radio button option that is checked out of two given radio button options
 *
 *@param radio radiobutton to be checked
 *@param j Index to calculate which options of the radiobutton will be checked
 */
function radioValue(radios, j){
	for (var i = ((j-1)*2); i < (((j-1)*2)+2); i++)
	{
		if (radios[i].checked)
		{
		  return(radios[i].value);
		}
	}
	//if none is checked return "unknown"
	return "unknown";
}

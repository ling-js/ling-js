/**
* Geosoftware I, SoSe 2017, final
* @author Jan Speckamp (428367)
*/
/**
* Loads all requested Stages. Overwrites all Submit Handlers that are already present,
*/
$(document).ready(function() {
  initMap();
  // Show all Items when initially opening Search Bar
  sidebar.on('content', function(e) {
  });

  initStartup();

  $('#resultpanel').hide();

  $('#searchform').submit(function(e) {
    spinnerShow(document.getElementById('sidebar'));
    // Prevent default html form handling
    e.preventDefault();
    var that = this;
    if(compareDates() == true){
      console.log("function gets called properly awaiting ajax...");
      var substring = $("#searchformbyname_input").val();
      var startdate = $("#startyear").val() + "-" + $("#startmonth").val() + "-" + $("#startday").val() + "T" + $("#starthour").val() + ":" + $("#startmin").val() + ":" + $("#startsec").val()+ "Z";
      //var enddate = $("#endyear").val() + "-" + $("#endmonth").val() + "-" + $("#endday").val() + "T" + $("#endhour").val() + ":" + $("#endmin").val() + ":" + $("#endsec").val() + "Z";
      var enddate= "";
      console.log(startdate + " starttime and endtime " + enddate);
      var page = 0;
      var pagetoview = 1;
      var bbox="";
      console.log("searchbox= " + $(searchformbybbox_bottomLong).val());
      if ($(searchformbybbox_bottomLong).val() != "" && $(searchformbybbox_bottomLat).val() != "" && $(searchformbybbox_topLong).val() != "" && $(searchformbybbox_topLat).val() != ""){
        bbox=($(searchformbybbox_bottomLong).val()+','+ $(searchformbybbox_bottomLat).val() +','+ $(searchformbybbox_topLong).val()+',' +$(searchformbybbox_topLat).val());
      }
      console.log(bbox);
      var templateurl = "http://gis-bigdata.uni-muenster.de:14014/search?substring="+substring+"&bbox="+bbox+"&startdate="+startdate+"&enddate="+enddate+"&page=";
      pagerInit(templateurl);
      var expanded = [];
      ajaxrequest(templateurl, pagetoview);
  }else{
    alert("Startdate must be before Enddate");
    spinnerHide(document.getElementById('sidebar'));
  }
  });//end getMetaData()
});

function pageCalculator(allContents){
  if(allContents%8 == 0){
    allContents = allContents/8;
  }else{
    allContents = (Math.floor(allContents/8)+1);
  }
  return allContents;
}

function showSaveBtn(bool){
  if(bool == true){
    if($('#searchTabButton')[0].classList.length > 0){
      for(var i = 0; i < $('#searchTabButton')[0].classList.length; i++){
        if ($('#searchTabButton')[0].classList[i] == "active"){
          $('#saveTabButton')[0].style.display = "none";
          break;
        }
      }
    }else if($('#searchTabButton')[0].classList.length == 0) {
      $('#saveTabButton')[0].style.display = "";
    }
  }else if(bool == false){
    $('#saveTabButton')[0].style.display = "none";
  }
}

function initStartup(){
  initOptions();
  $.when(loadHash()).done(loadSearch());
}
function showPermalink(){
  var str = createPermalink();
  matchTextAreaField(str);
}

function matchTextAreaField(str){
  for(var i = 0; i <$('#sidebar')[0].classList.length;i++){
    if ($('#sidebar')[0].classList[i]  == "collapsed"){
      openTabInSidebar('#search');
    }
  }
  $(".sidebar-content").find(".active").append('<textarea id="permalinkTemp" value=str style="width: 100%"></<textarea>');
  $('#permalinkTemp')[0].value = str;
  var height = $('#permalinkTemp')[0].scrollHeight+2+"px";
  $('#permalinkTemp')[0].parentNode.removeChild($('#permalinkTemp')[0]);
  //$(".sidebar-content").find(".active").remove($('#permalinkTemp'));
  $('#save').html('<h2>save und so</h2><textarea id="permalink" value=str style="width: 100%"></<textarea>');
  $('#permalink')[0].style.height = height;
  $('#permalink')[0].value = str;
}

//check if empty
function createPermalink(){
  var str ="Ich schreibe jetzt ein buch, das ist so wunderschön, nur um zu sehen, dass sich was tut ud ich fände das schän, wenn sich dieses Feld anpassen könnte.";
  var stateobject = createJSONPerma();
  stateobject = createSearchParam(stateobject);
  return addParams(stateobject);
}

function addParams(stateobject){
  var permalink = new URL(window.location.origin);
  for (let p of stateobject) {
    permalink.searchParams.append(p[0],p[1]);
  }
  permalink.hash = "#search";
  return permalink;
}

function createJSONPerma(){
  var st = $("#searchformbyname_input").val();
  var ssd = $("#startyear").val() + "-" + $("#startmonth").val() + "-" + $("#startday").val() + "T" + $("#starthour").val() + ":" + $("#startmin").val() + ":" + $("#startsec").val()+ "Z";    var sed = $("#endyear").val() + "-" + $("#endmonth").val() + "-" + $("#endday").val() + "T" + $("#endhour").val() + ":" + $("#endmin").val() + ":" + $("#endsec").val() + "Z";
  var p = "";
  var sbox = ($('#searchformbybbox_bottomLong').val()+','+ $('#searchformbybbox_bottomLat').val() +','+ $('#searchformbybbox_topLong').val()+',' +$('#searchformbybbox_topLat').val());
  var ds = [];
  var calc = [];
  var forEnd = 0;
  try{
    forEnd = $("#resultpanel")[0].children.length;
  }catch(err){

  }
  for(var i = 0; i< forEnd; i++){
    var tempobj = {};
    tempobj.n = jsonForDatasets[i].PRODUCT_URI;
    var opacity;
    if($('#opacityId'+ i ).val() == undefined){
      opacity = 100;
    }else{
      opacity = $('#opacityId'+ i ).val();
    }
    tempobj.o = opacity;
    tempobj.vis = isALayerDisplayed(i);
    tempobj.exp = isExpanded(i);
    tempobj.btn = buttonSelected(i);
    tempobj.gscdn = $('#greyselect'+(i+1)).val();
    tempobj.rcdn = $('#rgbselect'+(1+(i*3))).val();
    tempobj.gcdn = $('#rgbselect'+(2+(i*3))).val();
    tempobj.bcdn = $('#rgbselect'+(3+(i*3))).val();
    //tempobj.gsc = $('#greyselect'+(i+1));
    //tempobj.rcn = "d";
    //tempobj.gcn = "d";
    //tempobj.bcn = "d";
    tempobj.greymin =  $('#minGrey'+(i+1)).val();
    tempobj.rcmin = $('#minRed'+(i+1)).val();
    tempobj.gcmin = $('#minGreen'+(i+1)).val();
    tempobj.bcmin = $('#minBlue'+(i+1)).val();
    tempobj.greymax = $('#maxGrey'+(i+1)).val();
    tempobj.rcmax = $('#maxRed'+(i+1)).val();
    tempobj.gcmax = $('#maxGreen'+(i+1)).val();
    tempobj.bcmax = $('#maxBlue'+(i+1)).val();
    for (var j = 0; j < 1; j++) {
      var tempCalc = {};
      tempCalc.name = "a";
      tempCalc.calculation = "a";
      var tempCalcJson = {"name":tempCalc.name,"o":tempCalc.calculation};
      calc.push(tempCalcJson);
      }
    /*if(tempobj.greymin == null){
      tempobj.greymin = 0;
    }
    if(tempobj.rcmin == null){
      tempobj.rcmin = 0;
    }
    if(tempobj.gcmin == null){
      tempobj.gcmin = 0;
    }
    if(tempobj.bcmin == null){
      tempobj.bcmin = 0;
    }
    if(tempobj.greymax == null){
      tempobj.greymax = 0;
    }
    if(tempobj.rcmax == null){
      tempobj.rcmax = 0;
    }
    if(tempobj.gcmax == null){
      tempobj.gcmax = 0;
    }
    if(tempobj.bcmax == null){
      tempobj.bcmax = 0;
    }*/
    var tempJSON = {"n":tempobj.n, "o":tempobj.o,"vis":tempobj.vis,"exp":tempobj.exp,"btn":tempobj.btn,"gscdn":tempobj.gscdn,"rcdn":tempobj.rcdn,"gcdn":tempobj.gcdn,"bcdn":tempobj.bcdn,
      "greymin":tempobj.greymin,"rcmin":tempobj.rcmin,"gcmin":tempobj.gcmin,"bcmin":tempobj.bcmin,"greymax":tempobj.greymax,"rcmax":tempobj.rcmax,"gcmax":tempobj.gcmax,"bcmax":tempobj.bcmax, "calc": calc};
    ds.push(tempJSON);
    console.log(tempobj.btn);
    calc = [];
  }
  return {"st":st, "sbox":sbox, "ssd":ssd, "sed":sed, "p":p, "ds":ds};
}

function createSearchParam(stateobject){
    var searchParams = new URLSearchParams();

  //check if value is object
  for (var i in stateobject){
    var value = stateobject[i];
    if(i == "ds"){
      for (var k = 0; k<stateobject.ds.length;k++){
        var dsParam = new URLSearchParams();
        for (var j in stateobject.ds[k]) {
          if(j == "calc"){
            for (var l = 0; l<stateobject.ds[0].calc.length;l++){
              var calcParam = new URLSearchParams();
              for (var m in stateobject.ds[0].calc[l]) {
                calcParam.append(m, stateobject.ds[0].calc[l][m]);
              }
              dsParam.append(j, calcParam);
            }
          }else{
          dsParam.append(j, stateobject.ds[k][j]);
          }
        }
        searchParams.append(i, dsParam);
      }
    }else{
      searchParams.append(i,value);
    }
  }
  return searchParams;
}

function loadHash(){
  for (var i = 0; i < $('#sidebar')[0].children[1].children.length; i++) {
    if(window.location.hash == "#"+$('#sidebar')[0].children[1].children[i].id && window.location.hash != "#save"){
      openTabInSidebar(window.location.hash);
      if(window.location.hash == '#search'){
        $('#saveTabButton')[0].style.display = "";
      }
    }
  }
}

function loadSearch(){
  var searchParams = new URLSearchParams(window.location.search.slice(1));
  var dsNumber = 0;
  var calcNumber = 0;
  var dsOpacity = [];
  var dsExpanded =[];
  var dsBand =[];
  var dsBandValues = [];
  var dsBtn = [];
  for (let i of searchParams) {
    if(i[0] == "ds"){
      var dsRgbBandTemp = [];
      var dsValuesTemp = [];
      var dsMinValuesTemp = [];
      var dsMaxValuesTemp = [];
      var dsParams = new URLSearchParams(i[1]);
      for (let j of dsParams) {
        if(j[0] == "calc"){
          var calcParams = new URLSearchParams(j[1]);
          for (let k of calcParams) {
            //hier kommt was mit calculated hin, aber nichts genaues weiß man nicht
          }
        }else{
          switch(j[0]) {
              case "n":
                console.log("Was soll  ich denn damit?" + j[1]);
                break;
              case "o":
                  dsOpacity.push(j[1]);
                break;
              case "vis":
                //fillDate(i,"end");
                break;
              case "exp":
                dsExpanded.push(j[1]);
                break;
              case "btn":
                if(j[1] == "rgb"){
                  dsBtn.push(["true","false"]);
                }else if(j[1] == "grey"){
                  dsBtn.push(["false","true"]);
                }else{
                  dsBtn.push(["false","false"]);
                }
                break;
              case "gscdn":
                dsRgbBandTemp.push(j[1]);
                break;
              case "rcdn":
                dsRgbBandTemp.push(j[1]);
                break;
              case "gcdn":
                dsRgbBandTemp.push(j[1]);
                break;
              case "bcdn":
                dsRgbBandTemp.push(j[1]);
                break;
              case "greymin":
                dsMinValuesTemp.push(j[1]);
                break;
              case "rcmin":
                dsMinValuesTemp.push(j[1]);
                break;
              case "gcmin":
                dsMinValuesTemp.push(j[1]);
                break;
              case "bcmin":
                dsMinValuesTemp.push(j[1]);
                break;
              case "greymax":
                dsMaxValuesTemp.push(j[1]);
                break;
              case "rcmax":
                dsMaxValuesTemp.push(j[1]);
                break;
              case "gcmax":
                dsMaxValuesTemp.push(j[1]);
                break;
              case "bcmax":
                dsMaxValuesTemp.push(j[1]);
                break;
          }
        }
      }
      dsBand.push(dsRgbBandTemp);
      dsRgbBandTemp = [];
      dsValuesTemp.push(dsMinValuesTemp);
      dsValuesTemp.push(dsMaxValuesTemp);
      dsBandValues.push(dsValuesTemp);
      dsValuesTemp = [];
      dsMinValuesTemp = [];
      dsMaxValuesTemp = [];
    }else{
      switch(i[0]) {
          case "st":
            $("#searchformbyname_input").val(i[1]);
            break;
          case "ssd":
            fillDate(i,"start");
            break;
          case "sed":
            fillDate(i,"end");
            break;
          case "p":
            console.log("p fehlt noch, ver giss nicht");

            break;
          case "sbox":
            var sbox = i[1].split(",");
            $("#searchformbybbox_bottomLat").val(sbox[0]);
            $("#searchformbybbox_bottomLong").val(sbox[1]);
            $("#searchformbybbox_topLat").val(sbox[2]);
            $("#searchformbybbox_topLong").val(sbox[3]);
            break;
      }
    }
  }
  var substring = $("#searchformbyname_input").val();
  var startdate = $("#startyear").val() + "-" + $("#startmonth").val() + "-" + $("#startday").val() + "T" + $("#starthour").val() + ":" + $("#startmin").val() + ":" + $("#startsec").val()+ "Z";
  //var enddate = $("#endyear").val() + "-" + $("#endmonth").val() + "-" + $("#endday").val() + "T" + $("#endhour").val() + ":" + $("#endmin").val() + ":" + $("#endsec").val() + "Z";
  var enddate= "";
  var page = 0;
  var pagetoview = 1;
  var bbox="";
  if ($(searchformbybbox_bottomLong).val() != "" && $(searchformbybbox_bottomLat).val() != "" && $(searchformbybbox_topLong).val() != "" && $(searchformbybbox_topLat).val() != ""){
    bbox=($(searchformbybbox_bottomLong).val()+','+ $(searchformbybbox_bottomLat).val() +','+ $(searchformbybbox_topLong).val()+',' +$(searchformbybbox_topLat).val());
  }
  var templateurl = "http://gis-bigdata.uni-muenster.de:14014/search?substring="+substring+"&bbox="+bbox+"&startdate="+startdate+"&enddate="+enddate+"&page=";
  pagerInit(templateurl);
  ajaxrequest(templateurl, pagetoview, dsExpanded, dsBand, dsBtn, dsBandValues);
}

function fillDate(i, indi){
    var date =[];
    date.push(i[1].slice(0,10).split("-"));
    date.push(i[1].slice(11, i[1].length-1).split(":"));
    $("#"+indi+"day").val(date[0][2]);
    $("#"+indi+"month").val(date[0][1]);
    $("#"+indi+"year").val(date[0][0]);
    $("#"+indi+"sec").val(date[1][2]);
    $("#"+indi+"min").val(date[1][1]);
    $("#"+indi+"hour").val(date[1][0]);
}

function buttonSelected(i){
  if($('#rgb'+(i+1))[0].checked == true){
    return "rgb";
  }else if($('#grey'+(i+1))[0].checked == true){
    return "grey";
  }else{
    return "";
  }
}

function addOption(id, startInt, endInt, selectedInt){
  for(var i = startInt; i < endInt+1; i++){
    var val = i;
    if(i<10){
      val="0"+i;
    }
   $("#"+id)[0].options[$("#"+id)[0].options.length] = new Option(i, val);
   if(i == selectedInt){
     $("#"+id)[0].options[$("#"+id)[0].options.length-1].selected = "selected";
   }
  }
}

function initOptions(){
  addOption("startday",1,31,1);
  addOption("startmonth",1,12,1);
  addOption("startyear",2015,2026,1);
  addOption("starthour",0,23,0);
  addOption("startmin",0,59,0);
  addOption("startsec",0,59,0);
  addOption("endday",1,31,31);
  addOption("endmonth",1,12,12);
  addOption("endyear",2015,2026,2017);
  addOption("endhour",0,23,23);
  addOption("endmin",0,59,59);
  addOption("endsec",0,59,59);
}

function compareDates(){
  var startDate = createDate("start");
  var endDate = createDate("end");
  if(startDate < endDate){
    return true;
  }else{
    return false;
  }
}

function isALayerDisplayed(number){
	if (layerControl._layers.length == 4) {
		if(number+1 == layerControl._layers[3].name-1)
		return true;
	}else{
		return false;
	}
}

function isExpanded(number){
  number++;
  for(var i = 0; i < $('#dataset'+number)[0].classList.length; i++){
    if($('#dataset'+number)[0].classList[i] == "in"){
      return "in";
    }
  }
  return "out";
}

function createDate(str){
  var dateString = $("#"+str+"year").val() + "-" + $("#"+str+"month").val() + "-" + $("#"+str+"day").val() + "T" + $("#"+str+"hour").val() + ":" + $("#"+str+"min").val() + ":" + $("#"+str+"sec").val();
  var date = new Date(dateString);
  return date;
}

function updateDay(str){
  if(lessDayMonth(str) == true){
    if($("#"+str+"day")[0].options.length == 31){
      $("#"+str+"day")[0].options[30].remove();
    }else if($("#"+str+"day")[0].options.length < 30){
      addOption(str+"day", $("#"+str+"day")[0].options.length+1, 30);
    }
  }else if($("#"+str+"month").val() == 2){
    if(feburaryCalc(str) == true){
      if($("#"+str+"day")[0].options.length == 28){
        addOption(str+"day", 29, 29);
      }else{
        for(var i = $("#"+str+"day")[0].options.length; i > 29; i--){
          $("#"+str+"day")[0].options[i-1].remove();
        }
      }
    }else{
      for(var i = $("#"+str+"day")[0].options.length; i > 28; i--){
        $("#"+str+"day")[0].options[i-1].remove();
      }
    }
  }else if($("#"+str+"day")[0].options.length < 31){
    addOption(str+"day", $("#"+str+"day")[0].options.length+1, 31, 1);
  }
}

function lessDayMonth(str){
  var months = [4, 6, 9, 11];
  for (var i = 0; i < months.length; i++) {
    if(months[i] == $("#"+str+"month").val()){
      return true;
    }
  }
  return false;
}

function feburaryCalc(str){
  if($("#"+str+"year").val() % 4 == 0){
    if($("#"+str+"year").val() % 100 == 0){
      if($("#"+str+"year").val() % 400 == 0){
        return true;
      }else{
        return false;
      }
    }
    return true;
  }
  return false;
}
function pagerInit(templateurl, expanded){
  $('#page-selection').bootpag({
    total: 0,
    page: 0,
    maxVisible: 5,
    leaps: true,
    firstLastUse: true,
    first: '←',
    last: '→',
    wrapClass: 'pagination',
    activeClass: 'active',
    disabledClass: 'disabled',
    next: 'next',
    prev: 'prev',
    lastClass: 'last',
    firstClass: 'first'
  }).on("page", function(event, /* page number here */ num){
    spinnerShow(document.getElementById('sidebar'));
    ajaxrequest(templateurl, num); // some ajax content loading...
  });
}
function ajaxrequest(templateurl, pagetoview, expanded, band, btn, bandValues){
  $.ajax({
    type: "GET",
    url: templateurl+(pagetoview-1),
    data:'',
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    statusCode: {
      404: function() {
        console.log("something went wrong(404)");
          spinnerHide(document.getElementById('sidebar'));
      }},
      success: function (res, status, request) {
        if (expanded == undefined) {
          var expanded =[];
          for(var i = 0; i < res.length; i++){
            expanded.push("out");
          }
        }
        createHTML(res, pagetoview, expanded, band, btn, bandValues);
        page = pageCalculator(request.getResponseHeader('X-Dataset-Count'));
        //$('#resultpanel').show();
        visualizeMetadata(res);
        $('#page-selection').bootpag({
          total: page,
          page: pagetoview,
          maxVisible: 5,
          leaps: true,
          firstLastUse: true,
          first: '←',
          last: '→',
          wrapClass: 'pagination',
          activeClass: 'active',
          disabledClass: 'disabled',
          next: 'next',
          prev: 'prev',
          lastClass: 'last',
          firstClass: 'first'
        });
        spinnerHide(document.getElementById('sidebar'));
      },
      error: function(xhr, status, error) {
        console.log("Achtung:Es gab einen Fehler bei der AJAX-Anfrage der Fehlercode lautet :" + ""+ xhr.responseText);
        //alert(xhr.responseText);
        spinnerHide(document.getElementById('sidebar'));
      }
    }); //end ajax
  }

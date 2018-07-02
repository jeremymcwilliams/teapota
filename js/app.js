<<<<<<< HEAD:functions.js
if (localStorage.currentData){localStorage.currentData=null;}
=======
'use strict';


function helpme(){

  console.log("help");

}

$("#settingsCheck").html("it's the settings check!");





/*
>>>>>>> cc9d77eefdb78db80fb3737e40f22aac6709e5c3:js/app.js
console.log(localStorage);
//localStorage.setItem("apiKey", "myKey");
$("#settingsCheck").html("hello");

if (localStorage.apiKey){
  $("#settingsCheck").html("api key is set: "+localStorage.apiKey);
}
else{
  $("#settingsCheck").html("please enter your API key");
}


/* navigation  */

$("#settings").click(function(){

  $(".jumbotron").load("templates/settings.html");

  $("#sub").click(function(){

    console.log("sub");
  });

});



$("#upload").click(function(){

  $(".jumbotron").load("templates/upload.html");




});





/*
var request = require('request');
var url = 'https://api-eu.hosted.exlibrisgroup.com/almaws/v1/conf/md-import-profiles';
var queryParams = '?' +  encodeURIComponent('ie_type') + '=' + encodeURIComponent('ALL')+ '&' +  encodeURIComponent('apikey') + '=' + encodeURIComponent('l7xx8e849ba0b8d149539fa4446950d840d3');
request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    console.log('Status', response.statusCode);
    console.log('Headers', JSON.stringify(response.headers));
    console.log('Reponse received', body);
});
*/

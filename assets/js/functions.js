$(document).ready(function() {

//

var lat;
var lon;

  $.getJSON("https://extreme-ip-lookup.com/json/", function(data2) {
    lat = data2.lat;
    lon = data2.lon;


             var api = "https://api.apixu.com/v1/current.json?key=880c166ae1244d2fbbe134244170101&q="+lat+","+lon;

             $.getJSON(api, function(data) {
             //alert(data.location.localtime);

             var weatherType = data.current.condition.text;
             var celsius = data.current.temp_c;
             var location = data.location.region;
             var country = data.location.country;
             var windSpeed = data.current.wind_kph;
             var time = data.location.localtime;


             var faren = data.current.temp_f;
             var cels = celsius;

             var tempSwap = true;

             console.log(weatherType);
             console.log(celsius);
             console.log(location);
             console.log(country);
             console.log(windSpeed);

             console.log(faren);
             console.log(cels);
             console.log(time);


             $('#location').html(location + ",");
             $('#temp').html(cels + " &#8451");
             $('#temp').click(function() {
               if(tempSwap === false) {
                 $('#temp').html(faren + " &#8457");
                 tempSwap = true;
               } else {
                 $('#temp').html(cels + " &#8451");
                 tempSwap = false;
               }

             });
             $('#weather').html(weatherType);
             $('#country').html(country);
             $('#wind').html("Wind Speed: " + windSpeed + "Km/h");
             $('#time').html(time);

  //           $('#wrap').css('background-image', 'url(data.current.condition.icon)')



             if(weatherType == 'Mist'){
               $('#wrap').css('background-image', 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/MosqueinAbuja.jpg/800px-MosqueinAbuja.jpg)')
             } else if(weatherType == 'Clear') {
               $('#wrap').css('background-image', 'url(https://photomatt7.files.wordpress.com/2011/08/210.jpg)')
             } else if(weatherType == 'Cloudy') {
               $('#wrap').css('background-image', 'url(https://pbs.twimg.com/media/CrqHWpDVUAA6GLp.png)')
             } else if(weatherType == 'Rain') {
               $('#wrap').css('background-image', 'url(https://pbs.twimg.com/media/C0PU3QeVEAAJC3b.jpg)')
             } else if(weatherType == 'Thunderstorm') {
               $('#wrap').css('background-image', 'url(https://img.rt.com/files/2016.07/original/5795f11bc461885d148b4583.jpg)')
             } else if(weatherType == 'Snow') {
               $('#wrap').css('background-image', 'url(https://i.ytimg.com/vi/FGOe4GwX9oM/maxresdefault.jpg)')
             }


             });

  });

});

$(document).ready(function() {

var lat;
var lon;

  $.getJSON("http://ip-api.com/json", function(data2) {
    lat = data2.lat;
    lon = data2.lon;


             var api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=384713e563fbe24e8761fd630baf8701";

             $.getJSON(api, function(data) {
             //  alert(data.coord.lon);
             var weatherType = data.weather[0].description;
             var kelvin = data.main.temp;
             var location = data.name;
             var country = data.sys.country;
             var windSpeed = data.wind.speed;


             var faren = (kelvin*(9/5) - 459.67).toFixed(0);
             var cels = ((5/9) * (faren - 32)).toFixed(0);

             var tempSwap = true;

             console.log(weatherType);
             console.log(kelvin);
             console.log(location);
             console.log(country);
             console.log(windSpeed);

             console.log(faren);
             console.log(cels);

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
             $('#wind').html("Wind Speed: " + windSpeed + "m/s");

             if(weatherType == 'haze'){
               $('#wrap').css('background-image', 'url(http://i2.cdn.cnn.com/cnnnext/dam/assets/150127172751-kuala-lumpur-haze-2013-super-169.jpg)')
             } else if(weatherType == 'snow') {
               $('#wrap').css('background-image', 'url(http://il3.picdn.net/shutterstock/videos/5591369/thumb/1.jpg)')
             }


             });


  });





});

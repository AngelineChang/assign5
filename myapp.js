/*
Skycons is a set of ten animated weather glyphs, procedurally generated by JavaScript using the HTML5 canvas tag.
http://darkskyapp.github.io/skycons/
*/
var skycons = new Skycons();

  // you can add a icon to a html canvas. simply supply its element id and the weather you want to show.
  skycons.add("today", Skycons.PARTLY_CLOUDY_DAY);
  skycons.add("day1", Skycons.CLEAR_DAY);
  skycons.add("day2", Skycons.CLOUDY);
  skycons.add("day3", Skycons.RAIN);

  // start all icons animation!
  skycons.play();

  // update a icon on  canvas by its id
  skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);


  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Taipei%20City%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function (data) {
    var weather = tempFtoC(data.query.results.channel.item.condition.temp);
    $(".temperature").text(weather);
    $(".date").text(data.query.results.channel.item.forecast[0].date);
    $(".weather").text(data.query.results.channel.item.forecast[0].text);
    $("#date1").text(data.query.results.channel.item.forecast[1].date);
    $("#date2").text(data.query.results.channel.item.forecast[2].date);
    $("#date3").text(data.query.results.channel.item.forecast[3].date);
    var lowTemp1 = tempFtoC(data.query.results.channel.item.forecast[1].low);
    var highTemp1 = tempFtoC(data.query.results.channel.item.forecast[1].high);
    var lowTemp2 = tempFtoC(data.query.results.channel.item.forecast[2].low);
    var highTemp2 = tempFtoC(data.query.results.channel.item.forecast[2].high);
    var lowTemp3 = tempFtoC(data.query.results.channel.item.forecast[3].low);
    var highTemp3 = tempFtoC(data.query.results.channel.item.forecast[3].high);
    $("#date1temp").text(lowTemp1 + "~" + highTemp1);
    $("#date2temp").text(lowTemp2 + "~" + highTemp2);
    $("#date3temp").text(lowTemp3 + "~" + highTemp3);
  });


/*
Get value from Bootstrap dropdown menu
*/
$('#dropdown li').on('click', function(){
    $("#city").text($(this).text());

    var url = cityUrl($(this).text().substr(0, 3));
    $.getJSON(url, function (data) {
      var weather = tempFtoC(data.query.results.channel.item.condition.temp);
      $(".temperature").text(weather);
      $(".date").text(data.query.results.channel.item.forecast[0].date);
      $(".weather").text(data.query.results.channel.item.forecast[0].text);
      $("#date1").text(data.query.results.channel.item.forecast[1].date);
      $("#date2").text(data.query.results.channel.item.forecast[2].date);
      $("#date3").text(data.query.results.channel.item.forecast[3].date);
      var lowTemp1 = tempFtoC(data.query.results.channel.item.forecast[1].low);
      var highTemp1 = tempFtoC(data.query.results.channel.item.forecast[1].high);
      var lowTemp2 = tempFtoC(data.query.results.channel.item.forecast[2].low);
      var highTemp2 = tempFtoC(data.query.results.channel.item.forecast[2].high);
      var lowTemp3 = tempFtoC(data.query.results.channel.item.forecast[3].low);
      var highTemp3 = tempFtoC(data.query.results.channel.item.forecast[3].high);
      $("#date1temp").text(lowTemp1 + "~" + highTemp1);
      $("#date2temp").text(lowTemp2 + "~" + highTemp2);
      $("#date3temp").text(lowTemp3 + "~" + highTemp3);
    });
});




function cityUrl(city) {
    var url = "";
    if (city === "臺北市")
        url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Taipei%20City%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    else if (city === "新北市")
        url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22New%20Taipei%20City%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    else if (city === "台中市")
        url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Taichung%20City%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    else if (city === "臺南市")
        url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Tainan%20City%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    else if (city === "高雄市")
        url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Kaohsiung%20City%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    else if (city === "基隆市")
        url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Keelung%20City%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    else if (city === "桃園市")
        url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Taoyuan%20City%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    else if (city === "新竹市")
        url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Hsinchu%20City%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    else if (city === "新竹縣")
        url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Guanxi%20Township%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    else if (city === "苗栗縣")
        url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Miaoli%20City%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    else if (city === "彰化縣")
        url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Xizhou%20Township%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    else if (city === "南投縣")
        url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Nantou%20City%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    else if (city === "雲林縣")
        url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Douliu%20City%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    else if (city === "嘉義市")
        url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Chiayi%20City%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    else if (city === "嘉義縣")
        url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Minxiong%20Township%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    else if (city === "屏東縣")
        url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Pingtung%20City%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    else if (city === "宜蘭縣")
        url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Ilan%20City%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    else if (city === "花蓮縣")
        url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Hualien%20City%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    else if (city === "台東縣")
        url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Taitung%20City%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    else if (city === "澎湖縣")
        url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Wang'an%20Township%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    else if (city === "金門縣")
        url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Jinhu%20Township%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    else if (city === "連江縣")
        url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Fengcheng%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    return url;
}

function tempFtoC(F) {
    return Math.round((F - 32) * (5 / 9)).toString();
}

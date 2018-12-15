const weather = JSON.parse('{"query":{"count":1,"created":"2018-03-28T00:57:28Z","lang":"en-US","results":{"channel":{"units":{"distance":"mi","pressure":"in","speed":"mph","temperature":"F"},"title":"Yahoo! Weather - Sydney, NSW, AU","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-1105779/","description":"Yahoo! Weather for Sydney, NSW, AU","language":"en-us","lastBuildDate":"Wed, 28 Mar 2018 11:57 AM AEDT","ttl":"60","location":{"city":"Sydney","country":"Australia","region":" NSW"},"wind":{"chill":"77","direction":"0","speed":"11"},"atmosphere":{"humidity":"56","pressure":"1013.0","rising":"0","visibility":"16.1"},"astronomy":{"sunrise":"7:5 am","sunset":"6:56 pm"},"image":{"title":"Yahoo! Weather","width":"142","height":"18","link":"http://weather.yahoo.com","url":"http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"},"item":{"title":"Conditions for Sydney, NSW, AU at 11:00 AM AEDT","lat":"-33.856281","long":"151.020966","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-1105779/","pubDate":"Wed, 28 Mar 2018 11:00 AM AEDT","condition":{"code":"32","date":"Wed, 28 Mar 2018 11:00 AM AEDT","temp":"77","text":"Sunny"},"forecast":[{"code":"32","date":"28 Mar 2018","day":"Wed","high":"83","low":"57","text":"Sunny"},{"code":"32","date":"29 Mar 2018","day":"Thu","high":"85","low":"61","text":"Sunny"},{"code":"30","date":"30 Mar 2018","day":"Fri","high":"85","low":"64","text":"Partly Cloudy"},{"code":"30","date":"31 Mar 2018","day":"Sat","high":"75","low":"66","text":"Partly Cloudy"},{"code":"30","date":"01 Apr 2018","day":"Sun","high":"90","low":"62","text":"Partly Cloudy"},{"code":"30","date":"02 Apr 2018","day":"Mon","high":"83","low":"66","text":"Partly Cloudy"},{"code":"30","date":"03 Apr 2018","day":"Tue","high":"75","low":"65","text":"Partly Cloudy"},{"code":"30","date":"04 Apr 2018","day":"Wed","high":"74","low":"63","text":"Partly Cloudy"},{"code":"30","date":"05 Apr 2018","day":"Thu","high":"81","low":"61","text":"Partly Cloudy"},{"code":"34","date":"06 Apr 2018","day":"Fri","high":"77","low":"62","text":"Mostly Sunny"}],"guid":{"isPermaLink":"false"}}}}}}')

console.log('SUNRISE')
console.log(fixZero(weather.query.results.channel.astronomy.sunrise))
console.log('SUNSET')
console.log(fixZero(weather.query.results.channel.astronomy.sunset))

function farenheitToCelcius(temp) {
    return Math.floor((temp - 32) * (5 / 9))
}
console.log('FORECAST')
for (forecast of weather.query.results.channel.item.forecast) {
    console.log(`${forecast.day}: ${forecast.date}: \n High: ${farenheitToCelcius(forecast.high)} \n Low: ${farenheitToCelcius(forecast.low)} \n Condition: ${forecast.text}`)
}

function fixZero(time) {
    if (time.length >= 7) {
        return time
    } else {
        return time.slice(0, 3) + '0' + time.slice(3)
    }
}

var queryURL = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22brisbane%2Caustralia%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

$.getJSON(queryURL, function (data) {

    var results = data.query.results
    var firstResult = results.channel.item.condition
    console.log(firstResult);

    var location = 'Unknown' // not returned in response
    var temp = firstResult.temp
    var text = firstResult.text

    console.log('The temperature is ' + temp + '. Forecast calls for ' + text);

})
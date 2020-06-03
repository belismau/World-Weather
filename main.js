if (localStorage.getItem('city') != null) {
    let city = localStorage.getItem('city')
    $.ajax({
        url: 'http://api.weatherstack.com/current?access_key=022211437e195a49d3c3bf73543375c4&query=' + city + '',
        dataType: 'JSON'
}).done(function(data) {
        // Adding #information
        let element = document.createElement('div');
        element.setAttribute("id", "information")
        document.getElementById('root').append(element);

        // Adding country name and city
        let city = document.createElement('h2');
        city.setAttribute("id", "city")
        let textNode = document.createTextNode(data.location.name + ', ' + data.location.country);
        city.appendChild(textNode);
        document.getElementById('information').append(city)

        // Adding country flag
        addCountryImage(data.location.country)

        // Adding #content
        let content = document.createElement('div');
        content.setAttribute("id", "content")
        document.getElementById('information').append(content)

        let temperature = 'Current ' + data.current.temperature + '°';
        let feelsLike = 'RealFeel ' + data.current.feelslike + '°';
        let windSpeed = 'WindSpeed ' + data.current.wind_speed + ' km/h';
        let cloudCover = 'CloudCover ' + data.current.cloudcover + '%'
        createElement(temperature)
        createElement(feelsLike)
        createElement(windSpeed)
        createElement(cloudCover)
        createElement((data.current.weather_descriptions)[0])
        createElement(data.current.observation_time)

        $('html, body').animate({
            scrollTop: $("#information").offset().top
        }, 1000);

        document.getElementById('saveWeather').style.display = 'block';

    }).fail(function() {
        console.log(data)
    })
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

if (localStorage.getItem('city') != null) {
    document.getElementsByClassName('fa-star')[0].style.color = "yellow";
}
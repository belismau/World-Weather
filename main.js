if (localStorage.getItem('city') != null) {
    let city = localStorage.getItem('city')
    $.ajax({
        url: 'http://api.weatherstack.com/current?access_key=022211437e195a49d3c3bf73543375c4&query=' + city + '',
        dataType: 'JSON'
}).done(function(data) {
        let element = document.createElement('div');
        element.setAttribute("id", "information")
        document.getElementById('root').append(element);

        createElement('City: ', data.location.name)
        createElement('Country: ', data.location.country)
        createElement('Temperature: ', data.current.temperature)
        createElement('Wind speed: ', data.current.wind_speed)
        createElement('Feels like: ', data.current.feelslike)
        createElement('Cloud cover: ', data.current.cloudcover)
        createElement('Weather description: ', (data.current.weather_descriptions)[0])
        createImage((data.current.weather_icons)[0])

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
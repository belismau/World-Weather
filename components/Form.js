class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.getData = this.getData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    getData() {
        document.getElementById('saveWeather').style.display = 'block';

        if (document.getElementById('information')) {
            document.getElementById('information').remove();
        }

        if (localStorage.getItem('city') != this.state.value) {
            document.getElementsByClassName('fa-star')[0].style.color = '#dbdbdb';
        } else {
            document.getElementsByClassName('fa-star')[0].style.color = 'yellow';
        }

        $.ajax({
            url: 'http://api.weatherstack.com/current?access_key=022211437e195a49d3c3bf73543375c4&query=' + this.state.value + '',
            dataType: 'JSON'
        }).done(function(data) {
            if (data.success != false) {

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

            } else {
                document.getElementById('saveWeather').style.display = 'none';
                alert('Error: No data was found. Try again.')
            }
        }).fail(function() {
            console.log(data)
        })
    }

    render() {
        return (
            <div id="inputPage">
                <h2> Enter a <span>city</span> or <span>country</span> below in the input field. </h2>
                <form action="#" method="GET" id="form">
                    <input 
                        id="title" 
                        value={this.state.value} 
                        onChange={this.handleChange} 
                        placeholder="Ex: London" 
                    />
                    <div id="searchIcon">
                        <i 
                            className="fa fa-search"
                            onClick={this.getData}>
                        </i>
                    </div>
                </form>
                <SaveWeather city={this.state.value} />
            </div>
        )
    }
}

function createElement(name) {
    let element = document.createElement('p');
    let textNode = document.createTextNode(name);
    element.appendChild(textNode);
    let div = document.createElement('div');
    div.appendChild(element);
    document.getElementById('content').append(div);
}

function createImage(url) {
    let element = document.createElement('img');
    element.setAttribute('src', url)
    document.getElementById('content').append(element);
}

function addCountryImage(country) {
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/name/' + country + '',
        dataType: 'JSON'
    }).done(function(data) {
        let element = document.createElement('img');
        element.setAttribute('src', data[0].flag)
        document.getElementById('information').prepend(element);
    }).fail(function() {
        console.log(data)
    })
}
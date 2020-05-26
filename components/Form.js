class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.form = React.createRef();
        this.city = React.createRef();
        this.submit = React.createRef();
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
        if (document.getElementById('information')) {
            document.getElementById('information').remove();
        }

        $.ajax({
            url: 'http://api.weatherstack.com/current?access_key=022211437e195a49d3c3bf73543375c4&query=' + this.state.value + '',
            dataType: 'JSON'
        }).done(function(data) {

            let information = [
                data.location.name,                 // Name of the city
                data.location.country,              // City land
                data.current.temperature,           // Current temperature
                data.current.weather_icons,         // All icons related to the current weather 
                data.current.weather_descriptions,  // All weather descriptions realted to the current weather
                data.current.wind_speed,            // Current wind speed
                data.current.feelslike,             // Feels like
                data.current.cloudcover,            // Cloud Cover
            ]

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
    
        }).fail(function(data) {
            console.log(data)
        })
    }

    render() {
        return (
            <form action="#" method="GET" id="form" onSubmit={this.handleSubmit}>
                <input id="title" value={this.state.value} onChange={this.handleChange} placeholder="Enter city..." />
                <button type="submit" id="submit" onClick={this.getData}> Search </button>
            </form>
        )
    }
}

function createElement(text, name) {
    let allText = text + name
    let element = document.createElement('p');
    let textNode = document.createTextNode(allText);
    element.appendChild(textNode);
    document.getElementById('information').append(element);
}

function createImage(url) {
    let element = document.createElement('img');
    element.setAttribute('src', url)
    document.getElementById('information').append(element);
}
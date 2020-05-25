class Form extends React.Component {
    constructor() {
        super();
        this.form = React.createRef();
        this.city = React.createRef();
        this.submit = React.createRef();
        this.getData = this.getData.bind(this)
    }

    getData() {
        $.ajax({
            url: 'http://api.weatherstack.com/current?access_key=022211437e195a49d3c3bf73543375c4&query=' + city + '',
            dataType: 'JSON'
        }).done(function(data) {
    
            // Information about the city
            let name = data.location.name;
            let country = data.location.country;
    
            // Information about the weather
            let temperature = data.current.temperature;
    
            let weatherIcons = []
            for (let i = 0; i <= (data.current.weather_icons).lenght; i++) {
                weatherIcons.push(data.current.weather_icons[i])
            }
    
            let weatherDescriptions = []
            for (let z = 0; z <= (data.current.weather_descriptions).lenght; z++) {
                weatherDescriptions.push(data.current.weather_descriptions[z])
            }
    
            let windSpeed = data.current.wind_speed;
            let feelsLike = data.current.feelslike;
            let cloudCover = data.current.cloudcover;
    
            console.log(data)
    
            let element = document.createElement('p');
            let information = document.createTextNode(name);
            element.appendChild(information);
            document.getElementsByTagName('body')[0].append(element);
    
        }).fail(function(data) {
            console.log(data)
        })
    }

    render() {
        return (
            <form ref={this.form} action="#" method="GET" id="form">
                <input ref={this.city} id="title" placeholder="Enter city..." />
                <button ref={this.submit} type="submit" id="submit" onClick={this.getData}> Search </button>
            </form>
        )
    }
}
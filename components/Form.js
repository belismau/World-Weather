class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            saveWeather: []
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
        if (document.getElementById('information')) {
            document.getElementById('information').remove();
        }

        $.ajax({
            url: 'http://api.weatherstack.com/current?access_key=022211437e195a49d3c3bf73543375c4&query=' + this.state.value + '',
            dataType: 'JSON'
        }).done(function(data) {
            if (data.success != false) {
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

            } else {
                alert('Error: No data was found. Try again.')
            }
        }).fail(function() {
            console.log(data)
        })
    }

    appendChild() {
        let myItems = {
            city: 'hello'
        }
        
        this.setState({
            saveWeather: [this.state.saveWeather, <SaveWeather items={myItems} key="1" />]
        });
    }

    render() {
        return (
            <form action="#" method="GET" id="form" onSubmit={() => this.appendChild()}>
                <input 
                    id="title" 
                    value={this.state.value} 
                    onChange={this.handleChange} 
                    placeholder="Enter city..." 
                />
                <button 
                    type="submit" 
                    id="submit" 
                    onClick={this.getData}> 
                    Search 
                </button>
                {this.state.saveWeather}
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
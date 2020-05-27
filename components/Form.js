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

        if (document.getElementById('information')) {
            document.getElementById('information').remove();
        }

        if (localStorage.getItem('city') != this.state.value) {
            document.getElementsByClassName('fa-star')[0].style.color = '#dbdbdb';
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

    render() {
        return (
            <form action="#" method="GET" id="form">
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
                <SaveWeather city={this.state.value} />
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
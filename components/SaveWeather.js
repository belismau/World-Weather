class SaveWeather extends React.Component {
    constructor(props) {
        super(props);

        this.save = this.save.bind(this)
    }

    save() {
        if (document.getElementById('information')) {
            if ((document.getElementsByClassName('fa-star')[0].style.color != 'yellow')) {
                localStorage.setItem('city', this.props.city)
                document.getElementsByClassName('fa-star')[0].style.color = 'yellow'
            } else {
                document.getElementsByClassName('fa-star')[0].style.color = '#dbdbdb';
                localStorage.removeItem('city')
            }
        } else {
            alert('Enter a city in the input field.')
        }
    }

    render() {
        return (
            <div id="saveWeather">
                <i
                    className="fa fa-star" 
                    onClick={this.save}>
                </i>
            </div>
        )
    }
}

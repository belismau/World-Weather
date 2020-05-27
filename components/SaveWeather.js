class SaveWeather extends React.Component {
    constructor(props) {
        super(props);

        this.save = this.save.bind(this)
    }

    save() {
        console.log(this.props.city)
        localStorage.setItem('city', this.props.city)
    }

    render() {
        return (
            <div id="saveWeather">
                Save
                <i
                    className="fa fa-star" 
                    onClick={this.save}>
                </i>
            </div>
        )
    }
}

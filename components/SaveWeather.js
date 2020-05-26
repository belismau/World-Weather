class SaveWeather extends React.Component {
    constructor(props) {
        super(props);

        this.save = this.save.bind(this)
    }

    save() {
        console.log(this.props.items.city)
        localStorage.setItem('working', 'true')
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

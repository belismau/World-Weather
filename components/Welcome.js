class Welcome extends React.Component {
    render() {
        return (
            <div id="welcomePage">
                <div id="sunIcon">
                    <i className="fa fa-sun-o"></i>
                </div>
                <h1> 
                    A world weather web application to find the 
                    <span> local weather </span> 
                    forecast using Weatherstack 
                    <span> API</span>. 
                </h1>
                <div id="scrollDown"></div>
            </div>
        )
    }
}
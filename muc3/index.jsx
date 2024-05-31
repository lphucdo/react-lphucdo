class CurrentTime extends React.Component{
    constructor(props){
        super(props);
        var now = new Date();
        this.state = {
            currenttime: now.toString()
        }
    }

    refreshTime(){
        var now = new Date();

        this.setState({
            currenttime: now.toString()
        })
    }

    render(){
        return(
            <div>
                <h4>CurrentTime</h4>
                <p>{this.state.currenttime}</p>
                <button onClick={()=> this.refreshTime()}>Refresh Current Time</button>
            </div>
        )
    }
}

ReactDOM.render(<CurrentTime/>, document.getElementById("currenttime1"))
import React from "react";



class IncDecBtn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clicks: 0,
        }

    }

    Increment = () => {
        this.setState({clicks: this.state.clicks+1});
    }

    Decrement = () => {
        this.setState({clicks: this.state.clicks-1});
    }

    render(){
        return(
            <div>
                <h2>{this.state.clicks}</h2>
                <button onClick={this.Increment}>Increment number by 1!</button>
                <button onClick={this.Decrement}>Decrement number by 1!</button>
            </div>

        );
    }
}

export default IncDecBtn;
import React from "react";
import "./btn.css"


class IncDecBtn extends React.PureComponent{
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
                <h2 style={{ marginLeft: '170px', marginTop: '70px'}}>{this.state.clicks}</h2>
                <button onClick={this.Increment} style={{ marginLeft: '.5rem'}} className="btn">Increment number by 1!</button>
                <button onClick={this.Decrement} style={{ marginLeft: '.5rem'}} className="btn">Decrement number by 1!</button>
            </div>

        );
    }
}

export default IncDecBtn;
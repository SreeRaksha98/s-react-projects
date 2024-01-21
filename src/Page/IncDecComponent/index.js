import "./index.css"
import React from "react"

class IncDecComponent extends React.Component {
    constructor() {
        super()
        this.state = { counter: 0 }
        this.incCounter = this.incCounter.bind(this)
        console.log('constructor')                                   // step : 1
    }

    incCounter() {
        console.log('incCounter.. ')
        this.setState((previousState) => {
            return ({
                counter : previousState.counter + 1                         
            })
        }) 
    }

    decCounter = () => {
        console.log('decCounter..')
        this.setState((previousState) => {
            return ({
                counter : previousState.counter - 1                         
            })
        }) 
        
    }

    render() {
        console.log('render', this.state)                                        // step : 2
        return (
            <div>
                <div className="input-counter">
                    <input type="text" value={this.state.counter}/>
                </div>
                <div className="btn-div">
                    <button className= "btn" onClick={this.decCounter}> Decrement </button>
                    <button className= "btn" onClick={this.incCounter}> Increment </button>
                </div>
            </div>
        )
    }
}

export default IncDecComponent
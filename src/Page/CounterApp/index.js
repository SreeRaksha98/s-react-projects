import "./index.css"
import React from "react"
import randomcolor from "randomcolor"

class CounterApp extends React.Component{
    constructor(){
        super()
        this.state = {
            counter : 0,
            color : ''
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment(){
        this.setState(prevState => {
            return {
                counter : prevState.counter + 1
            }
        })
    }

    decrement(){
        this.setState(prevState => {
            return {
                counter : prevState.counter - 1
            }
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.counter !== this.state.counter){
        const colorChange =  randomcolor()
        this.setState({color : colorChange})
        }
    }

    render(){
        return(
            <div className="counter-contanier">
                <h3 style={{color : this.state.color}} className="counter-h1">{this.state.counter}</h3>
                <button className="counter-btn" onClick={this.increment}>
                    Increment!
                </button>
                <button className="counter-btn"  onClick={this.decrement}>
                    Decrement!
                </button>
            </div>
        )
    }
}

export default CounterApp
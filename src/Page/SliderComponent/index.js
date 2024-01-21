import React from "react";
import "./index.css"

class SliderComponent extends React.Component{
    constructor(){
        super()
        this.state = {active : 0,  
            slider_items : [1,2,3], 
            current_color : 'red', 
            available_colors : ['red', 'green', 'blue']}
        this.handleClickRight = this.handleClickRight.bind(this)
    }

    componentDidUpdate(prevProps, prevState){
        console.log('aaa',this.state, prevState)
        if(prevState.active !== this.state.active){
            this.setState({
                ...this.state, current_color: this.state.available_colors[this.state.active]
            })
        }
    }


    handleClickRight(){
        if(this.state.active < this.state.slider_items.length - 1){
        this.setState(
            {
                active : this.state.active + 1
            }
        )
        console.log(this)
        console.log('handleClickRight')
        }
    }

    handleClickLeft = () => {
        if(this.state.active > 0){
        this.setState(
            {
                active : this.state.active - 1
            }
        )
        console.log(this)
        console.log('handleClickLeft')
        }
    }

    render(){
        return(
            <>
            <div className="title"> Slider </div>
            <div>
            <div>             
                {this.state.slider_items.map((item, index) => {
                    return <div className={`item-slider ${this.state.active === index ? `active ${this.state.current_color}` : ''}`}>{item}</div>
                })}
            </div>
            <div>
                    <button onClick={this.handleClickLeft}> left </button>
                    <button onClick={this.handleClickRight}> right </button>
            </div>
            </div>
            </>
        )
    }
}

export default SliderComponent
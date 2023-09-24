import React, { Component } from "react";
import CollapsableComponent from "./collapsableComponent";
import {data} from "./dataToDispaly";

class App extends Component {
    render(){
        console.log(data)
        return(
            <div className="flex flex-col items-center">
                <label className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white py-4">Collapsible Component / Expandable Component</label>
                {data.map((item) => (<CollapsableComponent question = {item.question} answer = {item.answer} img = {item.img}/>))}
            </div>
        )
    }
}

export default App
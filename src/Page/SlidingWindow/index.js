import "./App.css"
import ImageSliderComponent from "./ImageSliderComponent"
import elephant_1 from "./images/elephant_1.jpg"
import elephant_2 from "./images/elephant_2.jpg"
import elephant_3 from "./images/elephant_3.jpg"
import elephant_4 from "./images/elephant_4.jpg"
import elephant_5 from "./images/elephant_5.jpg"
import elephant_6 from "./images/elephant_6.jpg"
import elephant_7 from "./images/elephant_7.jpg"

const SlidingWindow = () =>{
    const data = [elephant_1, elephant_2, elephant_3, elephant_4, elephant_5, elephant_6, elephant_7]
    return <ImageSliderComponent slides = {data}/>
}

export default SlidingWindow
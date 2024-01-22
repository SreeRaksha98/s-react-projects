import React from "react";
import CardComponent from "./cardComponent"
import {
    fuel,
    subString,
    darkMode,
    weather,
    slider,
    register,
    todo,
    blog,
    travel,
    expandableComponent,
    AddToKart,
    AddToKart1,
    IncDec,
    sliders,
    counter
} from "./ImagesImport";
import "./style.css"

const IndexPage = () => {
    return (
        <div className="md:mx-20 py-4 text-xl">
            <div className="px-4 md:px-0">Please find my project links below.,</div>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-10 my-3 md:grid-cols-3 px-4 md:px-0 lg:groid-col-3 justify-items-center ">

                {/* ---------------------------------card -1 */}
                <CardComponent
                    name="Sliding Window"
                    desc="sliding window concept can be applied to efficiently render and manage a fixed number of items in a dynamic list"
                    tech="HTML, CSS, JS, React"
                    link="/sliding-window"
                    imageSrc={sliders}
                />

                {/* ---------------------------------card -2 */}
                <CardComponent
                    name="Add To Kart"
                    desc="This task includes Shopping Cart, Checkout, Adding items and displaying selected items which is implemented with the help of simple useState hook."
                    tech="HTML, CSS, JS, React"
                    link="/AddToKart"
                    imageSrc={AddToKart}
                />

                {/* ---------------------------------card -3 */}
                <CardComponent
                    name="Add To Kart"
                    desc="(ContextAPI concept) This task includes the concept of context API and useContext() to depict the AddToKart in ecommerce website"
                    tech="HTML, CSS, JS, React"
                    link="/context-api"
                    imageSrc={AddToKart1}
                />

                {/* ---------------------------------card -4 */}
                <CardComponent
                    name="Blog task"
                    desc="(API example - 1) Blogs can cover a wide range of topics and serve various purposes. In this task i have used the concept of fetch"
                    tech="HTML, CSS, JS, React"
                    link="/posts"
                    imageSrc={blog}
                />

                {/* ---------------------------------card -5 */}
                <CardComponent
                    name="Collapsible Component"
                    desc="A UI which has the concept of hide or show the content. this can be used in creating Menus, FAQs, Panels and so on."
                    tech="HTML, CSS, JS, React"
                    link="/movie-time"
                    imageSrc={expandableComponent}
                />

                {/* ---------------------------------card -6 */}
                <CardComponent
                    name="Registration Form"
                    desc="State is used to manage and store dynamic information that can change over time as a result of user interactions or other events. examples: registraion form, increment / decrement."
                    tech="HTML, CSS, JS, React"
                    link="/register-component"
                    imageSrc={register}
                />

                {/* ---------------------------------card -7 */}
                <CardComponent
                    name="ToDo Task"
                    desc="(API example - 2) This task display the to-dos which are completed by employees of the company. In this task i have used the concept of fetch"
                    tech="HTML, CSS, JS, React"
                    link="/todo-component"
                    imageSrc={todo}
                />

                {/* ---------------------------------card -8 */}
                <CardComponent
                    name="Circular tour Algorithm"
                    desc="This Algorithm is a computational problem used to find a starting point in a circular route that allows a vehicle to visit all gas stations along the route without running out of fuel. example: road trips."
                    tech="HTML, CSS, JS, React"
                    link="/petrol-pump"
                    imageSrc={fuel}
                />

                {/* ---------------------------------card -9 */}
                <CardComponent
                    name="Weather forecasting"
                    desc="A simple React task which includes the concept of fetch API for making network request from the web server and display the weather of that particular city which user provides as an input."
                    tech="HTML, CSS, JS, React"
                    link="/weather-component"
                    imageSrc={weather}
                />

                {/* ---------------------------------card -10 */}
                <CardComponent
                    name="Mysore Hotel Guide"
                    desc="This task is based on Routing that involves directing user requests to the appropriate page within a web application. examples: URL Mapping, Navigation, Nested Routing, Single-Page Applications (SPAs)"
                    tech="HTML, CSS, JS, React"
                    link="/travel-component"
                    imageSrc={travel}
                />

                {/* ---------------------------------card -11 */}
                <CardComponent
                    name="Finding the substring "
                    desc="Substrings are used to extract and work with parts of a larger text or data. examples: Text Processing and Manipulation, Data Extraction and Parsing."
                    tech="HTML, CSS, JS, React"
                    link="/sub-string"
                    imageSrc={subString}
                />

                {/* ---------------------------------card -12 */}
                <CardComponent
                    name="Login Page"
                    desc="Dark mode and light mode are user interface themes in which they can switch between these modes based on their preferences, such as using dark mode in low-light situations to reduce eye strain."
                    tech="HTML, CSS, JS, React"
                    link="/dark-mode"
                    imageSrc={darkMode}
                />

                {/* ---------------------------------card -13 */}
                <CardComponent
                    name="Incremeter Decrementer"
                    desc=""
                    tech="HTML, CSS, JS, React"
                    link="/inc-dec"
                    imageSrc={IncDec}
                />

                {/* ---------------------------------card -14 */}
                <CardComponent
                    name="Slider"
                    desc=""
                    tech="HTML, CSS, JS, React"
                    link="/slider"
                    imageSrc={slider}
                />

                {/* ---------------------------------card -15 */}
                <CardComponent
                    name="Counter"
                    desc=""
                    tech="HTML, CSS, JS, React"
                    link="/counter"
                    imageSrc={counter}
                />
            </div>
        </div>
    )
}

export default IndexPage
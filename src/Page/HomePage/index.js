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
} from "./ImagesImport";
import "./style.css"

const IndexPage = () => {
    return (
        <div className="md:mx-20 py-4 text-xl">
            <div className="px-4 md:px-0">Please find my project links below.,</div>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-10 my-3 md:grid-cols-3 px-4 md:px-0 lg:groid-col-3 justify-items-center ">
                {/* -------------------------------------------------------------------------Cards */}
                {/* ---------------------------------card -1 */}
                <CardComponent
                    name="Sliding Window"
                    desc="sliding window concept can be applied to efficiently render and manage a fixed number of items in a dynamic list"
                    tech="HTML, CSS, JS, React"
                    link="/slider-component"
                    imageSrc={slider}
                />

                {/* ---------------------------------card -2 */}
                <CardComponent
                    name="Add To Kart"
                    desc="This concept mimics the real-world shopping experience of physically adding items to a cart. examples: Shopping Cart, Checkout, Adding items, Selection."
                    tech="HTML, CSS, JS, React"
                    link="/AddToKart"
                    imageSrc={AddToKart}
                />

                {/* ---------------------------------card -8 */}
                <CardComponent
                    name="Post task"
                    desc="(API example - 3) ToDo Task"
                    tech="HTML, CSS, JS, React"
                    link="/posts"
                    imageSrc={blog}
                />

                {/* ---------------------------------card -3 */}
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
                    desc="(API example - 2) ToDo Task"
                    tech="HTML, CSS, JS, React"
                    link="/todo-component"
                    imageSrc={todo}
                />

                {/* ---------------------------------card -1 */}
                <CardComponent
                    name="Circular tour Algorithm"
                    desc="This Algorithm is a computational problem used to find a starting point in a circular route that allows a vehicle to visit all gas stations along the route without running out of fuel. example: road trips."
                    tech="HTML, CSS, JS, React"
                    link="/petrol-pump"
                    imageSrc={fuel}
                />
                
                {/* ---------------------------------card -4 */}
                <CardComponent
                    name="Weather forecasting"
                    desc="A simple React task which includes the concept of fetch API for making network request from the web server and display the weather of that particular city which user provides as an input."
                    tech="HTML, CSS, JS, React"
                    link="/weather-component"
                    imageSrc={weather}
                />

                {/* ---------------------------------card -9 */}
                <CardComponent
                    name="Mysore Hotel Guide"
                    desc="This task is based on Routing that involves directing user requests to the appropriate page within a web application. examples: URL Mapping, Navigation, Nested Routing, Single-Page Applications (SPAs)"
                    tech="HTML, CSS, JS, React"
                    link="/travel-component"
                    imageSrc={travel}
                />

                {/* ---------------------------------card -2 */}
                <CardComponent
                    name="Finding the substring "
                    desc="Substrings are used to extract and work with parts of a larger text or data. examples: Text Processing and Manipulation, Data Extraction and Parsing."
                    tech="HTML, CSS, JS, React"
                    link="/sub-string"
                    imageSrc={subString}
                />

                {/* ---------------------------------card -4 */}
                <CardComponent
                    name="Login Page"
                    desc="Dark mode and light mode are user interface themes in which they can switch between these modes based on their preferences, such as using dark mode in low-light situations to reduce eye strain."
                    tech="HTML, CSS, JS, React"
                    link="/dark-mode"
                    imageSrc={darkMode}
                />
            </div>
        </div>
    )
}

export default IndexPage
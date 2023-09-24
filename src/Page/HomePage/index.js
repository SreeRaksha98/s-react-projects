import React from "react";
import CardComponent from "./cardComponent"
import {
    fuel,
    subString,
    collapsibleComponent,
    darkMode,
    weather,
    slider,
    register,
    todo,
    blog,
    travel,
} from "./ImagesImport";
import "./style.css"

const IndexPage = () => {
    return (
        <div className="mx-20 py-4 text-xl	">Please find my project links below.,
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-10 my-3 md:grid-cols-3 lg:groid-col-3 ">
                {/* -------------------------------------------------------------------------Cards */}
                {/* ---------------------------------card -3 */}
                <CardComponent
                    name="Kannada Movie Briefing"
                    desc="Simple task which includes the concept of collapsible component"
                    tech="HTML, CSS, JS, React"
                    link="/movie-time"
                    imageSrc={collapsibleComponent}
                />

                {/* ---------------------------------card -4 */}
                <CardComponent
                    name="weather forecasting"
                    desc="(API example - 1) By providing city name we can get to know the weather of that particular city"
                    tech="HTML, CSS, JS, React"
                    link="/weather-component"
                    imageSrc={weather}
                />

                {/* ---------------------------------card -5 */}
                <CardComponent
                    name="sliding window"
                    desc="sliding component"
                    tech="HTML, CSS, JS, React"
                    link="/slider-component"
                    imageSrc={slider}
                />

                {/* ---------------------------------card -6 */}
                <CardComponent
                    name="registration form"
                    desc="registration form"
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

                {/* ---------------------------------card -8 */}
                <CardComponent
                    name="Post task"
                    desc="(API example - 3) ToDo Task"
                    tech="HTML, CSS, JS, React"
                    link="/posts"
                    imageSrc={blog}
                />

                {/* ---------------------------------card -8 */}
                <CardComponent
                    name="mysore hotel"
                    desc="ToDo Task"
                    tech="HTML, CSS, JS, React"
                    link="/travel-component"
                    imageSrc={travel}
                />

                {/* ---------------------------------card -1 */}
                <CardComponent
                    name="Circular tour Algorithm"
                    desc="A circular tour to visit all the petrol pumps."
                    tech="HTML, CSS, JS, React"
                    link="/petrol-pump"
                    imageSrc={fuel}
                />


                {/* ---------------------------------card -2 */}
                <CardComponent
                    name="Finding the substring "
                    desc="Susbstring of a string without using default methods."
                    tech="HTML, CSS, JS, React"
                    link="/sub-string"
                    imageSrc={subString}
                />

                {/* ---------------------------------card -4 */}
                <CardComponent
                    name="Login Page"
                    desc="The task which includes the concept of toggle button"
                    tech="HTML, CSS, JS, React"
                    link="/dark-mode"
                    imageSrc={darkMode}
                />

            </div>
        </div>
    )
}

export default IndexPage
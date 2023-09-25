import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from "./Header.js"
import {
    HomePage,
    PetrolPumpPage,
    SubString,
    CollapsableComponent,
    DarkModeComponent,
    WeatherForecastingComponent,
    SliderComponent,
    RegisterComponent,
    ToDoComponent,
    PostsComponent,
    Post,
    Home,
    HotelsAndSPA,
    NonVegHotels,
    AddToKart,
} from "./ImportComponents";

import "./routeStyle.css"

/*
* ImportComponent: where all the projects files are exported.
* <Route />
* <Navbar />
*/

const RouteComponent = () => {

    return (
        <Router>
            <div>
                {/* -------------------------------------------------------------------------Header */}
                    <HeaderComponent />

                {/* -------------------------------------------------------------------------Body */}

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/petrol-pump" element={<PetrolPumpPage />} />
                    <Route path="/sub-string" element={<SubString />} />
                    <Route path="/movie-time" element={<CollapsableComponent />} />
                    <Route path="/dark-mode" element={<DarkModeComponent />} />
                    <Route path="/weather-component" element={<WeatherForecastingComponent />} />
                    <Route path="/slider-component" element={<SliderComponent />} />
                    <Route path="/register-component" element={<RegisterComponent />} />
                    <Route path="/todo-component" element={<ToDoComponent />} />
                    <Route path="/posts" element={<PostsComponent />} />
                    <Route path="/posts/post" element={<Post />} />
                    <Route path="/travel-component" element={<Home />} />
                    <Route path="/travel-component/VegHotels" element={<HotelsAndSPA />} />
                    <Route path="/travel-component/NonVegHotels" element={<NonVegHotels />} />
                    <Route path="/AddToKart" element = {<AddToKart />} />
                </Routes>
            </div>
        </Router>
    )
}

export default RouteComponent
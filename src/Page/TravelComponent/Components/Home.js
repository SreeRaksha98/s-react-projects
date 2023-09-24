import * as React from "react";
import BackgroundImage from '../images/palace_1.jpg'
import SideBarComponent from "./SideBarComponent";
import Footer from "./Footer";
import "../App.css"
class Home extends React.Component {
  render() {
    return (
      <><div className="container-fluid">
        <div className="top-container">
          <SideBarComponent />
          <div className="col-md-9 offset-md-3 body-container">
            <section id="wrapper">

              <nav className="navbar navbar-expand-md">
                <div className="logo"><button className="hamberburger"><svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="25px" height="25px" viewBox="0 0 52 52" enableBackground="new 0 0 52 52" xmlSpace="preserve">
                  <path d="M8.4,42c-0.6,0-1-0.4-1-1V10.9c0-0.6,0.4-1,1-1h8.1c0.4,0,0.9,0.2,1.2,0.5L29.3,25c0.4,0.5,0.4,1.3,0,1.9L17.6,41.5c-0.3,0.4-0.8,0.6-1.3,0.6L8.4,42z" />
                  <path d="M44.3,25L32.6,10.5c-0.5-0.6-1.4-0.8-2.1-0.2l-2.3,1.9c-0.7,0.5-0.8,1.5-0.2,2.1L37.5,26L28,37.8c-0.5,0.6-0.4,1.6,0.2,2.1l2.3,1.9c0.7,0.5,1.5,0.4,2.1-0.2L44.3,27C44.7,26.2,44.7,25.5,44.3,25z" />
                </svg></button><span></span></div>
              </nav>
              <div className="md:p-4">
                <div className="welcome">
                  <div className="content rounded-3 p-3">
                    <h1 className="fs-3">Welcome to Mysore Dairies</h1>
                    <p className="mb-0">Hello viewers, welcome to our awesome dashboard!</p>
                  </div>
                </div>

                <section className="statistics mt-4">
                  <div className="row">
                    <img src={BackgroundImage} alt="Background image" className="backgroundImage" />
                  </div>
                </section>
              </div>
            </section>
            <Footer />
          </div>
        </div>
      </div></>

    )
  }
}

export default Home
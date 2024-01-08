import "../DarkModeComponent/index.css"
import React from "react";
import toast from 'react-hot-toast';

class DarkModeComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            isDarkMode: true
        }
    }

    componentDidMount() {
        if (document) {
            if (this.state.isDarkMode) {
                document.body.classList.add('dark-mode')
            } else {
                document.body.classList.remove('dark-mode')
            }
        }
    }

    componentDidUpdate() {
        if (this.state.isDarkMode) {
            toast.success('Darkmode Activated..')
        }
    }

    handleChange = (event) => {
        if (document?.body) {
            if (!this.state.isDarkMode) {
                document.body.classList.add('dark-mode')
            } else {
                document.body.classList.remove('dark-mode')
            }
            this.setState({
                isDarkMode: !this.state.isDarkMode
            })
        }

    }

    submitBtn = () => {
        alert('Login Successful...!')
    }

    render() {
        return (
            <div className="dark-mode-container">
                <div className="dark-mode-toggle-container">
                <label className="dark-mode-switch">
                    <input type="checkbox"  onChange={this.handleChange} defaultChecked={this.state.isDarkMode}/>
                        <span className="dark-mode-slider"></span>
                </label>
                </div>

                <div className="login-page-container">
                    <div className="dark-mode-form">
                        <form className="login-form">
                            <input type="text" placeholder="username" />
                            <input type="password" placeholder="password" />
                            <button onClick={this.submitBtn}>login</button>
                            <p className="dark-mode-message">Not registered? <a href="#">Create an account</a></p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default DarkModeComponent
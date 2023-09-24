import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { logo } from "./ImportComponents";
import toast from 'react-hot-toast';

/**
 * Header Component
 * @returns JSx
 */

const HeaderComponent = () => {
    const [navVis, setNavVis] = useState()
    const handleCopy = (event) => {
        event.preventDefault()
        let url = window.location?.href
        navigator?.clipboard?.writeText(url).then(function () {
            toast.success('Copied!..');
        }, function () {
        });
    }

    const toggleNavbar = () => {
        setNavVis(!navVis)
    }
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-0 header-bg">
            <div className="container mx-auto flex flex-wrap items-center justify-between">

                <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                    <Link className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" to="/">
                        <img src={logo} className="logo w-20" alt="test" />
                    </Link>

                    <button className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" onClick={toggleNavbar}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>

                <div className={navVis ? "lg:flex flex-grow items-center" : "lg:flex flex-grow items-center hidden"} id="example-collapse-navbar">
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-m font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                <i className="fa-brands fa-linkedin text-lg leading-lg text-white opacity-75" ></i><span className="ml-2">LinkedIn</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-m font-bold leading-snug text-white hover:opacity-75" href="#pablo" onClick={handleCopy}>
                                <i className="fa-solid fa-copy text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Copy</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default HeaderComponent
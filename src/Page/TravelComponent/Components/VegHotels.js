import * as React from "react";
import "./VegHotels.css"
import SideBarComponent from "./SideBarComponent";
import Footer from "./Footer";

class HotelsAndSPA extends React.Component {
    render() {
        return (
            <div className="container-fluid">
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
                            <div>
                                <nav className="header">Hotels and SPA</nav>
                                <section className="main-container">
                                    <div className="product-grid">
                                        <div className="product-item">

                                            <div className="product-title">
                                                Hotel Roopa
                                            </div>
                                            <div className="product-price">

                                                <div className="special-price">
                                                    Rs.899/- per person
                                                </div>
                                            </div>
                                            <div className="product-action">
                                                <a href="https://www.google.com/travel/search?q=spring%20mysore&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4570331%2C4597339%2C4757164%2C4814050%2C4850738%2C4864715%2C4874190%2C4886480%2C4893075%2C4924070%2C4965990%2C4990494%2C72248281%2C72264422%2C72276652%2C72281254%2C72286089%2C72288621%2C72296744%2C72300991%2C72301168&hl=en-IN&gl=in&ssta=1&ts=CAESCgoCCAMKAggDEAAaLQorEik6J1IuUy5OYWlkdSBOYWdhciwgSGFsZSBLZXNhcmUsIEthcm5hdGFrYQ&qs=CAAgACgAMidDaGtJdWNXOTlfYXZtOEdSQVJvTUwyY3ZNWEIwZUhrd2NqWXpFQUVIAA&ap=KigKEgnVfedYKYgoQBGZ0BMZ9ihTQBISCdvtMCRNrShAEZnQE_GiK1NAMABoAQ&ictx=1&sa=X&ved=0CAAQ5JsGahgKEwiY1IOI2_n_AhUAAAAAHQAAAAAQ3QI&utm_campaign=sharing&utm_medium=link_btn&utm_source=htls" >
                                                    <button className="button cart">
                                                        book now
                                                    </button>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="product-item">

                                            <div className="product-title">
                                                Radisson Blu Plaza
                                            </div>
                                            <div className="product-price">

                                                <div className="special-price">
                                                    Rs.1099/- per person
                                                </div>
                                            </div>
                                            <div className="product-action">
                                                <a href="https://www.google.com/travel/search?q=Mysouth&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4570331%2C4597339%2C4757164%2C4814050%2C4850738%2C4864715%2C4874190%2C4886480%2C4893075%2C4924070%2C4965990%2C4990494%2C72248281%2C72264422%2C72276652%2C72281254%2C72286089%2C72288621%2C72296744%2C72300991%2C72301168&hl=en-IN&gl=in&ssta=1&ts=CAESCgoCCAMKAggDEAAaLQorEik6J1IuUy5OYWlkdSBOYWdhciwgSGFsZSBLZXNhcmUsIEthcm5hdGFrYQ&qs=CAAgACgAMidDaGtJcWZYVXdiZXBuNmZFQVJvTUwyY3ZNV2hqTWpoZlpGOTZFQUVIAA&ap=KigKEglPHIO_T5EoQBGZ0BNPoSlTQBISCS1ycabhoyhAEZnQE7v3KlNAMABoAQ&ictx=1&sa=X&ved=0CAAQ5JsGahgKEwiY1IOI2_n_AhUAAAAAHQAAAAAQ2QU&utm_campaign=sharing&utm_medium=link_btn&utm_source=htls" >
                                                    <button className="button cart">
                                                        book now
                                                    </button>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="product-item">

                                            <div className="product-title">
                                                Hotel Crystal Paark Inn Mysore
                                            </div>
                                            <div className="product-price">

                                                <div className="special-price">
                                                    Rs.599/- per person
                                                </div>
                                            </div>
                                            <div className="product-action">
                                                <a href="https://www.google.com/travel/search?q=Mysouth&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4570331%2C4597339%2C4757164%2C4814050%2C4850738%2C4864715%2C4874190%2C4886480%2C4893075%2C4924070%2C4965990%2C4990494%2C72248281%2C72264422%2C72276652%2C72281254%2C72286089%2C72288621%2C72296744%2C72300991%2C72301168&hl=en-IN&gl=in&ssta=1&ts=CAESCgoCCAMKAggDEAAaRworEik6J1IuUy5OYWlkdSBOYWdhciwgSGFsZSBLZXNhcmUsIEthcm5hdGFrYRIYEhIKBwjnDxAHGAYSBwjnDxAHGAcyAggAKgcKBToDSU5S&qs=CAAgACgAMiRDaGNJai1IVS01X3k0dHhER2dzdlp5OHhkR04wWkRFeGN4QUJIAA&ap=KigKEglPHIO_T5EoQBGZ0BNPoSlTQBISCS1ycabhoyhAEZnQE7v3KlNAMABoAQ&ictx=1&sa=X&ved=0CAoQh-kJahgKEwiY1IOI2_n_AhUAAAAAHQAAAAAQzwU&utm_campaign=sharing&utm_medium=link_btn&utm_source=htls">
                                                    <button className="button cart">book now</button>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="product-item">

                                            <div className="product-title">
                                                Hotel Maurya Palace and Hotel Maurya Residency
                                            </div>
                                            <div className="product-price">

                                                <div className="special-price">
                                                    Rs.799/- per person
                                                </div>
                                            </div>
                                            <div className="product-action">
                                                <a href="https://www.google.com/travel/search?q=Mysouth&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4570331%2C4597339%2C4757164%2C4814050%2C4850738%2C4864715%2C4874190%2C4886480%2C4893075%2C4924070%2C4965990%2C4990494%2C72248281%2C72264422%2C72276652%2C72281254%2C72286089%2C72288621%2C72296744%2C72300991%2C72301168&hl=en-IN&gl=in&ssta=1&ts=CAESCgoCCAMKAggDEAAaRworEik6J1IuUy5OYWlkdSBOYWdhciwgSGFsZSBLZXNhcmUsIEthcm5hdGFrYRIYEhIKBwjnDxAHGAYSBwjnDxAHGAcyAggAKgcKBToDSU5S&qs=CAAgACgAMiZDaGdJX1pEb2tzUGRvTDJuQVJvTEwyY3ZNWFpvYkhkdGF6RVFBUUgA&ap=KigKEglPHIO_T5EoQBGZ0BNPoSlTQBISCS1ycabhoyhAEZnQE7v3KlNAMABoAQ&ictx=1&sa=X&ved=0CAAQ5JsGahgKEwiY1IOI2_n_AhUAAAAAHQAAAAAQsgY&utm_campaign=sharing&utm_medium=link_btn&utm_source=htls">
                                                    <button className="button cart">book now</button>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="product-item">

                                            <div className="product-title">
                                                Hotel Rio Meridian
                                            </div>
                                            <div className="product-price">

                                                <div className="special-price">
                                                    Rs.399/- per person
                                                </div>
                                            </div>
                                            <div className="product-action">
                                                <a href="https://www.google.com/travel/search?q=Le%20uppu&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4570331%2C4597339%2C4757164%2C4814050%2C4850738%2C4864715%2C4874190%2C4886480%2C4893075%2C4924070%2C4965990%2C4990494%2C72248281%2C72264422%2C72276652%2C72281254%2C72286089%2C72288621%2C72296744%2C72300991%2C72301168&hl=en-IN&gl=in&ssta=1&ts=CAESCgoCCAMKAggDEAAaLQorEik6J1IuUy5OYWlkdSBOYWdhciwgSGFsZSBLZXNhcmUsIEthcm5hdGFrYQ&qs=CAAgACgAMihDaG9JelBDZW5aWDJsZVR3QVJvTkwyY3ZNVEZqTlRodE5taHNaQkFCSAA&ap=KigKEgl9MImjPpkoQBEGdvyr8ShTQBISCUakWTlhvihAEQZ2_IOeK1NAMABoAQ&ictx=1&sa=X&ved=0CAAQ5JsGahgKEwiY1IOI2_n_AhUAAAAAHQAAAAAQ8Qc&utm_campaign=sharing&utm_medium=link_btn&utm_source=htls">
                                                    <button className="button cart">book now</button>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="product-item">

                                            <div className="product-title">
                                                REGALIA INN AND SUITES
                                            </div>
                                            <div className="product-price">

                                                <div className="special-price">
                                                    Rs.159/- per person
                                                </div>
                                            </div>
                                            <div className="product-action">
                                                <a href="https://www.google.com/travel/search?q=Le%20uppu&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4570331%2C4597339%2C4757164%2C4814050%2C4850738%2C4864715%2C4874190%2C4886480%2C4893075%2C4924070%2C4965990%2C4990494%2C72248281%2C72264422%2C72276652%2C72281254%2C72286089%2C72288621%2C72296744%2C72300991%2C72301168&hl=en-IN&gl=in&ssta=1&ts=CAESCgoCCAMKAggDEAAaRworEik6J1IuUy5OYWlkdSBOYWdhciwgSGFsZSBLZXNhcmUsIEthcm5hdGFrYRIYEhIKBwjnDxAHGAYSBwjnDxAHGAcyAggAKgcKBToDSU5S&qs=CAAgACgAMidDaGtJMzZhSXpOM3FsOHRjR2cwdlp5OHhNV1kwZDNabVptZ3pFQUVIAA&ap=KigKEgl9MImjPpkoQBEGdvyr8ShTQBISCUakWTlhvihAEQZ2_IOeK1NAMABoAQ&ictx=1&sa=X&ved=0CAAQ5JsGahgKEwiY1IOI2_n_AhUAAAAAHQAAAAAQlAg&utm_campaign=sharing&utm_medium=link_btn&utm_source=htls">
                                                    <button className="button cart">book now</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                            </div>
                        </section>
                        <Footer />
                    </div>
                </div>
            </div>

        )
    }
}

export default HotelsAndSPA
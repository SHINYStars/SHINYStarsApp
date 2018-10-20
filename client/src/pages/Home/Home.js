import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <nav className="container navbar navbar-expand-lg navbar-light">

                        <a href="/" className="navbar-brand logo">
                            <img src="../images/shinystars-logo-3.png" alt="logo" width="100" height="100" />&nbsp;&nbsp;
                            <div>
                                <h3><span className="logo-color-1">SH</span><span className="logo-color-2">elters </span>
                                    <span className="logo-color-1">I</span><span className="logo-color-2">n </span>
                                    <span className="logo-color-1">N</span><span className="logo-color-2">eed</span></h3>
                                <h3><span className="logo-color-1">Y</span><span className="logo-color-2">ou're the </span>
                                    <span className="logo-color-1">S</span><span className="logo-color-2">tars</span></h3>
                            </div>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarToggler">
                            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/login">Login<span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="/contact">Contact </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <main>
                    <div className="container main">
                        <div className="row">
                            <div className="col-lg-10">
                                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                        <li data-target="#myCarousel" data-slide-to="1"></li>
                                        <li data-target="#myCarousel" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">

                                        <div className="carousel-item">
                                            <img className="third-slide" src="/images/slides/AdobeStock_107139675.jpeg" alt="First slide" />
                                            <div className="container">
                                                <div className="carousel-caption">
                                                    <p className="need">"For it is in giving that we receive." ~St. Francis of Assisi</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="carousel-item active">
                                            <img className="first-slide" src="/images/slides/AdobeStock_79567735.jpeg" alt="Second slide" />
                                            <div className="container">
                                                <div className="carousel-caption">
                                                    <p className="need">"The smallest act of kindness is worth more than the grandest intention."
                ~Oscar Wilde</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="carousel-item">
                                            <img className="second-slide" src="/images/slides/AdobeStock_128736245.jpeg" alt="Third slide" />
                                            <div className="container">
                                                <div className="carousel-caption">
                                                    <p className="need">"You make a living by what you get. You make a life by what you give."
                ~Winston Churchill</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <a className="target-link" href="#volunteer">
                                    <img className="img-rounded" src="/images/volunteer.png" alt="Generic placeholder" width="140" height="140" />
                                </a>
                                <a className="target-link" href="#donate">
                                    <img className="img-rounded" src="/images/donate.png" alt="Generic placeholder" width="140" height="140" />
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Home;
import React from 'react';
import './about.css';

function About(props) {
    return (
        <section className="section-grey">
            <div className="container">
                <div className="row ">
                    <div className="col-md-6">
                        <div className="youtube-video-wrapper">
                            <div className="popup-gallery">
                            <img src="images/555X510.png" className="" alt="image"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 align-self-center">
                        <h3>Get ready to discover all the benefits and secrets of a perfect launch</h3>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur netsum lorem fugit, sed quia magni dolores eos qui ratione sequi nesciunt. Neque et poris ratione sequi enim ipsam voluptatem quia volupti tempor ante netsum quia magni.</p>
                        <ul className="features-list-dark">
                            <li><i className="fa fa-check lyla"></i> Netsum est, qui ipsum quiaim netsum sequi net tempor.</li>
                            <li><i className="fa fa-check lyla"></i> Etiam tempor ante acu ipsum finibus, atimus urnas.</li>
                            <li><i className="fa fa-check lyla"></i> Atimus urnas netsudat, qui ipsum quiaim netsum.</li>
                            <li><i className="fa fa-check lyla"></i> Etiam tempor ante acum ipsum et finibus.</li>
                        </ul>
                        <a href="#" className="btn btn-lg btn-blue">Discover More</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
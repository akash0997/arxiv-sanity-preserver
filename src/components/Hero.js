
import React from 'react';

const Hero = props => {
        return (
            <section className="hero is-warning">
                <div className="hero-body">
                    <div className="container">
                    <div className="columns">
                        <div className="column is-one-half">
                            <h1 className="title">
                                <a href="/">Arxiv Sanity Preserver</a>
                            </h1>
                            <h2 className="subtitle">
                            Built in spare time by <a href="https://twitter.com/karpathy">@karpathy</a> to accelerate research.<br/>
                            Serving last 100 papers from cs.[CV|CL|LG|AI|NE]/stat.ML
                            
                            </h2>
                        </div>
                        <div className="column is-one-third">
                            <p>{!props.isLoggedIn ? '' : `Welcome, ${props.username}` }</p><br/>
                            <p>{props.incorrectLogin? "Sorry, password doesn't match": '' }</p>
                            <a className="button is-info" onClick={props.showLoginModal}>{props.isLoggedIn ? 'Logout': 'Login/Register'}</a>
                        </div>
                    </div>
                    {/* <a className="button is-info" onClick={props.showLoginModal}>Login/Register</a> */}
                    </div>
                </div>
            </section>
        );
}

export default Hero
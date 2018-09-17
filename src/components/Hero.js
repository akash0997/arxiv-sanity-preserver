
import React from 'react';

const Card = props => {
        return (
            <section className="hero is-warning">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Arxiv Sanity Preserver
                        </h1>
                    <h2 className="subtitle">
                        Built in spare time by <a href="https://twitter.com/karpathy">@karpathy</a> to accelerate research.<br/>
                        Serving last 100 papers from cs.[CV|CL|LG|AI|NE]/stat.ML
                        
                    </h2>
                    </div>
                </div>
            </section>
        );
}

export default Card
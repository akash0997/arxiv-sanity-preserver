
import React from 'react';
import Card from './Card'

const Paper = props => {
        return (
          <li>
            <div className="container">
                <div className="tile is-ancestor">
                    <div className="tile is-9">
                        <div className="tile is-parent">
                            <article className="tile is-child notification is-primary">
                                <p className="title">Wide tile</p>
                                {/* <p className="subtitle">Aligned with the right tile { this.state.date.toLocaleDateString() }</p> */}
                                <p className="subtitle"></p>
                                <div className="content">
                                    {props.abstract}
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>

          </li>
        );
    }

export default Paper;
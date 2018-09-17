
import React from 'react';
import Card from './Card'
import PropTypes from 'prop-types'

const Paper = props => (
          <li>
                <div className="tile is-ancestor">
                    <div className="tile is-9">
                        <div className="tile is-parent">
                            <article className="tile is-child notification is-primary">
                                <p className="title">{props.data.title}</p>
                                <p className="subtitle"></p>
                                <div className="content">
                                    {props.data.abstract}
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
          </li>
    );

Paper.propTypes = {
  data: PropTypes.func.isRequired,
};

export default Paper;
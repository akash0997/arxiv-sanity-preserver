
import React from 'react';
import axios from 'axios'

const Card = props =>  { 
      return (
          <li>
          <div class="columns">
            <div className="column is-three-fourths">
            <div className="card">
            <div className="card-image">
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-260x260">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                  </figure>
                </div>
                <div className="media-content">
                  <a href={props.data.link} target="_blank"><p className="title is-4">{props.data.title}</p></a>
                  <p className="subtitle is-6">{props.data.authors.map(author => ` ${author} |`)}</p>
                </div>
              </div>
          
              <div className="content">
                {props.data.abstract}
                <br/>
                <time datetime="2016-1-1">{props.data.published_time}</time>
              </div>
            </div>
          </div>
          </div>
        </div>
        </li>
    ); 
  }

export default Card;
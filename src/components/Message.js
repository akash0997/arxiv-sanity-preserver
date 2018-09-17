
import React from 'react';
import axios from 'axios'

const Message = props => { 
       const divChoices = ["is-dark", "is-primary", "is-info", "is-link", "is-warning", "is-danger", "is-success"]
       let randomNumber = Math.floor(Math.random()*divChoices.length)

       return(
          <li>
            <article className={`message ${divChoices[randomNumber]}`}>
                <div className="message-header">
                    <p><a href={props.data.link} target="_blank">{props.data.title}</a></p>
                    <p>{props.data.published_time}</p>
                    <p>Authors: {props.data.authors.map(author => ` ${author} |`)}</p>
                </div>
                <div className="message-body">
                  {props.data.abstract}
                </div>
            </article>
            <br/>
        </li>
    );
 }

export default Message;
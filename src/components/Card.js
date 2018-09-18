
import React from 'react';
import axios from 'axios'
import logo from '../thumbs/1604.03887v4.pdf.jpg'

const Card = props =>  { 
      const img_url = `./thumbs/${props.data.pid}.pdf.jpg`
      //helper function to import images and convert to proper format
      function importAll(r){
        let images = {}
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item)});
        return images;
      }
      
      const pdf_link = `http://arxiv.org/pdf/${props.data.pid}.pdf`

      const images = importAll(require.context('../thumbs', false, /\.(png|jpe?g|svg)$/))

      const authorsFromProps = props.data.authors;

      let authors = authorsFromProps.map(author => {
           return <li><a class="pagination-link" onClick={e => props.searchByAuthor(author, e)}>{author}</a></li>;
        }
        );

      return (
          <li>
            <div className="card">
            <div className="card-image">
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <a href={props.data.link} target="_blank"><p className="title is-4">{props.data.title}</p></a>
                  {/* <p className="subtitle is-6">{props.data.authors.map(author => ` ${author} |`)}</p> */}
                  <nav class="pagination" role="navigation"  aria-label="pagination">
                    <ul className="pagination-list">
                      {authors}
                    </ul>
                  </nav>
                </div>
                <div className="media-right">
                  <figure className="image is-260x260">
                    {/* <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/> */}
                    <img src={images[`${props.data.pid}.pdf.jpg`]} alt="Placeholder image"/>
                  </figure>
                </div>
              </div>
          
              <div className="content">
                {props.data.abstract}
                <br/>
                <time datetime="2016-1-1">
                {props.data.published_time} | <a href={pdf_link} target="_blank">pdf</a>
                <p><a onClick={ e => props.handleGetSimilar(props.data.pid, e)}>Show similar</a></p>
                </time>
              </div>
            </div>
          </div>
        </li>
    ); 
  }

export default Card;
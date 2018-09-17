import React from 'react';
import Card from './Card';
import Paper from './Paper'
import Message from './Message'
import PropTypes from 'prop-types'


const PaperList = props => {

    const results = props.papers;

    console.log(results)
    let papers = results.map(result => 
        <Card 
         data={result} 
         key={result.pid}
          handleGetSimilar={props.handleGetSimilar}
          searchByAuthor={props.byAuthor}
         />
    );


    return (
        <ul>
            { papers }
        </ul>
    );
}

PaperList.propTypes = {
    papers: PropTypes.func.isRequired
};


export default PaperList;
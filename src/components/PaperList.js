import React from 'react';
import Card from './Card';
import Paper from './Paper'
import Message from './Message'
import PropTypes from 'prop-types'


const PaperList = props => {

    const results = props.papers;

    console.log(results)
    let papers = results.map(result => 
        <Message data={result} key={result.pid}/>
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
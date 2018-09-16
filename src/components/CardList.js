import React from 'react';
import Card from './Card';
import Paper from './Paper'

const CardList = props => {

    const results = props.papers;
    console.log('printing props')

    let papers = results.map(paper => {
        <Paper abstract={paper.abstract}/>
    })
    console.log(papers)
    return (
        <ul>
            { papers }
        </ul>
    );
}

export default CardList;
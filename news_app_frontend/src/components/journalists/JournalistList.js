import React from 'react';
import Journalist from './Journalist';

const JournalistList = ({ journalists }) => {
    if (journalists.length === 0) {
        return (<p>Loading...</p>)
    }

    const journalistNodes = journalists.map((journalist, index) => {
        return (
            <li key={index} className="component-item">
                <div className="component">
                    <Journalist journalist={journalist} />
                    <p>{journalist.name}</p>
                </div>
            </li>
        )
    })

    return (
        <>
        <h1>Journalists</h1>
        {journalistNodes}
        </>
    )
}

export default JournalistList;
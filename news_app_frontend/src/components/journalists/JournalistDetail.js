import React from 'react'; 
import Article from '../articles/Article';
import Journalist from './Journalist';
import { Link } from 'react-router-dom';

const JournalistDetail = ({ journalist, article, onDelete }) => {
    if (!journalist) {
        return <p>Loading...</p>
    }

    const handleDelete = () => {
        onDelete(journalist.id)
    }

    const editUrl = "/journalists" + journalist.id + "/edit"

    return (
        <div className="component">
            <Journalist journalist={journalist}/>
            {/* <p>{journalist.name}</p> */}
            <p>{journalist.image}</p>
            <p>Articles: {journalist.articles}</p>
            <button onClick={handleDelete}> Delete Journalist </button>
            <Link to={editUrl}><button type="button"> Edit Journalist </button></Link>
        </div>
    )

}

export default JournalistDetail;
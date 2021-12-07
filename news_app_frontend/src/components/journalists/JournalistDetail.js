import React from 'react'; 
import Article from '../articles/Article';
import Journalist from './Journalist';
import { Link } from 'react-router-dom';

const JournalistDetail = ({ journalist, articles, onDelete }) => {
    if (!journalist) {
        return <p>Loading...</p>
    }

    const handleDelete = () => {
        onDelete(journalist.id)
    }

    const editUrl = "/journalists" + journalist.id + "/edit"

    const articleNodes = journalist.articles.map((article, index) => {
        return (
            <li key={index} className="component-item">
                <div className="component">
                    <Article article={article} />
                    <p>{article.summary}</p>
                </div>
            </li>
        )
    })

    return (
        <div className="component">
            <Journalist journalist={journalist}/>
            <p>{journalist.name}</p>
            <p>{journalist.image}</p>
            <p>Articles: {articleNodes}</p>
            <button onClick={handleDelete}> Delete Journalist </button>
            <Link to={editUrl}><button type="button"> Edit Journalist </button></Link>
        </div>
    )

}

export default JournalistDetail;
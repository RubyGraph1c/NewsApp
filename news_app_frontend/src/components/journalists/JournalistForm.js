import React, { useState, useEffect } from 'react';
// import ImageUploader from 'react-images-upload';

const JournalistForm = ({ journalist, articles, onCreate, onUpdate }) => {

    const [stateJournalist, setStateJournalist] = useState(
        {
            name: "",
            articles: null,
            image: ""

        }
    )

    const handleChange = function (event) {
        let propertyName = event.target.name;
        let copiedJournalist = { ...stateJournalist }
        copiedJournalist[propertyName] = event.target.value;
        setStateJournalist(copiedJournalist)
    }

    const handleArticle = function(event){
        const index = parseInt(event.target.value)
        const selectedArticle = articles[index]
        let copiedJournalist = {...stateJournalist};
        copiedJournalist['article'] = selectedArticle
        setStateJournalist(copiedJournalist)
    }

    const handleSubmit = function (event) {
        event.preventDefault();
        if (stateJournalist.id) {
            onUpdate(stateJournalist)
        } else {
            onCreate(stateJournalist);
        }
    }


    useEffect(() => {
        if (journalist) {
            let copiedJournalist = { ...journalist }
            setStateJournalist(copiedJournalist)
        }
    }, [journalist])

    let heading = "";

    if (!journalist) {
        heading = "Add Journalist"
    } else {
        heading = "Edit " + journalist.name;
    }

    return (
        <>
            <h3>{heading}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="name" name="name" onChange={handleChange} value={stateJournalist.name} />
                <button type="submit">Save</button>
            </form>
        </>
    )
}

export default JournalistForm;
import React, { useState, useEffect } from 'react';
// import ImageUploader from 'react-images-upload';

const ArticleForm = ({ article, journalists, categories, locations, onCreate, onUpdate }) => {

    const [stateArticle, setStateArticle] = useState(
        {
            headline: "",
            summary: "",
            fullStory: "",
            journalist: null,
            category: null,
            location: null,
            date: "",
            viewCount: 0,
            image: ""

        }
    )

    const handleChange = function (event) {
        let propertyName = event.target.name;
        let copiedArticle = { ...stateArticle }
        copiedArticle[propertyName] = event.target.value;
        setStateArticle(copiedArticle)
    }

    const handleJournalist = function (event) {
        const index = parseInt(event.target.value)
        const selectedJournalist = journalists[index]
        let copiedArticle = { ...stateArticle };
        copiedArticle['journalist'] = selectedJournalist
        setStateArticle(copiedArticle)
    }

    const handleCategory = function (event) {
        const index = parseInt(event.target.value)
        const selectedCategory = categories[index]
        let copiedArticle = { ...stateArticle };
        copiedArticle['category'] = selectedCategory
        setStateArticle(copiedArticle)
    }

    const handleLocation = function (event) {
        const index = parseInt(event.target.value)
        const selectedLocation = locations[index]
        let copiedArticle = { ...stateArticle };
        copiedArticle['location'] = selectedLocation
        setStateArticle(copiedArticle)
    }


    const handleSubmit = function (event) {
        event.preventDefault();
        if (stateArticle.id) {
            onUpdate(stateArticle)
        } else {
            onCreate(stateArticle);
        }
    }

    const findJournalistIndex = function () {
        if (article) {
            return journalists.findIndex(journalist => article.journalist.id === journalist.id)
        } else {
            return null;
        }
    }

    const findCategoryIndex = function () {
        if (article) {
            return categories.findIndex(category => article.category.id === category.id)
        } else {
            return null;
        }
    }

    const findLocationIndex = function () {
        if (article) {
            return locations.findIndex(location => article.location.id === location.id)
        } else {
            return null;
        }
    }

    useEffect(() => {
        if (article) {
            let copiedArticle = { ...article }
            setStateArticle(copiedArticle)
        }
    }, [article])

    const journalistOptions = journalists.map((journalist, index) => {
        return <option key={index} value={index}>{journalist.name}</option>
    })

    const categoryOptions = categories.map((category, index) => {
        return <option key={index} value={index}>{category.type}</option>
    })

    const locationOptions = locations.map((location, index) => {
        return <option key={index} value={index}>{location.name}</option>
    })


    let heading = "";

    if (!article) {
        heading = "Create Article"
    } else {
        heading = "Edit " + article.headline;
    }

    if (!journalists.length === 0) {
        return <p>Loading...</p>
    }

    if (!categories.length === 0) {
        return <p>Loading...</p>
    }

    if (!locations.length === 0) {
        return <p>Loading...</p>
    }

    return (
        <>
            <h3>{heading}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Headline" name="headline" onChange={handleChange} value={stateArticle.headline} />
                <input type="text" placeholder="Summary" name="summary" onChange={handleChange} value={stateArticle.summary} />
                <input type="text" placeholder="Full Story" name="fullStory" onChange={handleChange} value={stateArticle.fullStory}/>
                {/* <input type="text" placeholder="Date" name="date" onChange={handleChange} value={stateArticle.date}/>
                <input type="int" placeholder="Views" name="views" onChange={handleChange} value={stateArticle.views}/>
                <input type="text" placeholder="Image" name="image" onChange={handleChange} value={stateArticle.image}/> */}
                <select name="journalist" onChange={handleJournalist} defaultValue={findJournalistIndex() || 'select-journalist'}>
                    <option disabled value='select-journalist'>Select a journalist</option>
                    {journalistOptions}
                </select>

                <select name="category" onChange={handleCategory} defaultValue={findCategoryIndex() || 'select-category'}>
                    <option disabled value='select-category'>Select a category</option>
                    {categoryOptions}
                </select>

                <select name="location" onChange={handleLocation} defaultValue={findLocationIndex() || 'select-location'}>
                    <option disabled value='select-location'>Select a location</option>
                    {locationOptions}
                </select>

                <button type="submit">Save</button>
            </form>
        </>
    )
}

export default ArticleForm;


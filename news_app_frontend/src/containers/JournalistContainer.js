import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import JournalistList from '../components/journalists/JournalistList';
import JournalistDetail from '../components/journalists/JournalistDetail';
import JournalistForm from '../components/journalists/JournalistForm';
import Request from '../helpers/request';

const JournalistContainer = () => {

    const [journalists, setJournalists] = useState([]);

    const requestAll = function () {
        const request = new Request();
        const journalistPromise = request.get('/api/journalists')

        Promise.all([journalistPromise])
            .then((data) => {
                setJournalists(data[0]);
            })
    }

    useEffect(() => {
        requestAll()
    }, [])

    const findJournalistById = function (id) {
        return journalists.find((journalist) => {
            return journalist.id === parseInt(id);
        })
    }

    const handleDelete = function (id) {
        const request = new Request();
        const url = "/api/journalists/" + id
        request.delete(url)
            .then(() => window.location = "api/journalists")
    }

    const handlePost = function (journalist) {
        const request = new Request();
        request.post("/api/journalists", journalist)
            .then(() => window.location = '/journalists')
    }

    const handleUpdate = function (journalist) {
        const request = new Request();
        request.patch('/api/journalists/' + journalist.id, journalist)
            .then(() => {
                window.location = '/journalists/' + journalist.id
            })
    }


    if (!journalists) {
        return null
    }
    return (
        <>

            <Switch>

                <Route exact path='/journalists/new' render={() => {
                    return <JournalistForm journalists={journalists} onCreate={handlePost} />
                }} />

                <Route exact path="/journalists/:id/edit" render={(props) => {
                    const id = props.match.params.id;
                    const journalist = findJournalistById(id);
                    return <JournalistForm journalist={journalist} journalists={journalists} onUpdate={handleUpdate}/>
                }} />


                <Route exact path="/journalists/:id" render={(props) => {
                    const id = props.match.params.id;
                    const journalist = findJournalistById(id);
                    return <JournalistDetail journalist={journalist}
                        onDelete={handleDelete}
                        onUpdate={handleUpdate}
                    />
                }} />


                <Route render={() => {
                    // return <h1>I am journalist container</h1>
                    return <JournalistList journalists={journalists} />
                }} />

            </Switch>

        </>
    )
}

export default JournalistContainer;
import React, { useState } from 'react';
import axios from 'axios';

const AddNewPost = (props) => {
    const [info, setInfo] = useState({
        title: "",
        description: "",
        timetomaster: null,
        timespent: null,
        source: null,
        startlearningdate: null,
        inprogress: null,
        finishlearningdate: null,
    });

    const handleChanges = (event) => {
        setInfo({ ...info, [event.target.name]: event.target.value });
    }

    const submit = async () => {
        console.log(info)
        await axios.post('/api/', info)
    }

    return (
        <div>
            <h2>Add new</h2>
            <form>
                <input type="text" placeholder="Title" name="title" value={info.title} onChange={handleChanges} />
                <br />
                <input type="text" placeholder="Description" name="description" value={info.description} onChange={handleChanges} />
                <br />
                <input type="date" placeholder="Startlearningdate" name="startlearningdate" value={info.description} onChange={handleChanges} />
                <br />
                Inprogress
                <br />
                <label htmlFor="inprogressYes">yes</label>
                <input type="radio" value="1" name="inprogressYes" />
                <label htmlFor="inprogressNo">no</label>
                <input type="radio" value="0" name="inprogressNo" />
                <br />
                <input type="date" placeholder="Finishlearningdate" name="finishlearningdate" value={info.description} onChange={handleChanges} />
                <br /><br />
                <button type="button" onClick={submit}>Add new</button>
            </form>
        </div>
    )
}

export default AddNewPost
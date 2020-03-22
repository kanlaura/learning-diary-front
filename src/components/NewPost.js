import React, { useState } from 'react';
import moment from 'moment';
import { Paper } from '@material-ui/core';
import { addPost } from '../restService';

const AddNewPost = () => {
    const [info, setInfo] = useState({
        title: "",
        description: "",
        timetomaster: 0,
        source: "",
        startlearningdate: moment(new Date()).format('YYYY-MM-DD'),
        inprogress: 0,
        finishlearningdate: moment(new Date()).format('YYYY-MM-DD'),
        timespent: 0
    });

    const handleChanges = (event) => {
        setInfo({ ...info, [event.target.name]: event.target.value });
    }

    const handleRadio = (event) => {
        setInfo({ ...info, inprogress: event.target.value });
    }

    const submit = async () => {
        console.log(info)
        let newPost = addPost(info)
        return newPost
    }

    return (
        <Paper elevation={3} className="newPost">
            <h2>Add new</h2>
            <form className="inputBox">
                <input type="text" placeholder="Title" name="title" value={info.title} onChange={handleChanges} />
                <input type="text" placeholder="Description" name="description" value={info.description} onChange={handleChanges} />
                <input type="date" placeholder="Startlearningdate" name="startlearningdate" value={info.startlearningdate} onChange={handleChanges} />
                <label htmlFor="timetomaster">Estimated working time</label>
                <input type="number" name="timetomaster" value={info.timetomaster} onChange={handleChanges} />
                <input type="text" placeholder="Source" name="source" value={info.source} onChange={handleChanges} />
                <table>
                    <tr>
                        <td>Inprogress </td>
                        <td>
                            <input type="radio" value="1" className="inprogress" onClick={handleRadio} />
                        </td>
                    </tr>
                    <tr>
                        <td>finished</td>
                        <td>
                            <input type="radio" value="0" className="inprogress" onClick={handleRadio} />
                        </td>
                    </tr>
                </table>
                <input type="date" placeholder="Finishlearningdate" name="finishlearningdate" value={info.finishlearningdate} onChange={handleChanges} />
                <br /><br />
                <button type="button" onClick={submit}>Add new</button>
            </form>
        </Paper>
    )
}

export default AddNewPost
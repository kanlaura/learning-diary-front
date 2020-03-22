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
        inprogress: 1,
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
        setInfo({
            title: "",
            description: "",
            timetomaster: 0,
            source: "",
            startlearningdate: moment(new Date()).format('YYYY-MM-DD'),
            inprogress: 1,
            finishlearningdate: moment(new Date()).format('YYYY-MM-DD'),
            timespent: 0
        })
    }

    let finished = parseInt(info.inprogress) ? null : <span><label htmlFor="finishlearningdate">Finished date</label><br /><input type="date" placeholder="Finishlearningdate" name="finishlearningdate" value={info.finishlearningdate} onChange={handleChanges} /></span>

    return (
        <Paper elevation={3} className="newPost">
            <h2>Add new</h2>
            <form className="inputBox">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={info.title} onChange={handleChanges} />
                <label htmlFor="description">Description</label>
                <textarea type="text" name="description" value={info.description} onChange={handleChanges} />
                <hr />
                <label htmlFor="inprogress">Status</label>
                <table>
                    <tbody>
                        <tr>
                            <td>Started</td>
                            <td>
                                <input type="radio" value="1" name="inprogress" className="inprogress" onClick={handleRadio} />
                            </td>
                        </tr>
                        <tr>
                            <td>Finished</td>
                            <td>
                                <input type="radio" value="0" name="inprogress" className="inprogress" onClick={handleRadio} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <label htmlFor="startlearningdate">Started date</label>
                <input type="date" name="startlearningdate" value={info.startlearningdate} onChange={handleChanges} />
                {finished}
                <hr />
                <label htmlFor="timetomaster">Estimated working time</label>
                <input type="number" name="timetomaster" value={info.timetomaster} onChange={handleChanges} />
                <hr />
                <label htmlFor="source">Web source</label>
                <input type="text" placeholder="Source" name="source" value={info.source} onChange={handleChanges} />
                <br />
                <button type="button" onClick={submit}>Add new</button>
            </form>
        </Paper>
    )
}

export default AddNewPost
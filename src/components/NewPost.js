import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';


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
        setInfo({...info, [event.target.name]: event.target.value });
    }

    const handleRadio = (event) => {
        setInfo({...info, inprogress: event.target.value });
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
                <input type="date" placeholder="Startlearningdate" name="startlearningdate" value={info.startlearningdate} onChange={handleChanges} />
                <br />
                <label htmlFor="timetomaster">Estimated working time</label>
                <br/>
                <input type="number" name="timetomaster" value={info.timetomaster} onChange={handleChanges}/>
                <br/>
                <input type="text" placeholder="Source" name="source" value={info.source} onChange={handleChanges} />
                <br />
                Inprogress
                <br />
                <label htmlFor="inprogressYes">yes</label>
                <input type="radio" value="1" name="inprogress" onClick={handleRadio}/>
                <label htmlFor="inprogressNo">no</label>
                <input type="radio" value="0" name="inprogress" onClick={handleRadio}/>
                <br />
                <input type="date" placeholder="Finishlearningdate" name="finishlearningdate" value={info.finishlearningdate} onChange={handleChanges} />
                <br /><br />
                <button type="button" onClick={submit}>Add new</button> 
            </form>
        </div>
    )
}

export default AddNewPost
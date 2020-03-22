import React, { Component } from 'react';
import moment from 'moment';
import { Paper } from '@material-ui/core';

export default class Post extends Component {
    state = ({
        id: this.props.post.id,
        title: this.props.post.title,
        description: this.props.post.description,
        timetomaster: this.props.post.timetomaster,
        source: this.props.post.source,
        startlearningdate: moment(this.props.post.startlearningdate).format('YYYY-MM-DD'),
        inprogress: this.props.post.inprogress,
        finishlearningdate: moment(this.props.post.finishlearningdate || new Date()).format('YYYY-MM-DD'),
        timespent: this.props.post.timespent,
        display: false
    })

    handleChanges = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.value });
    }

    showNot = () => {
        this.state.display ? this.setState({ ...this.state, display: false }) : this.setState({ ...this.state, display: true })
    }

    handleRadio = (event) => {
        this.setState({ ...this.state, inprogress: event.target.value });
    }

    editRow = () => {
        this.showNot();
    }

    deleteRow = () => {
        this.props.delPost(this.props.post.id)
    }

    edit = async () => {
        await this.props.edPost(this.state)
        this.showNot();
    }

    
    render() {
        const finished = parseInt(this.state.inprogress) ? null : <span><label htmlFor="finishlearningdate">Finished date</label><br/><input type="date" placeholder="Finishlearningdate" name="finishlearningdate" value={this.state.finishlearningdate} onChange={this.handleChanges} /></span>
        
        const showEdit = this.state.display ? <Paper className="editPost" elevation={3}><form>
            <h4>Edit post</h4>
            <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChanges} />
            <hr />
            <label htmlFor="descrition">Descrition</label>
            <textarea type="text" placeholder="Description" name="description" value={this.state.description} onChange={this.handleChanges} />
            <hr />
            <label htmlFor="inprogress">Status</label>
            <table>
                <tbody>
                    <tr>
                        <td>Inprogress </td>
                        <td>
                            <input type="radio" value="1" name="inprogress" className="inprogress" onChange={this.handleChanges} />
                        </td>
                    </tr>
                    <tr>
                        <td>finished</td>
                        <td>
                            <input type="radio" value="0" name="inprogress" className="inprogress" onChange={this.handleChanges} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <label htmlFor="startlearningdate">Started date</label>
            <input type="date" placeholder="Startlearningdate" name="startlearningdate" value={this.state.startlearningdate} onChange={this.handleChanges} />
            {finished} 
            <hr />
            <label htmlFor="timetomaster">Estimated working time</label>
            <input type="number" name="timetomaster" value={this.state.timetomaster} onChange={this.handleChanges} />
            <hr />
            <input type="text" placeholder="Source" name="source" value={this.state.source} onChange={this.handleChanges} />
            <hr />
            <br /><br />
            <button type="button" onClick={this.edit}>Edit post</button>
        </form></Paper> : null
        const { id, title, description, timetomaster, timespent, source, startlearningdate, inprogress, finishlearningdate } = this.props.post
        return (
            <Paper className="postBox">
                <div className="postContent">
                    <p className="Title"><b>{title}</b></p>
                    <br/>
                    <p><b>Started:</b> {moment(startlearningdate).format('DD.MM.YYYY')}</p>
                    <p><b>Finished:</b> {parseInt(inprogress) === 1 ? '-' : moment(finishlearningdate).format('DD.MM.YYYY')}</p>
                    <p><b>Planned hours:</b> {timetomaster}</p>
                    <p><b>Time spent:</b> {timespent}</p>
                    <p><b>Status:</b> {parseInt(inprogress) === 1 ? 'started' : 'finished'}</p>
                    <br />
                    <p className="Descrition">{description}</p>
                    <a href={`http://${source}`} target="blank">{source}</a>
                    <br/><br/>
                </div>
                <div className="postButtons">
                    <button onClick={this.deleteRow}>delete</button>
                    <button onClick={this.editRow}>edit</button>
                </div>
                {showEdit}
            </Paper>
        )
    }
}

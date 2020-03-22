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
        finishlearningdate: moment(this.props.post.finishlearningdate).format('YYYY-MM-DD'),
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
        const showEdit = this.state.display ? <Paper className="editPost" elevation={3}><form>
            <h4>Edit post</h4>
            <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChanges} />
            <br />
            <input type="text" placeholder="Description" name="description" value={this.state.description} onChange={this.handleChanges} />
            <br />
            <input type="date" placeholder="Startlearningdate" name="startlearningdate" value={this.state.startlearningdate} onChange={this.handleChanges} />
            <br />
            <label htmlFor="timetomaster">Estimated working time</label>
            <br />
            <input type="number" name="timetomaster" value={this.state.timetomaster} onChange={this.handleChanges} />
            <br />
            <input type="text" placeholder="Source" name="source" value={this.state.source} onChange={this.handleChanges} />
            <br />
             <table>
                    <tr>
                        <td>Inprogress </td>
                        <td>
                            <input type="radio" value="1" className="inprogress" onClick={this.handleRadio} />
                        </td>
                    </tr>
                    <tr>
                        <td>finished</td>
                        <td>
                            <input type="radio" value="0" className="inprogress" onClick={this.handleRadio} />
                        </td>
                    </tr>
                </table>
            <input type="date" placeholder="Finishlearningdate" name="finishlearningdate" value={this.state.finishlearningdate} onChange={this.handleChanges} />
            <br /><br />
            <button type="button" onClick={this.edit}>Edit post</button>
        </form></Paper> : null
        const { id, title, description, timetomaster, timespent, source, startlearningdate, inprogress, finishlearningdate } = this.props.post
        return (
            <Paper className="postBox">
                <div className="postContent">
                <p className="Title"><b>{id} {title}</b></p>
                <p>{description}</p>
                <a href={`http://${source}`}>{source}</a>
                <br/><br/>
                <p>Planned working hours: {timetomaster}</p>
                <p>started: {moment(startlearningdate).format('DD.MM.YYYY')}</p>
                <p>ended: {moment(finishlearningdate).format('DD.MM.YYYY')}</p>
                <p>time spent: {timespent}</p>
                <p>status: {inprogress == 1 ? 'inprogress' : 'finished'}</p>
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

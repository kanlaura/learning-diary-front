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
            <label htmlFor="inprogress">Inprogress</label>
            <br />
            <label htmlFor="inprogressYes">yes</label>
            <input type="radio" value="1" name="inprogress" onClick={this.handleRadio} />
            <label htmlFor="inprogressNo">no</label>
            <input type="radio" value="0" name="inprogress" onClick={this.handleRadio} />
            <br />
            <input type="date" placeholder="Finishlearningdate" name="finishlearningdate" value={this.state.finishlearningdate} onChange={this.handleChanges} />
            <br /><br />
            <button type="button" onClick={this.edit}>Edit post</button>
        </form></Paper> : null
        const { id, title, description, timetomaster, timespent, source, startlearningdate, inprogress, finishlearningdate } = this.props.post
        return (
            <Paper className="postBox">
                <div>
                <p className="Title"><b>{id} {title}</b></p>
                <p>{description}</p>
                <p>Planned working hours: {timetomaster}</p>
                <a href={`http://${source}`}>{source}</a>
                <p>{moment(startlearningdate).format('DD.MM.YYYY')}</p>
                <p>{moment(finishlearningdate).format('DD.MM.YYYY')}</p>
                <p>time spent: {timespent}</p>
                <p>{inprogress == 0 ? 'inprogress' : 'finnished'}</p>
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

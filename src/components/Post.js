import React, { Component } from 'react'

export default class Post extends Component {
    editRow = () => {
        console.log('edit this ' + this.props.post.id)
    }
    deleteRow = () => {
        this.props.deletePost(this.props.post.id)
    }

    render() {
        const { id, title, description, timetomaster, timespent, source, startlearningdate, inprogress } = this.props.post
        return (
            <div>
                <p>{id} {title} {description} {timetomaster} {timespent} {source} {startlearningdate} {inprogress} <button onClick={this.deleteRow}>X</button><button onClick={this.editRow}>edit</button></p>
            </div>
        )
    }
}

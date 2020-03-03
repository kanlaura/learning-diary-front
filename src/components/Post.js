import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        const {id, title, description, timetomaster, timespent, source, startlearningdate, inprogress} = this.props.post
        return (
            <div>
                <p>{id} {title} {description} {timetomaster} {timespent} {source} {startlearningdate} {inprogress}</p>
            </div>
        )
    }
}

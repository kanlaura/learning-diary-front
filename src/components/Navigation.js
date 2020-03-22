import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class Navigation extends Component {
    render() {
        return (
            <div className="naviClass">
                {/* <NavLink to="/">Home</NavLink> */}
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/new">Add New</NavLink>
            </div>
        )
    }
}

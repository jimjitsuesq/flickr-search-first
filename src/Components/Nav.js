import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

export default class Nav extends Component {
    
    state = {
        buttonText: ''
    }
    
    handleClick = e => {
        console.log(e.target.innerText)
        // e.preventDefault();
        this.setState({ buttonText: e.target.innerText }, () =>
        this.props.onClick(this.state.buttonText));
    }
    render () {
        return(
            <nav className="main-nav">
                <ul>
                    <li><NavLink to="/JiuJitsu" onClick={(e) => this.handleClick(e)}>Jiu Jitsu</NavLink></li>
                    <li><NavLink to="/wrestling" onClick={(e) => this.handleClick(e)}>Wrestling</NavLink></li>
                    <li><NavLink to="/mma" onClick={(e) => this.handleClick(e)}>MMA</NavLink></li>
                </ul>

            <Route path={'/:this.state.buttonText'} />
            </nav>
        )
    }
}
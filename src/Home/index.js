
import React, { Component } from 'react'
import MapRoute from '../pages/MapRoute'
import { NavLink } from 'react-router-dom'
export default class Home extends Component {
    render() {
        return (
            <>
                <header>
                    头部
                </header>
                <main>
                    <MapRoute route={this.props.route}></MapRoute>
                </main>
                <footer>
                    
                </footer>
            </>
        )
    }
}

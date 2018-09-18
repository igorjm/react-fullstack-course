import React, { Component } from 'react';
import './layout.css'

import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'

class Layout extends Component {
    
    state = {
        showNav: false
    }

    toggleSiveNav = (action) => {
        this.setState=({
            showNav:action
        })
    }
    
    render() {
        return (
            <div>
                <Header
                    showNav={this.state.showNav}
                    onHideNav={() => this.toggleSiveNav(false)}
                    onOpenNav={() => this.toggleSiveNav(true)}
                />
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default Layout;
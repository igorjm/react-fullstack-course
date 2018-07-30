import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom'

//COMPONENTS
import Home from './components/home'
import Posts from './components/posts'
import Profile from './components/profile'
import PostItem from './components/post_item'
import Life from './components/lifecycles'
import Conditional from './components/conditional'

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <NavLink to="/">Home</NavLink><br/>
                    <NavLink 
                        to="/posts"
                        activeStyle={{color:'red'}}
                        activeClassName="selected"
                    >Posts</NavLink><br/>
                    <NavLink to={{
                        pathname: '/profile',
                    }}>Profile</NavLink><br/>
                    <NavLink to="/life">Life</NavLink><br/>
                    <NavLink to="/conditional">Conditional</NavLink><br/>
                </header>
                <Switch>
                    <Route path='/posts/:id' component={PostItem}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/posts' component={Posts}/>
                    <Route path='/life' component={Life}/>
                    <Route path='/conditional' component={Conditional}/>
                    <Route path='/' exact component={Home}/>
                    <Route component={Posts} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
import React from 'react'
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './components/App'
import Nav from './components/Nav'
import BookmarkList from './components/BookmarkList'
import Auth from './components/Auth'
import NotFound from './components/NotFound'

const routing = (
    <Router>
        <div>
            <Nav />
            <Switch>
                <Route exact path='/bookmarks' component={BookmarkList} />
                <Route exact path='/auth/login' component={Auth} />
                <Route exact path='/' component={App} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
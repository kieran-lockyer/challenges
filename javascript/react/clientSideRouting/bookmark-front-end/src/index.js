import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './components/App';
import Bookmark from './components/Bookmark'
import BookmarkList from './components/BookmarkList'
import BookmarkForm from './components/BookmarkForm'
import BookmarkEdit from './components/BookmarkEdit'
import Nav from './components/Nav'
import NotFound from './components/NotFound'

const routing = (
    <Router>
        <div>
            <Nav />
            <Switch>
                <Route exact path='/bookmarks' component={BookmarkList} />
                <Route path='/bookmarks/new' component={BookmarkForm} />
                <Route exact path='/bookmarks/:id' component={Bookmark} />
                <Route path='/bookmarks/:id/edit' component={BookmarkEdit} />
                <Route path='/auth/register' component={UserRegister} />
                <Route path='/auth/login' component={UserLogin} />
                <Route path='/auth/logout' component={UserLogout} />
                <Route exact path='/' component={App} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
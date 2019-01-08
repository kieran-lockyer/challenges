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
                <Route path='/bookmarks/new' render={(props) => <BookmarkForm {...props} addBookmark={BookmarkList.addBookmark} />} />
                <Route exact path='/bookmarks/:id' component={Bookmark} />
                <Route path='/bookmarks/:id/edit' component={BookmarkEdit} />
                <Route exact path='/' component={App} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
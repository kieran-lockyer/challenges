import React, { Component } from 'react'
import Axios from 'axios'
import BookmarkForm from './BookmarkForm'

const bookmarkApi = 'http://localhost:3001/bookmarks'

class BookmarkList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarks: []
        };
    }

    addBookmark = (bookmark) => {
        Axios.post(bookmarkApi, bookmark).then(() => {
            const bookmarks = [...this.state.bookmarks, bookmark]
            this.setState({
                bookmarks
            })
        }).catch((err) => {
            console.error("OH NO!", err)
        })
    }

    componentDidMount() {
        Axios.get(bookmarkApi).then((res => {
            this.setState({
                bookmarks: res.data
            })
        }))
    }

    render() {
        return (
            <div className="container">
                <h1 className="center">Bookmark List</h1>
                {this.state.bookmarks.map((bookmark) =>
                    <div key={bookmark._id} className="collection">
                        <a href={bookmark.url} className="collection-item center">{bookmark.title}</a>
                    </div>
                )}
                <BookmarkForm addBookmark={this.addBookmark} />
            </div>
        )
    }
}

export default BookmarkList
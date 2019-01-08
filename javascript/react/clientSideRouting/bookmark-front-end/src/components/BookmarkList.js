import React, { Component } from 'react'
import Axios from 'axios'

const bookmarkApi = 'http://localhost:3001/bookmarks'

class BookmarkList extends Component {
    state = {
        bookmarks: []
    }

    addBookmark(bookmark) {
        this.setState({
            bookmarks: [...this.state.bookmarks, bookmark]
        })
    }

    componentDidMount() {
        Axios.get(bookmarkApi).then((res => {
            console.log(res.data)
            this.setState({
                bookmarks: res.data
            })
        }))
    }

    render() {
        return (
            <div>
                <h1>Bookmark List</h1>
                {this.state.bookmarks.map((bookmark) =>
                    <div key={bookmark._id}>
                        <a href={bookmark.url}>{bookmark.title}</a>
                        <br />
                    </div>
                )}
            </div>
        )
    }
}

export default BookmarkList
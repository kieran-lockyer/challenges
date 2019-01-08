import React, { Component } from 'react'
import Axios from 'axios'

const bookmarkApi = 'http://localhost:3001/bookmarks'

class BookmarkForm extends Component {
    state = {
        title: '',
        url: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        Axios.post(bookmarkApi, this.state).then((response) => {
            console.log('Added new bookmark')
            this.setState({
                title: '',
                url: ''
            })
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" onChange={this.handleChange} />
                    <label htmlFor="url">URL:</label>
                    <input type="text" id="url" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default BookmarkForm
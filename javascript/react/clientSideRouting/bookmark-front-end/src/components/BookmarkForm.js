import React, { Component } from 'react'

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
        this.props.addBookmark(this.state)
    }

    render() {
        return (
            <div>
                <h4 className="center">Enter a new bookmark</h4>
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
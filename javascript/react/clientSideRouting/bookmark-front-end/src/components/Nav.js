import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <nav className='nav-wrapper orange darken-3'>
            <div className="container">
                <Link to='/' className="brand-logo">BookmarkHub</Link>
                <ul className="right">
                    <li><Link to='/bookmarks'>Bookmarks</Link></li>
                    <li><Link to='/auth/login'>Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}
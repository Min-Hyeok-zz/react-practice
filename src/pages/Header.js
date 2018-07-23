import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render () {
        return(
            <React.Fragment>
                <div className="modal"></div>
                <div className="join">
                    <form action="" method="post" className="form">
                        <p>Create Your Account!</p>
                        <label><p>ID</p>
                            <input type="text" name="id" id="id" required/>
                        </label>
                        <label><p>Password</p>
                            <input type="password" name="pw" id="pw" required/>
                        </label>
                        <label><p>Confirm Password</p>
                            <input type="password" name="pw_re" id="pw_re" required/>
                        </label>
                        <label><p>Name</p>
                            <input type="text" name="name" id="name" required/>
                        </label>
                        <div>
                            <button type="submit" className="btn big default">Sign In</button>
                            <button type="button" className="btn big default join-close">Close</button>
                        </div>
                    </form>
                </div>
                <header id="header">
                    <nav>
                        <div className="menu-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ul>
                            <li><Link to="/" className="join-btn">Sign Up</Link></li>
                            <li><Link to="/">List</Link></li>
                        </ul>
                    </nav>
                </header>
                <aside id="aside">
                    <div className="menu-toggle active">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </aside>
            </React.Fragment>
        )
    }
}

export default Header
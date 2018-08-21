import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render () {
        return(
            <React.Fragment>
                <div className="modal"></div>
                <header id="header">
                    <nav>
                        <div className='menu'>
                            <div className="menu-toggle">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className='logo'><Link to='/'>LOGO</Link></div>
                        </div>
                        <ul>
                            <li><Link to="/signup" className="join-btn">Sign Up</Link></li>
                            <li><Link to="/signin" className='join-btn'>Sign In</Link></li>
                        </ul>
                    </nav>
                </header>
                <aside id="aside">

                </aside>
            </React.Fragment>
        )
    }
}

export default Header
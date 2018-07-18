import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render () {
        return(
            <React.Fragment>
                <header id="header">
                    <nav>
                        <div className="menu-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ul>
                            <li><Link to="/">게시판</Link></li>
                            <li><Link to="/">카테고리별</Link></li>
                            <li><Link to="/">조회순</Link></li>
                        </ul>
                    </nav>
                </header>
                <div id="aside">
                    <p>asd</p>
                </div>
            </React.Fragment>
        )
    }
}

export default Header
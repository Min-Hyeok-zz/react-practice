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
                        <label>
                            <input type="text" name="id" id="id" placeholder="아이디"/>
                        </label>
                        <label>
                            <input type="password" name="pw" id="pw" placeholder="비밀번호"/>
                        </label>
                        <label>
                            <input type="password" name="pw_re" id="pw_re" placeholder="비밀번호 확인"/>
                        </label>
                        <label>
                            <input type="text" name="name" id="name" placeholder="이름"/>
                        </label>
                        <label>
                            <button type="submit" className="btn big default">회원가입</button>
                        </label>
                    </form>
                    <div className="close">X</div>
                </div>
                <header id="header">
                    <nav>
                        <div className="menu-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ul>
                            <li><Link to="/join" className="join-btn">회원가입</Link></li>
                            <li><Link to="/">카테고리별</Link></li>
                            <li><Link to="/">조회순</Link></li>
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
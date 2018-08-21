import React, { Component } from 'react'

class SignIn extends Component {
    memberJoin = (e) => {
        e.preventDefault()
        const url = `http://localhost:4000/signin`
        const frm = e.target
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                id: frm.id.value,
                pw: frm.pw.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then(json => {
            console.log(json)
            if (json[0]) {
                alert('로그인 되었습니다.')
                this.props.history.push('/')
            } else {
                alert('아이디 또는 비밀번호가 일치하지 않습니다.')
            }
        })
    }
    render () {
        return (
            <React.Fragment>
                <div className="formGroup">
                    <form action="" method="post" className="form" onSubmit={this.memberJoin}>
                        <p>Create Your Account!</p>
                        <label><p>ID</p>
                            <input type="text" name="id" id="id" required/>
                        </label>
                        <label><p>Password</p>
                            <input type="password" name="pw" id="pw" required/>
                        </label>
                        <div>
                            <button type="submit" className="btn big default">Sign In</button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default SignIn
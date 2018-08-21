import React, { Component } from 'react'

class SignUp extends Component {
    memberJoin = (e) => {
        e.preventDefault()
        const url = `http://localhost:4000/signup`
        const frm = e.target
        if (frm.pw.value !== frm.pwre.value) {
            alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.')
            return false
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                id: frm.id.value,
                pw: frm.pw.value,
                name: frm.name.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then(json => {
            if (json[0]) {
                alert('중복된 아이디 입니다.')
            } else {
                alert('회원가입이 완료되었습니다.')
                this.props.history.push('/')
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
                        <label><p>Confirm Password</p>
                            <input type="password" name="pw_re" id="pwre" required/>
                        </label>
                        <label><p>Name</p>
                            <input type="text" name="name" id="name" required/>
                        </label>
                        <div>
                            <button type="submit" className="btn big default">Sign Up</button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default SignUp
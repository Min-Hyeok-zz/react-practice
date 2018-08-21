const _this = this

class member {
    constructor() {
        member.db = require('../dbConnect')
    }

    signUp(req,res) {
        const crypto = require('crypto')
        const id = req.body.id
        const pw = crypto.createHash('sha512').update(req.body.pw).digest('hex')
        const name = req.body.name
        const chk = `select id from member where id=?`
        const sql = `insert into member set id=?, pw=?, name=?, profile='default.jpg', date=now(), change_date=now(), level=1`
        member.db.query(chk, [id], (err,results) => {
            res.json(results)
            if (!results[0]) member.db.query(sql,[id,pw,name])
        })
    }
    
    signIn(req,res) {
        const crypto = require('crypto')
        const id = req.body.id
        const pw = crypto.createHash('sha512').update(req.body.pw).digest('hex')
        const sql = `select * from member where id=? and pw=?`
        member.db.query(sql, [id,pw], (err,results) => {
            console.log(results)
            res.json(results)
        })
    }


}

module.exports = new member()
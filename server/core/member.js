const _this = this

class member {
    constructor() {
        member.db = require('../dbConnect')
    }

    test(req,res) {
        const sql = `select * from member`
        const a = member.db.query(sql, (err, results) => {
            res.json(results)
        })
    }


}

module.exports = new member()
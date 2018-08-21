class board {
    
    constructor() { board.db = require('../dbConnect') }

    asd (req,res) {
        res.send('asd')
    }
}

module.exports = new board()
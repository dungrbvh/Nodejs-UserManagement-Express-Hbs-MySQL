const connection = require('./connection');

exports.viewall = async (req, res) => {
    try {
        const query1 = 'SELECT * FROM diet WHERE user_id=? ORDER BY add_date DESC';
        const query2 = 'SELECT * FROM body_records WHERE user_id=? ORDER BY date DESC';
        const user_id = parseInt(req.params.id);
        const result1 = await executeQuery(query1,user_id);
        console.log(result1)
        const result2 = await executeQuery(query2,user_id);
        console.log(result2);
        res.render('mypage/top', {result1, result2,user_id})
    }
    catch (err) {
        console.log(err)
        res.status(500).json({error: err.message})
    }
}

function executeQuery(query, user_id) {
    return new Promise((resolve, reject) => {
      connection.query(query, [user_id],(err, results) => {
        if (err) { 
            console.log(err);
            reject(err);
        }
        else resolve(results);
      });
    });
  }
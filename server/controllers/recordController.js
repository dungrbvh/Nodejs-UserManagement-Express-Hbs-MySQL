
const connection = require('./connection');


exports.form = (req, res) => {
    const UID = req.params.user_id;
    res.render('record/add-record', {UID});
}

exports.create = (req, res) => {
    const {health_rate, weight} = req.body;
    const currentDate = new Date();
    const user_id = parseInt(req.params.user_id); 
    // Activity insert 
    connection.query('INSERT INTO body_records (user_id, health_rate, weight,  date) VALUES (?, ?,?,?)', [user_id, health_rate, weight, currentDate], (err, rows) =>{
        if(!err){
            res.redirect(`/personal/${user_id}`)
        } else {
            console.log(err)
        }
        console.log('Body records: \n', rows);
        
    })
}
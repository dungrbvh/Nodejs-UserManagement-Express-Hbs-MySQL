const connection = require('./connection');

exports.viewall = (req, res) => {
    connection.query('SELECT * FROM diary WHERE user_id=?',[req.params.id] , (err, rows) =>{
        if (!err) {
            res.render('diary/view-diary', {rows});
        } else {
            console.log(err)
        }
        console.log('Diaries: \n', rows)
    })
}

exports.form = (req, res) => {
    const UID = req.params.user_id;
    res.render('diary/add-diary', {UID});
}

exports.create = (req, res) => {
    const {text} = req.body;
    const currentDate = new Date();
    const user_id = parseInt(req.params.user_id); 
    // Activity insert 
    connection.query('INSERT INTO diary (user_id, text, add_date) VALUES (?, ?,?)', [user_id, text, currentDate], (err, rows) =>{
        if(!err){
            res.redirect(`/personal/${user_id}`)
        } else {
            console.log(err)
        }
        console.log('Diaries: \n', rows);
        
    })
}
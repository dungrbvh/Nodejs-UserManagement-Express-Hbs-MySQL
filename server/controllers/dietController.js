const connection = require('./connection');

exports.view = (req, res) => {
    connection.query('SELECT * FROM diet', (err, rows) => {
        if(!err) {
            res.render('home', {rows});
        } else {
            console.log(err);
        }
        console.log('Diets: \n', rows)
    })    
}

exports.form = (req, res) => {
    const UID = req.params.user_id;
    res.render('diet/add-diet', {UID});
}

// Add new diet
exports.create = (req, res) => {
    const {type, food_name} = req.body;
    const currentDate = new Date();
    const user_id = parseInt(req.params.user_id); 
    // Activity insert 
    connection.query('INSERT INTO diet (user_id, type, food_name, add_date) VALUES (?, ?, ?,?)', [user_id, type, food_name, currentDate], (err, rows) =>{
        if(!err){
            connection.query('SELECT * FROM diet WHERE user_id=? ORDER BY add_date DESC', [user_id], (err,rows)=>{
                if (!err) {
                    res.render('diet/view-diet', {rows, user_id: user_id});
                } else {
                    console.log(err)
                }
                console.log('Diets: \n', rows)
            })
        } else {
            console.log(err)
        }
        console.log('Diets: \n', rows);
        
    })
}

exports.update = (req, res) => {
    const {type, comments} = req.body;
    connection.query('UPDATE diet SET type=?, comments=? WHERE user_id=?',[type, comments, req.params.id], (err, rows)=>{
    if(!err) {
        connection.query('SELECT * FROM diet WHERE user_id=?', [req.params.id], (err,rows)=>{
            if(!err) {
                res.render('edit-diet', {rows})
            } else {
                console.log(err);
            }
            console.log('Activities: \n', rows);
        })
        
    } else {
        console.log(err);
    }
    console.log('Activities: \n', rows)
    });
}

exports.delete = (req, res) => {
    connection.query('DELETE FROM diet WHERE diet_id=?', [req.params.id], (err, rows)=>{
        if(!err) {
            console.log('Diets deleted');
        }
        else {
            console.log(err);
        }
        console.log('Data', rows)
    })
}

exports.viewall = (req, res) => {
    connection.query('SELECT * FROM diet WHERE user_id=?', [req.params.id], (err, rows) =>{
        if(!err){
            const user_id = rows[0].user_id
            res.render('diet/view-diet', {rows, user_id: user_id});
        } else {
            console.log(err)
        }
        console.log('Diets', rows);
    })
}
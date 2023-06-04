const connection = require('./connection');

exports.view = (req, res) => {
    connection.query('SELECT * FROM activity', (err, rows) => {
        if(!err) {
            res.render('home', {rows});
        } else {
            console.log(err);
        }
        console.log('Activities: \n', rows)
    })    
}

exports.form = (req, res) => {
    const UID = req.params.user_id;
    res.render('activity/add-activity', {UID});
}

// Add new activity
exports.create = (req, res) => {
    const {duration, activity} = req.body;
    const currentDate = new Date();
    const user_id = parseInt(req.params.user_id); 
    // Activity insert 
    connection.query('INSERT INTO activity (user_id,duration, activity, add_date) VALUES (?,?,?,?)', [user_id, duration, activity,currentDate], (err, rows) =>{
        if(!err){
            res.redirect(`/personal/${user_id}`)
        } else {
            console.log(err)
        }
        console.log('Activities: \n', rows);
        
    })
}

exports.update = (req, res) => {
    const {type, comments} = req.body;
    connection.query('UPDATE activity SET type=?, comments=? WHERE user_id=?',[type, comments, req.params.id], (err, rows)=>{
    if(!err) {
        connection.query('SELECT * FROM activity WHERE user_id=?', [req.params.id], (err,rows)=>{
            if(!err) {
                res.render('edit-activity', {rows})
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
    connection.query('DELETE FROM activity WHERE activity_id=?', [req.params.id], (err, rows)=>{
        if(!err) {
            console.log('Activity deleted');
        }
        else {
            console.log(err);
        }
        console.log('Data', rows)
    })
}

exports.viewall = (req, res) => {
    connection.query('SELECT * FROM activity WHERE user_id=?', [req.params.id], (err, rows) =>{
        if(!err){
            res.render('view-user', {rows});
        } else {
            console.log(err)
        }
        console.log('Activities', rows);
    })
}
const connection = require('./connection');

exports.viewall = (req, res) => {
    connection.query('SELECT * FROM public_info', (err, rows) =>{
        if (!err) {
            res.render('info/view-info', {rows});
        } else {
            console.log(err)
        }
        console.log('Public info: \n', rows)
    })
}

exports.create = (req, res) => {
    const {description } = req.body;
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; 
    const day = currentDate.getDate();
    const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
    connection.query('INSERT INTO public_info SET description=? AND add_date=?', [description, formattedDate], (err,rows) =>{
        if (!err){
            res.render('add-info', {alert: 'Info added'});
        } else {
            console.log(err)
        }
        console.log('Data \n', rows)
    }) 
}

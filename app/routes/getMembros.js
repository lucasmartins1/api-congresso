var bd = require('../database/database');

module.exports = function(app){
    
    app.get('/getMembros', function(req,res){
        
        bd.query('select * from membro', function(err, result){
            if(err == null){
                res.send(result);
            }
            else{
                res.send("Ocorreu um erro");
            }
        });
    });

}
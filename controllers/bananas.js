var BananasController = module.exports = {
    index: function( req, res, next ) {
        console.log('index');
    },

    show: function( req, res, next ) {
        console.log('show');
    },

    peel: function(req, res, next){
    	res.send('Hello, Peel');
    }
};
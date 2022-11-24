var express = require('express');
const flash = require('express-flash');
var router = express.Router();

var database = require('../database');

/* GET home page. */
router.get('/', function (req, res, next) {
    // console.log(req,'REQUEST')
    res.render('index', { title: 'Express', session: req.session, message: req.flash('message') });
});

router.post('/login', function (request, response, next) {

    var user_email_address = request.body.user_email_address;

    var user_password = request.body.user_password;

    if (user_email_address && user_password) {
        query = `
        SELECT * FROM user_details 
        WHERE user_email = "${user_email_address}"
        `;

        database.query(query, function (error, data) {

            if (data.length > 0) {
                for (var count = 0; count < data.length; count++) {
                    if (data[count].user_password == user_password) {
                        request.session.user_name = data[count].user_name;
                        request.session.user_email = data[count].user_email;
                        request.session.user_subscription = data[count].user_subscription;

                        response.redirect("/");
                    }
                    else {
                        response.send('Incorrect Password');
                    }
                }
            }
            else {
                response.send('Incorrect Email Address');
            }
            response.end();
        });
    }
    else {
        response.send('Please Enter Email Address and Password Details');
        response.end();
    }

});

router.get('/logout', function (request, response, next) {

    request.session.destroy();

    response.redirect("/");

});

module.exports = router;

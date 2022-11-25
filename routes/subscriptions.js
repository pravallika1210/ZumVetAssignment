var express = require('express');
var router = express.Router();

var database = require('../database');

router.get('/listAll', function (request, response, next) {
    subscriptions = [
        {
            "id": 1,
            "name": "ZumCare",
            "cost": 10
        },
        {
            "id": 2,
            "name": "ZumCare+",
            "cost": 20
        }
    ]

    response.render('getSubscription', { title: 'Express', data: subscriptions, session: request.session, message: request.flash('message') });
});

router.post('/purchase', function (request, response) {
    console.log(request.body, 'Body')
    query = `UPDATE user_details SET user_subscription = "${request.body.subscription}" WHERE user_email = "${request.body.email}";`

    database.query(query, function (error, data) {
        console.log(data, 'DB data')
        if (error) {
            response.send('Sorry! We are unable to get this subscription for you.')
        } else {
            request.flash('message', `Hooray! You have purchased ${request.body.subscription} subscription successfully :)`);
            response.render('index', { title: 'Express', session: { "user_subscription": request.body.subscription, "user_email": request.body.email, "user_name": request.body.name }, message: request.flash('message') });
        }
    });
});

router.post('/cancel', function (request, response) {
    query = `UPDATE user_details SET user_subscription = "" WHERE user_email = "${request.body.email}";`

    database.query(query, function (error, data) {
        console.log(data, 'DB data')
        if (error) {
            response.send('Sorry! We are unable to get this cancelled for you.')
        } else {
            request.session.user_subscription = ""
            request.flash('message', `You have cancelled your ${request.body.subscription} subscription :(`);
            response.render('index', { title: 'Express', session: { "user_subscription": "", "user_email": request.body.email, "user_name": request.body.name }, message: request.flash('message') });

        }
    });
});

module.exports = router;

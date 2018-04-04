var express = require("express");
var router = express.Router();
var translate = require("google-translate-api");
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

router.get("/", function (req, res, next) {
    var natural_language_understanding = new NaturalLanguageUnderstandingV1({
        'username': 'dd044412-4020-4690-ad31-bca738e01c67',
        'password': '2Dr2M5vSnQzS',
        'version': '2018-03-16'
    });

    var parameters = {
        'text': 'Leonardo DiCaprio won Best Actor in a Leading Role for his performance.',
        'features': {
            'categories': {}
        }
    };

    natural_language_understanding.analyze(parameters, function (err, response) {
        if (err)
            console.log('error:', err);
        else
            console.log(JSON.stringify(response, null, 2));
    });
    res.send("hi");
});

module.exports = router;

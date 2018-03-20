var express = require("express");
var router = express.Router();
var translate = require("google-translate-api");

/* GET users listing. */
router.get("/", function(req, res, next) {
  translate("நீங்கள் தந்த வாய்ப்புக்கு நன்றி", { to: "en" })
    .then(res => {
      console.log(res.text);
      //=> I speak English
      console.log(res.from.language.iso);
      //=> nl
    })
    .catch(err => {
      console.error(err);
    });
  res.send("respond with a resource");
});

module.exports = router;

var express = require("express");
var router = express.Router();
var translate = require("google-translate-api");

router.get("/", function(req, res, next) {
  translate("காவிரி மேலாண்மை வாரியத்தையும், காவிரி நதிநீர் முறைப்படுத்தும் குழுவையும் ஆறு வாரங்களில் அமைக்க வேண்டும் என்று உச்ச நீதிமன்றம் தீர்ப்பு வழங்கியது. ஆறு வாரம் ஆனபிறகும் காவிரி மேலாண்மை வாரியமும், முறைப்படுத்தும் குழுவும் அமைக்கப்படாத சூழ்நிலையில், அதனை வலயுறுத்தி தமிழகம் முழுவதும் அதிமுக சார்பில் வருவாய் மாவட்டங்களில் உண்ணாவிரதப் போராட்டம் நடைபெற்றது.", { to: "en" })
    .then(resp => {
      console.log(resp.text);
      //=> I speak English
      console.log(resp.from.language.iso);
      res.io.emit("socketToMe", resp.text);
      res.send("respond with a resource");
      //=> nl
    })
    .catch(err => {
      console.error(err);
    });
});

module.exports = router;

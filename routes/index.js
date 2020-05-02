const path = require('path');
const router = require('express').Router();


//router for html routes
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
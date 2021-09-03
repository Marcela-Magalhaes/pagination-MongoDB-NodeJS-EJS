const router = require('express').Router();

// Routes

router.get('/', (req, res) => {
    res.send('Express Pagination');
});

module.exports = router;
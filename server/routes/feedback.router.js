const express = require('express');
const pool = require('../modules/pool')
const router = new express.Router();


router.post('/', (req, res) => {
    // setting incoming object property values to req.body
    const { feeling, understanding, support, comments } = req.body;
    console.log('req body is', req.body);
    // getting ids and inserting into database 
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4) RETURNING id;`, [feeling, understanding, support, comments])
    // get id and return to client
    // destructing to find just id
    .then(({ rows: [{ id }]}) => {
        const responseBody = { feeling, understanding, support, comments, id };
        console.log(responseBody);
        res.send(responseBody);
    })
    .catch((err) => {
        console.log('error POSTing feedback', err)
        res.sendStatus(500);
    })
})

module.exports = router;
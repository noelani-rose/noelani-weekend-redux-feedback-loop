const express = require('express');
const pool = require('../modules/pool')
const router = new express.Router();

// I don't think I need this because I'm not displaying all?
// But I want to display most recent on the Review Page? 

// router.get('/', (req, res) => {
//     pool.query('SELECT * FROM "feedback";')

//     .then((res) => {
//         res.send(res.rows)
//     })
//     .catch((err) => {
//         console.log('error GETting feedback', err);
//         res.sendStatus(500);
//     })
// })

router.post('/', (req, res) => {
    const { feeling, understanding, support, comments } = req.body;
    console.log('req body is', req.body);
    // Always get the ID of the things after you insert them into the DB
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4) RETURNING id;`, [feeling, understanding, support, comments])
    // You then take that ID and return it to the client.
    // This syntax here is called "destructuring"
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
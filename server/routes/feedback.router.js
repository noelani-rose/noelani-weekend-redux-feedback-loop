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

// router.post('/', (req, res) => {
//     pool.query('')

//     .then((res) => {
//         res.send(res.rows) 
//     })
//     .catch((err) => {
//         console.log('error POSTing feedback', err)
//         res.sendStatus(500);
//     })
// })
import express from 'express'
import fetch from 'node-fetch'

const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log('coming a')
    return res.send({ success: true, data: 'users' });

})


export default router


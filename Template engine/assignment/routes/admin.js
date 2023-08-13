const express = require('express');
const path=require('path');
const router = express.Router();
const rootDir=require('../utils/path');

const products=[];

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir,'views','add-product.html'))
});

router.post('/add-product', (req, res, next) => {
  const {title}=req.body;
  products.push({title});
  res.redirect('/');
});

//module.exports = router;
exports.routes=router;
exports.products=products;
import express from "express";
import Product from "../models/Schema.js"
const router = express.Router();

const url = process.env.DATA ;
router.get('/fetch',async (req, res) => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      await Product.insertMany(data);
      res.send("Sucessfully Fetched");
    } catch(err) {
      res.status(500).send("Something Went Wrong");
    }
  });
  
router.get('fetch/products',async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch(err) {
      res.status(500).send("Something Went Wrong");
    }
  });

  export const dataRoute  = router;

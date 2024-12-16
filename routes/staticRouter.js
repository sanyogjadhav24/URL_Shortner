const express=require("express");
const URL=require("../models/url");
const router=express.Router();

router.get('/', async (req, res) => {
    try {
        const allurls = await URL.find({});
     
        return res.render('home', {
            urls: allurls,
        });
    } catch (err) {
        console.error("Error fetching URLs:", err);
        res.status(500).send("Internal Server Error");
    }
});


module.exports=router;
const express = require("express");
const router = express.Router();

const {sources} = require("../getData");
router.get("/", (req, res)=>{
    res.render("index", {sources});
});

router.get("/categories/:index", (req, res)=>{
    const { index } = req.params;
    console.log(sources[index])
    res.render("list_categories", {categories:sources[index].categories});
});

module.exports = router;
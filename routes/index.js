var express = require('express');
var router = express.Router();


var todos=[];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { todos });
});

router.post("/crtodo",(req,res)=>{
  var name= req.body.name
  var desc= req.body.desc

  todos.push({name,desc});
  res.redirect("back")

})



router.get("/remove/:index",(req,res)=>{
  todos.splice(req.params.index,1)
  res.redirect("back")
})


module.exports = router;

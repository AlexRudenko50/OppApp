var express  = require("express");
var router   = express.Router();
var User     = require("../models/User");
var util     = require("../util");

// Index
router.get("/", util.isLoggedin, function(req, res){
  User.find({})
  .sort({email:1})
  .exec(function(err, users){

    if(err) return res.json(err);
    res.render("users/index", {users:users});
  });
});

// New
router.get("/new", function(req, res){
  var user = req.flash("user")[0] || {};
  var errors = req.flash("errors")[0] || {};
  res.render("users/new", { user:user, errors:errors });
});

// create
router.post("/", function(req, res){
  User.create(req.body, function(err, user){
    if(err){

      console.log(req.body);

      req.flash("user", req.body);
      req.flash("errors", util.parseError(err));
      console.log(util.parseError(err));

      return res.redirect("/users/new");
    }

    //res.redirect("/users");
    res.render("users/verification",{user:user});
  });
});

// show
router.get("/:email", util.isLoggedin, function(req, res){
  User.findOne({email:req.params.email}, function(err, user){
    if(err) {
      console.log(util.parseError(err));
      return res.json(err);
    }
    res.render("users/show", {user:user});
  });
});

// edit
router.get("/:email/edit", util.isLoggedin, checkPermission, function(req, res){
  var user = req.flash("user")[0];
  var errors = req.flash("errors")[0] || {};
  if(!user){
    User.findOne({email:req.params.email}, function(err, user){
      if(err) {
        console.log(util.parseError(err));
        return res.json(err);
      }
      res.render("users/edit", { email:req.params.email, user:user, errors:errors });
    });
  } else {
    res.render("users/edit", { email:req.params.email, user:user, errors:errors });
  }
});

// update
router.put("/:email", util.isLoggedin, checkPermission, function(req, res, next){
  User.findOne({email:req.params.email})
  .select({password:1})
  .exec(function(err, user){
    if(err) {
      console.log(util.parseError(err));
      return res.json(err);
    }

    // update user object
    user.originalPassword = user.password;
    user.password = req.body.newPassword? req.body.newPassword : user.password;
    for(var p in req.body){
      user[p] = req.body[p];
    }

    // save updated user
    user.save(function(err, user){
      if(err){
        req.flash("user", req.body);
        req.flash("errors", util.parseError(err));
        console.log(util.parseError(err));
        return res.redirect("/users/"+req.params.email+"/edit");
      }
      res.redirect("/users/"+req.params.email);
    });
  });
});

module.exports = router;

// private functions
function checkPermission(req, res, next){
  User.findOne({email:req.params.email}, function(err, user){
    if(err) return res.json(err);
    if(user.id != req.user.id) return util.noPermission(req, res);

    next();
  });
}

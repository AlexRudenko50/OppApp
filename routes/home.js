var express = require("express");
var router  = express.Router();
var passport= require("../config/passport");
var util     = require("../util");

// Home
router.get("/", function(req, res){
  res.render("home/welcome");
});
router.get("/about", function(req, res){
  res.render("home/about");
});

// Login
router.get("/login", function (req,res) {
  var email = req.flash("email")[0];
  var errors = req.flash("errors")[0] || {};
  res.render("home/login", {
    email:email,
    errors:errors
  });
});

// Post Login
router.post("/login",
  function(req,res,next){
    var errors = {};
    var isValid = true;

    if(!req.body.email){
      isValid = false;
      errors.email = "email is required!";
    }

    if(!req.body.password){
      isValid = false;
      errors.password = "Password is required!";
    }

    if(isValid){
      next();
    } else {
      console.log(util.parseError(errors));
      req.flash("errors",errors);
      res.redirect("/login");
    }
  },

  passport.authenticate("local-login", {
    successRedirect : "/posts",
    failureRedirect : "/login"
  }

));

// Logout
router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;

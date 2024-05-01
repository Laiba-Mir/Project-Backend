
const User = require("../Models/User")

async function UserRegister(req, res) {
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);
  } 

module.exports = controller;
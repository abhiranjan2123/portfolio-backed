const Register = require("../model/registerModel");

// post request for creating users
const CreateUser = (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const user = new Register({
      username,
      email,
      phone,
      password,
    });

    user.save();

    res
      .status(201)
      .json({ success:true,username: user.username, email: user.email, phone: user.phone });
  } catch (err) {
    res.status(401).json({ data: err });
    
  }
};

module.exports = { CreateUser };

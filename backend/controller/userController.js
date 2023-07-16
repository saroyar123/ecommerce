const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// create user account in database
exports.createUser = async (req, res) => {
try {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "data not found",
    });
  }

  const validEmail = await User.findOne({ email: email });

  if (validEmail) {
    return res.status(400).json({
      success: false,
      message: "email already use",
    });
  }

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashPassword,
  });

  const token = jwt.sign(email, process.env.jwt_secret);

  res.status(201).json({
    success: true,
    user,
    token,
  });
} catch (error) {
  res.status(400).json({
    success:false,
    message:error
})
}
};

// methods for login the user
exports.userLogin = async (req, res) => {
try {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "user not found",
    });
  }

  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(400).json({
      success: false,
      message: "email does not match",
    });
  }

  const token = jwt.sign(email, process.env.jwt_secret);

  res.status(200).json({
    success: true,
    user,
    token,
  });
} catch (error) {
  res.status(400).json({
    success:false,
    message:error
})
}
};

exports.getUser = async (req, res) => {
  try {

    res.status(200).json({
      success: true,
      user:req.user,
    });
  } catch (error) {
    res.status(400).json({
      success:false,
      message:error
  })
  }
};

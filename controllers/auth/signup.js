const { Conflict } = require("http-errors");
const { User } = require("../../models");

const signup = async (req, res) => {
  const { name, email, password, userData } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict(`Email already exists`);
  }

  const newUser = new User({ name, email, userData });
  newUser.setPassword(password);
  await newUser.save();

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        name,
        email,
        userData,
      },
    },
  });
};
module.exports = signup;

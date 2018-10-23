const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require("bcryptjs");

const userSchema = new Schema({

  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },

  phonenumber1: { type: String, required: true },
  phonenumber2: { type: String, required: false },

  email: { type: String, unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"] },
  organization: { type: Number, default: 0, required: true }
})

userSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
}

userSchema.pre('save', function (next) {
  console.log(this.password);
  if (!this.password) {
    console.log('models/user.js =======NO PASSWORD PROVIDED=======')
    next();
  } else {
    console.log('models/user.js hashPassword in pre save');
    this.password = this.hashPassword(this.password)
    next();
  }
})

const User = mongoose.model("User", userSchema);

module.exports = User;
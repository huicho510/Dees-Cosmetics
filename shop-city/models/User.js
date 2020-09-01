import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
    dropDups: true,
  },
  password: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
  isAdmin: { type: Boolean, required: true, default: false },
});

const User = mongoose.model("User", userSchema);

export default User;

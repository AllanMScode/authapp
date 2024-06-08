import mongoose, { models, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// if we already have the model, then we just return the user, but if we don't have, then we'll just create a new model called user with the above userSchema
const User = models.User || mongoose.model("User", userSchema);

export default User;

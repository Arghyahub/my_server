import { model, Schema } from "mongoose";

const emailSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const EmailModel = model("Email", emailSchema);
export default EmailModel;

import mongoose, { Schema } from "mongoose";

const employee_schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: String,
  team: String,
  reporting_manager: String,
});

export const Employee =
  mongoose.models.employee || mongoose.model("employee", employee_schema);

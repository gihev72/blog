import { Schema, model, models } from "mongoose";

const AdminSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  refreshToken: {
    type: String,
  },
});

const Admin = models.Admin || model("Admin", AdminSchema);

export default Admin;

import mongoose, { Schema } from "mongoose";

const addressSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    houseNo: {
      type: String,
      required: true,
    },
    areaStreet: {
      type: String,
      required: true,
    },
    landmark: {
      type: String,
      required: true,
    },
    townCity: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    favourite: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Address = mongoose.model("AddressSchema", addressSchema);

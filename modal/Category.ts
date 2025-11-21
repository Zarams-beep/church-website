import mongoose from "mongoose";

const { Schema } = mongoose;

const CategorySchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    category: {
      type: String,
      enum: [
        "Retreats",
        "Fellowships",
        "Conferences",
        "Workshops",
        "Outreaches",
        "Celebrations",
      ],
      required: true,
    },
  },
  { timestamps: true } 
);

export default mongoose.models.Category ||
  mongoose.model("Category", CategorySchema);

import mongoose, { Schema } from 'mongoose';

export interface ICategory extends mongoose.Document {
  name: string;
  description: string;
  date?: Date;
}

const CategorySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model<ICategory>('category', CategorySchema);

export default Category;

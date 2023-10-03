import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: Number,
    title: String,
    price: Number,
    cat: String,
    desc: String,
    image: String,
    isSold: Boolean,
    dateOfSale: Date,
  });

export default mongoose.model('Product', productSchema);

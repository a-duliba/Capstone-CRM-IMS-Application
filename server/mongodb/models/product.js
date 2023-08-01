import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    ProductID: { type: String, required: true },
    ProductName: { type: Number, required: true },
    ProductDescription: { type: Number, required: true },
    ProductPrice: { type: Number, required: true },
    ProductQuantity: { type: Number, required: true },
});

const productModel = mongoose.model("Product", ProductSchema);

export default productModel;
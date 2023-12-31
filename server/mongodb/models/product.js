import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    ProductName: { type: String, required: true },
    ProductDescription: { type: String, required: true },
    ProductPrice: { type: Number, required: true },
    ProductQuantity: { type: Number, required: true },
    ProductCategory: { type: String, required: true },
    yearlyTotalSoldUnits: { type: Number, required: true },
    yearlySalesTotal: { type: Number, required: true },
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
import Product from "../mongodb/models/product.js";

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}).limit(req.query._end);

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createProduct = async (req, res) => {
    try {
        const { 
            ProductID,
            ProductName,
            ProductDescription,
            ProductPrice,
            ProductQuantity
        } = req.body;

        const productExists = await Customer.findOne({ ProductName });

        if (productExists) return res.status(200).json(productExists);

        const newProduct = await Product.create({ 
            ProductID,
            ProductName,
            ProductDescription,
            ProductPrice,
            ProductQuantity  
        });
        
        res.status(200).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add other methods as necessary

export { getAllProducts, createProduct };

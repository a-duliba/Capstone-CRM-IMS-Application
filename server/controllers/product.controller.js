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
    const productData = req.body;

    const newProduct = new Product(productData);

    try {
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const productData = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, productData, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
    const id = req.params.id;

    try {
      const product = await Product.findById(id);

      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }

      await Product.deleteOne({ _id: id });
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
};

export { getAllProducts, createProduct, updateProduct, deleteProduct };

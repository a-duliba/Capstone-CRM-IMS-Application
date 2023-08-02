import Sales from "../mongodb/models/sales.js";

const getAllSales = async (req, res) => {
    try {
        const sales = await Sales.find({}).limit(req.query._end);
        
        res.status(200).json(sales);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getAllSales };
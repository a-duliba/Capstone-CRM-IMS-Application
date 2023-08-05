import Customer from "../mongodb/models/customer.js";

const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find({}).limit(req.query._end);
        
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createCustomer = async (req, res) => {

};

const updateCustomer = async (req, res) => {

  };


// Add other methods as necessary

export { getAllCustomers, createCustomer, updateCustomer };

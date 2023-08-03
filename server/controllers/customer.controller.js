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
    try {
        const { 
            CustomerID, 
            CustomerName, 
            PhoneNumber, 
            Email, 
            PurchaseHistory, 
            AccountBalance, 
            ShippingInformation, 
            PreferredCommunicationMethod   
        } = req.body;
        const customerExists = await Customer.findOne({ CustomerName });

        if (customerExists) return res.status(200).json(customerExists);

        const newCustomer = await Customer.create({ 
            CustomerID, 
            CustomerName, 
            PhoneNumber, 
            Email, 
            PurchaseHistory, 
            AccountBalance, 
            ShippingInformation, 
            PreferredCommunicationMethod   
        });

        res.status(200).json(newCustomer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateItem = async (req, res) => {
    try {
      const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(updatedItem);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Add other methods as necessary

export { getAllCustomers, createCustomer, updateItem };

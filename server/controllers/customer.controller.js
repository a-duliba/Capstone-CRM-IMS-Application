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
    const customerData = req.body;

    const newCustomer = new Customer(customerData);

    try {
        await newCustomer.save();
        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateCustomer = async (req, res) => {
  const id = req.params.id;
  const customerData = req.body;

  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(id, customerData, { new: true });

    if (!updatedCustomer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.status(200).json(updatedCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


  const deleteCustomer = async (req, res) => {
    const id = req.params.id;
  
    try {
      const customer = await Customer.findById(id);
  
      if (!customer) {
        return res.status(404).json({ message: 'Customer not found' });
      }
  
      await Customer.deleteOne({ _id: id });
      res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
};


  
  export { getAllCustomers, createCustomer, updateCustomer, deleteCustomer };
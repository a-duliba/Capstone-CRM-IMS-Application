import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
    CustomerName: { type: String, required: true },
    PhoneNumber:{ type: String, required: true },
    Email: { type: String, required: true },
    PurchaseHistory: { type: String, required: true },
    AccountBalance: { type: String, required: true },
    ShippingInformation: { type: String, required: true },
    PreferredCommunicationMethod: { type: String, required: true },
});

const Customer = mongoose.model("Customer", CustomerSchema);

export default Customer;
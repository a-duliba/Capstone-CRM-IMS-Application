import mongoose from "mongoose";

const SalesSchema = new mongoose.Schema({
  totalCustomers: { type: Number, required: true },
  yearlySalesTotal: { type: Number, required: true },
  yearlyTotalSoldUnits: { type: Number,required: true },
  year: { type: Number,required: true },
  monthlyData: [{
    month: { type: String, required: true },
    totalSales: {type: Number,required: true},
    totalUnits: { type: Number,required: true },
    _id: { type: String,required: true }
  }],
  dailyData: [{
    date: { type: String,required: true },
    totalSales: { type: Number,required: true },
    totalUnits: { type: Number,required: true }
  }] 
});

const Sales = mongoose.model("Sales", SalesSchema);

export default Sales;

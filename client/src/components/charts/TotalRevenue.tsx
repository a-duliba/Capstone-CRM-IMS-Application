import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { YearlySales, MonthlyData } from "interfaces/yearly-sales";
import regression from 'regression';
import { ApexOptions } from 'apexcharts';
import Button from "@mui/material/Button";

const TotalSalesOptions: ApexOptions = {
  chart: {
    type: 'bar', // specify the type as 'bar'
    toolbar: {
      show: true,
    },
  },
xaxis: {
  categories: [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ],
},
yaxis: {
  title: {
    text: "$ (Dollars)",
  },
  max: 65000,
},
fill: {
  opacity: 1,
},
markers: {
  size: 6,
},
tooltip: {
  y: {
    formatter: (val: number) => ` ${val}$`,
  },
},
plotOptions: {
  bar: {
    columnWidth: "95%", // Adjust the bar width as needed (values between "0%" and "100%")
    dataLabels: {
      position: "top", // Display data labels on top of the bars
    },
  },
},
};

const TotalSales = () => {
const [showTotalSalesData, setShowTotalSalesData] = useState(true);
const [showPredictedSalesData, setShowPredictedSalesData] = useState(false);
const [salesData, setSalesData] = useState<YearlySales[]>([]);
const monthlySalesData: [number, number][] = salesData.length > 0 ? salesData[0].monthlyData.map
  ((data: MonthlyData, index: number) => [index + 1, data.totalSales]) : [];
const [totalSales, setTotalSales] = useState(0);
const [title, setTitle] = useState('Total Sales This Year');

// Perform a linear regression on your sales data
const result = regression.linear(monthlySalesData);

// Extract the predicted sales data
const predictedSalesData = result.points.map(point => point[1]);
const totalCurrentYearSales = monthlySalesData.reduce((total, sales) => total + sales[1], 0);
const totalPredictedSales = predictedSalesData.reduce((total, sales) => total + sales, 0);

const handleShowTotalSales = () => {
  setShowTotalSalesData(true);
  setShowPredictedSalesData(false);
  setTotalSales(totalCurrentYearSales);
  setTitle('Total Sales This Year');
};

const handleShowPredictedSales = () => {
  setShowTotalSalesData(false);
  setShowPredictedSalesData(true);
  setTotalSales(totalPredictedSales);
  setTitle('Total Sales Next Year');
};

const handleShowBoth = () => {
  setShowTotalSalesData(true);
  setShowPredictedSalesData(true);
  setTotalSales(totalCurrentYearSales + totalPredictedSales);
  setTitle('Total Sales of Both Years');
};

useEffect(() => {
  fetch('http://localhost:8080/api/v1/sales') 
    .then(response => response.json())
    .then(data => setSalesData(data));
}, []);

return (
  <Box
    p={4}
    bgcolor="#fcfcfc"
    id="chart"
    display="flex"
    flexDirection="column"
    borderRadius="15px"
    width={1420} 
  >
     <Typography fontSize={24} fontWeight={700} color="#11142d">
      {title}
    </Typography>

    <Stack my="20px" direction="row" gap={4} flexWrap="wrap" width="100%">
      <Typography fontSize={28} fontWeight={700} color="#11142d">
        ${totalSales.toFixed(2)}
      </Typography>
    </Stack>

    <Button onClick={handleShowTotalSales}>Show Original Sales</Button>
    <Button onClick={handleShowPredictedSales}>Show Predicted Sales</Button>
    <Button onClick={handleShowBoth}>Show Both</Button>

    <ReactApexChart
      options={TotalSalesOptions}
      series={[
        {
          name: "Monthly Sales",
          data: showTotalSalesData ? monthlySalesData.map(point => point[1]) : [],
        },
        {
          name: "Next Year's Predicted Sales",
          data: showPredictedSalesData ? predictedSalesData : [],
        },
      ]}
      type="bar"
      height={550}
      style={{ width: "100%" }}
    />
  </Box>
);

};

export default TotalSales;

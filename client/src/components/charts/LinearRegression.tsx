import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { YearlySales, MonthlyData } from "interfaces/yearly-sales";
import regression from 'regression';

const TotalSalesChartOptions: ApexOptions = {
  chart: {
    type: "line",
    toolbar: {
      show: true,
    },
  },
  stroke: {
    curve: "smooth",
    width: 3, // Increase the width to make it a solid line
    dashArray: [0], // Set dash array to [0] for a solid line
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
};

const LinearRegression = () => {
  const [showTotalSalesData, setShowTotalSalesData] = useState(true);
  const [showPredictedSalesData, setShowPredictedSalesData] = useState(false);
  const [salesData, setSalesData] = useState<YearlySales[]>([]);
  const monthlySalesData: [number, number][] = salesData.length > 0 ? salesData[0].monthlyData.map
    ((data: MonthlyData, index: number) => [index + 1, data.totalSales]) : [];

  // Perform a linear regression on your sales data
  const result = regression.linear(monthlySalesData);

  // Extract the predicted sales data
  const predictedSalesData = result.points.map(point => point[1]);

  const handleShowTotalSales = () => {
    setShowTotalSalesData(true);
    setShowPredictedSalesData(false);
  };

  const handleShowPredictedSales = () => {
    setShowTotalSalesData(false);
    setShowPredictedSalesData(true);
  };

  const handleShowBoth = () => {
    setShowTotalSalesData(true);
    setShowPredictedSalesData(true);
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
      minWidth={490}
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={24} fontWeight={700} color="#11142d">
        Sales by Month
      </Typography>

      <Button onClick={handleShowTotalSales}>Show Original Sales</Button>
      <Button onClick={handleShowPredictedSales}>Show Predicted Sales</Button>
      <Button onClick={handleShowBoth}>Show Both</Button>

      <Chart
        options={TotalSalesChartOptions}
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
        type="line"
        height={300}
      />
    </Box>
  );
};

export default LinearRegression;

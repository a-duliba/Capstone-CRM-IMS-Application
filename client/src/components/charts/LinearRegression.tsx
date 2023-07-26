import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

// Assuming you have a data array for total revenue for each month of the year.
const totalRevenueData = [183, 124, 115, 85, 143, 143, 96, 95, 84, 72, 44, 108];
const nextYearPredictedSalesData = [108, 98, 80, 75, 135, 140, 105, 100, 85, 70, 55, 130];

const TotalRevenueChartOptions: ApexOptions = {
  chart: {
    type: "line",
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "smooth",
    width: 4, // Increase the width to make it a solid line
    dashArray: [0], // Set dash array to [0] for a solid line
  },
  xaxis: {
    categories: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
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
      formatter: (val: number) => `$ ${val} thousands`,
    },
  },
};

const LinearRegression = () => {
  const [showTotalRevenue, setShowTotalRevenue] = useState(true);
  const [showPredictedSales, setShowPredictedSales] = useState(false);

  const handleShowTotalRevenue = () => {
    setShowTotalRevenue(true);
    setShowPredictedSales(false);
  };

  const handleShowPredictedSales = () => {
    setShowTotalRevenue(false);
    setShowPredictedSales(true);
  };

  const handleShowBoth = () => {
    setShowTotalRevenue(true);
    setShowPredictedSales(true);
  };

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
      <Typography fontSize={18} fontWeight={600} color="#11142d">
        Total Sales
      </Typography>

      {/* Render the line chart */}
      <Chart
        options={TotalRevenueChartOptions}
        series={[
          {
            name: "Total Revenue",
            data: showTotalRevenue ? totalRevenueData : [],
          },
          {
            name: "Next Year's Predicted Sales",
            data: showPredictedSales ? nextYearPredictedSalesData : [],
          },
        ]}
        type="line"
        height={300} // Set an appropriate height for the chart
      />

      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "1rem" }}>
        <button onClick={handleShowTotalRevenue}>
          Show Total Revenue
        </button>
        <button onClick={handleShowPredictedSales}>
          Show Predicted Sales
        </button>
        <button onClick={handleShowBoth}>
          Show Both
        </button>
      </div>
    </Box>
  );
};

export default LinearRegression;

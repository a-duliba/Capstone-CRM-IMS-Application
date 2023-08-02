import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ArrowCircleUpRounded from "@mui/icons-material/ArrowCircleUpRounded";
import { YearlySales, MonthlyData } from "interfaces/yearly-sales";
import regression from 'regression';
import { ApexOptions } from 'apexcharts';


const TotalRevenueOptions: ApexOptions = {
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
      text: "$ (thousands)",
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
      formatter: (val: number) => `$ ${val} thousands`,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "60", // Adjust the bar width as needed (values between "0%" and "100%")
      dataLabels: {
        position: "top", // Display data labels on top of the bars
      },
    },
  },
};

const TotalRevenue = () => {
  const [salesData, setSalesData] = useState<YearlySales[]>([]);
  const monthlySalesData: [number, number][] = salesData.length > 0 ? salesData[0].monthlyData.map
    ((data: MonthlyData, index: number) => [index + 1, data.totalSales]) : [];

  // Perform a linear regression on your sales data
  const result = regression.linear(monthlySalesData);

  // Extract the predicted sales data
  const predictedSalesData = result.points.map(point => point[1]);

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
      alignItems="center"
      width={1420} // Set the width to 910px
    >
      <Typography fontSize={24} fontWeight={700} color="#11142d">
        Total Revenue
      </Typography>
  
      <Stack my="20px" direction="row" gap={4} flexWrap="wrap" width="100%">
        <Typography fontSize={28} fontWeight={700} color="#11142d">
          $236,535
        </Typography>
        <Stack direction="row" alignItems="center" gap={1} width="100%">
          <ArrowCircleUpRounded sx={{ fontSize: 25, color: "#475be8" }} />
          <Stack>
            <Typography fontSize={15} color="#475be8">
              0.8%
            </Typography>
            <Typography fontSize={12} color="#808191">
              Than Last Month
            </Typography>
          </Stack>
        </Stack>
      </Stack>
  
      <ReactApexChart
        options={TotalRevenueOptions}
        series={[
          {
            name: "Monthly Sales",
            data: monthlySalesData.map(point => point[1]),
          },
          {
            name: "Next Year's Predicted Sales",
            data: predictedSalesData,
          },
        ]}
        type="bar"
        height={550}
        style={{ width: "100%" }}
      />
    </Box>
  );
  
};

export default TotalRevenue;

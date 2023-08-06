import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Product } from "interfaces/products";
import { ApexOptions } from "apexcharts";
import regression from 'regression';

const PieChartOptions: ApexOptions = {
  chart: {
    type: "pie",
  },
  labels: [], // We'll fill this in with the product names
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

const PieChart = () => {
  const [productData, setProductData] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [showPredictedSales, setShowPredictedSales] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/products") // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
        setCategories(Array.from(new Set(data.map((item: Product) => item.ProductCategory))));
      });
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
        Yearly Sales by Category
      </Typography>

      <Button onClick={() => setShowPredictedSales(false)}>Show Original Sales</Button>
      <Button onClick={() => setShowPredictedSales(true)}>Show Predicted Sales</Button>

      <Grid container spacing={2}>
        {categories.map((category, index) => {
          const productsInCategory = productData.filter(
            (product: Product) => product.ProductCategory === category
          );
          const options = {
            ...PieChartOptions,
            labels: productsInCategory.map((product: Product) => product.ProductName),
          };
          const series = productsInCategory.map((product: Product) => Number(product.yearlySalesTotal));

          // Calculate the linear regression for each product's sales data
          const regressionData: [number, number][] = productsInCategory.map((product, index) => [index, Number(product.yearlySalesTotal)]);
          const result = regression.linear(regressionData);

          // Use the slope and intercept of the regression line to predict next year's sales
          const nextYearSales = productsInCategory.map((_, index) => result.equation[0] * (index + 1) + result.equation[1]);

          return (
            <Grid item xs={6} key={index}>
              <ReactApexChart
                options={options}
                series={showPredictedSales ? nextYearSales : series}
                type="pie"
                height={250}
                style={{ width: "100%" }}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default PieChart;

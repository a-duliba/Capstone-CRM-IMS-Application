import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  PieChart,
  LinearRegression,
  TotalRevenue,
} from "components";

const Home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <PieChart
                title="Properties for Sale"
                value={684}
                series={[75, 25]}
                colors={["#275be8", "#c4e8ef"]}
              />
            </Grid>
            <Grid item xs={6}>
              <PieChart
                title="Properties for Rent"
                value={550}
                series={[60, 40]}
                colors={["#275be8", "#c4e8ef"]}
              />
            </Grid>
            <Grid item xs={6}>
              <PieChart
                title="Total customers"
                value={5684}
                series={[75, 25]}
                colors={["#275be8", "#c4e8ef"]}
              />
            </Grid>
            <Grid item xs={6}>
              <PieChart
                title="Properties for Cities"
                value={555}
                series={[75, 25]}
                colors={["#275be8", "#c4e8ef"]}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <LinearRegression />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <TotalRevenue />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;

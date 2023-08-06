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
              <PieChart />
            </Grid>
            <Grid item xs={6}>
              <PieChart />
            </Grid>
            <Grid item xs={6}>
              <PieChart />
            </Grid>
            <Grid item xs={6}>
              <PieChart />
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

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
        <Grid item xs={12}>
          <PieChart />
        </Grid>

        <Grid item xs={12}>
          <LinearRegression />
        </Grid>
        
        <Grid item xs={12}>
          <TotalRevenue />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;

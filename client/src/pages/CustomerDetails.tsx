import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';

const CustomerDetails = () => {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    // Fetch customer data from the backend based on the customerId parameter
    fetch(`http://localhost:8080/api/v1/customers/${customerId}`)
      .then((response) => response.json())
      .then((data) => setCustomer(data))
      .catch((error) => console.error('Error fetching customer:', error));
  }, [customerId]);

  if (!customer) {
    return <Typography>Loading...</Typography>;
  }

  return (
   <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Customer Details
      </Typography>
    </Box>
  );
};

export default CustomerDetails;

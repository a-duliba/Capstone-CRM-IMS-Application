import { useLogin } from "@pankod/refine-core";
import { Box, Container, TextField, Button, Typography } from "@pankod/refine-mui";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const response = await axios.post('/api/register', { name, email, username, password });
        navigate('/login'); // Navigate to login page
    } catch (error) {
        console.error(error);
        // Handle error
    }
  };

  return (
    <Box
      component="div"
      sx={{ backgroundColor: '#FCFCFC' }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Title */}
          <Typography variant="h4" component="h1" sx={{ mb: 1 }}>
            Register
          </Typography>

          <Box mt={4}>
            {/* Register Form */}
            <form onSubmit={handleSubmit}>
              <TextField label="Name" variant="outlined" fullWidth sx={{ mb: 2 }} value={name} onChange={(e) => setName(e.target.value)} />
              <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} value={email} onChange={(e) => setEmail(e.target.value)} />
              <TextField label="Username" variant="outlined" fullWidth sx={{ mb: 2 }} value={username} onChange={(e) => setUsername(e.target.value)} />
              <TextField label="Password" variant="outlined" fullWidth type="password" sx={{ mb: 2 }} value={password} onChange={(e) => setPassword(e.target.value)} />
              <Button type="submit" variant="contained" fullWidth sx={{ '&:hover': { backgroundColor: '#4CAF50' } }}>
                Register
              </Button>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

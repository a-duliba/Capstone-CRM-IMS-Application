import { useLogin } from "@pankod/refine-core";
import { Box, Container, TextField, Button, Typography } from "@pankod/refine-mui";
import { useEffect, useRef, useState} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { CredentialResponse } from "../interfaces/google";

export const Login: React.FC = () => {
  const { mutate: login } = useLogin<CredentialResponse>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const response = await axios.post('/api/login', { username, password });
        localStorage.setItem('token', response.data.token);
        navigate('/'); //maybe add /home
    } catch (error) {
        console.error(error);
        // Here you can handle the error, for example, show a message to the user
    }
  };

  const GoogleButton = (): JSX.Element => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (typeof window === "undefined" || !window.google || !divRef.current) {
        return;
      }

      try {
        window.google.accounts.id.initialize({
          ux_mode: "popup",
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          callback: async (res: CredentialResponse) => {
            if (res.credential) {
              login(res);
            }
          },
        });
        window.google.accounts.id.renderButton(divRef.current, {
          theme: "filled_blue",
          size: "medium", // Use 'large' size for the Google button
          type: "standard",
        });

      //<Button variant="contained" fullWidth sx={{ '&:hover': { backgroundColor: '#4CAF50' } }}>
      
      } catch (error) {
        console.log(error);
      }
    }, []);

    return <div ref={divRef} />;
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
            ChairCare Solution
          </Typography>

          <Box mt={4}>
            {/* Login Form */}
            <form onSubmit={handleSubmit}>
              <TextField label="Username" variant="outlined" fullWidth sx={{ mb: 2 }} value={username} onChange={(e) => setUsername(e.target.value)} />
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                sx={{ mb: 2 }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" variant="contained" fullWidth sx={{ '&:hover': { backgroundColor: '#4CAF50' } }}>
                Submit
              </Button>
            </form>

            {/* Register Link */}
            <Box mt={2}>
              <Typography variant="body1">
                Don't have an account? <Link to="/register">Register</Link>
              </Typography>
            </Box>

            {/* Google Login Button */}
            <Box mt={2}>
              <GoogleButton />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
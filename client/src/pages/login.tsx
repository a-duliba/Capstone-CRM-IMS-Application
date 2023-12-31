import { useLogin } from "@pankod/refine-core";
import { Box, Container, TextField, Button, Typography } from "@pankod/refine-mui";
import { useEffect, useRef, useState } from "react";

import { CredentialResponse } from "../interfaces/google";
import { logo } from "assets";

export const Login: React.FC = () => {
  const { mutate: login } = useLogin<CredentialResponse>();
  const { mutate: loginDefault } = useLogin();
  const [username, setUsername] = useState('test');
  const [password, setPassword] = useState('test');

  const handleSubmit = () => {
    const loginData = { username: 'test', password: 'test' };
    loginDefault(loginData);
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
          size: "medium", 
          type: "standard",
        });
      
      } catch (error) {
        console.log(error);
      }
    }, []);

    return <div ref={divRef} />;
  };

  return (
    <Box
      component="div"
      sx={{
        backgroundColor: '#FCFCFC',
        border: '1px solid #ccc', 
        borderRadius: '8px', 
      }}
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
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="ChairCare Solutions" style={{ width: '55px', marginRight: '10px' }} />
            <Typography variant="h4" component="h1" sx={{ mb: 1 }}>
              ChairCare Solutions
            </Typography>
          </Box>

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
            
            <Box mt={2}>
              <GoogleButton />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

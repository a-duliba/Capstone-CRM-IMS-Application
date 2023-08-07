import { useLogin } from "@pankod/refine-core";
import { Box, TextField, Button, Typography } from "@pankod/refine-mui";
import { useEffect, useRef, useState } from "react";

import { CredentialResponse } from "../interfaces/google";
import logo from "../assets/logo.png";

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
      sx={{ backgroundColor: '#FCFCFC', height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          border: '1px solid #ccc', // Add border here
          borderRadius: '8px', // Add border radius for a rounded look
          maxWidth: "400px",
          padding: "20px",
          width: "100%",
        }}
      >
        {/* Title */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", marginBottom: "20px" }}>
          <img src={logo} alt="ChairCare Solutions" style={{ width: '55px', marginRight: '10px' }} />
          <Typography variant="h4" component="h1" sx={{ mb: 1 }}>
            ChairCare Solutions
          </Typography>
        </Box>

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

        {/* Google Login Button */}
        <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
          <GoogleButton />
        </Box>
      </Box>
    </Box>
  );
};

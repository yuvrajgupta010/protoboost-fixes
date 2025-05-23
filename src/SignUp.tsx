import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Card,
  Typography,
  TextField,
  Checkbox,
  Button,
  Divider,
  Link,
  FormControlLabel,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SettingsIcon from "@mui/icons-material/Settings";
import BugReportIcon from "@mui/icons-material/BugReport";

function SignUp() {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const isMobile = useMediaQuery("(max-width:500px)");
  const [isAgreeOnTerms, setIsAgreeOnTerms] = useState(false);

  // Handle sign up button click with loading state
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        background:
          "radial-gradient(ellipse 70% 70% at 50% 35%, #f4fafd 60%, #fafbfb 100%)",
        position: "relative",
        // Add subtle background pattern

        backgroundImage: `url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ab5c64' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}
    >
      {/* Card centered */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // p: isMobile ? 2 : 0,
          padding: {
            sm: "0",
            md: "22px",
          },
        }}
      >
        <Card
          variant="outlined"
          sx={{
            width: isMobile ? "100%" : 370,
            borderRadius: 2.5,
            p: isMobile ? "28px 24px 24px" : "36px 40px 28px 40px",
            boxShadow: "0 2px 24px 0 rgba(33,39,46,0.08)",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            transition: "box-shadow 0.3s ease-in-out",
            "&:hover": {
              boxShadow: "0 4px 30px 0 rgba(33,39,46,0.12)",
            },
          }}
        >
          {/* Logo and title with slight animation */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 0.5,
            }}
          >
            {/* Animated rocket logo svg */}
            <Box
              sx={{
                display: "inline-flex",
                animation: "float 6s ease-in-out infinite",
                "@keyframes float": {
                  "0%, 100%": { transform: "translateY(0px)" },
                  "50%": { transform: "translateY(-5px)" },
                },
              }}
            >
              <svg
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 512.001 512.001"
                // alt="ProtoBoost Logo"
                width={36}
                height={36}
                style={{ display: "inline-block" }}
              >
                <path
                  fill="#FF5249"
                  d="M501.752,10.001c0,0-1.93,53.83-24.3,117.12l-92.82-92.82  C447.922,11.931,501.752,10.001,501.752,10.001z"
                ></path>
                <path
                  fill="#FFFFFF"
                  d="M384.632,34.301l92.82,92.82c-14.54,41.18-37.75,86.36-74.69,123.3  c-34.041,34.041-74.993,61.29-117.81,80.18l-103.8-103.8c12.64-28.65,30.28-59.22,53.59-88.17c8.16-10.13,17.01-20.06,26.59-29.64  C298.272,72.051,343.452,48.841,384.632,34.301z"
                ></path>
                <path
                  fill="#7BD8E8"
                  d="M388.612,123.141c15.62,15.62,15.62,40.95,0,56.57s-40.94,15.62-56.57,0  c-15.62-15.63-15.62-40.95,0-56.57S372.992,107.521,388.612,123.141z"
                ></path>
                <g>
                  <path
                    fill="#FF5249"
                    d="M374.472,278.701c51.54,77.31-44.94,127.28-98.99,127.28c28.28-28.28,20.02-64.83,20.02-64.83   l-10.55-10.55c28.65-12.64,59.22-30.28,88.17-53.59L374.472,278.701z"
                  ></path>
                  <path
                    fill="#FF5249"
                    d="M169.532,300.041l-1.62-1.62c-4.78-4.79-7.13-11.73-5.45-18.29c4.17-16.24,10.33-34.36,18.69-53.33   l103.8,103.8c-18.97,8.36-37.09,14.52-53.33,18.69c-6.56,1.68-13.5-0.67-18.29-5.45l-1.62-1.62L169.532,300.041z"
                  ></path>
                  <path
                    fill="#FF5249"
                    d="M233.052,137.281l1.69,1.35c-23.31,28.95-40.95,59.52-53.59,88.17l-10.55-10.55   c0,0-36.55-8.26-64.83,20.02C105.772,182.221,155.742,85.741,233.052,137.281z"
                  ></path>
                </g>
                <path
                  fill="#FFDD78"
                  d="M169.532,300.041l42.18,42.18c-3.03,11.99-10.22,24.61-21.09,35.48  c-23.43,23.43-84.85,28.28-84.85,28.28s4.85-61.42,28.28-84.85C144.922,310.261,157.542,303.071,169.532,300.041z"
                ></path>
                <path d="M268.662,257.491c3.9-3.91,3.9-10.24,0-14.14c-3.91-3.91-10.24-3.91-14.15,0c-3.9,3.9-3.9,10.23,0,14.14  C258.422,261.391,264.752,261.391,268.662,257.491z"></path>
                <path d="M395.933,186.782c19.538-19.538,19.542-51.171,0-70.712c-19.54-19.539-51.172-19.54-70.713,0  c-19.489,19.489-19.49,51.209,0.003,70.714C344.719,206.268,376.439,206.276,395.933,186.782z M339.363,130.212  c11.723-11.723,30.703-11.725,42.428,0c11.723,11.722,11.725,30.703,0,42.427c-11.693,11.694-30.727,11.694-42.426,0.002  C327.67,160.939,327.669,141.905,339.363,130.212z"></path>
                <path d="M102.194,245.509c1.237,0.513,2.537,0.762,3.825,0.762c2.603,0,5.16-1.017,7.073-2.929  c20.083-20.083,44.854-18.827,52.946-17.763l3.502,3.502c-6.892,16.4-12.444,32.708-16.516,48.569  c-1.47,5.74-0.974,11.814,1.211,17.37c-9.628,4.437-18.917,10.952-27.005,19.04c-25.741,25.742-30.968,88.476-31.178,91.134  c-0.23,2.917,0.828,5.789,2.897,7.858c1.883,1.882,4.43,2.929,7.07,2.929c0.262,0,0.525-0.01,0.788-0.031  c2.658-0.209,65.394-5.436,91.135-31.177c8.085-8.085,14.599-17.373,19.036-26.999c5.882,2.313,11.936,2.598,17.38,1.203  c15.854-4.071,32.16-9.621,48.562-16.514l3.502,3.502c1.063,8.093,2.319,32.864-17.763,52.945c-2.859,2.86-3.715,7.161-2.167,10.897  c1.547,3.737,5.193,6.173,9.238,6.173c39.58,0,94.915-23.571,115.295-61.652c8.851-16.537,14.877-42.699-4.341-75.348  c8.147-6.886,15.994-14.086,23.396-21.488c33.02-33.02,58.942-75.763,77.048-127.039c22.62-63.998,24.783-117.834,24.864-120.094  c0.1-2.775-0.959-5.466-2.922-7.43c-1.964-1.963-4.644-3.027-7.43-2.922c-2.261,0.081-56.096,2.245-120.091,24.864  c-51.28,18.106-94.023,44.029-127.042,77.049c-7.399,7.399-14.599,15.245-21.488,23.396c-32.648-19.218-58.81-13.192-75.349-4.341  c-38.081,20.38-61.652,75.716-61.652,115.296C96.021,240.315,98.458,243.962,102.194,245.509z M183.8,370.63  c-13.75,13.75-46.005,21.002-66.392,23.963c2.962-20.388,10.215-52.642,23.964-66.391c7.7-7.7,16.628-13.538,25.602-16.826  l33.652,33.652C197.338,354.002,191.501,362.93,183.8,370.63z M229.39,339.603c-2.894,0.741-6.246-0.347-8.738-2.835  c-48.541-48.54,13.77,13.771-45.412-45.412c-2.494-2.499-3.582-5.85-2.843-8.739c3.203-12.474,7.392-25.272,12.486-38.193  l82.695,82.695C254.655,332.214,241.859,336.402,229.39,339.603z M373.394,344.891c-13.102,24.479-46.09,42.523-76.152,48.734  c9.585-18.037,11.698-40.998,8.196-54.921c-0.813-3.234-2.923-4.86-3.041-5.051c24.233-11.737,47.182-25.818,68.486-42.015  C381.29,310.652,382.147,328.535,373.394,344.891z M473.311,108.587l-69.896-69.896c38.081-11.828,71.21-16.257,87.746-17.849  C489.568,37.381,485.138,70.51,473.311,108.587z M268.653,116.062c29.625-29.626,67.859-53.204,113.671-70.176l83.792,83.792  c-16.97,45.811-40.548,84.045-70.176,113.672c-9.011,9.01-18.714,17.715-28.84,25.872c-24.342,19.6-51.134,36.202-79.718,49.418  l-94.02-94.018c13.216-28.586,29.818-55.378,49.416-79.717C250.942,134.772,259.646,125.068,268.653,116.062z M167.111,138.608  c16.359-8.754,34.24-7.896,53.252,2.511c-16.197,21.302-30.278,44.252-42.015,68.487c-0.149-0.092-1.949-2.355-5.293-3.109  c-1.375-0.311-27.834-6.002-54.679,8.265C124.588,184.699,142.631,151.71,167.111,138.608z"></path>
                <path d="M212.093,455.481l28.28-28.29c3.904-3.906,3.903-10.238-0.002-14.142c-3.907-3.905-10.239-3.903-14.143,0.002l-28.28,28.29  c-3.904,3.906-3.903,10.238,0.002,14.142C201.857,459.387,208.189,459.387,212.093,455.481z"></path>
                <path d="M70.661,314.053l28.29-28.28c3.906-3.904,3.907-10.236,0.003-14.142s-10.235-3.906-14.142-0.002l-28.29,28.28  c-3.906,3.904-3.907,10.236-0.003,14.142C60.422,317.955,66.753,317.959,70.661,314.053z"></path>
                <path d="M155.521,427.199l-67.74,67.73c-3.906,3.905-3.906,10.237-0.001,14.142c3.903,3.905,10.236,3.907,14.142,0.001l67.74-67.73  c3.906-3.905,3.906-10.237,0.001-14.142C165.76,423.295,159.427,423.295,155.521,427.199z"></path>
                <path d="M75.521,427.199l-67.74,67.73c-3.906,3.905-3.906,10.237-0.001,14.142c3.903,3.905,10.236,3.907,14.142,0.001l67.74-67.73  c3.906-3.905,3.906-10.237,0.001-14.142C85.759,423.295,79.426,423.295,75.521,427.199z"></path>
                <path d="M17.073,424.221l67.73-67.74c3.905-3.906,3.905-10.237-0.001-14.143c-3.904-3.904-10.237-3.904-14.142,0.001l-67.73,67.74  c-3.905,3.906-3.905,10.237,0.001,14.143C6.836,428.127,13.168,428.127,17.073,424.221z"></path>
                <path d="M296.943,229.202l14.14-14.14c3.905-3.905,3.905-10.237,0-14.143c-3.906-3.905-10.236-3.905-14.143,0l-14.14,14.14  c-3.905,3.905-3.905,10.237,0,14.143C286.706,233.107,293.037,233.107,296.943,229.202z"></path>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, color: "#21272e", fontSize: "1.3rem" }}
            >
              ProtoBoost
            </Typography>
          </Box>

          <Typography
            variant="h5"
            sx={{ fontWeight: 600, color: "#21272e", mt: 1, mb: 3 }}
          >
            Sign up
          </Typography>

          {/* Form with enhanced fields and microinteractions */}
          <Box
            component="form"
            autoComplete="off"
            noValidate
            onSubmit={handleSignUp}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {/* Full name field */}
            <Typography
              variant="body2"
              sx={{ color: "#9c9fa3", fontWeight: 500, mb: 0.3, ml: 0.3 }}
            >
              Full name
            </Typography>
            <TextField
              variant="outlined"
              size="medium"
              id="fullname"
              placeholder="Jon Snow"
              autoComplete="off"
              fullWidth
              InputProps={{
                sx: {
                  bgcolor: "#fafbfb",
                  borderRadius: 1,
                  fontSize: "1rem",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    bgcolor: "#f7f7f7",
                  },
                },
              }}
            />

            {/* Email field */}
            <Typography
              variant="body2"
              sx={{
                color: "#9c9fa3",
                fontWeight: 500,
                mt: 1,
                mb: 0.3,
                ml: 0.3,
              }}
            >
              Email
            </Typography>
            <TextField
              variant="outlined"
              size="medium"
              id="email"
              type="email"
              placeholder="your@email.com"
              autoComplete="off"
              fullWidth
              InputProps={{
                sx: {
                  bgcolor: "#fafbfb",
                  borderRadius: 1,
                  fontSize: "1rem",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    bgcolor: "#f7f7f7",
                  },
                },
              }}
            />

            {/* Password field */}
            <Typography
              variant="body2"
              sx={{
                color: "#9c9fa3",
                fontWeight: 500,
                mt: 1,
                mb: 0.3,
                ml: 0.3,
              }}
            >
              Password
            </Typography>
            <TextField
              variant="outlined"
              size="medium"
              id="password"
              type="password"
              autoComplete="off"
              fullWidth
              InputProps={{
                sx: {
                  bgcolor: "#fafbfb",
                  borderRadius: 1,
                  fontSize: "1rem",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    bgcolor: "#f7f7f7",
                  },
                },
              }}
            />

            {/* Access Code field */}
            <Typography
              variant="body2"
              sx={{
                color: "#9c9fa3",
                fontWeight: 500,
                mt: 1,
                mb: 0.3,
                ml: 0.3,
              }}
            >
              Access Code
            </Typography>
            <TextField
              variant="outlined"
              size="medium"
              id="accessCode"
              autoComplete="off"
              fullWidth
              InputProps={{
                sx: {
                  bgcolor: "#fafbfb",
                  borderRadius: 1,
                  fontSize: "1rem",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    bgcolor: "#f7f7f7",
                  },
                },
              }}
            />

            {/* Email updates checkbox */}
            <Box sx={{ mt: 0.8, mb: 1, display: "flex", alignItems: "center" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      p: "2px",
                      mr: 1,
                      transition: "transform 0.15s ease-in-out",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                    onClick={() => setIsAgreeOnTerms((prev) => !prev)}
                  />
                }
                label={
                  <Typography variant="body2" sx={{ color: "#21272e" }}>
                    I want to receive updates via email.
                  </Typography>
                }
                sx={{ userSelect: "none" }}
              />
            </Box>

            {/* Enhanced sign up button with loading state */}
            <Button
              variant="contained"
              fullWidth
              type="submit"
              disabled={!isAgreeOnTerms}
              sx={{
                bgcolor: "#21272e",
                color: "#FFF",
                fontWeight: 600,
                fontSize: "1.09rem",
                borderRadius: 1,
                py: 1.4,
                mt: 0.5,
                mb: 0.2,
                textTransform: "none",
                boxShadow: "0 2px 5px 0 rgba(33,39,46,.09)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.2s ease",
                ":hover": {
                  bgcolor: "#191e24",
                  boxShadow: "0 4px 8px 0 rgba(33,39,46,.12)",
                  transform: "translateY(-1px)",
                },
                ":active": {
                  transform: "translateY(1px)",
                  boxShadow: "0 1px 3px 0 rgba(33,39,46,.08)",
                },
                "&::after": loading
                  ? {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                      animation: "loading 1.5s infinite",
                    }
                  : {},
                "@keyframes loading": {
                  "0%": { transform: "translateX(-100%)" },
                  "100%": { transform: "translateX(100%)" },
                },
              }}
            >
              {loading ? "Signing up..." : "Sign up"}
            </Button>
          </Box>

          {/* Improved divider */}
          <Divider
            sx={{
              my: 3,
              "&::before, &::after": {
                borderColor: "#e5e7ea",
              },
              "& .MuiDivider-wrapper": {
                paddingLeft: 2,
                paddingRight: 2,
              },
            }}
          >
            <Typography
              component="span"
              sx={{
                color: "#c6cace",
                fontSize: "0.97rem",
                px: 1,
              }}
            >
              or
            </Typography>
          </Divider>

          {/* Sign in link with improved hover */}
          <Box
            sx={{
              textAlign: "center",
              color: "#9c9fa3",
              fontSize: ".96rem",
              mb: -2,
            }}
          >
            Already have an account?
            <Link
              component={RouterLink}
              to="/signin"
              underline="hover"
              sx={{
                color: "#ab5c64",
                fontWeight: 500,
                ml: 0.6,
                fontSize: ".98rem",
                transition: "all 0.15s ease",
                "&:hover": {
                  color: "#964f57",
                  textDecoration: "underline",
                },
              }}
            >
              Sign in
            </Link>
          </Box>
        </Card>
      </Box>

      {/* Enhanced Floating Bug Button */}
      <Box
        sx={{
          position: "fixed",
          right: isMobile ? "50%" : 32,
          bottom: isMobile ? 16 : 26,
          transform: isMobile ? "translateX(50%)" : "none",
          zIndex: 100,
          display: {
            xs: "none",
            sm: "block",
          },
        }}
      >
        <Button
          variant="outlined"
          startIcon={<BugReportIcon sx={{ color: "#21272e" }} />}
          sx={{
            borderRadius: 22,
            bgcolor: "#fff",
            color: "#21272e",
            fontWeight: 600,
            px: 2.4,
            py: 0.95,
            boxShadow: "0 1.3px 8px 0 rgba(33,39,46,.06)",
            fontSize: ".99rem",
            border: "1.6px solid #e5e7ea",
            textTransform: "none",
            transition: "all 0.2s ease",
            ":hover": {
              boxShadow: "0 1.3px 18px 0 rgba(33,39,46,.12)",
              transform: "translateY(-2px)",
              bgcolor: "#f8f8f8",
            },
          }}
        >
          Report a Bug
        </Button>
      </Box>
    </Box>
  );
}

export default SignUp;

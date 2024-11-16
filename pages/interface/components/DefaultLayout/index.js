import {
  Box,
  Container,
  CssBaseline,
  Toolbar,
  AppBar,
  Button,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Footer from "../Footer/index.js";
import CustomHead from "../Head/index.js";
import Header from "../Header/index.js";
import NavbarLeft from "../Navbar/index.js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50", // Green color as primary color
    },
    secondary: {
      main: "#81c784", // Lighter green as secondary color
    },
    background: {
      default: "#e8f5e9", // Light green background
    },
    text: {
      primary: "#1b5e20", // Darker green text
    },
  },
});

export default function DefaultLayout({
  children,
  containerWidth = "lg",
  metadata,
}) {
  return (
    <ThemeProvider theme={theme}>
      <NavbarLeft />
      <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
        {/* Metadata Head */}
        {metadata && <CustomHead metadata={metadata} />}

        <Header />
        {/* Main Content */}
        <Container
          maxWidth={containerWidth}
          sx={{
            marginTop: 8,
            padding: [2, null, null, 4],
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {children}
        </Container>

        {/* Footer */}
        <Footer
          sx={{
            paddingX: [2, null, null, 4],
            paddingTop: 3,
            marginTop: 2,
          }}
        />

        {/* Scroll to Top Button */}
        <Box sx={{ position: "fixed", bottom: 16, right: 16 }}></Box>

        {/* Ensure basic CSS styles are applied globally */}
        <CssBaseline />
      </Box>
    </ThemeProvider>
  );
}

import DefaultLayout from "./interface/components/DefaultLayout/index.js";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <DefaultLayout>
        {/* Main content goes here */}
        <Box sx={{ padding: 2 }}>
          <Typography variant="h4">Welcome to Terra Forte</Typography>
          {/* Add your page content here */}
        </Box>
      </DefaultLayout>
    </>
  );
};

export default Home;

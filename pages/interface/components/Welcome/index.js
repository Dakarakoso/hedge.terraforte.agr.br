import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

export default function WelcomeCard() {
  return (
    <Card variant="outlined" sx={{ m: 1.5, p: 2 }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <EmojiPeopleIcon fontSize="large" />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Welcome to Your ERP Terra Forte!
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ mt: 2, color: "text.secondary" }}>
          We're excited to have you onboard! Manage your contracts, track
          progress, and optimize workflows with our easy-to-use ERP system.
        </Typography>
      </CardContent>
    </Card>
  );
}

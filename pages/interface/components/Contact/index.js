import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MailIcon from "@mui/icons-material/Mail";

export default function ContactCard() {
  const handleContactClick = () => {
    window.location.href = "mailto:willianmaruyama.contato@gmail.com";
  };

  return (
    <Card variant="outlined" sx={{ m: 1.5, p: 2 }}>
      <CardContent>
        <MailIcon fontSize="large" />
        <Typography gutterBottom sx={{ fontWeight: 600 }}>
          Contact Us
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
          We would love to hear from you! Feel free to reach out for any
          inquiries or support.
        </Typography>
        <Button
          variant="contained"
          size="small"
          fullWidth
          onClick={handleContactClick}
        >
          Send an Email
        </Button>
      </CardContent>
    </Card>
  );
}

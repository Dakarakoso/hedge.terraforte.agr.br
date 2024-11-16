import { Box, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export default function Footer(props) {
  return (
    <Box
      component="footer"
      {...props}
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        width: "100%",
        px: 2,
        py: { xs: 4, md: 5 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          color: "text.secondary",
        }}
      >
        <Link
          href="/"
          aria-label="Voltar para a página inicial"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "text.secondary",
          }}
        >
          <HomeIcon fontSize="large" />
        </Link>
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} Terra Forte
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 2, md: 3 },
          flexWrap: "wrap",
        }}
      >
        <Link href="/contato" color="inherit" underline="hover">
          Contato
        </Link>
        <Typography variant="body2" color="text.secondary">
          Desenvolvido por Willian Maruyama
        </Typography>
      </Box>
    </Box>
  );
}

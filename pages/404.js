import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import botSleepyFaceDarkTransparent from "../public/brand/bot-sleepy-face-dark-transparent.svg";
import DefaultLayout from "./interface/components/DefaultLayout/index";

export default function Custom404() {
  return (
    <DefaultLayout metadata={{ title: "404 - Página não encontrada" }}>
      <Box
        sx={{
          height: "calc(90vh - 64px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={botSleepyFaceDarkTransparent.src}
            alt="Ícone do Bot triste"
            height={100}
            width={100}
            style={{ opacity: 0.7 }}
          />
          <Box
            sx={{
              height: "80px",
              margin: "10px",
              borderLeft: "1px solid",
              borderColor: "border.muted",
              paddingRight: "10px",
            }}
          />
          <Typography
            variant="h1"
            sx={{ fontSize: "4rem", fontWeight: "bold" }}
          >
            404
          </Typography>
        </Box>
        <Typography variant="h5" sx={{ marginTop: 2 }}>
          Página não encontrada
        </Typography>
        <Button
          variant="contained"
          sx={{ marginTop: 3 }}
          onClick={() => (window.location.href = "/")}
        >
          Retornar à tela inicial
        </Button>
      </Box>
    </DefaultLayout>
  );
}

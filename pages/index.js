import Script from "next/script";

const Home = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100dvw",
        height: "100dvh",
        overflowX: "hidden",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Em construção 🏗️🚧</h1>
      <span stye={{ color: "#1e3823" }}>
        Solução para controle rollover para contratos futuros
      </span>
      <Script
        src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
        type="module"
      ></Script>

      <dotlottie-player
        src="https://lottie.host/64b0fb5e-09f1-4110-b03f-58380b49e44d/F8HrF5vOfV.json"
        background="transparent"
        speed="1"
        style={{ width: "800px", height: "500px" }}
        loop
        autoplay
      ></dotlottie-player>

      <footer>
        <span>Quem somos? </span>
        <a target="_blank" href="https://terraforte.agr.br/">
          Terra Forte
        </a>

        <div>
          <span>&copy; Made by </span>
          <a target="_blank" href="https://github.com/Dakarakoso">
            Willian Maruyama
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Home;

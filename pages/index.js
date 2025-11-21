import React from "react";
import HeartBeatSVG from "./components/HeartBeatSVG";

function Home() {
  return (
    <div>
      {/* Outros componentes do seu app */}
      <HeartBeatSVG size={100} color="crimson" />
    </div>
  );
}

export default Home;
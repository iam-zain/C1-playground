import React from "react";
import Background from "components/Background";
import ThemeToggler from "components/ThemeToggler";

import Slider4Points from "components/Slider4Points";

export default function Home() {
  return (
    <>
      <Background></Background>
      <div>Hello world!</div>
      <ThemeToggler />
      <Slider4Points
        name="PINK1"
        infoModalKey="pink1"
        showModalWithData={(x) => x}
        onChange={(x) => x}
        value={0}
        id="pink1"
      />
      <div
        style={{
          backgroundColor: "var(--bg)",
          color: "var(--textNormal)",
          transition: "color 0.2s ease-out, background 0.2s ease-out",
        }}
      >
        ...
      </div>
    </>
  );
}

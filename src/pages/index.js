import React from "react";
import Background from "components/Background";
import ThemeToggler from "components/ThemeToggler";

export default function Home() {
  return (
    <>
      <Background></Background>
      <div>Hello world!</div>
      <ThemeToggler />
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

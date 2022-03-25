import React from "react";
import Background from "../components/Background";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Menu from "../components/Menu";

export default function HomePage() {
  return (
    <>
      <Menu />
      <Background />
      <Content />
      <Gallery />
      <Footer />
    </>
  );
}

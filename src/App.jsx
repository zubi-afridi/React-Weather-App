import React from "react";
import Weather from "./components/Weather";
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Container>
        <Weather />
      </Container>
      <Footer />
    </div>
  );
};

export default App;

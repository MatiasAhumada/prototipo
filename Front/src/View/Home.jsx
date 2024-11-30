import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import CameraComponent from "./Camara";
import Navb from "./Common/Navbar";
const Home = () => {
 
  return (
    <>
      <Navb></Navb>
      <Container>
        <CameraComponent></CameraComponent>
      </Container>
    </>
  );
};

export default Home;

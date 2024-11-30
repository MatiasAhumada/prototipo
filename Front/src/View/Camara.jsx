import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import Faceidicon from "../assets/capture.png";
import { useNavigate } from "react-router-dom";

const CameraComponent = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate()

  useEffect(() => {
    startCamera();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();

      setTimeout(() => {
        stopCamera();
      }, 3000);
    } catch (err) {
      console.error("Error accessing the camera: ", err);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;

      Swal.fire({
        icon: "success",
        title: "Asistencia registrada",
        showConfirmButton: true,
      });
      navigate("/inicio")
    }
  };

  return (
    <div className="text-center w-100">
    
      <h1 className="mt-5">Bienvenido</h1>
      <h2 className="mt-4">Registre su asistencia: </h2>
      <div className="mt-3">
        <img src={Faceidicon} alt="Face ID Icon" style={{ width: "5%" }} />
      </div>
      <div
        style={{
          display: "inline-block",
          width: "300px",
          height: "400px",
          position: "relative",
          border: "2px solid black",
          borderRadius: "50%",
          overflow: "hidden",
          margin: "20px auto",
        }}
      >
        <video
          ref={videoRef}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default CameraComponent;

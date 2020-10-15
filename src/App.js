/*
Nama: Reinhard Silaen
    NIM: 11S18049
    Kelas: 13 IF 2
    */
import React from "react";
import "./style.css";
//import ReactDOM from "react-dom";

const dataDiri = {
  nama: "Reinhard Silaen",
  kelas: "13 IF -2",
  nim: "11S18049"
};

export default function App() {
  return (
   <div>
   <center>
      <h1>React.js load JSON</h1>
   
      <center class="body"><strong>

      <p>Nama :{dataDiri.nama}</p>
      <p>Kelas : {dataDiri.kelas}</p>
      <p>NIM : {dataDiri.nim}</p>
      </strong></center>
      </center>
    </div>
  );
}

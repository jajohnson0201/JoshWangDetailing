import { Loader } from "@googlemaps/js-api-loader"
import React from "react";




let map;

async function InitMap() {

  const loader = new Loader({
    apiKey: "AIzaSyDiIVftpP5-jiEjCVsRNvAK_ekctUIUenw",
    version: "weekly",
    ...additionalOptions,
  });
  
  loader.load().then(async () => {
    const { Map } = await google.maps.importLibrary("maps");
  
    map = new Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  });
};

export default InitMap();

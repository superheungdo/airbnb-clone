import { useState } from "react";
import MapGL, { ViewStateChangeEvent } from "react-map-gl";

import { Map as MapType } from "@/types";

const Map = () => {
  const [viewport, setViewport] = useState<MapType>({
    longitude: -122.4376,
    latitude: 37.7577,
    zoom: 11,
  });

  const handleMove = (e: ViewStateChangeEvent) => {
    const {
      viewState: { longitude, latitude, zoom },
    } = e;

    setViewport({
      longitude,
      latitude,
      zoom,
    });
  };

  return (
    <MapGL
      {...viewport}
      style={{ width: "100%", height: "100%" }}
      mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      onMove={handleMove}
    />
  );
};

export default Map;

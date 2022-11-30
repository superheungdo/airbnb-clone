import { useEffect, useState } from "react";
import MapGL, { Marker, Popup, ViewStateChangeEvent } from "react-map-gl";
import { getCenter } from "geolib";

import { Search, Map as MapType } from "@/types";

interface Props {
  searchs: Search[];
}

const Map = ({ searchs }: Props) => {
  const [selectedLocation, setSelectedLocation] = useState<Search | null>(null);
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

  useEffect(() => {
    const coordinates = searchs.map((search) => ({
      longitude: search.long,
      latitude: search.lat,
    }));

    const center = getCenter(coordinates);

    if (!center) return;

    setViewport((curState) => ({
      ...curState,
      ...center,
    }));
  }, []);

  return (
    <MapGL
      {...viewport}
      style={{ width: "100%", height: "100%" }}
      mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      onMove={handleMove}
    >
      {searchs.map((search) => (
        <div key={search.long}>
          <Marker
            longitude={search.long}
            latitude={search.lat}
            offset={[-20, -10]}
          >
            <p
              className="text-2xl pointer animate-bounce"
              role="img"
              aria-label="push-pin"
              onClick={() => setSelectedLocation(search)}
            >
              📌
            </p>
          </Marker>

          {selectedLocation?.long === search.long ? (
            <Popup
              longitude={search.long}
              latitude={search.lat}
              closeOnClick={true}
              onClose={() => setSelectedLocation(null)}
            >
              {search.title}
            </Popup>
          ) : (
            <></>
          )}
        </div>
      ))}
    </MapGL>
  );
};

export default Map;

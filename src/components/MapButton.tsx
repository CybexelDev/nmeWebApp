"use client";
import React from "react";
import { MapPin } from "lucide-react";

type Props = {
  latitude: string | number;
  longitude: string | number;
};

const MapButton = ({ latitude, longitude }: Props) => {
  const handleMapClick = () => {
    window.open(
      `https://www.google.com/maps?q=${latitude},${longitude}`,
      "_blank"
    );
  };

  return (
    <a onClick={handleMapClick} className="inline-flex items-center gap-1.5 rounded-full bg-[#F97316] px-3 md:px-4 py-2 text-xs font-semibold text-white hover:bg-[#cc6012]">
          <MapPin className="h-3.5 w-3.5" /> <span className="hidden sm:inline">Map</span>
    </a>
  );
};

export default MapButton;
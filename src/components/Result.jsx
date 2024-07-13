"use client";
import {
  useCalculateEnergy,
  useEnergy,
  useMass,
  useSpeedOfLight,
} from "@/store";
import { Chip } from "@mui/material";
import React from "react";

function Result() {
  const mass = useMass((state) => state.mass);
  const speedOfLight = useSpeedOfLight((state) => state.speedOfLight);
  const energy = useCalculateEnergy((state) => state.energy);

  //setting up the labels for the chips
  const energyChipLabel = `Energy: ${energy} J`;
  const massChipLabel = `Mass: ${mass} kg`;
  const speedOfLightChipLabel = `Speed of light: ${speedOfLight} m/s`;

  return (
    <div className="flex flex-row justify-evenly bg-black rounded w-full h-full p-10">
      <Chip label={massChipLabel} color="warning" />
      <Chip label={speedOfLightChipLabel} color="warning" />
      <Chip label={energyChipLabel} color="warning" />
    </div>
  );
}

export default Result;

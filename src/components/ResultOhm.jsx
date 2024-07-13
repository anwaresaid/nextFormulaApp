import {
  useCalculateOhm,
  useCurrent,
  useResistance,
  useVoltage,
} from "@/store";
import { Chip } from "@mui/material";
import React from "react";

function ResultOhm() {
  const current = useCurrent((state) => state.current);
  const resistance = useResistance((state) => state.resistance);
  const voltage = useCalculateOhm((state) => state.voltage);

  //setting up the labels for the chips
  const currentChipLabel = `Current: ${current} A`;
  const resistanceChipLabel = `Resistance: ${resistance} Ω`;
  const voltageChipLabel = `Voltage: ${voltage} V`;

  return (
    <div className="flex flex-row justify-evenly bg-black rounded w-full h-full p-10">
      <Chip label={currentChipLabel} color="primary" />
      <Chip label={resistanceChipLabel} color="primary" />
      <Chip label={voltageChipLabel} color="primary" />
    </div>
  );
}

export default ResultOhm;

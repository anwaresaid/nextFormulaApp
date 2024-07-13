"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import { useCalculateEnergy, useMass, useSpeedOfLight } from "@/store";

function CalculationFields() {
  const mass = useMass((state) => state.mass);
  const setMass = useMass((state) => state.setMass);
  const speedOfLight = useSpeedOfLight((state) => state.speedOfLight);
  const setSpeedOfLight = useSpeedOfLight((state) => state.setSpeedOfLight);
  const calculateEnergy = useCalculateEnergy((state) => state.calculateEnergy);

  //handling mass and speed of light changes
  const handleMassChange = (e) => {
    setMass(e.target.value);
    calculateEnergy(e.target.value, speedOfLight);
  };
  const handleSpeedOfLightChange = (e) => {
    setSpeedOfLight(e.target.value);
    calculateEnergy(mass, e.target.value);
  };

  return (
    <div className="p-5 flex flex-row ">
      <TextField
        id="outlined-number"
        label="Mass (m)"
        className="me-5"
        onChange={(e) => handleMassChange(e)}
        type="number"
        value={mass}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="outlined-number"
        label="Speed of light (c)"
        onChange={(e) => handleSpeedOfLightChange(e)}
        type="number"
        value={speedOfLight}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}

export default CalculationFields;

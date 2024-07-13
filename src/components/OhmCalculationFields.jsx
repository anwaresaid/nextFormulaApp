"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import {
  useCalculateOhm,
  useCurrent,
  useMass,
  useResistance,
  useSpeedOfLight,
} from "@/store";
function OhmCalculationFields() {
  const current = useCurrent((state) => state.current);
  const setCurrent = useCurrent((state) => state.setCurrent);
  const resistance = useResistance((state) => state.resistance);
  const setResistance = useResistance((state) => state.setResistance);
  const calculateOhm = useCalculateOhm((state) => state.calculateOhm);

  //handling current and resistance changes
  const handleCurrentChange = (e) => {
    setCurrent(e.target.value);
    calculateOhm(e.target.value, resistance);
  };

  //handling resistance changes
  const handleResistanceChange = (e) => {
    setResistance(e.target.value);
    calculateOhm(current, e.target.value);
  };

  return (
    <div className="p-5 flex flex-row">
      <TextField
        id="outlined-number"
        label="Current (I)"
        className="me-5"
        onChange={(e) => handleCurrentChange(e)}
        type="number"
        value={current}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="outlined-number"
        label="Resistance (R)"
        onChange={(e) => handleResistanceChange(e)}
        type="number"
        value={resistance}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}

export default OhmCalculationFields;

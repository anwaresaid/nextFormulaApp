"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelectFormula } from "@/store";

function SelectFormula() {
  //setting up the dropdown
  const formulas = [
    {
      id: 1,
      name: "mass-energy equivalence",
    },
    {
      id: 2,
      name: "Ohm's law",
    },
    {
      id: 3,
      name: "Simulation Calculation",
    },
  ];
  const formula = useSelectFormula((state) => state.formula);
  const setFormula = useSelectFormula((state) => state.setFormula);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Formula</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className="bg-white"
          value={formula}
          defaultValue={1}
          label="select formula"
          onChange={(e) => setFormula(e.target.value)}
        >
          {formulas.map((formula) => {
            return <MenuItem value={formula.id}>{formula.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectFormula;

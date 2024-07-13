"use client";
import { useSelectFormula } from "@/store";
import React from "react";
import EnergyCalculationFields from "./EnergyCalculationFields";
import OhmCalculationFields from "./OhmCalculationFields";

function SelectedFormula() {
  const formula = useSelectFormula((state) => state.formula);

  return (
    <div>
      <h2 className="text-3xl pb-5">
        {formula === 1
          ? "Mass-energy equivalence"
          : formula === 2
          ? "Ohm's law"
          : "select a formula"}
      </h2>

      {formula === 1 ? (
        <EnergyCalculationFields />
      ) : formula === 2 ? (
        <OhmCalculationFields />
      ) : null}
    </div>
  );
}

export default SelectedFormula;

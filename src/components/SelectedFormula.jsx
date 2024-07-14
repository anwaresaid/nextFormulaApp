"use client";
import { useSelectFormula } from "@/store";
import React from "react";
import EnergyCalculationFields from "./EnergyCalculationFields";
import OhmCalculationFields from "./OhmCalculationFields";
import ProtocolSimluationCalculationFields from "./ProtocolSimluationCalculationFields";

function SelectedFormula() {
  const formula = useSelectFormula((state) => state.formula);

  return (
    <div>
      {formula === 1 ? (
        <EnergyCalculationFields />
      ) : formula === 2 ? (
        <OhmCalculationFields />
      ) : formula === 3 ? (
        <ProtocolSimluationCalculationFields />
      ) : null}
    </div>
  );
}

export default SelectedFormula;

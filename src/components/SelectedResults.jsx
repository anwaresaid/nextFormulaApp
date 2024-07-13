"use client";
import React from "react";
import { useSelectFormula } from "@/store";
import Result from "./Result";
import ResultOhm from "./ResultOhm";

function SelectedResults() {
  const selectedFormula = useSelectFormula((state) => state.formula);

  return (
    <div className="rounded ">
      {selectedFormula == 1 ? (
        <Result />
      ) : selectedFormula === 2 ? (
        <ResultOhm />
      ) : null}
    </div>
  );
}

export default SelectedResults;

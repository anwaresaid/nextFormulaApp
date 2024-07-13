"use client";
import { create } from "zustand";

//general store
export const useSelectFormula = create((set) => ({
  formula: 1,
  setFormula: (formula) => set({ formula }),
}));

//mass-energy equivalence store
export const useMass = create((set) => ({
  mass: 0,
  setMass: (mass) => set({ mass }),
}));
export const useSpeedOfLight = create((set) => ({
  speedOfLight: 0,
  setSpeedOfLight: (speedOfLight) => set({ speedOfLight }),
}));
export const useEnergy = create((set) => ({
  energy: 0,
  setEnergy: (energy) => set({ energy }),
}));
export const useCalculateEnergy = create((set) => ({
  energy: 0,
  calculateEnergy: (mass, speedOfLight) => {
    const energy = mass * speedOfLight ** 2;
    set({ energy });
  },
}));

//Ohm's law store
export const useVoltage = create((set) => ({
  voltage: 0,
  setVoltage: (voltage) => set({ voltage }),
}));
export const useCurrent = create((set) => ({
  current: 0,
  setCurrent: (current) => set({ current }),
}));
export const useResistance = create((set) => ({
  resistance: 0,
  setResistance: (resistance) => set({ resistance }),
}));
export const useCalculateOhm = create((set) => ({
  voltage: 0,
  calculateOhm: (resistance, current) => {
    const voltage = resistance * current;
    set({ voltage });
  },
}));

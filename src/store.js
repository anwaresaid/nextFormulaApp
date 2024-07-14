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

//protocol Simulation calculation

export const useAvaxPrice = create((set) => ({
  avaxPrice: 0,
  setAvaxPrice: (avaxPrice) => set({ avaxPrice }),
}));

export const useAmountAvaxDepositedInProtocol = create((set) => ({
  amountAvaxDepositedInProtocol: 0,
  setAmountAvaxDepositedInProtocol: (amountAvaxDepositedInProtocol) =>
    set({ amountAvaxDepositedInProtocol }),
}));

export const useNumUsdInCirculation = create((set) => ({
  numUsdInCirculation: 0,
  setNumUsdInCirculation: (numUsdInCirculation) => set({ numUsdInCirculation }),
}));

export const useNumberOfXavaxInCirculation = create((set) => ({
  numberOfXavaxInCirculation: 0,
  setNumberOfAvaxInCirculation: (numberOfXavaxInCirculation) =>
    set({ numberOfXavaxInCirculation }),
}));

// calculations
// total value of avax collateral of the protocol B4 field
export const useCalculateTotalValueOfAvaxCollateralOfTheProtocol = create(
  (set) => ({
    totalValueOfAvaxCollateralOfTheProtocol: 0,
    calculateTotalValueOfAvaxCollateralOfTheProtocol: (
      avaxPrice,
      amountOfAvaxDeposited
    ) => {
      const totalValueOfAvaxCollateralOfTheProtocol =
        avaxPrice * amountOfAvaxDeposited;
      set({ totalValueOfAvaxCollateralOfTheProtocol });
    },
  })
);

// collateralization ratio
export const useAusdMarketCap = create((set) => ({
  aUsdMarketCap: 0,
  calculateAusdMarketCap: (
    collateralizationRatio,
    numUsdInCirculation,
    totalValueOfAvaxCollateralOfTheProtocol
  ) => {
    const aUsdMarketCap =
      collateralizationRatio > 100
        ? numUsdInCirculation * 1
        : totalValueOfAvaxCollateralOfTheProtocol * 1;
    set({ aUsdMarketCap });
  },
}));

// aUSD price
export const useAusdPrice = create((set) => ({
  aUsdPrice: 0,
  calculateAusdPrice: (
    totalValueOfAvaxCollateralOfTheProtocol,
    ausdMarketCap,
    setNumUsdInCirculation
  ) => {
    const aUsdPrice =
      totalValueOfAvaxCollateralOfTheProtocol > ausdMarketCap
        ? 1
        : totalValueOfAvaxCollateralOfTheProtocol / setNumUsdInCirculation;
    set({ aUsdPrice });
  },
}));

// xAVAX market Cap

export const useXavaxMarketCap = create((set) => ({
  xAvaxMarketCap: 0,
  calculateXavaxMarketCap: (
    totalValueOfAvaxCollateralOfTheProtocol,
    numUsdInCirculation,
    ausdMarketCap
  ) => {
    const xAvaxMarketCap =
      totalValueOfAvaxCollateralOfTheProtocol - numUsdInCirculation > 0
        ? totalValueOfAvaxCollateralOfTheProtocol - ausdMarketCap
        : 0;
    set({ xAvaxMarketCap });
  },
}));

// xAVAX price

export const useXavaxPrice = create((set) => ({
  xAvaxPrice: 0,
  calculateXavaxPrice: (
    totalValueOfAvaxCollateralOfTheProtocol,
    ausdMarketCap,
    xavaxMarketCap,
    numberOfXavaxInCirculation
  ) => {
    const xAvaxPrice =
      totalValueOfAvaxCollateralOfTheProtocol >= ausdMarketCap
        ? xavaxMarketCap / numberOfXavaxInCirculation
        : 0;
    set({ xAvaxPrice });
  },
}));

// Leverage

export const useLeverage = create((set) => ({
  leverage: 0,
  calculateLeverage: (xavaxMarketCap, ausdMarketCap) => {
    const leverage =
      xavaxMarketCap <= 0
        ? "infinite"
        : (xavaxMarketCap + ausdMarketCap) / xavaxMarketCap;
    set({ leverage });
  },
}));

// collateralization ratio

export const useCollateralizationRatio = create((set) => ({
  collateralizationRatio: 0,
  calculateCollateralizationRatio: (
    totalValueOfAvaxCollateralOfTheProtocol,
    numUsdInCirculation
  ) => {
    const collateralizationRatio =
      (totalValueOfAvaxCollateralOfTheProtocol / numUsdInCirculation) * 100;
    set({ collateralizationRatio });
  },
}));

// trading simulation for xAVAX

export const useAmountOfAvaxDeposited = create((set) => ({
  amountOfAvaxDeposited: 0,
  setAmountOfAvaxDeposited: (amountOfAvaxDeposited) =>
    set({ amountOfAvaxDeposited }),
}));

export const useChangeInAvaxPrice = create((set) => ({
  changeInAvaxPrice: 0,
  setChangeInAvaxPrice: (changeInAvaxPrice) => set({ changeInAvaxPrice }),
}));

//calculations
//xAVAX minted
export const useXAVAXminted = create((set) => ({
  xAVAXminted: 0,
  calculateXavaxMinted: (amountOfAvaxDeposited, avaxPrice, xAvaxPrice) => {
    const xAVAXminted = (amountOfAvaxDeposited * avaxPrice) / xAvaxPrice;
    set({ xAVAXminted });
  },
}));

// xAVAX position of user
export const useXAVAXpositionOfUser = create((set) => ({
  xAVAXpositionOfUser: 0,
  calculatexAVAXpositionOfUser: (xAVAXminted, xAvaxPrice) => {
    const xAVAXpositionOfUser = xAVAXminted * xAvaxPrice;
    set({ xAVAXpositionOfUser });
  },
}));

// new xAVAX price
export const useNewxAVAXprice = create((set) => ({
  newxAVAXprice: 0,
  calculateNewXavaxPrice: (
    totalValueOfAvaxCollateralOfTheProtocol,
    changeInXavaxPrice,
    ausdMarketCap,
    numberOfXavaxInCirculation
  ) => {
    const newxAVAXprice =
      (totalValueOfAvaxCollateralOfTheProtocol +
        totalValueOfAvaxCollateralOfTheProtocol * (changeInXavaxPrice / 100) -
        ausdMarketCap) /
      numberOfXavaxInCirculation;
    set({ newxAVAXprice });
  },
}));

// new xAVAX position of user
export const useNewxAVAXpositionOfUser = create((set) => ({
  newxAVAXpositionOfUser: 0,
  calculateNewxAVAXpositionOfUser: (newxAVAXprice, xAVAXminted) => {
    const newxAVAXpositionOfUser = newxAVAXprice * xAVAXminted;
    set({ newxAVAXpositionOfUser });
  },
}));

// amount of AVAX per user
export const useAmountOfAvaxPerUser = create((set) => ({
  amountOfAvaxPerUser: 0,
  calculateAmountOfAvaxPerUser: (
    newxAVAXpositionOfUser,
    avaxPrice,
    changeInXavaxPrice
  ) => {
    const amountOfAvaxPerUser =
      (newxAVAXpositionOfUser * 1) /
      (avaxPrice * 1 + (avaxPrice * 1 * changeInXavaxPrice) / 100);
    set({ amountOfAvaxPerUser });
  },
}));

//change in dollar value

export const useChangeInDollarValue = create((set) => ({
  changeInDollarValue: 0,
  calculateChangeInDollarValue: (
    newxAVAXpositionOfUser,
    xAVAXpositionOfUser
  ) => {
    const changeInDollarValue =
      ((newxAVAXpositionOfUser - xAVAXpositionOfUser) / xAVAXpositionOfUser) *
      100;
    set({ changeInDollarValue });
  },
}));

// change in AVAX value
export const useChangeInAvaxValue = create((set) => ({
  changeInAvaxValue: 0,
  calculateChangeInAvaxValue: (amountOfAvaxPerUser, amountOfAvaxDeposited) => {
    const changeInAvaxValue =
      ((amountOfAvaxPerUser - amountOfAvaxDeposited) / amountOfAvaxDeposited) *
      100;
    set({ changeInAvaxValue });
  },
}));

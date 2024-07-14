"use client";
import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import {
  useAmountAvaxDepositedInProtocol,
  useAmountOfAvaxDeposited,
  useAmountOfAvaxPerUser,
  useAusdMarketCap,
  useAusdPrice,
  useAvaxPrice,
  useCalculateTotalValueOfAvaxCollateralOfTheProtocol,
  useChangeInAvaxPrice,
  useChangeInAvaxValue,
  useChangeInDollarValue,
  useCollateralizationRatio,
  useLeverage,
  useNewxAVAXpositionOfUser,
  useNewxAVAXprice,
  useNumberOfXavaxInCirculation,
  useNumUsdInCirculation,
  useXavaxMarketCap,
  useXAVAXminted,
  useXAVAXpositionOfUser,
  useXavaxPrice,
} from "@/store";

import InputAdornment from "@mui/material/InputAdornment";

function ProtocolSimluationCalculationFields() {
  const avaxPrice = useAvaxPrice((state) => state.avaxPrice);
  const setAvaxPrice = useAvaxPrice((state) => state.setAvaxPrice);
  const numUsdInCirculation = useNumUsdInCirculation(
    (state) => state.numUsdInCirculation
  );
  const amountOfAvaxDepositedProtocol = useAmountAvaxDepositedInProtocol(
    (state) => state.amountAvaxDepositedInProtocol
  );
  const setAmountAvaxProtocolDeposited = useAmountAvaxDepositedInProtocol(
    (state) => state.setAmountAvaxDepositedInProtocol
  );
  const setNumUsdInCirculation = useNumUsdInCirculation(
    (state) => state.setNumUsdInCirculation
  );
  const numXavaxInCirculation = useNumberOfXavaxInCirculation(
    (state) => state.numberOfXavaxInCirculation
  );
  const setNumAvaxInCirculation = useNumberOfXavaxInCirculation(
    (state) => state.setNumberOfAvaxInCirculation
  );

  const totalValueOfAvaxCollateralOfTheProtocol =
    useCalculateTotalValueOfAvaxCollateralOfTheProtocol(
      (state) => state.totalValueOfAvaxCollateralOfTheProtocol
    );

  const collaterizationRatio = useCollateralizationRatio(
    (state) => state.collateralizationRatio
  );

  const aUsdMarketCap = useAusdMarketCap((state) => state.aUsdMarketCap);
  const xAVAXmarketCap = useXavaxMarketCap((state) => state.xAvaxMarketCap);
  const xavaxPrice = useXavaxPrice((state) => state.xAvaxPrice);

  //trading simulation
  const avaxDeposited = useAmountOfAvaxDeposited(
    (state) => state.amountOfAvaxDeposited
  );
  const setAvaxDeposited = useAmountOfAvaxDeposited(
    (state) => state.setAmountOfAvaxDeposited
  );
  const changeInAvaxPrice = useChangeInAvaxPrice(
    (state) => state.changeInAvaxPrice
  );
  const setChangeInAvaxPrice = useChangeInAvaxPrice(
    (state) => state.setChangeInAvaxPrice
  );
  const xavaxMinted = useXAVAXminted((state) => state.xAVAXminted);

  const newXavaxPrice = useNewxAVAXprice((state) => state.newxAVAXprice);
  const newXvaxPosition = useNewxAVAXpositionOfUser(
    (state) => state.newxAVAXpositionOfUser
  );
  const xavaxPosition = useXAVAXpositionOfUser(
    (state) => state.xAVAXpositionOfUser
  );
  const amountOfAvaxPerUser = useAmountOfAvaxPerUser(
    (state) => state.amountOfAvaxPerUser
  );

  //calculation functions
  const calculateTotalValueOfAvaxCollateralOfTheProtocol =
    useCalculateTotalValueOfAvaxCollateralOfTheProtocol(
      (state) => state.calculateTotalValueOfAvaxCollateralOfTheProtocol
    );

  const calculateAusdMarketCap = useAusdMarketCap(
    (state) => state.calculateAusdMarketCap
  );

  const calculateAusdPrice = useAusdPrice((state) => state.calculateAusdPrice);

  const calculateXAVAXmarketCap = useXavaxMarketCap(
    (state) => state.calculateXavaxMarketCap
  );

  const calculateXavaxPrice = useXavaxPrice(
    (state) => state.calculateXavaxPrice
  );

  const calculateCollaterizationRatio = useCollateralizationRatio(
    (state) => state.calculateCollateralizationRatio
  );
  const calculateLeverage = useLeverage((state) => state.calculateLeverage);

  //trading simulation

  const calculateXAVAXminted = useXAVAXminted(
    (state) => state.calculateXavaxMinted
  );

  const calculateXavaxPositionUser = useXAVAXpositionOfUser(
    (state) => state.calculatexAVAXpositionOfUser
  );

  const calculateNewXavaxPrice = useNewxAVAXprice(
    (state) => state.calculateNewXavaxPrice
  );

  const calculateNewXavaxPosition = useNewxAVAXpositionOfUser(
    (state) => state.calculateNewxAVAXpositionOfUser
  );

  const calculateChangeInDollarValue = useChangeInDollarValue(
    (state) => state.calculateChangeInDollarValue
  );

  const calculateChangeInAvaxValue = useChangeInAvaxValue(
    (state) => state.calculateChangeInAvaxValue
  );

  const calculateAmountOfAvaxUserHave = useAmountOfAvaxPerUser(
    (state) => state.calculateAmountOfAvaxPerUser
  );

  //calculate total value of avax collateral of the protocol
  useEffect(() => {
    calculateTotalValueOfAvaxCollateralOfTheProtocol(
      avaxPrice,
      amountOfAvaxDepositedProtocol
    );
  }, [amountOfAvaxDepositedProtocol, avaxPrice]);

  //calculate aUSD market cap
  useEffect(() => {
    calculateAusdMarketCap(
      collaterizationRatio,
      numUsdInCirculation,
      totalValueOfAvaxCollateralOfTheProtocol
    );
  }, [
    collaterizationRatio,
    numUsdInCirculation,
    totalValueOfAvaxCollateralOfTheProtocol,
  ]);

  //aUSD price calculation, xAVAX market cap calculation and collaterization ratio calculation
  useEffect(() => {
    calculateAusdPrice(
      totalValueOfAvaxCollateralOfTheProtocol,
      aUsdMarketCap,
      numUsdInCirculation
    );

    calculateXAVAXmarketCap(
      totalValueOfAvaxCollateralOfTheProtocol,
      numUsdInCirculation * 1,
      aUsdMarketCap
    );

    calculateCollaterizationRatio(
      totalValueOfAvaxCollateralOfTheProtocol,
      numUsdInCirculation
    );
  }, [
    totalValueOfAvaxCollateralOfTheProtocol,
    aUsdMarketCap,
    numUsdInCirculation,
  ]);

  // xAVAX price calculation
  useEffect(() => {
    calculateXavaxPrice(
      totalValueOfAvaxCollateralOfTheProtocol,
      aUsdMarketCap,
      xAVAXmarketCap,
      numXavaxInCirculation
    );
  }, [
    totalValueOfAvaxCollateralOfTheProtocol,
    aUsdMarketCap,
    xAVAXmarketCap,
    numXavaxInCirculation,
  ]);

  // leverage calculation
  useEffect(() => {
    calculateLeverage(xAVAXmarketCap, aUsdMarketCap);
  }, [xAVAXmarketCap, aUsdMarketCap]);

  //trading simulation calculations
  // xAVAX minted calculation
  useEffect(() => {
    calculateXAVAXminted(avaxDeposited, avaxPrice, xavaxPrice);
  }, [avaxDeposited, avaxPrice, xavaxPrice]);

  //
  useEffect(() => {
    calculateXavaxPositionUser(xavaxMinted, xavaxPrice);
  }, [xavaxMinted, xavaxPrice]);

  useEffect(() => {
    calculateNewXavaxPrice(
      totalValueOfAvaxCollateralOfTheProtocol,
      changeInAvaxPrice,
      aUsdMarketCap,
      numXavaxInCirculation
    );
  }, [
    totalValueOfAvaxCollateralOfTheProtocol,
    changeInAvaxPrice,
    aUsdMarketCap,
    numXavaxInCirculation,
  ]);

  useEffect(() => {
    calculateNewXavaxPosition(newXavaxPrice, xavaxMinted);
  }, [newXavaxPrice, xavaxMinted]);

  useEffect(() => {
    calculateChangeInDollarValue(newXvaxPosition, xavaxPosition);
  }, [newXvaxPosition, xavaxPosition]);

  useEffect(() => {
    calculateAmountOfAvaxUserHave(
      newXvaxPosition,
      avaxPrice,
      changeInAvaxPrice
    );
  }, [newXvaxPosition, avaxPrice, changeInAvaxPrice]);

  useEffect(() => {
    calculateChangeInAvaxValue(amountOfAvaxPerUser, avaxDeposited);
  }, [amountOfAvaxPerUser, avaxDeposited]);

  //handling mass and speed of light changes
  const handleAvaxPriceChange = (e) => {
    setAvaxPrice(e.target.value);
  };
  const handleNumUsdInCirculationChange = (e) => {
    setNumUsdInCirculation(e.target.value);
  };
  const handleNumAvaxInCirculationChange = (e) => {
    setNumAvaxInCirculation(e.target.value);
  };
  const handleAvaxProtocolDepositedChange = (e) => {
    setAmountAvaxProtocolDeposited(e.target.value);
  };

  return (
    <div className="p-3 flex flex-row ">
      <div className="m-5 w-[45rem] border-r-2">
        <h1 className="text-2xl font-bold">Protocol Simulation</h1>
        <TextField
          id="outlined-number"
          label="AVAX price"
          className="m-5"
          onChange={(e) => handleAvaxPriceChange(e)}
          type="number"
          value={avaxPrice}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          id="outlined-number"
          label="Amount of AVAX Deposited "
          className="m-5 "
          type="number"
          value={amountOfAvaxDepositedProtocol}
          onChange={(e) => handleAvaxProtocolDepositedChange(e)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="USD in circulation"
          className="m-5"
          onChange={(e) => handleNumUsdInCirculationChange(e)}
          type="number"
          value={numUsdInCirculation}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-number"
          label=" xAVAX in circulation"
          className="m-5"
          onChange={(e) => handleNumAvaxInCirculationChange(e)}
          type="number"
          value={numXavaxInCirculation}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className="m-5 w-[40rem]">
        <h1 className="text-2xl font-bold ">Trading Simulation</h1>

        <TextField
          id="outlined-number"
          label="Amount of AVAX Deposite"
          className="m-5"
          onChange={(e) => setAvaxDeposited(e.target.value)}
          type="number"
          value={avaxDeposited}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Change in AVAX Price"
          className="m-5"
          onChange={(e) => setChangeInAvaxPrice(e.target.value)}
          type="number"
          value={changeInAvaxPrice}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">%</InputAdornment>,
          }}
        />
      </div>
    </div>
  );
}

export default ProtocolSimluationCalculationFields;

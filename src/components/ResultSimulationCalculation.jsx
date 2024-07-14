import {
  useAmountAvaxDepositedInProtocol,
  useAmountOfAvaxPerUser,
  useAusdMarketCap,
  useAusdPrice,
  useAvaxPrice,
  useCalculateTotalValueOfAvaxCollateralOfTheProtocol,
  useChangeInAvaxValue,
  useChangeInDollarValue,
  useCollateralizationRatio,
  useLeverage,
  useNewxAVAXpositionOfUser,
  useNewxAVAXprice,
  useXavaxMarketCap,
  useXAVAXminted,
  useXAVAXpositionOfUser,
  useXavaxPrice,
} from "@/store";
import InputAdornment from "@mui/material/InputAdornment";
import { TextField } from "@mui/material";
import React from "react";

function ResultSimulationCalculation() {
  const totalValueOfAvaxCollateral =
    useCalculateTotalValueOfAvaxCollateralOfTheProtocol(
      (state) => state.totalValueOfAvaxCollateralOfTheProtocol
    );
  const aUsdMarketCap = useAusdMarketCap((state) => state.aUsdMarketCap);
  const aUsdPrice = useAusdPrice((state) => state.aUsdPrice);
  const xAvaxMarketCap = useXavaxMarketCap((state) => state.xAvaxMarketCap);
  const xAvaxPrice = useXavaxPrice((state) => state.xAvaxPrice);
  const leverage = useLeverage((state) => state.leverage);
  const collateralizationRatio = useCollateralizationRatio(
    (state) => state.collateralizationRatio
  );
  //trading simulation
  const xvaxMinted = useXAVAXminted((state) => state.xAVAXminted);
  const xvaxPositionValue = useXAVAXpositionOfUser(
    (state) => state.xAVAXpositionOfUser
  );
  const newXavaxPrice = useNewxAVAXprice((state) => state.newxAVAXprice);
  const newXavaxPositionValue = useNewxAVAXpositionOfUser(
    (state) => state.newxAVAXpositionOfUser
  );
  const amountOfAvaxUserHave = useAmountOfAvaxPerUser(
    (state) => state.amountOfAvaxPerUser
  );
  const increaseDecreaseInDollarValue = useChangeInDollarValue(
    (state) => state.changeInDollarValue
  );
  const increaseDecreaseInAvaxValue = useChangeInAvaxValue(
    (state) => state.changeInAvaxValue
  );

  return (
    <div className="flex flex-row bg-white border-t-2 w-full  p-10">
      <div className=" m-5 border-r-2 w-[45rem]">
        <TextField
          id="outlined-number"
          label="Total Value of AVAX Collateral"
          className="m-5"
          type="number"
          disabled
          value={totalValueOfAvaxCollateral}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          id="outlined-number"
          label="aUSD Market Cap "
          className="m-5"
          disabled
          value={aUsdMarketCap}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="outlined-number"
          label="aUSD Price"
          className="m-5"
          disabled
          value={aUsdPrice}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          id="outlined-number"
          label="xAVAX Market Cap"
          className="m-5"
          disabled
          value={xAvaxMarketCap}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          id="outlined-number"
          label="xAVAX Price"
          disabled
          value={xAvaxPrice}
          className="m-5"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />

        <TextField
          id="outlined-number"
          label="Leverage"
          disabled
          value={leverage}
          className="m-5"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Collateralization Ratio"
          className="m-5"
          disabled
          value={collateralizationRatio}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">%</InputAdornment>,
          }}
        />
      </div>
      <div className=" m-5 w-[40rem]">
        <TextField
          id="outlined-number"
          label="xAVAX Minted"
          className="m-5"
          disabled
          value={xvaxMinted}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Value of the xAVAX Position"
          className="m-5"
          disabled
          value={xvaxPositionValue}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          id="outlined-number"
          label="New xAVAX Price"
          className="m-5"
          disabled
          value={newXavaxPrice}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          id="outlined-number"
          label="New Value of the xAVAX Position"
          className="m-5"
          disabled
          value={newXavaxPositionValue}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          id="outlined-number"
          label="Amount of AVAX User Have"
          className="m-5"
          disabled
          value={amountOfAvaxUserHave}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Increase/Decrease in Dollar Value"
          className="m-5"
          disabled
          value={increaseDecreaseInDollarValue}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">%</InputAdornment>,
          }}
        />
        <TextField
          id="outlined-number"
          label="Increase/Decrease in AVAX Value"
          className="m-5"
          disabled
          value={increaseDecreaseInAvaxValue}
          type="number"
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

export default ResultSimulationCalculation;

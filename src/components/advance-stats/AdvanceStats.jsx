import { useState } from "react";

const AdvanceStats = () => {
  const [individualAssistsPercent, setIndividualAssistsPercent] = useState();
  // const [individualReboundPercent, setIndividualReboundPercent] = useState();

  function individualAssistPerc(assists, MP, TMP, TFGM, FGM) {
    setIndividualAssistsPercent(
      (100 * assists) / ((MP / (TMP / 5)) * TFGM - FGM)
    );
  }

  function submitHemdlerAssistsPerc(e) {
    e.preventDefault();
    individualAssistPerc(
      e.target.assists.value,
      e.target.MP.value,
      e.target.TMP.value,
      e.target.TFGM.value,
      e.target.FGM.value
    );
  }

  // function individualReboundPerc(rebounds, TR, OPTR, MP, TMP) {
  //   setIndividualReboundPercent(
  //     (100 * (rebounds * (TMP / 5))) / (MP * (TR + OPTR))
  //   );
  // }

  return (
    <div>
      <form
        className="general assists-perc"
        onSubmit={submitHemdlerAssistsPerc}
      >
        <input
          type="number"
          name="assists"
          id="assists"
          placeholder="מספר אסיסטים"
        />
        <input type="number" name="MP" id="MP" placeholder="דקות משחק" />
        <input
          type="number"
          name="TMP"
          id="TMP"
          placeholder="זמן משחק של כל הקבוצה"
        />
        <input
          type="number"
          name="TFGM"
          id="TFGM"
          placeholder="סלי שדה קבוצתיים"
        />
        <input type="number" name="FGM" id="FGM" placeholder="סלי שדה" />
        <input type="submit" />
      </form>
      <div>{individualAssistsPercent}</div>
      {/* <div>
        <div onClick={() => individualReboundPerc(17, 46, 88, 30, 240)}>
          Rebound Percentage
        </div>
        <div>{individualReboundPercent}</div>
      </div> */}
    </div>
  );
};

export default AdvanceStats;

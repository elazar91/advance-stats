import { useState } from "react";
import PlayerStats from "./player-stats/PlayerStats";

const AdvanceStats = () => {
  const [individualAssistsPercent, setIndividualAssistsPercent] = useState();
  const [individualTS, setIndividualTS] = useState();

  function submitHemdlerAssistsPerc(e) {
    e.preventDefault();
    setIndividualAssistsPercent(
      PlayerStats.ast(
        // e.target.assists.value,
        e.target.MP.value,
        e.target.TMP.value
        // e.target.TFGM.value,
        // e.target.FGM.value
      )
    );
  }

  function TSHeandler(e) {
    e.preventDefault();
    setIndividualTS(
      PlayerStats.ts(e.target.PTS.value, e.target.FGA.value, e.target.FTA.value)
    );
  }

  return (
    <div>
      {/* <form
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
      <div>{individualAssistsPercent}</div> */}
      <form onSubmit={TSHeandler}>
        <input type="number" name="PTS" id="PTS" placeholder="נקודות" />
        <input type="number" name="FGA" id="FGA" placeholder="זריקות מהשדה" />
        <input type="number" name="FTA" id="FTA" placeholder="זריקות עונשין" />
        <input type="submit" />
      </form>
      <div>{individualTS}</div>
    </div>
  );
};

export default AdvanceStats;

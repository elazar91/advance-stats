
const PlayerStats = {
  //USG
   usg: (FGA, FTA, TO, TMP, MP, TFGA, TFTA, TTO) => {
    return (
      (100 * ((FGA + 0.44 * FTA + TO) * (TMP / 5))) /
      (MP * (TFGA + 0.44 * TFTA + TTO))
    );
  },
  //eFG
   efg: (FGM, THREEPM, FGA) => {
    return (FGM + 0.5 * THREEPM) / FGA;
  },
  //%TS
   ts: (PTS, FGA, FTA) => {
    return PTS / (2 * (FGA + 0.44 * FTA));
  },
  //%AST
   ast: (Assists, MP, TMP, TFGM, FGM) => {
    return (100 * Assists) / ((MP / (TMP / 5)) * TFGM - FGM);
  },
  //%TREB
   treb: (TR, TMP, MP, TTR, OppTTR) => {
    return (100 * (TR * (TMP / 5))) / (MP * (TTR + OppTTR));
  },
  //%OREB
   oreb: (OR, TMP, MP, TOR, OppTDR) => {
    return (100 * (OR * (TMP / 5))) / (MP * (TOR + OppTDR));
  },
  //%DREB
   dreb: (DR, TMP, MP, TDR, OppTOR) => {
    return (100 * (DR * (TMP / 5))) / (MP * (TDR + OppTOR));
  },
  //%BLK
   blk: (BLK, TMP, MP, OPPFGA, OPPTHREEPA) => {
    return (100 * (BLK * (TMP / 5))) / (MP * (OPPFGA - OPPTHREEPA));
  },
  //%STL
   stl: (STL, TMP, MP, OPPPOSS) => {
    return (100 * (STL * (TMP / 5))) / (MP * OPPPOSS);
  },
  //%TOV
  tov: (PTOV, FGA, FTA, TTOV) => {
    return 100 * PTOV / (FGA + 0.44 * FTA + TTOV)
  }
};

export default PlayerStats;


const PlayerStats = {
  //USG
   usg: (FGA, FTA, TO, TMP, MP, TFGA, TFTA, TTO) => (
      (100 * ((FGA + 0.44 * FTA + TO) * (TMP / 5))) /
      (MP * (TFGA + 0.44 * TFTA + TTO))
    ),
  //eFG
   efg: (FGM, THREEPM, FGA) => (FGM + 0.5 * THREEPM) / FGA,
  //%TS
   ts: (PTS, FGA, FTA) => PTS / (2 * (FGA + 0.44 * FTA)),
  //%AST
  //  ast: (Assists, MP, TMP, TFGM, FGM) => (100 * Assists) / ((MP / (TMP / 5)) * TFGM - FGM),
  //%TREB
  //  treb: (TR, TMP, MP, TTR, OppTTR) => (100 * (TR * (TMP / 5))) / (MP * (TTR + OppTTR)),
  //%OREB
  //  oreb: (OR, TMP, MP, TOR, OppTDR) => (100 * (OR * (TMP / 5))) / (MP * (TOR + OppTDR)),
  //%DREB
  //  dreb: (DR, TMP, MP, TDR, OppTOR) =>(100 * (DR * (TMP / 5))) / (MP * (TDR + OppTOR)),
  //%BLK
  //  blk: (BLK, TMP, MP, OPPFGA, OPPTHREEPA) => (100 * (BLK * (TMP / 5))) / (MP * (OPPFGA - OPPTHREEPA)),
  //%STL
  //  stl: (STL, TMP, MP, OPPPOSS) => (100 * (STL * (TMP / 5))) / (MP * OPPPOSS),
  //%TOV
  // tov: (PTOV, FGA, FTA, TTOV) => 100 * PTOV / (FGA + 0.44 * FTA + TTOV)
};

export default PlayerStats;

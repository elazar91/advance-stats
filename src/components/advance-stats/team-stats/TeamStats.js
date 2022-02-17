const TeamStats = {
  // Possission
  poss: (FGA, FTA, OReb, Oreb, OppDReb, FGM, TO) => FGA + 0.44 * FTA - (1.07 * (OReb/Oreb+OppDReb)) * (FGA-FGM) + TO,
  // ORTG - Offencive Rating
  ortg: (TPoss, OppPoss, Pts) =>100 / (TPoss + OppPoss) * Pts,
  // DRTG - Defencive Rating
  drtg: (TPoss, OppPoss, OppPts) => 100 / (TPoss + OppPoss) * OppPts,
  // STL%
  stlp: (TSTL, OppPoss) => (TSTL/OppPoss) * 100,
  // BLK%
  blkp: (TBLK, OppFGA, OppTHREEFGA) => (TBLK / OppFGA-OppTHREEFGA) * 100,
  // Team AST %
  tast: (TAST, TFGM) => (TAST / TFGM) * 100,
  // Defensive Efficiency
  dr: (TmPoss, OppPoss, OppPts) => 100 / (TmPoss + OppPoss) * OppPts,
  // Offensive Efficiency
  or: (TmPoss, OppPoss, Pts) => 100 / (TmPoss + OppPoss) * Pts,
  // NRGT - Net Rating
  nrgt: (PTS, OppPTS, Poss) => 100 * ((PTS - OppPTS) / Poss),
  // Pace
  pace: (minutes, TmPoss, OppPoss, TmMP) => minutes * ((TmPoss + OppPoss) / (2 * (TmMP / 5))),
  // Play
  // 3PR - 3 Point Rate
  // FTR - Free Throw Rate
};

export default TeamStats;

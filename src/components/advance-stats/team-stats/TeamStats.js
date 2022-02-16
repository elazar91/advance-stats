const TeamStats = {
  // Possission
  poss: (FGA, FTA, OReb, Oreb, OppDReb, FGM, TO) => {
    return FGA + 0.44 * FTA - (1.07 * (OReb/Oreb+OppDReb)) * (FGA-FGM) + TO
  },
  // ORTG - Offencive Rating
  ortg: (TPoss, OppPoss, Pts) => {
    return 100 / (TPoss + OppPoss) * Pts
  },
  // DRTG - Defencive Rating
  drtg: (TPoss, OppPoss, OppPts) => {
    return 100 / (TPoss + OppPoss) * OppPts
  },
  // STL % = (Team STL/Opp Poss) * 100
  // BLK % = (Team BLK / OppFGA-Opp 3FGA) * 100 
  // Team AST % = (Team AST / Team FGM) * 100
  // Assist Value
  // Team AST Ratio = (Team AST / (TFGA + 0.44. * TFTA + TTO)) * 100
  // Team TO Ratio = (Team TO / (TFGA + 0.44. * TFTA + TTO)) * 100
  // TOReb % = (TOreb / TOreb + OppDReb) * 100
  // TDreb % = (TDreb / TDreb + OppOReb) * 100
  // TTReb % = (TTReb / Treb + OppTReb) * 100

  // Defensive Efficiency
  // Offensive efficiency
  // NRGT - Net Rating
  // Play
  // Pace
  // 3PR - 3 Point Rate
  // FTR - Free Throw Rate
};

export default TeamStats;

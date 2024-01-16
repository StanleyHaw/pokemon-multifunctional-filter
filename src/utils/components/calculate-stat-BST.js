export function calculateTotalBaseStats(data) {
  let totalStats = 0;

  for (const stat in data.baseStats) {
    if (data.baseStats[stat] && typeof data.baseStats[stat] === 'number') {
      totalStats += data.baseStats[stat];
    }
  }

  return totalStats;
}

export const RecommendationEngine = {
  recommendSize: (measurements, sizeChart) => {
    if (!sizeChart || sizeChart.length === 0) return null;
    let bestMatch = null;
    let minDiff = Infinity;
    for (const entry of sizeChart) {
      const diff = Math.abs((entry.chest || 0) - (measurements.chest || 0));
      if (diff < minDiff) {
        minDiff = diff;
        bestMatch = entry;
      }
    }
    return {
      size: bestMatch?.size || "Unknown",
      confidence: (100 - minDiff) / 100,
    };
  },
};

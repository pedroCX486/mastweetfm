import { ChartType } from "./interfaces/ChartType.enum.js";

export const settings = {
  retries: 3,
  retryAfterHowManySeconds: 5,
  topRankedCount: 5,
  daysToGetChartFrom: 30,
  chartContentType: ChartType.Both, // Artists, Tracks or Both
  postOnMastodon: false,
  postOnMisskey: true,
  postOnPleroma: false
}

import { convertDate } from "./convertDate";

export const settingChartData = (
  setChartData,
  prices1,
  coin1,
  coin2,
  prices2
) => {
  setChartData({
    labels: prices1.map((data) => convertDate(data[0])),
    datasets: [
      {
        label: coin1?.name ?? "",
        data: prices1.map((data) => data[1]),
        borderWidth: 1,
        fill: true,
        tension: 0.25,
        backgroundColor: prices2 ? "transparent" : "rgba(58, 128, 233,0.2)",
        borderColor: "#35b1ce",
        pointRadius: 0,
        yAxisID: "y1",
      },
      prices2 && {
        label: coin2?.name ?? "",
        data: prices2.map((data) => data[1]),
        borderWidth: 1,
        fill: true,
        tension: 0.25,
        backgroundColor: prices2 ? "transparent" : "rgb(0, 189, 76,0.2)",
        borderColor: "#00bd4c",
        pointRadius: 0,
        yAxisID: "y2",
      },
    ],
  });
};

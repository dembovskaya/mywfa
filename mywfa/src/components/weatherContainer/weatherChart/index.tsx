import { FC } from "react";
import { useAppSelector } from "../../../hooks";
import Chart from "react-apexcharts";

const WeatherChart: FC = () => {
  // @ts-ignore
  const days = useAppSelector(
    (state) => state.weather.displayedWeather.forecast?.forecastdays
  );
  const tempMax = days?.map((data) => data.day?.maxtemp);
  const tempMin = days?.map((data) => data.day?.mintemp);
  const date = days?.map((data) => data.date);

  const chart: any = {
    series: [
      {
        name: "max t°",
        data: tempMax,
      },
      {
        name: "min t°",
        data: tempMin,
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
        parentHeightOffset: 0,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      fill: {
        colors: ["#fca311"],
        type: "gradient",
      },

      dataLabels: {
        enabled: true,
        textAnchor: "middle",
        offsetY: -5,
        style: {
          fontSize: "12px",
          colors: ["#fca311"],
        },
        background: {
          enabled: false,
        },
      },
      stroke: {
        curve: "smooth",
        colors: ["#fca311"],
        width: 2,
      },

      legend: {
        show: false,
      },
      grid: {
        show: true,
      },
      tooltip: {
        x: {
          show: false,
        },

        fixed: {
          enabled: true,
        },
      },
      xaxis: {
        type: "numeric ",
        categories: date,
        crosshairs: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        show: true,
        max: (weatherTemp: number) => {
          return weatherTemp + 5;
        },
        min: (weatherTemp: number) => {
          return weatherTemp - 1;
        },
        labels: {
          offsetX: -10,
        },
      },
    },
  };

  return (
    <Chart
      options={chart.options}
      series={chart.series}
      type="area"
      height={350}
    />
  );
};

export default WeatherChart;

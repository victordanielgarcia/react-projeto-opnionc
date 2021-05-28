import React from "react";

import { ResponsiveLine } from "@nivo/line";
import { useEffect } from "react";
import moment from "moment";
import { useState } from "react";

function LineChart(props) {
  const { searchStartDate, searchEndDate, setVotesTotal } = props;
  const [chartData, setChartData] = useState([]);

  const CustomSymbol = ({ size, color, borderWidth, borderColor }) => (
    <g>
      <circle
        fill="#fff"
        r={size / 2}
        strokeWidth={borderWidth}
        stroke={borderColor}
      />
      <circle
        r={size / 5}
        strokeWidth={borderWidth}
        stroke={borderColor}
        fill={color}
        fillOpacity={0.35}
      />
    </g>
  );

  useEffect(() => {
    const dayLength = moment(searchEndDate).diff(searchStartDate, "days");
    const countDays = [];
    let count = 0;
    if (dayLength > 0) {
      for (let i = 0; i <= dayLength; i += 1) {
        const newValue = Math.floor(Math.random() * 100);
        const newData = {
          x: moment(searchEndDate).subtract(i, "d").format("DD/MM"),
          y: newValue,
        };
        count += newValue;
        countDays.unshift(newData);
      }
      setChartData([{ id: "Votos", data: countDays }]);
      setVotesTotal(count);
    }
  }, [searchStartDate, searchEndDate, setVotesTotal]);

  return (
    <ResponsiveLine
      data={chartData}
      colors="#363740"
      borderColor="#fff"
      width={1000}
      height={350}
      margin={{ top: 25, right: 80, bottom: 70, left: 50 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Dias",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Votos",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={10}
      pointSymbol={CustomSymbol}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}

export default LineChart;

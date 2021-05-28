import React from "react";

import { ResponsiveBar } from "@nivo/bar";

function BarChart(props) {
  const { votesTotal } = props;
  const data = [
    {
      Estrelas: "0 Estrela",
      Votos: Math.floor(votesTotal * 0.02),
    },
    {
      Estrelas: "1 Estrelas",
      Votos: Math.floor(votesTotal * 0.05),
    },
    {
      Estrelas: "2 Estrelas",
      Votos: Math.floor(votesTotal * 0.15),
    },
    {
      Estrelas: "3 Estrelas",
      Votos: Math.floor(votesTotal * 0.2),
    },
    {
      Estrelas: "4 Estrelas",
      Votos: Math.floor(votesTotal * 0.16),
    },
    {
      Estrelas: "5 Estrelas",
      Votos: Math.floor(votesTotal * 0.4),
    },
  ];

  return (
    <ResponsiveBar
      data={data}
      keys={["Votos"]}
      colors="#363740"
      borderColor="#fff"
      indexBy="Estrelas"
      width={1000}
      height={350}
      margin={{ top: 25, right: 80, bottom: 60, left: 50 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Estrelas",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Votos",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor="#f9f9f9"
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );
}

export default BarChart;

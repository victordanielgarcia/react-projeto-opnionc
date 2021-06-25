import React from "react";

import { ResponsiveChoropleth } from "@nivo/geo";
import mapData from "./mapData.json";

function MapChart() {
  const data = [
    {
      id: 1,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 2,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 3,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 4,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 5,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 6,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 7,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 8,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 9,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 10,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 11,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 12,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 13,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 14,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 15,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 16,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 17,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 18,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 19,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 20,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 21,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 22,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 23,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 24,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 25,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 26,
      value: Math.floor(Math.random() * 500),
    },
    {
      id: 27,
      value: Math.floor(Math.random() * 500),
    },
  ];

  return (
    <ResponsiveChoropleth
      data={data}
      features={mapData.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="nivo"
      domain={[0, 500]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={400}
      projectionTranslation={[0.9, 0.15]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={true}
      graticuleLineColor="#dddddd"
      borderWidth={0.5}
      borderColor="#152538"
      legends={[
        {
          anchor: "bottom-left",
          direction: "column",
          justify: true,
          translateX: 20,
          translateY: -100,
          itemsSpacing: 0,
          itemWidth: 94,
          itemHeight: 18,
          itemDirection: "left-to-right",
          itemTextColor: "#444444",
          itemOpacity: 0.85,
          symbolSize: 18,
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000000",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}

export default MapChart;

import React from "react";

import { ResponsiveChoropleth } from "@nivo/geo";
import mapData from "./mapData.json";

function MapChart(props) {
  const { formAnswersList, reportType } = props;

  const data = [
    {
      id: 26,
      value: formAnswersList.filter(
        (item) => item.assessment_key === reportType.code,
      ).length,
    },
  ];

  return (
    <ResponsiveChoropleth
      data={data}
      features={mapData.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="nivo"
      domain={[
        0,
        formAnswersList.filter(
          (item) => item.assessment_key === reportType.code,
        ).length,
      ]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={600}
      projectionTranslation={[1, 0.15]}
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

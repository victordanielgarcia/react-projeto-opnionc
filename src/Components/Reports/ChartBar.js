import React, { useCallback } from "react";

import { ResponsiveBar } from "@nivo/bar";

function ChartBar() {
  const createChart = useCallback(() => {
    const data = [
      {
        country: "AD",
        "hot dog": 189,
        "hot dogColor": "hsl(91, 70%, 50%)",
        burger: 199,
        burgerColor: "hsl(173, 70%, 50%)",
        sandwich: 65,
        sandwichColor: "hsl(104, 70%, 50%)",
        kebab: 146,
        kebabColor: "hsl(229, 70%, 50%)",
        fries: 66,
        friesColor: "hsl(277, 70%, 50%)",
        donut: 59,
        donutColor: "hsl(157, 70%, 50%)",
      },
      {
        country: "AE",
        "hot dog": 14,
        "hot dogColor": "hsl(127, 70%, 50%)",
        burger: 114,
        burgerColor: "hsl(162, 70%, 50%)",
        sandwich: 59,
        sandwichColor: "hsl(58, 70%, 50%)",
        kebab: 105,
        kebabColor: "hsl(198, 70%, 50%)",
        fries: 140,
        friesColor: "hsl(7, 70%, 50%)",
        donut: 41,
        donutColor: "hsl(345, 70%, 50%)",
      },
      {
        country: "AF",
        "hot dog": 158,
        "hot dogColor": "hsl(232, 70%, 50%)",
        burger: 16,
        burgerColor: "hsl(304, 70%, 50%)",
        sandwich: 195,
        sandwichColor: "hsl(199, 70%, 50%)",
        kebab: 25,
        kebabColor: "hsl(304, 70%, 50%)",
        fries: 5,
        friesColor: "hsl(181, 70%, 50%)",
        donut: 63,
        donutColor: "hsl(54, 70%, 50%)",
      },
      {
        country: "AG",
        "hot dog": 40,
        "hot dogColor": "hsl(113, 70%, 50%)",
        burger: 148,
        burgerColor: "hsl(179, 70%, 50%)",
        sandwich: 140,
        sandwichColor: "hsl(91, 70%, 50%)",
        kebab: 165,
        kebabColor: "hsl(98, 70%, 50%)",
        fries: 167,
        friesColor: "hsl(305, 70%, 50%)",
        donut: 171,
        donutColor: "hsl(37, 70%, 50%)",
      },
      {
        country: "AI",
        "hot dog": 54,
        "hot dogColor": "hsl(148, 70%, 50%)",
        burger: 85,
        burgerColor: "hsl(74, 70%, 50%)",
        sandwich: 91,
        sandwichColor: "hsl(309, 70%, 50%)",
        kebab: 141,
        kebabColor: "hsl(136, 70%, 50%)",
        fries: 190,
        friesColor: "hsl(273, 70%, 50%)",
        donut: 77,
        donutColor: "hsl(24, 70%, 50%)",
      },
      {
        country: "AL",
        "hot dog": 47,
        "hot dogColor": "hsl(279, 70%, 50%)",
        burger: 183,
        burgerColor: "hsl(270, 70%, 50%)",
        sandwich: 68,
        sandwichColor: "hsl(11, 70%, 50%)",
        kebab: 116,
        kebabColor: "hsl(294, 70%, 50%)",
        fries: 193,
        friesColor: "hsl(221, 70%, 50%)",
        donut: 69,
        donutColor: "hsl(136, 70%, 50%)",
      },
      {
        country: "AM",
        "hot dog": 112,
        "hot dogColor": "hsl(230, 70%, 50%)",
        burger: 32,
        burgerColor: "hsl(30, 70%, 50%)",
        sandwich: 159,
        sandwichColor: "hsl(188, 70%, 50%)",
        kebab: 144,
        kebabColor: "hsl(307, 70%, 50%)",
        fries: 95,
        friesColor: "hsl(149, 70%, 50%)",
        donut: 61,
        donutColor: "hsl(8, 70%, 50%)",
      },
    ];
    return (
      <ResponsiveBar
        data={data}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 78, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
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
  }, []);

  return createChart();
}

export default ChartBar;

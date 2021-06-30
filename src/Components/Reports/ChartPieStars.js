import React, { useCallback, useEffect, useState } from 'react'

import { ResponsivePie } from '@nivo/pie'

function ChartPie(props) {
  const { formAnswersList, reportType } = props

  const [data, setData] = useState([
    {
      id: '★',
      label: '★',
      value: 0,
      color: 'hsl(16, 70%, 50%)',
    },
    {
      id: '★★',
      label: '★★',
      value: 0,
      color: 'hsl(15, 70%, 50%)',
    },
    {
      id: '★★★',
      label: '★★★',
      value: 0,
      color: 'hsl(82, 70%, 50%)',
    },
    {
      id: '★★★★',
      label: '★★★★',
      value: 0,
      color: 'hsl(209, 70%, 50%)',
    },
    {
      id: '★★★★★',
      label: '★★★★★',
      value: 0,
      color: 'hsl(54, 70%, 50%)',
    },
  ])

  function parseType(value) {
    switch (value) {
      case 1: {
        return '★'
      }
      case 2: {
        return '★★'
      }
      case 3: {
        return '★★★'
      }
      case 4: {
        return '★★★★'
      }
      case 5: {
        return '★★★★★'
      }
      default: {
        return 'Nenhum'
      }
    }
  }

  useEffect(() => {
    const newFormAnswersList = formAnswersList.filter(
      (item) => item.assessment_key === reportType.code,
    )
    let newData = []
    for (let i = 0; i < newFormAnswersList.length; i++) {
      // eslint-disable-next-line
      const response = newFormAnswersList[i].createdForm.map((item) => {
        if (item.type === 'avaliationStars' && item.answer > 0) {
          return item.answer
        }
      })
      const [newResponse] = response.filter((vR) => vR > 0)
      newData.push(parseType(newResponse))
    }
    const newResponse = newData.reduce(
      // eslint-disable-next-line
      (a, c) => ((a[c] = (a[c] || 0) + 1), a),
      Object.create(null),
    )
    setData(
      data.map((item) => {
        return { ...item, value: newResponse[item.id] }
      }),
    )
    // eslint-disable-next-line
  }, [])

  const createChart = useCallback(() => {
    return (
      <ResponsivePie
        data={data}
        theme={{
          labels: {
            text: { fontSize: '20px' },
          },
        }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'ruby',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'c',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'go',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'python',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'scala',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'lisp',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'elixir',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'javascript',
            },
            id: 'lines',
          },
        ]}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
      />
    )
  }, [data])

  return <>{createChart()}</>
}

export default ChartPie

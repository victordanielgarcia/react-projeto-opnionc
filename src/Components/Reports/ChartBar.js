import React, { useCallback, useEffect, useState } from 'react'

import { ResponsiveBar } from '@nivo/bar'
import moment from 'moment'

function ChartBar(props) {
  const { formAnswersList, reportType } = props

  const [data, setData] = useState([])

  useEffect(() => {
    const newFormAnswersList = formAnswersList.filter(
      (item) => item.assessment_key === reportType.code,
    )
    const last7Days = []
    const last7DaysName = []
    if (newFormAnswersList.length > 0) {
      for (let i = 0; i <= 6; i += 1) {
        last7Days.push(moment().subtract(i, 'd').format('MM-DD-YY'))

        const newSales = newFormAnswersList.filter(
          (item) =>
            moment().subtract(i, 'd').format('MM-DD-YY') ===
            moment(item.date, 'DD-MM-YYYY').format('MM-DD-YY'),
        )

        const newData = {
          weekDays: moment().subtract(i, 'd').format('ddd').toUpperCase(),
          respostas: newSales.length > 0 ? newSales.length : 0,
        }
        last7DaysName.push(newData)
      }
      setData(last7DaysName)
      console.log(last7DaysName)
    }
  }, [])

  const createChart = useCallback(() => {
    return (
      <ResponsiveBar
        data={data}
        keys={['respostas']}
        indexBy="weekDays"
        padding={0.5}
        margin={{ top: 40, bottom: 65, left: 100, right: 100 }}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors="#363740"
        borderColor="#fff"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'dias',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'vendas da semana',
          legendPosition: 'middle',
          legendOffset: -90,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="#f9f9f9"
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 10,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate
        motionStiffness={90}
        motionDamping={15}
      />
    )
  }, [data])

  return createChart()
}

export default ChartBar

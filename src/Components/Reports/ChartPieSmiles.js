import React, { useCallback, useEffect, useState } from 'react'

import { ResponsivePie } from '@nivo/pie'

import angry from '../../Assets/ANGRY.png'
import happy from '../../Assets/HAPPY.png'
import indiferent from '../../Assets/INDIFERENT.png'
import sad from '../../Assets/SAD.png'
import veryHappy from '../../Assets/VERY HAPPY.png'

function ChartPie(props) {
  const { formAnswersList, reportType } = props

  const [data, setData] = useState([
    {
      id: 'Péssimo',
      label: 'Péssimo ',
      value: 0,
      color: 'hsl(0, 100%, 30%)',
    },
    {
      id: 'Ruim',
      label: 'Ruim',
      value: 0,
      color: 'hsl(36, 100%, 50%)',
    },
    {
      id: 'Regular',
      label: 'Regular',
      value: 0,
      color: 'hsl(48, 100%, 50%)',
    },
    {
      id: 'Bom',
      label: 'Bom',
      value: 0,
      color: 'hsl(120, 100%, 40%)',
    },
    {
      id: 'Ótimo',
      label: 'Ótimo',
      value: 0,
      color: 'hsl(120, 100%, 20%)',
    },
  ])

  function parseType(value) {
    switch (value) {
      case 1: {
        return 'Péssimo'
      }
      case 2: {
        return 'Ruim'
      }
      case 3: {
        return 'Regular'
      }
      case 4: {
        return 'Bom'
      }
      case 5: {
        return 'Ótimo'
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
        if (item.type === 'avaliationSmiles' && item.answer > 0) {
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
        colors={{ scheme: 'nivo' }}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        fill={[
          {
            match: {
              id: 'Péssimo',
            },
            id: 'dots',
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

  return (
    <>
      <div
        className="p-pt-3 p-d-flex p-as-center p-jc-center smiles-lado"
        style={{ height: '100px', width: '100%' }}
      >
        <div className="p-d-flex p-flex-column">
          <img className="p-mx-2 report-smiles" src={angry} alt="Imagem" />
        </div>
        <div className="p-d-flex p-flex-column">
          <img className="p-mx-2 report-smiles" src={sad} alt="Imagem" />
        </div>
        <div className="p-d-flex p-flex-column">
          <img className="p-mx-2 report-smiles" src={indiferent} alt="Imagem" />
        </div>
        <div className="p-d-flex p-flex-column">
          <img className="p-mx-2 report-smiles" src={happy} alt="Imagem" />
        </div>
        <div className="p-d-flex p-flex-column">
          <img className="p-mx-2 report-smiles" src={veryHappy} alt="Imagem" />
        </div>
      </div>
      <div className="background-researches-smile">{createChart()}</div>
    </>
  )
}

export default ChartPie

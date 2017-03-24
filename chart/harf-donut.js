import { CommonParameter, createPieChartOption, } from './pie'

const p = JSON.parse(JSON.stringify(CommonParameter))
p.innerSize = { valueType: 'int', defaultValue: 50, description: 'inner size of donut', }
delete p.subTitle
export const HalfDonutParameter = p

export function createHalfDonutChartOption(series, drillDownSeries, parameter) {
  const option = createPieChartOption(series, drillDownSeries, parameter)

  const { mainTitle, innerSize, } = parameter

  option.plotOptions.pie.startAngle = -90
  option.plotOptions.pie.endAngle = 90
  option.plotOptions.pie.center = [ '50%', '75%', ]

  option.series[0].innerSize = `${innerSize}%`

  if (mainTitle !== '') {
    option.title.align = 'center'
    option.title.verticalAlign = 'middle'
    option.title.y = 40
  }

  return option
}


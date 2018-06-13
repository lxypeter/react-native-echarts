import echarts from './echarts.min';
import toString from '../../util/toString';

export default function renderChart(props) {
  const height = props.height || 400;
  const width = props.width;
  let mainWidth = '';
  if (width) {
    mainWidth = `document.getElementById('main').style.width = "${width}px";`;
  }
  console.log(props.option);
  return `
    document.getElementById('main').style.height = "${height}px";
    ${mainWidth}
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption(${toString(props.option)});
  `
}

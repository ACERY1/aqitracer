import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import './App.css';
import { Button, Toast, Card, Progress, WhiteSpace } from 'antd-mobile';
import createG2 from 'g2-react';
import { Stat } from 'g2';
import mockData from './mockData'; // 开发时mock数据
import myKey from './appKey'
import axios from 'axios'


const ngServer = ''
const dataURLPath = '/api/data'

const g2Config = {
  // [TODO]自定义图表配置
  axis: {
    labels: null
  }
}

class App extends Component {
  constructor () {
    super();
    this.state = {
      loadCent: 0,
      cityName: '...', // 城市名
      basicWidth: 750,
      basicHeight: 600,
      airData: null,
      cityData: null,
    }
  }

  componentWillMount () {
    const rate = window.innerWidth / 750 || 750;
    this.setState((prvState) => {
      return {
        basicWidth: prvState.basicWidth*rate,
        basicHeight: prvState.basicHeight*rate,
      }
    });
  }

  componentDidMount = () => {
    this.getMapInstance();
  }

  getDataByName = () => {
    if (this.state.cityName == '...') {
      return Toast.fail('未加载城市！')
    }

    // prod Code
    let cityName = this.state.cityName.replace(/市/g, '')
    axios.get(`${ngServer}${dataURLPath}?city=${cityName}&key=${myKey}`).then(res => {
      res = res.data
      if (res.resultcode == '200' && res.reason == 'SUCCESSED!') {
        let array = []
        Object.values(res.result[0] && res.result[0].lastTwoWeeks || {} ).forEach((item, index) => {
          let time = item.date.split('-')[2]
          array.push({
            time,
            AQI: parseInt(item.AQI)
          })
        })
        this.setState({
          airData: array,
          cityData: res.result[0].citynow
        });
      }else {
        return Toast.fail('空气质量数据加载错误！')
      }
    }).catch((err) => {
      Toast.fail(err.toString())
    })
    
    // testCODE
    // let res = mockData
    // console.log(res)
    // if (res.resultcode == '200' && res.reason == 'SUCCESSED!') {
    //   let array = []
    //   Object.values(res.result[0] && res.result[0].lastTwoWeeks || {} ).forEach((item, index) => {
    //     // let time = item.date.split(' ')[0].split('-')[1]+'-'+item.date.split(' ')[0].split('-')[2]
    //     // let time = item.date.split('-')[1] + '-' + item.date.split('-')[2]
    //     let time = item.date.split('-')[2]
    //     array.push({
    //       time,
    //       AQI: parseInt(item.AQI)
    //     })
    //   })
    //   this.setState({
    //     airData: array,
    //     cityData: res.result[0].citynow
    //   });
    // }
    // let res = mockData;
  }
  
  /**
   * 获取实例然后更新位置信息 城市级别
   * @param {Objec} ref BMAP实例
   */
  getMapInstance() {
      const BMap = window.BMap;
      const myCity = new BMap.LocalCity();
      myCity.get((result) => {
        Toast.info(`欢迎来到${result.name}`)
        this.setState({
          cityName: result.name,
          loadCent: 70,
        })
        setTimeout(() => {
          this.setState({
            loadCent: 99,
          });
        }, 1000)
        setTimeout(() => {
          this.setState({
            loadCent: 100,
          });
        }, 1500)
      });
  }
  
  render() {
    const {cityName, airData, loadCent, cityData} = this.state;
    // G2 is Here
    const Chart = createG2(chart => {
      chart.line().position('time*AQI').color('AQI')
      chart.axis('time', {
        // 【TODO】 之后优化下X轴刻度
        labels: null
      })
      chart.render();
    });
    return (
      <div className="App">
        {
          loadCent === 100 ? null : <Progress percent={loadCent} position="fixed" /> 
        }
        <div className="info">
          <p>你的位置：{cityName}</p>
        </div>

        {
        airData ? 
        <Card>
          <Card.Header
            title="空气质量监控"
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra={<span>{cityName}空气质量</span>}
          />
          <Card.Body>
            <div>空气质量综合评级：{cityData.quality}</div>
          </Card.Body>
          <Card.Footer content={`时间：${cityData.date}`} extra={<div>AQI指数{cityData.AQI}</div>} />
        </Card>   
        :
        null       
        }
        <WhiteSpace size="lg"/>
        <WhiteSpace size="lg"/>
        <WhiteSpace size="lg"/>
        <WhiteSpace size="lg"/>
        <WhiteSpace size="lg"/>
        {
          airData && 
          <Chart
            data = {airData || []}
            width = {this.state.basicWidth}
            height = {this.state.basicHeight}
            plotCfg = {g2Config}
          />
        }
        
        <div className="air-button">
          <Button type="primary" onClick={this.getDataByName}>获取空气质量信息</Button>
        </div>
      </div>
    );
  }
}

export default App;

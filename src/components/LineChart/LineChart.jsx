import React from 'react';
// import ReactDOM from 'react-dom';
import {Line} from '@ant-design/plots';
import {Col, Row} from 'antd';
import styled from 'styled-components';

const LineChart = () => {
  const data = [
    {
      time: '12:00',
      value: 59,
    },
    {
      time: '1:00',
      value: 40,
    },
    {
      time: '2:00',
      value: 66,
    },
    {
      time: '3:00',
      value: 5,
    },
    {
      time: '4:00',
      value: 61,
    },
    {
      time: '5:00',
      value: 56,
    },
    {
      time: '6:00',
      value: 69,
    },
    {
      time: '7:00',
      value: 77,
    },
    {
      time: '8:00',
      value: 90,
    },
    {
      time: '9:00',
      value: 38,
    },
    {
      time: '10:00',
      value: 57,
    },
    {
      time: '11:00',
      value: 30,
    },
  ];
  const config = {
    data,
    xField: 'time',
    yField: 'value',
    smooth: true,
    // label: {},
    lineStyle: {
      stroke: 'l(0) 0:#9747FF  1:#14F4C9',
      lineWidth: 4,
      strokeOpacity: 0.7,
      shadowColor: '#5B8FF9',
      shadowBlur: 10,
      shadowOffsetX: 5,
      shadowOffsetY: 5,
      cursor: 'pointer',
    },
    // point: {
    //   size: 5,
    //   shape: 'diamond',
    //   style: {
    //     fill: 'white',
    //     stroke: '#5B8FF9',
    //     lineWidth: 2,
    //   },
    // },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: '#000',
          fill: 'red',
        },
      },
    },
    interactions: [
      {
        type: 'marker-active',
      },
    ],
  };
  return (
    <LineChartStyle>
      <Row gutter={16} style={{padding: '30px'}}>
        <Col span={24}>
          <TitleStyle className="lineChart-title">Token Price</TitleStyle>
        </Col>
        <Col span={24}>
          <Line {...config} />
        </Col>
      </Row>
    </LineChartStyle>
  );
};

export default LineChart;

const TitleStyle = styled.h1`
  font-size: 32px;
  font-weight: 700;
`;

const LineChartStyle = styled.div`
  padding: 10px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background-color: #fff;
`;

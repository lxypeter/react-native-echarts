//lxypeter
import React, { Component } from 'react';
import { WebView, View, StyleSheet, Platform } from 'react-native';
import renderChart from './renderChart';
import echarts from './echarts.min';

export default class App extends Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.option !== this.props.option) {
      this.refs.chart.reload();
    }
  }

  render() {
    let source;
    const { width } = this.props;
    if (__DEV__) {
      source = require('./tpl.html');
    } else {
      source = Platform.OS === 'ios' ? require('./tpl.html') : { uri: 'file:///android_asset/tpl.html' };
    }
    const containerStyle = { flex: 1, backgroundColor: '#6c6c6c', height: this.props.height || 400 };
    const webViewStyle = { flex: 1, height: this.props.height || 400 }
    if (width) {
      containerStyle.width = width;
      webViewStyle.width = width;
    }
    return (
      <View style={containerStyle}>
        <WebView
          ref="chart"
          scrollEnabled = {false}
          injectedJavaScript = {renderChart(this.props)}
          style={webViewStyle}
          source={source}
          scalesPageToFit={Platform.OS === 'android' ? true : false}
        />
      </View>
    );
  }
}

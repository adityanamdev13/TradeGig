import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';

const {width} = Dimensions.get('window');

const DesktopUsageChart = () => {
  const chartHTML = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <style>
      html, body {
        margin: 0;
        padding: 0;
        background-color: #11150f ;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      #chart {
        width: 95%;
        height: 100%;
         touch-action: none;yy
    </style>
  </head>
  <body>
    <div id="chart"></div>
    <script>
      var options = {
          series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
          chart: {
          type: 'line',
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], 
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
        };
      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
    </script>
  </body>
  </html>
`;

  return (
    <View>
      <View style={styles.chartContainer}>
        <WebView
          originWhitelist={['*']}
          source={{html: chartHTML}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    height: 300,
    width: '100%',
    overflow: 'hidden',
  }
});

export default DesktopUsageChart;

import React from 'react';
import {View, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const BarCharts = ({title}) => {
  const navigation = useNavigation();
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
        background-color: #252823;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      #chart {
        width: 100%;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <div id="chart"></div>
    <script>
      var options = {
        chart: {
          type: 'bar',
          height: '100%',
          width: '100%',
          background: '#252823',
          stacked: true,
          toolbar: { show: false }
        },
        series: [
          {
            name: 'Stoploss',
            data: [-90, -70]
          },
          {
            name: 'Target',
            data: [97, 85]
          }
        ],
        xaxis: {
          categories: ['1', '2'],
          labels: { style: { colors: '#ffffff', fontSize: '12px' } },
          max: 100,
          min: -100
        },
        yaxis: {
          labels: { style: { colors: '#ffffff', fontSize: '12px' } },
        },
        grid: {
          show: true,
          borderColor: '#505050',
          strokeDashArray: 4,
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: true, 
            },
          },
        },
        legend: {
          position: 'top',
          labels: { colors: '#ffffff' },
        },
        colors: ['#ff6374', '#3adb76'],
        tooltip: {
          theme: 'dark',
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '50%',
            dataLabels: {
              position: 'center'
            }
          },
        },
        dataLabels: {
          enabled: true,
          style: {
            colors: ['#ffffff']
          },
          formatter: function (val) {
            return val + '%';
          }
        },
        responsive: [
          {
            breakpoint: 768,
            options: {
              plotOptions: {
                bar: {
                  barHeight: '60%',
                },
              },
            },
          },
        ],
      };
      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
    </script>
  </body>
  </html>
`;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity
        style={styles.zoombtn}
        onPress={() => navigation.navigate('Zoom Chart', {chartHTML})}>
        <MaterialIcons name="zoom-out-map" size={24} color="#fff" />
      </TouchableOpacity>

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
  container: {
    backgroundColor: '#252823',
    borderRadius: 16,
    overflow: 'hidden',
    marginHorizontal: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#084298',
    padding: 16,
  },
  chartContainer: {
    height: 300,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#1e1f21',
  },
  title: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: width * 0.045,
    fontWeight: '700',
    marginBottom: 16,
  },
  zoombtn: {
    padding: 10,
    paddingBottom: 10,
    position: 'absolute',
    right: 30,
    top: 25,
  },
});

export default BarCharts;

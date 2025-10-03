import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('window');

const Chart20 = ({title}) => {
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
        background-color: #0c0c0c;
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
        series: [{
          name: "High - 2013",
          data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
          name: "Low - 2013",
          data: [12, 11, 14, 18, 17, 13, 13]
        }],
        chart: {
          type: 'line',
          height: '100%',
          width: '100%',
          background: '#0c0c0c',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.5
          },
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth'
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.1
          }
        },
        markers: {
          size: 1
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          title: {
            text: 'Month',
            style: {
              color: '#fff'
            }
          },
          labels: {
            style: {
              colors: '#fff'
            }
          }
        },
        yaxis: {
          title: {
            text: 'Temperature',
            style: {
              color: '#fff'
            }
          },
          min: 5,
          max: 40,
          labels: {
            style: {
              colors: '#fff'
            }
          }
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5,
          labels: {
            colors: '#fff'
          }
        }
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

export default Chart20;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0c0c0c',
    borderRadius: 16,
    overflow: 'hidden',
    marginHorizontal: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#084298',
    padding: 16,
  },
  chartContainer: {
    height: 280,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#0c0c0c',
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
    right: 10,
    top: 30,
    zIndex:99
  },
});

import React from 'react';
import {View, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const CumulativeBarChart = ({
  title,
  colors = "['#FF0000', '#FF0000', '#0000FF', '#008000', '#0000FF', '#008000']",
}) => {
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
          toolbar:{
          show : false}
        },
    series: [
      {
        name: 'Sales',
        data: [10, 20, 15, 25, 30, 40]
      }
    ],
     legend: {
          labels: { colors: '#ffffff' },
        },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels: {
        style: {
          colors: '#fff' // Change the color of x-axis labels to white for visibility
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#fff' // Change the color of y-axis labels to white for visibility
        }
      }
    },
    plotOptions: {
      bar: {
        distributed: true
      }
    },
    colors: ${colors},
    dataLabels: {
      enabled: false
    },
    grid: {
      show: true,
      borderColor: '#555', // Color of grid lines
      strokeDashArray: 0, // Solid lines
      position: 'back', // Position of the grid lines
      xaxis: {
        lines: {
          show: true // Show vertical grid lines
        }
      },
      yaxis: {
        lines: {
          show: true // Show horizontal grid lines
        }
      }
    },
      };
      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
    </script>
  </body>
  </html>
`;

const navigation = useNavigation();
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
    top: 40,
    zIndex:999
  },
});

export default CumulativeBarChart;

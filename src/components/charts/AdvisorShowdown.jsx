import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const { width } = Dimensions.get('window');

const AdvisorShowdown = ({ title }) => {

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
          name: 'Series 1',
          data: [20, 100, 40, 30, 50, 80, 33]
        }],
        chart: {
          height: '100%',
          type: 'radar',
          background: '#0c0c0c',
          toolbar: { show: false }
        },
        dataLabels: { enabled: true },
        plotOptions: {
          radar: {
            size: 140,
            polygons: {
              strokeColors: '#f5f5f5',
              fill: { colors: ['#f8f8f8', '#fff'] }
            }
          }
        },
        colors: ['#FF4560'],
        markers: {
          size: 4,
          strokeColor: '#FF4560',
          strokeWidth: 2
        },
        tooltip: {
          y: { formatter: function(val) { return val; } }
        },
        xaxis: {
          categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          labels: { style: { colors: '#fff' } }
        },
        yaxis: {
          labels: {
            formatter: function(val, i) { return i % 2 === 0 ? val : ''; },
            style: { colors: '#fff' }
          }
        }
      };
      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
    </script>
  </body>
  </html>`;

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
          source={{ html: chartHTML }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0c0c0c',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#084298',
    padding: 16,
    marginHorizontal: 15,
    marginBottom: 20,
  },
  chartContainer: {
    height: 300,
    width: '100%',
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

export default AdvisorShowdown;
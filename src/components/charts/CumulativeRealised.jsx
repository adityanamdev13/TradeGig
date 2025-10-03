import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const { width } = Dimensions.get('window');

const CumulativeRealised = ({ title, color = `['#8e64de', '#ffd700']` }) => {
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
         touch-action: none;

      }
        .apexcharts-toolbar .apexcharts-menu-icon,
        .apexcharts-toolbar .apexcharts-reset-icon,
        .apexcharts-toolbar .apexcharts-pan-icon,
        .apexcharts-toolbar .apexcharts-selection-icon,
        .apexcharts-toolbar .apexcharts-home-icon {
          display: none !important;
        }

        .apexcharts-zoom-icon svg,
        .apexcharts-zoomin-icon svg,
        .apexcharts-zoomout-icon svg {
          fill: white !important;
          transform: scale(1.6); 
        }
 .apexcharts-zoomin-icon svg{
 margin-left : -20px
 }
        
    </style>
  </head>
  <body>
    <div id="chart"></div>
    <script>
      var options = {
        chart: {
          type: 'line',
          height: '100%',
          width: '100%',
          background: '#252823',
           zoom: {
              enabled: true,
              type: 'xy',
              autoScaleYaxis: true
            },
            toolbar: {
              show: false,
              tools: {
                download: false,
                selection: false,
                zoom: true,
                zoomin: true,
                zoomout: true,
                pan: false,
                reset: false
              }
            }
        },
        series: [
          {
            name: 'Solid Line',
            data: [0, 100, 200, 400, 300, 250, 150,400,500,600,750,800],
          },
          {
            name: 'Dashed Line',
            data: [0, 200, 250, 300, 700, 500, 650,500,450,300,350,400],
          },
        ],
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
          labels: { style: { colors: '#fff', fontSize: '12px' } },
        },
        yaxis: {
          labels: { style: { colors: '#ffffff', fontSize: '12px' } },
        },
        stroke: {
          width: 2,
           dashArray: [0, 8]
        },
        colors: ${color},
        grid: {
          borderColor: '#505050',
          strokeDashArray: "",
        },
        tooltip: {
          theme: 'dark',
        },
        legend: {
          labels: { colors: '#fff' },
          position: 'bottom',
        },
        responsive: [
          {
            breakpoint: 768,
            options: {
              stroke: {
                width: 3,
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

export default CumulativeRealised;

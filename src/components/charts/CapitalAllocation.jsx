import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const { width } = Dimensions.get('window');

const CapitalAllocation = ({ title }) => {
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
      ..apexcharts-toolbar .apexcharts-menu-icon,
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
          { name: 'Session Duration', data: [40, 50, 30, 20, 25, 15, 10], color: '#007bff' },
          { name: 'Page Views', data: [35, 45, 50, 20, 15, 25, 30], color: '#00ff7f', dashStyle: 'shortDash' },
          { name: 'Total Visits', data: [60, 80, 100, 70, 50, 90, 75], color: '#ffae00', dashStyle: 'dot' }
        ],
        xaxis: {
          categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan'],
          labels: { style: { colors: '#fff', fontSize: '12px' } },
        },
        yaxis: {
          labels: { style: { colors: '#fff', fontSize: '12px' } },
        },
         stroke: {
          width: 4,
           dashArray: [0,6,6]
        },
        grid: {  borderColor: '#fff',
          strokeDashArray: "", },
        tooltip: { theme: 'dark' },
        legend: {
          show: true,
          position: 'bottom',
          labels: { colors: '#fff' }
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
    backgroundColor: '#252823',
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

export default CapitalAllocation;
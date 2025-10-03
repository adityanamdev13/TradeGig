import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const NegativeP2D = ({ title }) => {
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
              name: 'Gross P/L%',
              data: [10, 0, -5, 5, 15, 20],
            },
            {
              name: 'Net P/L%',
              data: [0, -5, -10, 10, 15, 18],
            },
          ],
          xaxis: {
            categories: ['Jun', 'Feb', 'March', 'April', 'May', 'June'],
            labels: { style: { colors: '#fff', fontSize: '12px' } },
          },
          yaxis: {
            labels: { 
              style: { colors: '#ffffff', fontSize: '12px' },
              formatter: function (val) {
                return val + "%";
              },
            },
          },
          stroke: {
            curve: 'smooth',
            width: 2,
          },
          markers: {
            size: 4,
            colors: ['#8e64de', '#ffaa32'],
            strokeColors: '#ffffff',
            strokeWidth: 2,
          },
          colors: ['#8e64de', '#ff5733'],
          grid: {
            borderColor: '#505050',
            strokeDashArray: 4,
          },
          annotations: {
            yaxis: [
              {
                y: 0,
                borderColor: '#00FF00',
                label: {
                  text: 'Zero Line',
                  style: {
                    color: '#252823',
                    background: '#00FF00',
                  },
                },
                strokeDashArray: 4,
              },
            ],
          },
          tooltip: {
            theme: 'dark',
          },
          legend: {
            position: 'top',
            horizontalAlign: 'center',
            labels: {
              colors: '#ffffff',
            },
          },
          responsive: [
            {
              breakpoint: 768,
              options: {
                markers: {
                  size: 4,
                },
                stroke: {
                  width: 2,
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

export default NegativeP2D;

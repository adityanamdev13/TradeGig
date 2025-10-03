import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const { width } = Dimensions.get('window');

const Hitmap = ({ title }) => {
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
        background-color: #424242;
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
          type: 'heatmap',
          height: '100%',
          background: '#424242',
           toolbar: {
            show: false
        }
        },
        series: [
          {
            name: 'Row 1',
           data: [{x: '1', y: 10.1}, {x: '2', y: 6.3}, {x: '3', y: 4.6}, {x: '4', y: 8.3}, {x: '5', y: 4.5}, {x: '6', y: 9.9}]
          },
          {
            name: 'Row 2',
             data: [{x: '1', y: 6.9}, {x: '2', y: 2.5}, {x: '3', y: 3.4}, {x: '4', y: 6.4}, {x: '5', y: 7.1}, {x: '6', y: 1.1}]
          },
          {
            name: 'Row 3',
            data: [{x: '1', y: 2.3}, {x: '2', y: 3.1}, {x: '3', y: 4.9}, {x: '4', y: 3.0}, {x: '5', y: 2.9}, {x: '6', y: 3.5}]
          },
          {
            name: 'Row 4',
            data: [{x: '1', y: 1.9}, {x: '2', y: 2.1}, {x: '3', y: 1.1}, {x: '4', y: 3.1}, {x: '5', y: 3.4}, {x: '6', y: 1.5}]
          },
        ],
            colors: ['#FF4949', '#CF1414', '#8AFA0E', '#FF9999'], 
    dataLabels: {
        enabled: true,
        style: {
            colors: ['#000'], 
            fontSize: '24px'    
        },
        formatter: function(val) {
            return val.toFixed(1);
        }
    },
    xaxis: {
        labels: {
            show: false 
        },
        title: {
            text: '',
        }
    },
    yaxis: {
        labels: {
            show: false 
        },
        title: {
            text: '',
        }
    },
    grid: {
        borderColor: '#333',
        strokeDashArray: 0,
    },
    theme: {
        mode: 'dark',
    },
    plotOptions: {
        heatmap: {
           
            colorScale: {
                ranges: [
                    {
                        from: 0,
                        to: 2.5,
                        color: '#8AFA0E', 
                    },
                    {
                        from: 2.6,
                        to: 5.5,
                        color: '#FF9999', 
                    },
                    {
                        from: 5.6,
                        to: 8.5,
                        color: '#CF1414', 
                    },
                    {
                        from: 8.6,
                        to: 10,
                        color: '#FF4949', 
                    }
                ]
            }
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
    backgroundColor: '#424242',
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
    backgroundColor: '#424242',
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

export default Hitmap;

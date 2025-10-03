import React from 'react';
import {View, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('window');

const Chart32 = ({title}) => {

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
        series: [{
          name: 'Cash Flow',
          data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
            5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6,
            -48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
          ]
        }],
        chart: {
          type: 'bar',
          height: "100%",
          background: '#252823',
          zoom: {
              enabled: true,
              type: 'xy',
              autoScaleYaxis: true
            },toolbar: {
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
        plotOptions: {
          bar: {
            colors: {
              ranges: [{
                from: -100,
                to: -46,
                color: '#F15B46'
              }, {
                from: -45,
                to: 0,
                color: '#FEB019'
              }]
            },
            columnWidth: '80%',
          }
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          title: {
            text: 'Growth',
            style: {
              color: '#fff'
            }
          },
          labels: {
            formatter: function (y) {
              return y.toFixed(0) + "%";
            },
            style: {
              colors: '#fff'
            }
          }
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
            '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
            '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
            '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
            '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
            '2013-07-01', '2013-08-01', '2013-09-01'
          ],
          labels: {
            rotate: -90,
            style: {
              colors: '#fff'
            }
          }
        },
        title: {
          align: 'center',
          style: {
            fontSize: '15px',
            color: '#fff'
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

export default Chart32;

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
    height: 350,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#252823',
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

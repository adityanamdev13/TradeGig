import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const ChartForAccordion = () => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      <style>
        body {
          background-color: #11150f;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .chart-container {
          width: 90%;
          max-width: 500px;
          height: 300px;
          border: 1px solid rgba(255, 0, 0, 0.5);
          padding: 10px;
          background-color: #11150f;
        }
        canvas {
          width: 100%;
          height: 100%;
        }
      </style>
    </head>
    <body>
      <div class="chart-container">
        <canvas id="myChart"></canvas>
      </div>
      <script>
        document.addEventListener("DOMContentLoaded", function() {
          const labels = ['', '', '', '', '', ''];
          const stopLossData = [-19, -17, -14, -10, -8, -4]; 
          const targetData = [19, 17, 14, 10, 8, 4]; 

          const ctx = document.getElementById('myChart').getContext('2d');
          new Chart(ctx, {
            type: 'bar',
            data: {
              labels: labels,
              datasets: [
                {
                  label: '100% Stoploss',
                  data: stopLossData,
                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  borderColor: 'rgba(255, 0, 0, 1)',
                  borderWidth: 2,
                  barThickness: 18  
                },
                {
                  label: '100% Target',
                  data: targetData,
                  backgroundColor: 'rgba(144, 238, 144, 0.2)',
                  borderColor: 'rgba(0, 128, 0, 1)',
                  borderWidth: 2,
                  barThickness: 18  
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false, 
              indexAxis: 'y',
              scales: {
                x: { 
                  beginAtZero: true,
                  stacked: true, 
                  grid: { 
                    drawBorder: true,
                    color: function(context) {
                      return context.tick.value === 0 ? '#888' : 'rgba(8, 7, 7, 0.04)';
                    },
                    lineWidth: function(context) {
                      return context.tick.value === 0 ? 2 : 1;
                    }
                  }
                },
                y: {
                  stacked: true,
                  ticks: {
                    padding: 10 
                  }
                }
              },
              plugins: { legend: { display: true } },
              layout: {
                padding: {
                  top: 10,
                  bottom: 10
                }
              }
            }
          });
        });
      </script>
    </body>
    </html>
  `;

  return (
    <View style={{ flex: 1, height: 400 }}>
      <WebView originWhitelist={['*']} source={{ html: htmlContent }} />
    </View>
  );
};

export default ChartForAccordion;

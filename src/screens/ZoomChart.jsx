import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

const ZoomChart = ({ route }) => {
  const { chartHTML } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal={true} 
        style={styles.chartContainer}
        contentContainerStyle={{ width: 1000 }} // Adjust width based on your chart size
      >
        <WebView
          originWhitelist={['*']}
          source={{ html: chartHTML }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          style={styles.webView}
        />
      </ScrollView>
    </View>
  );
};

export default ZoomChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252823',
  },
  chartContainer: {
    flexGrow: 1,
    backgroundColor: '#1e1f21',
  },
  webView: {
    width: 1000,
  },
});

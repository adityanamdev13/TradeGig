import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { sampleDataForTradelogTable } from '../data/staticData';
import Ionicons from "react-native-vector-icons/Ionicons"
const TradeLogTable = () => {
  const headers = [
    'Name',
    'Platform',
    'Date Bought',
    'Units Bought',
    'Buy Price',
    'Fixed Cost',
    'Broker',
    'SL',
    'Target',
    'Target id',
    'Total Buy-in',
    'Current Asset Value',
  ];

  return (
    <ScrollView vertical horizontal style={styles.container}>
      <View style={styles.tableContainer}>
        {/* Header Row */}
        <View style={styles.headerRow}>
          <View style={[styles.cell, styles.indexCell1]}>
          <Ionicons name="filter-sharp" size={24} color="#fff"/>
          </View>
          {headers.map((header, index) => (
            <View key={index} style={styles.cell}>
              <Text style={styles.headerText}>{header}</Text>
                <Ionicons name="filter-sharp" size={24} color="#fff"/>
            </View>
          ))}
        </View>

        {/* Data Rows */}
        <ScrollView>
          {sampleDataForTradelogTable.map((item, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              <View style={[styles.cell, styles.indexCell]}>
                <Text style={styles.text}>{item.id}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.text}>{item.platform}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.text}>{item.dateBought}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.text}>{item.unitsBought}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.text}>{item.buyPrice}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.text}>{item.fixedCost}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.text}>{item.broker}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.text}>{item.sl}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.text}>{item.target}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.text}>{item.targetId}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.text}>{item.totalBuyIn}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.text}>{item.currentAssetValue}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a', 
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    backgroundColor:"#1e4649"
  },
  cell: {
    display:"flex",
    flexDirection:'row',
    gap:10,
    padding: 12,
    width: 150,
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#fff',
  },
  indexCell: {
    width: 50,
    backgroundColor: '#1e4649',
  },
  indexCell1: {
    width: 50,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    paddingHorizontal:5
  },
  text: {
    color: '#fff',
    fontSize: 14,
  },
});

export default TradeLogTable;
import React from 'react';
import {View, Text, Modal, TouchableOpacity, ScrollView} from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
const CustomModal = ({visible, onClose, title,discription}) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.overlay}>
      <View style={styles.modalContainer} >
          <ScrollView  showsVerticalScrollIndicator={false} >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>
             {discription}
            </Text>

            <View style={styles.table}>
              {tableData.map((item, index) => (
                <View key={index} style={styles.row}>
                  <Text style={styles.cell}>{item.label}</Text>
                  <Text style={styles.cell}>{item.description}</Text>
                </View>
              ))}  
            </View>
            <TouchableOpacity  onPress={onClose} style={{position:"absolute", right:0}}>
             <Entypo name="cross" size={30} color={"#fff"}/>
              </TouchableOpacity>
          </ScrollView>
          </View>
      </View>
    </Modal>
  );
};

const tableData = [
  {label: 'Advisor', description: 'The name of the advisor is at the Top Left'},
  {
    label: 'Trade ID',
    description: 'This is a unique ID allocated for this trade.',
  },
  {label: 'P&L', description: 'Shows the Current Profit / Loss for this trade'},
  {
    label: 'P&L %',
    description: 'Shows the Current Profit / Loss in Percentage for this trade',
  },
  {
    label: 'P&L %/day',
    description:
      'Shows the Current Profit / Loss in Percentage per day for this trade',
  },
  {label: 'Target Reached %', description: 'Percentage of Target Reached'},
  {
    label: 'Stop-Loss Reached %',
    description: 'Percentage of Stop-Loss Reached',
  },
  {
    label: 'Buy Price Range',
    description:
      'The recommended buying price of this stock, as per your advisor',
  },
  {
    label: 'Buy Price',
    description: 'Average Price of Buying the stocks of this trade',
  },
  {label: 'Units Bought', description: 'Total Units bought in this trade'},
  {
    label: 'Buy Date and Time',
    description:
      'Shows the date and time of purchasing the stocks in this trade',
  },
  {
    label: 'Buy-in Value',
    description: 'Total buy value of all stocks in this trade',
  },
  {
    label: 'Current Asset Value',
    description: 'Total Current Value of all stocks in this trade',
  },
  {
    label: 'Recommended Holding Time (days)',
    description: 'The Holding time, in days, as recommended by your advisor',
  },
  {
    label: 'Days Held',
    description: 'Number of days the stocks of this trade are being held',
  },
  {
    label: 'Target Level',
    description:
      'Shows the Target Level (in Rupees) as recommended by your advisor',
  },
  {
    label: 'Current Market Price',
    description: 'Current Market Price of this Stock',
  },
  {
    label: 'Entry',
    description: 'The price at which you bought the stocks for this trade',
  },
  {
    label: 'Stop-Loss Level',
    description:
      'Shows the Stop-Loss Level (in Rupees) as recommended by your advisor',
  },
  {
    label: 'Broker Name',
    description: 'The name of the Broker you had bought the Stock through',
  },
  {
    label: 'Broker balance',
    description: 'Balance remaining in this broker account',
  },
];

const styles = {
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    marginTop:30,
    marginBottom:30,
    backgroundColor: '#4A4A4A',
    padding: 20,
    width: '90%',
    borderRadius: 15,
    paddingBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  description: {
    color: '#fff',
    fontSize: 14,
    textAlign:"center",
    marginVertical: 10,
  },
  table: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius:8,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  cell: {
    flex: 1,
    padding: 4,
    color: '#fff',
    borderRightWidth: 1,
    borderRightColor: '#fff',
    textAlign: 'center',
    paddingHorizontal: 8
  },
};

export default CustomModal;

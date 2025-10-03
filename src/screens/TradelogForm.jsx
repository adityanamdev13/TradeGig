import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
  import React, {useState} from 'react';
  import {Picker} from '@react-native-picker/picker';
  
  const TradelogForm = () => {
    const [formData, setFormData] = useState({
      stock: 'ICICI Bank',
      exchange: 'BHARTIARTL : NSE',
      advisor: 'advisor 1',
      dateBought: '17-10-24',
      unitsBought: '',
      buyPrice: '',
      target: '',
      stoploss: '',
    });
  
    // Sample data for pickers
    const stocks = ['ICICI Bank', 'HDFC Bank', 'SBI', 'Axis Bank'];
    const exchanges = ['BHARTIARTL : NSE', 'BSE', 'NYSE'];
    const advisors = ['advisor 1', 'advisor 2', 'advisor 3'];
    const dates = ['17-10-24', '18-10-24', '19-10-24'];
  
    return (
      <ScrollView style={styles.container}>
        {/* Form Fields */}
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Stock*</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={formData.stock}
                onValueChange={value => setFormData({...formData, stock: value})}
                style={styles.picker}
                dropdownIconColor="white"
                mode="dropdown">
                {stocks.map(stock => (
                  <Picker.Item
                    key={stock}
                    label={stock}
                    value={stock}
                    color="white"
                    style={{backgroundColor: '#222223'}}
                  />
                ))}
              </Picker>
            </View>
          </View>
  
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Exchange*</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={formData.exchange}
                onValueChange={value =>
                  setFormData({...formData, exchange: value})
                }
                style={styles.picker}
                dropdownIconColor="white"
                mode="dropdown">
                {exchanges.map(exchange => (
                  <Picker.Item
                    key={exchange}
                    label={exchange}
                    value={exchange}
                    color="white"
                    style={{backgroundColor: '#222223'}}
                  />
                ))}
              </Picker>
            </View>
          </View>
  
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Name of Advisor*</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={formData.advisor}
                onValueChange={value =>
                  setFormData({...formData, advisor: value})
                }
                style={styles.picker}
                dropdownIconColor="white"
                mode="dropdown">
                {advisors.map(advisor => (
                  <Picker.Item
                    key={advisor}
                    label={advisor}
                    value={advisor}
                    color="white"
                    style={{backgroundColor: '#222223'}}
                  />
                ))}
              </Picker>
            </View>
          </View>
  
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Date Bought*</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={formData.dateBought}
                onValueChange={value =>
                  setFormData({...formData, dateBought: value})
                }
                style={styles.picker}
                dropdownIconColor="white"
                mode="dropdown">
                {dates.map(date => (
                  <Picker.Item
                    key={date}
                    label={date}
                    value={date}
                    color="white"
                    style={{backgroundColor: '#222223'}}
                  />
                ))}
              </Picker>
            </View>
          </View>
  
          <View style={styles.row}>
            <View style={[styles.inputGroup, styles.halfWidth]}>
              <Text style={styles.label}>Unit Bought*</Text>
              <TextInput
                style={styles.input}
                placeholder="Unit Bought"
                placeholderTextColor="#666"
                value={formData.unitsBought}
                keyboardType="numeric"
                onChangeText={value =>
                  setFormData({...formData, unitsBought: value})
                }
              />
            </View>
  
            <View style={[styles.inputGroup, styles.halfWidth]}>
              <Text style={styles.label}>Buy price / unit*</Text>
              <TextInput
                style={styles.input}
                placeholder="Buy price / Unit"
                placeholderTextColor="#666"
                keyboardType="numeric"
                value={formData.buyPrice}
                onChangeText={value =>
                  setFormData({...formData, buyPrice: value})
                }
              />
            </View>
          </View>
  
          <View style={styles.row}>
            <View style={[styles.inputGroup, styles.halfWidth]}>
              <Text style={styles.label}>Target</Text>
              <TextInput
                style={styles.input}
                placeholder="Target"
                placeholderTextColor="#666"
                value={formData.target}
                onChangeText={value => setFormData({...formData, target: value})}
              />
            </View>
  
            <View style={[styles.inputGroup, styles.halfWidth]}>
              <Text style={styles.label}>Stoploss</Text>
              <TextInput
                style={styles.input}
                placeholder="Stoploss"
                placeholderTextColor="#666"
                value={formData.stoploss}
                onChangeText={value =>
                  setFormData({...formData, stoploss: value})
                }
              />
            </View>
          </View> 
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add Entry</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#11150f',
    },
  
    iconButton: {
      padding: 8,
    },
    formContainer: {
      padding: 16,
    },
    inputGroup: {
      marginBottom: 16,
    },
    label: {
      color: 'white',
      marginBottom: 8,
      fontSize: 16,
    },
    pickerContainer: {
      backgroundColor: '#222223',
      borderRadius: 8,
      overflow: 'hidden',
    },
    picker: {
      color: 'white',
      backgroundColor: '#222223',
      height: 50,
    },
    input: {
      backgroundColor: '#222223',
      padding: 16,
      borderRadius: 8,
      color: 'white',
      fontSize: 16,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    halfWidth: {
      width: '48%',
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    addButton: {
      backgroundColor: '#6c5ce7',
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
    },
    addButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '500',
    },
  });
  
  export default TradelogForm;
  




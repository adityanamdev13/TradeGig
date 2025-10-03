import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const FilterBarPositions = ({navTo}) => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState('Today');
  const [selectedAdvisor, setSelectedAdvisor] = useState('All Advisors');
  const [selectedTrader, setSelectedTrader] = useState('True Trader');
  const [isDateDropdownOpen, setDateDropdownOpen] = useState(false);
  const [isAdvisorDropdownOpen, setAdvisorDropdownOpen] = useState(false);
  const [isTraderDropdownOpen, setTraderDropdownOpen] = useState(false);

  const dateOptions = ['Today', 'Yesterday', 'Last Week'];
  const advisorOptions = ['All Advisors', 'Advisor 1', 'Advisor 2'];
  const traderOptions = ['True Trader', 'Trader 1', 'Trader 2'];

  return (
    <View style={styles.filterContainer}>
      <View style={styles.filterOptionsContainer}>
        <View style={{position: 'relative'}}>
          <TouchableOpacity
            style={styles.filterBtn}
            onPress={() => {
              setDateDropdownOpen(!isDateDropdownOpen);
              setAdvisorDropdownOpen(false);
              setTraderDropdownOpen(false);
            }}>
            <Text style={styles.text}>{selectedDate}</Text>
            <FontAwesome
              name={isDateDropdownOpen ? 'angle-up' : 'angle-down'}
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
          {isDateDropdownOpen && (
            <View style={styles.dropdownList}>
              {dateOptions.map(option => (
                <TouchableOpacity
                  key={option}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedDate(option);
                    setDateDropdownOpen(false);
                  }}>
                  <Text style={styles.dropdownItemText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <View style={{position: 'relative'}}>
          <TouchableOpacity
            style={styles.filterBtn}
            onPress={() => {
              setAdvisorDropdownOpen(!isAdvisorDropdownOpen);
              setDateDropdownOpen(false);
              setTraderDropdownOpen(false);
            }}>
            <Text style={styles.text}>{selectedAdvisor}</Text>
            <FontAwesome name={isAdvisorDropdownOpen ? 'angle-up' : 'angle-down'} size={20} color="#fff" />
          </TouchableOpacity>
          {isAdvisorDropdownOpen && (
            <View style={styles.dropdownList}>
              {advisorOptions.map(option => (
                <TouchableOpacity
                  key={option}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedAdvisor(option);
                    setAdvisorDropdownOpen(false);
                  }}>
                  <Text style={styles.dropdownItemText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <View style={{position: 'relative'}}>
          <TouchableOpacity
            style={styles.filterBtn}
            onPress={() => {
              setTraderDropdownOpen(!isTraderDropdownOpen);
              setDateDropdownOpen(false);
              setAdvisorDropdownOpen(false);
            }}>
            <Text style={styles.text}>{selectedTrader}</Text>
            <FontAwesome name={isTraderDropdownOpen ? 'angle-up' : 'angle-down'} size={20} color="#fff" />
          </TouchableOpacity>
          {isTraderDropdownOpen && (
            <View style={styles.dropdownList}>
              {traderOptions.map(option => (
                <TouchableOpacity
                  key={option}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedTrader(option);
                    setTraderDropdownOpen(false);
                  }}>
                  <Text style={styles.dropdownItemText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => navigation.navigate(navTo)}>
          <FontAwesome name="table" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FilterBarPositions;

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444444',
  },
  filterOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#222223',
    paddingHorizontal: 6,
    paddingVertical: 8,
    borderRadius: 6,
  },
  text: {
    color: '#fff',
    fontSize: 14,
  },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#222223',
    padding: 4,
    borderRadius: 30,
  },
  dropdownList: {
    position: 'absolute',
    top: 35,
    left: 0,
    backgroundColor: '#222223',
    borderRadius: 8,
    width: 150,
    paddingVertical: 5,
    zIndex: 999,
  },
  dropdownItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  dropdownItemText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

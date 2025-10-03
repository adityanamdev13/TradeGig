import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FilterBarDashBoard = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState(
    'Portfolio & performance',
  );
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedTrader, setSelectedTrader] = useState('True Trader');
  const [isPortfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const [isFilterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [isTraderDropdownOpen, setTraderDropdownOpen] = useState(false);

  const portfolioOptions = ['Portfolio & performance', 'Option 1', 'Option 2'];
  const filterOptions = ['All', 'Option A', 'Option B'];
  const traderOptions = ['True Trader', 'Trader X', 'Trader Y'];

  return (
    <View style={styles.filterContainer}>
      <View style={styles.filterOptionsContainer}>
        <View style={{position: 'relative'}}>
          <TouchableOpacity
            style={styles.filterBtn}
            onPress={() => {
              setPortfolioDropdownOpen(!isPortfolioDropdownOpen);
              setFilterDropdownOpen(false);
              setTraderDropdownOpen(false);
            }}>
            <Text style={styles.text}>{selectedPortfolio}</Text>
            <FontAwesome
              name={isPortfolioDropdownOpen ? 'angle-up' : 'angle-down'}
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
          {isPortfolioDropdownOpen && (
            <View style={styles.dropdownList}>
              {portfolioOptions.map(option => (
                <TouchableOpacity
                  key={option}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedPortfolio(option);
                    setPortfolioDropdownOpen(false);
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
              setFilterDropdownOpen(!isFilterDropdownOpen);
              setPortfolioDropdownOpen(false);
              setTraderDropdownOpen(false);
            }}>
            <Text style={styles.text}>{selectedFilter}</Text>
            <FontAwesome
              name={isFilterDropdownOpen ? 'angle-up' : 'angle-down'}
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
          {isFilterDropdownOpen && (
            <View style={styles.dropdownList}>
              {filterOptions.map(option => (
                <TouchableOpacity
                  key={option}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedFilter(option);
                    setFilterDropdownOpen(false);
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
              setPortfolioDropdownOpen(false);
              setFilterDropdownOpen(false);
            }}>
            <Text style={styles.text}>{selectedTrader}</Text>
            <FontAwesome
              name={isTraderDropdownOpen ? 'angle-up' : 'angle-down'}
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
          {isTraderDropdownOpen && (
            <View style={styles.dropdownListLast}>
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
      </View>
    </View>
  );
};

export default FilterBarDashBoard;

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
    width: 180,
    paddingVertical: 5,
    zIndex: 999,
  },
  dropdownListLast: {
    position: 'absolute',
    top: 35,
    right: 0,
    backgroundColor: '#222223',
    borderRadius: 8,
    width: 180,
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

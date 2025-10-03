import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TradeCard from '../components/TradeCard';
import TradeTab from '../components/TradeTab';
import HomeHeader from '../components/HomeHeader';

const Home = () => {
  const scrollY = new Animated.Value(0);

  const [selectedOption, setSelectedOption] = useState('All');
  const [selectedSort, setSelectedSort] = useState('Newest To Oldest');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setSortDropdownOpen] = useState(false);

  const [activeTab, setActiveTab] = useState(1);

  const options = ['All', '5D', ' 🖐'];
  const sortOptions = ['Newest To Oldest', 'Oldest To Newest'];

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    setSortDropdownOpen(false);
  };

  const toggleSortDropdown = () => {
    setSortDropdownOpen(!isSortDropdownOpen);
    setDropdownOpen(false);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerWrapper}>
        <HomeHeader />
      </View>

      <Animated.ScrollView
        style={{marginTop: 60}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}>
        <TradeTab />

        {/* FilterBar */}
        <View style={styles.filterContainer}>
          
          <View style={styles.buySellContainer}>
            <TouchableOpacity onPress={() => setActiveTab(1)}>
              <Text style={activeTab===1 ? [styles.btnText , {backgroundColor: '#d2efb3', color: '#76cf14', borderColor: '#76cf14',}] : [styles.btnText2, {color: '#76cf14'}]}>Buy</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setActiveTab(2)}>
              <Text style={activeTab===2 ? [styles.btnText,{backgroundColor: '#fee0d7', color: '#dc3545c7',  borderColor: '#dc3545c7',}] : [styles.btnText2,{color: '#dc3545c7'}]}>Sell</Text>
            </TouchableOpacity>
          </View>

          <View style={{position: 'relative'}}>
            <View style={styles.filterOptionsContainer}>
              <TouchableOpacity
                style={styles.filterBtn}
                onPress={toggleDropdown}>
                <Text style={styles.text}>{selectedOption}</Text>
                <AntDesign
                  name={isDropdownOpen ? 'arrowup' : 'arrowdown'}
                  size={15}
                  color="#fff"
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.filterBtn}
                onPress={toggleSortDropdown}>
                <Text style={styles.text}>{selectedSort}</Text>
                <AntDesign
                  name={isSortDropdownOpen ? 'arrowup' : 'arrowdown'}
                  size={15}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>

            {/* Dropdown List for Filter */}
            {isDropdownOpen && (
              <View style={styles.dropdownList}>
                {options.map(option => (
                  <TouchableOpacity
                    key={option}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setSelectedOption(option);
                      setDropdownOpen(false);
                    }}>
                    <Text style={styles.dropdownItemText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {/* Dropdown List for Sorting */}
            {isSortDropdownOpen && (
              <View style={styles.dropdownListSort}>
                {sortOptions.map(option => (
                  <TouchableOpacity
                    key={option}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setSelectedSort(option);
                      setSortDropdownOpen(false);
                    }}>
                    <Text style={styles.dropdownItemText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>

        {activeTab === 1 && (
          <View style={{marginVertical: 20, marginHorizontal: 5}}>
            <TradeCard />
            <TradeCard />
          </View>
        )}

        {activeTab === 2 && (
          <View style={{marginVertical: 20, marginHorizontal: 5}}>
            <TradeCard red={true} redTextTitle="Unplanned Exit" />
            <TradeCard  red={true} redTextTitle="Stoploss Hit" />
          </View>
        )}
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#11150f',
    width: '100%',
    height: '100%',
  },
  headerWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: '#11150f',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginHorizontal: 15,
  },
  buySellContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffff',
    padding: 4,
    borderRadius: 30,
  },
  filterOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    paddingVertical: 10,
    width: 210,
    backgroundColor: '#222223',
    paddingHorizontal: 6,
    borderRadius: 6,
  },
  btnText: {
    fontWeight: 'bold',
    paddingVertical: 6,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderRadius: 25,
  },
  btnText2: {
    fontWeight: 'bold',
    paddingVertical: 6,
    paddingHorizontal: 25,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
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
    top: 48,
    left: 0,
    backgroundColor: '#222223',
    borderRadius: 8,
    width: 150,
    paddingVertical: 5,
    zIndex: 999,
  },
  dropdownListSort: {
    position: 'absolute',
    top: 48,
    right: 0,
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

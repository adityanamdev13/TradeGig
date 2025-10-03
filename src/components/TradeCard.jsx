import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import CustomModal from './CustomModal';

const TradeCard = ({red = false, redTextTitle}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [isDataDropdownOpen, setDataDropdownOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState({
    id: 1,
    imgUrl:
      'https://demo.geektheo.in/tradegig/assets/images/buy/zerodha%201.png',
    text: 'Zerodha',
    price: '150000',
  });

  const dataOptions = [
    {
      id: 1,
      imgUrl:
        'https://demo.geektheo.in/tradegig/assets/images/buy/zerodha%201.png',
      text: 'Zerodha',
      price: '150000',
    },
    {
      id: 2,
      imgUrl:
        'https://demo.geektheo.in/tradegig/assets/images/advisors/trading-view%201.png',
      text: 'Univest',
      price: '200000',
    },
    {
      id: 3,
      imgUrl:
        'https://demo.geektheo.in/tradegig/assets/images/advisors/xu9itmmev2qgzg10offz%201.png',
      text: 'Liquide',
      price: '100000',
    },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    setDataDropdownOpen(false);
  };
  const toggleDataDropdown = () => {
    setDataDropdownOpen(!isDataDropdownOpen);
    setDropdownOpen(false);
  };
  const closeModal = () => {
    setModalVisible(false);
    setDropdownOpen(false);
  };
  return (
    <View
      style={[
        styles.container,
        red ? {borderColor: '#e51717'} : {borderColor: '#76cf14'},
      ]}>
      <Text
        style={[
          styles.top,
          red ? {backgroundColor: '#e51717'} : {backgroundColor: '#76cf14'},
        ]}>
        Execute Now!
      </Text>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logo}>
            <Image
              style={styles.logo}
              source={{
                uri: 'https://demo.geektheo.in/tradegig/assets/images/advisors/waya%201.png',
              }}
            />
          </View>
          <View>
            <Text style={styles.title}>Waya</Text>
            <Text style={styles.subtitle}>NSE: Tata Power</Text>
            <Text style={styles.idText}>ID: gthvbhs41256f</Text>
          </View>
        </View>
        {red && <Text style={styles.redText}>{redTextTitle}</Text>}
        <View style={styles.headerRightMain}>
          <Image
            style={{width: 30, height: 30, resizeMode: 'contain'}}
            source={{
              uri: 'https://demo.geektheo.in/tradegig/assets/images/buy/notification.png',
            }}
          />
          <View style={styles.headerRight}>
            <Text style={styles.timestamp}>01:00PM</Text>
            <Text style={styles.date}>30/09/24</Text>
          </View>
          <TouchableOpacity
            style={{padding: 5, backgroundColor: '#444', borderRadius: 20}}
            onPress={toggleDropdown}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={30}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </View>

      {isDropdownOpen && (
        <View style={styles.dropdownList}>
          <TouchableOpacity style={styles.btndropDown}>
            <MaterialCommunityIcons
              name="archive-arrow-down-outline"
              size={20}
              color="#fff"
            />
            <Text style={{color: '#fff', fontSize: 16}}>Archive</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btndropDown}>
            <Feather name="bookmark" size={20} color="#fff" />
            <Text style={{color: '#fff', fontSize: 16}}>Bookmark</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btndropDown}>
            <Feather name="share-2" size={20} color="#fff" />
            <Text style={{color: '#fff', fontSize: 16}}>Share</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btndropDown}>
            <MaterialCommunityIcons
              name="message-text-clock-outline"
              size={20}
              color="#fff"
            />
            <Text style={{color: '#fff', fontSize: 16}}>
              Notification History
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btndropDown}
            onPress={() => setModalVisible(true)}>
            <MaterialCommunityIcons
              name="information-outline"
              size={20}
              color="#fff"
            />
            <Text style={{color: '#fff', fontSize: 16}}>Info</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Price Info Section */}
      <View style={styles.priceInfoContainer}>
        <View style={styles.priceContainer}>
          <View style={styles.priceBox}>
            <Text style={styles.priceLabel}>Buy Price Range</Text>
            <Text style={styles.priceValue}>120-130</Text>
          </View>
          <View style={styles.priceBox}>
            <Text style={styles.priceLabel2}>
              Price @ Alert (Buy Notification)
            </Text>
            <Text style={styles.priceValue}>₹765</Text>
          </View>
          <View style={styles.priceBox}>
            <Text style={styles.priceLabel2}>Price Change%</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <AntDesign name="arrowup" size={20} color="#e51717" />
              <Text style={[styles.priceValue, styles.priceChange]}>5.3%</Text>
            </View>
          </View>
        </View>

        {/* Trading Info Section */}
        <View style={styles.tradingInfoContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Target (%)</Text>
            <Text style={styles.infoValue}>3.75%</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Stoploss (%)</Text>
            <Text style={styles.infoValue}>1.75%</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Holding Time Recommended</Text>
            <Text style={styles.infoValue}>1-5 Months</Text>
          </View>
        </View>
      </View>

      {/* Buy Button Section */}
      <LinearGradient
        colors={
          red
            ? ['rgba(222, 11, 11, 0.2)', 'rgba(32, 30, 30, 0.54)']
            : ['rgba(118, 207, 20, 0.2)', 'rgba(35, 35, 35, 0.54)']
        }
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.buySection}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <View style={styles.brokerInfo}>
            <Image
              style={styles.brokerLogo}
              source={{
                uri: `${selectedData.imgUrl}`,
              }}
            />
            <View style={{marginLeft: 10}}>
              <Text style={styles.brokerTextHead}>{selectedData.text}</Text>
              <Text style={styles.brokerText}>₹{selectedData.price}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={toggleDataDropdown}>
            <FontAwesome name="caret-square-down" size={30} color="#fff" />
          </TouchableOpacity>

          {isDataDropdownOpen && (
            <View style={styles.datadropdownList}>
              {dataOptions.map(item => (
                <View
                  key={item.id}
                  style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                  <TouchableOpacity
                    style={styles.brokerInfo}
                    onPress={() => {
                      setSelectedData(item);
                      setDataDropdownOpen(false);
                    }}>
                    <Image
                      style={styles.brokerLogo}
                      source={{
                        uri: `${item.imgUrl}`,
                      }}
                    />
                    <View style={{marginLeft: 10}}>
                      <Text style={styles.brokerTextHead}>{item.text}</Text>
                      <Text style={styles.brokerText}>₹{item.price}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}
        </View>
        <TouchableOpacity
          style={[
            styles.buyButton,
            red ? {backgroundColor: '#e51717'} : {backgroundColor: '#76cf14'},
          ]}>
          <FontAwesome5 name="bell-o" size={20} color="#fff" />
          <Text style={styles.buyButtonText}>{red ? 'Sell' : 'Buy'}</Text>
        </TouchableOpacity>
      </LinearGradient>

      <CustomModal
        visible={modalVisible}
        onClose={closeModal}
        title={red?"Task Page Sell Card":"Task Page Buy Card"}
        discription={`What is this page? The "Tasks" page is where all trade recommendations from various advisors are consolidated into a single, streamlined interface. Users can view actionable buy and sell recommendations across multiple advisors`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#2A2A2A',
    justifyContent: 'space-between',
    gap: 10,
    borderWidth: 1,
    borderColor: '#76cf14',
    borderRadius: 15,
    padding: 15,
    margin: 10,
    marginBottom: 40,
  },
  top: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 3,
    borderRadius: 20,
    width: 120,
    position: 'absolute',
    top: -13,
    left: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingBottom: 10,
    borderBlockColor: '#3a3d39',
    borderBottomWidth: 1.5,
  },
  redText: {
    color: '#fff',
    backgroundColor: 'red',
    fontSize: 10,
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 14,
    position: 'absolute',
    top: -8,
    left: 120,
  },
  brokerTextHead: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#444',
    marginRight: 10,
  },
  priceInfoContainer: {
    backgroundColor: '#363636',
    padding: 15,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#c3c4c3',
    fontSize: 14,
    fontWeight: 'bold',
  },
  idText: {
    color: '#c3c4c3',
    fontSize: 12,
    fontWeight: 'bold',
  },
  headerRight: {
    alignItems: 'flex-end',
  },
  timestamp: {
    color: '#c3c4c3',
    fontSize: 14,
  },
  date: {
    color: '#c3c4c3',
    fontSize: 12,
    fontWeight: 'bold',
  },
  priceContainer: {
    flexDirection: 'row',
    backgroundColor: '#4b4b4b',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  priceBox: {
    marginBottom: 10,
    flexShrink: 1,
  },
  priceLabel: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  priceLabel2: {
    color: 'white',
    fontSize: 14,
    marginBottom: 5,
  },
  priceValue: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  priceChange: {
    color: 'white',
  },
  tradingInfoContainer: {
    backgroundColor: '#4b4b4b',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoBox: {
    flex: 1,
  },
  infoLabel: {
    color: 'white',
    fontSize: 14,
    marginBottom: 5,
  },
  infoValue: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1F3327',
    borderRadius: 10,
    padding: 15,
  },
  brokerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brokerLogo: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  brokerText: {
    color: 'white',
    fontSize: 14,
  },
  buyButton: {
    flexDirection: 'row',
    gap: 10,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerRightMain: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  dropdownList: {
    position: 'absolute',
    paddingTop: 15,
    padding: 10,
    top: 80,
    right: 18,
    backgroundColor: '#222223',
    borderRadius: 8,
    width: 200,
    paddingVertical: 5,
    zIndex: 999,
  },
  datadropdownList: {
    position: 'absolute',
    paddingTop: 15,
    padding: 10,
    top: 50,
    right: 0,
    backgroundColor: '#222223',
    borderRadius: 8,
    width: 170,
    paddingVertical: 5,
    zIndex: 999,
  },
  btndropDown: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
    gap: 7,
  },
});

export default TradeCard;

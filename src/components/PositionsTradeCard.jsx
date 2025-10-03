import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import LinearGradient from 'react-native-linear-gradient';
import CustomModal from './CustomModal';

const PositionsTradeCard = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeModal = () => {
    setModalVisible(false);
    setDropdownOpen(false);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logo}>
            <Image
              style={styles.logo}
              source={{
                uri: 'https://demo.geektheo.in/tradegig/assets/images/advisors/xu9itmmev2qgzg10offz%201.png',
              }}
            />
          </View>
          <View>
            <Text style={styles.title}>Liquide</Text>
            <Text style={styles.subtitle}>NSE: Tata Power</Text>
            <Text style={styles.idText}>ID: gthvbhs41256f</Text>
          </View>
        </View>
        <View style={styles.headerRightMain}>
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

          <TouchableOpacity style={styles.btndropDown}>
            <MaterialCommunityIcons name="exit-to-app" size={20} color="#fff" />
            <Text style={{color: '#fff', fontSize: 16}}>Exit Trade</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* top Section */}
      <View style={styles.priceInfoContainer}>
        <View style={styles.priceContainer}>
          <View style={styles.priceBox}>
            <Text style={styles.priceLabel2}>P&L</Text>
            <Text style={styles.priceValue}>₹565</Text>
          </View>

          <View style={styles.priceBox}>
            <Text style={styles.priceLabel2}>P&L %</Text>
            <Text style={styles.priceValue}>-1.75%</Text>
          </View>

          <View style={styles.priceBox}>
            <Text style={styles.priceLabel2}>P&L %/Day</Text>
            <Text style={styles.priceValue}>5.3%</Text>
          </View>

          <View style={styles.priceBox}>
            <Text style={styles.priceLabel2}>Target Reached %</Text>
            <Text style={styles.priceValue}>₹565</Text>
          </View>

          <View style={styles.priceBox}>
            <Text style={styles.priceLabel2}>Stop-Loss Reached %</Text>
            <Text style={styles.priceValue}>-1.75%</Text>
          </View>
        </View>

        {/* mid Section */}
        <View
          style={[
            styles.priceMidContainer,
            {borderWidth: 1, borderColor: '#76cf14'},
          ]}>
          <View style={styles.midRow}>
            <View style={styles.midItem}>
              <Text style={styles.priceLabel2}>Buy Price Range</Text>
              <Text style={styles.priceValue}>120</Text>
            </View>

            <View style={styles.midItem}>
              <Text style={styles.priceLabel2}>Buy Price</Text>
              <Text style={styles.priceValue}>120</Text>
            </View>

            <View style={styles.midItem}>
              <Text style={styles.priceLabel2}>Unit Bought</Text>
              <Text style={styles.priceValue}>10 unit</Text>
            </View>
          </View>

          <View style={styles.midRow}>
            <View style={styles.midItem}>
              <Text style={styles.priceLabel2}>Buy Date and Time</Text>
              <Text style={styles.priceValue}>25-10-24 12:00</Text>
            </View>

            <View style={styles.midItem}>
              <Text style={styles.priceLabel}>Buy-in Value</Text>
              <Text style={styles.priceValue}>10000</Text>
            </View>

            <View style={styles.midItem}>
              <Text style={styles.priceLabel}>Current Asset Value</Text>
              <Text style={styles.priceValue}>10000</Text>
            </View>
          </View>
        </View>

        {/* last Section */}
        <View style={styles.tradingInfoContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>
              Recommended Holding Time (days)
            </Text>
            <Text style={styles.infoValue}>60 Days</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Days Held</Text>
            <Text style={styles.infoValue}>3-4 Days</Text>
          </View>
        </View>
      </View>

      {/* footer Section */}
      <LinearGradient
        colors={['rgba(8, 66, 152,0.5)', 'rgba(35, 35, 35, 0.54)']}
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.buySection}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <View style={styles.brokerInfo}>
            <Image
              style={styles.brokerLogo}
              source={{
                uri: 'https://demo.geektheo.in/tradegig/assets/images/buy/zerodha%201.png',
              }}
            />
            <View style={{marginLeft: 10}}>
              <Text style={styles.brokerTextHead}>Zerodha</Text>
              <Text style={styles.brokerText}>₹1500000</Text>
            </View>
          </View>
        </View>
      </LinearGradient>

      <CustomModal
        visible={modalVisible}
        onClose={closeModal}
        title="Position Page Card"
        discription={`The "Positions" page displays all your current holdings, based on the recommendations received from your advisors. These positions represent open trades that have not yet been sold. You can view it as a spreadsheet by tapping the spreadsheet icon in top right.`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A2A2A',
    justifyContent: 'space-between',
    gap: 10,
    borderWidth: 1,
    borderColor: '#084298',
    borderRadius: 15,
    padding: 15,
    margin: 10,
    marginBottom: 40,
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
    borderRadius: 11,
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
  priceContainer: {
    flexDirection: 'row',
    backgroundColor: '#4b4b4b',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  midRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  midItem: {
    width: '31%',
  },
  priceMidContainer: {
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
    paddingVertical: 15,
    paddingHorizontal: 10,

    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
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
    backgroundColor: '#76cf14',
    flexDirection: 'row',
    gap: 10,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
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
  btndropDown: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
    gap: 7,
  },
});

export default PositionsTradeCard;

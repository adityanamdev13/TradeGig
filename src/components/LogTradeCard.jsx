import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  Image,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import CustomModal from './CustomModal';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const LogTradeCard = ({badgeTitle = 'Target Hit🤑', bgColor = '#76cf14'}) => {
  const [expanded, setExpanded] = useState(false);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
    setDropdownOpen(false);
  };

  const closeModal = () => {
    setModalVisible(false);
    setDropdownOpen(false);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.badgeText, {backgroundColor: `${bgColor}`}]}>
        {badgeTitle}
      </Text>

      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={{
                uri: 'https://demo.geektheo.in/tradegig/assets/images/advisors/xu9itmmev2qgzg10offz%201.png',
              }}
            />
          </View>
          <View>
            <Text style={styles.title}>Liquide</Text>
            <Text style={styles.subtitle}>NSE: Reliance industries Ltd.</Text>
            <Text style={styles.idText}>ID: gthvbhs41256f</Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          <Image
            style={styles.notificationIcon}
            source={{
              uri: 'https://demo.geektheo.in/tradegig/assets/images/buy/notification.png',
            }}
          />
          <View style={styles.dateTimeContainer}>
            <Text style={styles.timeText}>01:00PM</Text>
            <Text style={styles.dateText}>30/09/24</Text>
          </View>
          <TouchableOpacity style={styles.menuButton} onPress={toggleDropdown}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={30}
              color="#fff"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleExpand} style={styles.expandButton}>
            <FontAwesome
              name={expanded ? 'angle-up' : 'angle-down'}
              size={25}
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

      {/* Summary Section */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>P&L</Text>
          <Text style={styles.summaryValue}>₹565</Text>
        </View>

        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>P&L %</Text>
          <Text style={styles.summaryValue}>-1.75%</Text>
        </View>

        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>P&L %/Day</Text>
          <Text style={styles.summaryValue}>5.3%</Text>
        </View>
      </View>

      {/* Expanded Details Section */}
      {expanded && (
        <>
          {/* greenBox */}
          <View style={[styles.expandedContainer, {borderColor: '#76cf14'}]}>
            {/* Top */}
            <View style={styles.topInfoRow}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Buy Price Range</Text>
                <Text style={styles.infoValue}>120</Text>
              </View>

              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Recommended Holding Time</Text>
                <Text style={styles.infoValue}>60 Days</Text>
              </View>

              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Target(Rs.)</Text>
                <Text style={styles.infoValue}>₹1000</Text>
              </View>

              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Target %</Text>
                <Text style={styles.infoValue}>1.2%</Text>
              </View>

              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Stop-Loss</Text>
                <Text style={styles.infoValue}>₹100</Text>
              </View>

              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Stop-Loss %</Text>
                <Text style={styles.infoValue}>1.2%</Text>
              </View>
            </View>

            {/* Additional Details */}
            <View style={styles.additionalInfoContainer}>
              <View style={styles.infoRow}>
                <View style={styles.infoItem}>
                  <Text style={styles.infoLabel}>Price @ Alert</Text>
                  <Text style={styles.infoValue}>120</Text>
                </View>

                <View style={styles.infoItem}>
                  <Text style={styles.infoLabel}>Price Difference Buy %</Text>
                  <Text style={styles.infoValue}>2.5%</Text>
                </View>
              </View>

              <View style={styles.infoRow}>
                <View style={styles.infoItem}>
                  <Text style={styles.infoLabel}>Buy Date and Time</Text>
                  <Text style={styles.infoValue}>25-10-24 12:00</Text>
                </View>

                <View style={styles.infoItem}>
                  <Text style={styles.infoLabel}>Buy Price</Text>
                  <Text style={styles.infoValue}>120</Text>
                </View>
              </View>

              <View style={styles.infoRow}>
                <View style={styles.infoItem}>
                  <Text style={styles.infoLabel}>Units Bought</Text>
                  <Text style={styles.infoValue}>10 unit</Text>
                </View>

                <View style={styles.infoItem}>
                  <Text style={styles.infoLabel}>Buy-in Value</Text>
                  <Text style={styles.infoValue}>10000</Text>
                </View>
              </View>
            </View>
          </View>

          {/* redBox */}
          <View style={[styles.expandedContainer, {borderColor: '#e51717'}]}>
            <View style={styles.topInfoRow}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Buy Price Range</Text>
                <Text style={styles.infoValue}>120</Text>
              </View>

              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Recommended Holding Time</Text>
                <Text style={styles.infoValue}>60 Days</Text>
              </View>

              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Target(Rs.)</Text>
                <Text style={styles.infoValue}>₹1000</Text>
              </View>

              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Target %</Text>
                <Text style={styles.infoValue}>1.2%</Text>
              </View>

              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Stop-Loss</Text>
                <Text style={styles.infoValue}>₹100</Text>
              </View>

              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Stop-Loss %</Text>
                <Text style={styles.infoValue}>1.2%</Text>
              </View>
            </View>
          </View>
        </>
      )}

      <CustomModal
        visible={modalVisible}
        onClose={closeModal}
        title="Log Page Card"
        discription={`The "Trade Log" page serves as the record book of all completed trades made by you, as recommended by your advisors. You can collapse each date for easy viewing, or view it as a spreadsheet by tapping the spreadsheet icon in top right.
`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#2A2A2A',
    gap: 10,
    borderWidth: 1,
    borderColor: '#084298',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 3,
    borderRadius: 20,
    width: 120,
    position: 'absolute',
    top: -12,
    left: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#444',
    marginRight: 10,
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#c3c4c3',
    fontSize: 14,
    width: 100,
    fontWeight: 'bold',
  },
  idText: {
    color: '#c3c4c3',
    fontSize: 12,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  notificationIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  dateTimeContainer: {
    alignItems: 'flex-end',
  },
  timeText: {
    color: '#c3c4c3',
    fontSize: 14,
  },
  dateText: {
    color: '#c3c4c3',
    fontSize: 12,
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 5,
    backgroundColor: '#444',
    borderRadius: 20,
  },
  expandButton: {
    paddingVertical:8,
    paddingHorizontal:13,
    backgroundColor: '#444',
    borderRadius: 30,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#4b4b4b',
    borderRadius: 10,
    padding: 15,
  },
  summaryItem: {
    flexShrink: 1,
  },
  summaryLabel: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  summaryValue: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  expandedContainer: {
    backgroundColor: '#363636',
    padding: 8,
    borderWidth: 1,
    borderRadius: 10,
    gap: 5,
  },
  topInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    backgroundColor: '#4b4b4b',
    borderRadius: 10,
    padding: 10,
  },
  additionalInfoContainer: {
    backgroundColor: '#4b4b4b',
    borderRadius: 10,
    padding: 10,
    gap: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {
    width: '48%',
  },
  infoLabel: {
    color: 'white',
    fontSize: 14,
    marginBottom: 5,
  },
  infoValue: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  dropdownList: {
    position: 'absolute',
    paddingTop: 15,
    padding: 10,
    top: 80,
    right:30,
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

export default LogTradeCard;

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState("Today");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const options = ["Today", "5D", "6M", "YTD", "FY", "1Y", "MAX"];

  return (
    <View style={styles.homeHeaderContainer}>
      <TouchableOpacity style={{ marginVertical: 3 }} onPress={() => navigation.openDrawer()}>
        <FontAwesome name="bars" size={24} color="#ffffff" />
      </TouchableOpacity>

      {title === "Dashboard" && (
        <View style={{ position: "relative" }}>
          <TouchableOpacity
            style={styles.dropdownButton}
            onPress={() => setDropdownOpen(!isDropdownOpen)}
          >
            <Text style={styles.dropdownText}>{selectedOption}</Text>
            <FontAwesome
              name={isDropdownOpen ? "angle-up" : "angle-down"}
              size={18}
              color="#ffffff"
            />
          </TouchableOpacity>

          {/* Dropdown List */}
          {isDropdownOpen && (
            <View style={styles.dropdownList}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedOption(option);
                    setDropdownOpen(false);
                  }}
                >
                  <Text style={styles.dropdownItemText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      )}

      <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold' }}>
        {title === "Log" ? "Trade Log" : `${title}`}
      </Text>

      
      <View style={{ flexDirection: 'row', gap: 15 }}>
        <TouchableOpacity>
          <AntDesign name="search1" size={24} color="#ffffff" />
        </TouchableOpacity>

        {title !== "Log" && (
          <TouchableOpacity>
            <AntDesign name="calendar" size={24} color="#ffffff" />
          </TouchableOpacity>
        )}

        <TouchableOpacity>
          <AntDesign name="reload1" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  homeHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#11150f',
    borderBottomWidth: 1,
    borderBottomColor: '#444444',
    height: 60,
    paddingVertical: 3,
  },
  dropdownButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#5f5c5c",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 18,
  },
  dropdownText: {
    color: "#ffffff",
    fontSize: 16,
    marginRight: 5,
  },
  dropdownList: {
    position: "absolute",
    top: 48,
    left: 0,
    backgroundColor: "#222223",
    borderRadius: 8,
    width: 120,
    paddingVertical: 5,
    zIndex: 999,
  },
  dropdownItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  dropdownItemText: {
    color: "#ffffff",
    fontSize: 16,
  },
});

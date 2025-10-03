import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const HomeHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.homeHeaderContainer}>
      <Image
        style={styles.logoImage}
        source={{
          uri: 'https://demo.geektheo.in/tradegig/assets/images/logo/144.png',
        }}
      />
      
      <View style={{flexDirection: 'row', gap: 15}}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="bell" size={24} color="#f9c23c" />
        </TouchableOpacity>
        
        <TouchableOpacity>
          <AntDesign name="search1" size={24} color="#ffffff" />
        </TouchableOpacity>
        
        <TouchableOpacity>
          <AntDesign name="reload1" size={24} color="#ffffff" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.openDrawer() }>
          <FontAwesome name="bars" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  homeHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#11150f',
    borderBottomWidth: 1,
    borderBottomColor: '#444444',
  },
  logoImage: {
    marginVertical: 3,
    width: 100,
    height: 60,
    resizeMode: 'contain',
  },
});

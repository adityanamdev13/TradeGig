import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';

import {useNavigation} from '@react-navigation/native';

const CustomDrawerHeaderOut = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.homeHeaderContainer}>
      <TouchableOpacity
        style={{marginVertical: 3}}
        onPress={()=>navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <Text style={{color: '#ffffff', fontSize: 20, fontWeight: 'bold'}}>
        {title}
      </Text>

     {title !== "Excel Sheet" && ( <View style={{flexDirection: 'row', gap: 15}}>
        <TouchableOpacity>
          <AntDesign name="search1" size={24} color="#ffffff" />
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="calendar" size={24} color="#ffffff" />
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="reload1" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>)}
    </View>
  );
};

export default CustomDrawerHeaderOut;

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
});

import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import FilterBarPositions from '../components/FilterBarPositions';
import Accordion from '../components/Accordion';
import {accordionData} from '../data/staticData';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const TradeLog = () => {
  const navigation = useNavigation();
  const scrollY = new Animated.Value(0);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}>
        <FilterBarPositions  navTo={"Excel Sheet"}/>
        <Accordion items={accordionData} />
      </Animated.ScrollView>
      <TouchableOpacity style={styles.plusBtn} onPress={()=>navigation.navigate("Tradelog Form")}>
          <AntDesign name="pluscircle" size={45} color="#fff" />
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TradeLog;

const styles = StyleSheet.create({
  mainContainer: {
    position:"relative",
    backgroundColor: '#11150f',
    width: '100%',
    height: '100%',
  },
  plusBtn:{
    position:"absolute",
    bottom:30,
    right:10
  }
});

import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import FilterBarPositions from '../components/FilterBarPositions';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import PositionsTradeCard from '../components/PositionsTradeCard';
import DesktopUsageChart from '../components/charts/DesktopUsageChart';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Accordion from '../components/Accordion';
import {accordionDataForPosition} from '../data/staticData';
import {useNavigation} from '@react-navigation/native';

const Positions = () => {
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
        <FilterBarPositions />

        <Accordion items={accordionDataForPosition} />

        {/* midHeader */}
        <View style={styles.midHeader}>
          <Text style={styles.text}> Product Trends by Month</Text>
          <TouchableOpacity>
            <FontAwesome name="bars" size={20} color="#373d3f" />
          </TouchableOpacity>
        </View>
        <DesktopUsageChart />
        <View>
          <PositionsTradeCard />
          <PositionsTradeCard />
          <PositionsTradeCard />
        </View>
      </Animated.ScrollView>
      <TouchableOpacity
        style={styles.plusBtn}
        onPress={() => navigation.navigate('Positions Form')}>
        <AntDesign name="pluscircle" size={45} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Positions;

const styles = StyleSheet.create({
  mainContainer: {
    position: 'relative',
    backgroundColor: '#11150f',
    width: '100%',
    height: '100%',
  },
  midHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  text: {
    color: '#373d3f',
    fontSize: 16,
    fontWeight: '900',
  },
  plusBtn: {
    position: 'absolute',
    bottom: 30,
    right: 10,
  },
});

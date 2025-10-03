import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {TradeTabData} from '../data/staticData';
import CustomToggle from './CustomToggle';

const TradeTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.overlay}></View>
      <Image
        style={styles.backgroundImage1}
        blurRadius={5} 
         tintColor="rgba(255, 0, 0, 0.5)"
         
        source={{
          uri: 'https://demo.geektheo.in/tradegig/assets/images/bg/Ellipse%202.png',
        }}
      />
      <Image
        style={styles.backgroundImage2} 
        blurRadius={7} 
        source={{
          uri: 'https://demo.geektheo.in/tradegig/assets/images/bg/Ellipse%201.png',
        }}
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        {TradeTabData.map(platform => (
          <TouchableOpacity key={platform.id} style={styles.platformContainer}>
            <View style={styles.iconContainer}>
              <Image source={{uri: platform.imgUri}} style={styles.icon} />
            </View>
            <Text style={styles.platformName}>{platform.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.toggleContainer}>
        <CustomToggle />
        <Text style={styles.middText}>All Advisors</Text>
      </View>

      <View style={styles.executionContainer}>
        <Text style={styles.executionText1}>Execute Now : 2</Text>
        <Text style={styles.executionText2}>Executed : 2</Text>
      </View>
    </View>
  );
};

export default TradeTab;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'hidden',
    paddingVertical: 15,
    marginTop: 20,
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  overlay: {
    backgroundColor: '#40433e',
    height: 600,
    width: '100%',
    position: 'absolute',
    top: 0,
    opacity: 0.5,
  },
  backgroundImage1: {
    position: 'absolute',
    right: -25,
    bottom: -30,
    height: 200,
    width: 200,
    opacity: 0.4,
  },
  backgroundImage2: {
    position: 'absolute',
    top: 0,
    left: -15,
    height: 200,
    width: 200,
    opacity: 0.5,
    
  },
  scrollView: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  platformContainer: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  iconContainer: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  platformName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  executionContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: '#dee2e6',
    marginHorizontal: 10,
  },
  executionText1: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
    paddingVertical: 10,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: '#dee2e6',
  },
  executionText2: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    paddingVertical: 10,
    textAlign: 'center',
  },
  middText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    marginHorizontal: 10,
  },
});
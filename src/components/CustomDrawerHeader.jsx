import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const CustomDrawerHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: 'https://demo.geektheo.in/tradegig/assets/images/logo/144.png',
          }}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity 
        style={styles.closeButton}
        onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
      >
        <FontAwesome name="times" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#222223',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  logo: {
    width: 120,
    height: 40,
  },
  closeButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomDrawerHeader;
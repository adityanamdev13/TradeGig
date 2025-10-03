import React, { useState } from 'react';
import { 
  TouchableOpacity, 
  Animated, 
  StyleSheet, 
} from 'react-native';

const CustomToggle = ({ isEnabled = false, onToggle, disabled = false }) => {
  const [enabled, setEnabled] = useState(isEnabled);
  const [animation] = useState(new Animated.Value(isEnabled ? 1 : 0));

  const handleToggle = () => {
    if (!disabled) {
      const newState = !enabled;
      setEnabled(newState);
      
      Animated.spring(animation, {
        toValue: newState ? 1 : 0,
        useNativeDriver: false,
      }).start();
      
      onToggle?.(newState);
    }
  };

  const backgroundColorInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#808080', '#76cf14'] 
  });

  const circleTranslateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [3, 32] 
  });

  return (
    <TouchableOpacity 
      activeOpacity={0.8}
      onPress={handleToggle}
      disabled={disabled}
    >
      <Animated.View style={[
        styles.container,
        { backgroundColor: backgroundColorInterpolation },
        disabled && styles.disabled
      ]}>
        <Animated.View style={[
          styles.circle,
          { transform: [{ translateX: circleTranslateX }] }
        ]} />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 34,
    borderRadius: 18,
    justifyContent: 'center',
  },
  circle: {
    width: 28,
    height: 28,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  disabled: {
    opacity: 0.5,
  }
});

export default CustomToggle;
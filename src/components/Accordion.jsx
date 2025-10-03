import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const AccordionItem = ({ title, content, isExpanded, onPress }) => {
  return (
    <View style={styles.accordionItem}>
      <TouchableOpacity
        style={[
          styles.titleContainer,
          isExpanded && styles.activeTitleContainer
        ]}
        onPress={onPress}
        activeOpacity={0.7}>
        <Text style={styles.title}>{title}</Text>
        {isExpanded ? (
          <FontAwesome name="angle-up" size={20} color="#fff" />
        ) : (
          <FontAwesome name="angle-down" size={20} color="#fff" />
        )}
      </TouchableOpacity>
      {isExpanded && <View style={styles.contentContainer}>{content}</View>}
    </View>
  );
};

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isExpanded={expandedIndex === index}
          onPress={() => toggleExpand(index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  accordionItem: {
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#0d4846',
  },
  activeTitleContainer: {
    backgroundColor: '#0a817d',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  expandIcon: {
    fontSize: 12,
    marginLeft: 10,
  },
  contentContainer: {
    paddingVertical: 20,
  },
  content: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default Accordion;
// App.js
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const items = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.phoneFrame}>
        <Text style={styles.title}>Flex Wrap Layout (หน้าจอขวา)</Text>
        
        <View style={styles.wrapContainer}>
          {items.map((item, index) => (
            <View key={index} style={styles.wrapItem}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneFrame: {
    width: 340,
    height: 620,
    backgroundColor: 'white',
    borderRadius: 35,
    borderWidth: 12,
    borderColor: '#222',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#333',
  },
  wrapContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 12,
  },
  wrapItem: {
    width: 92,
    height: 92,
    backgroundColor: '#d1d5db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  itemText: {
    color: '#1e40af',
    fontSize: 16,
    fontWeight: '600',
  },
});
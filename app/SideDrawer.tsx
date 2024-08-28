import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Dimensions, Animated, Pressable } from 'react-native';
import { AlignRight } from 'lucide-react-native'; // Example icon, replace with your actual icon

const { width } = Dimensions.get('window');

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [slideAnim] = useState(new Animated.Value(-width)); // Initial value for the sliding animation

  const openDrawer = () => {
    setModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0, // Slide the drawer to its final position
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(slideAnim, {
      toValue: -width, // Slide the drawer back out of view
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false)); // Close the modal after the animation finishes
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Header</Text>
        <Pressable onPress={openDrawer}>
          <AlignRight size={24} color="black" />
        </Pressable>
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeDrawer}
      >
        <TouchableOpacity
          style={styles.overlay}
          onPress={closeDrawer}
        />
        <Animated.View style={[styles.drawer, { transform: [{ translateX: slideAnim }] }]}>
          <Text style={styles.drawerText}>Drawer Content</Text>
          <TouchableOpacity onPress={closeDrawer} style={styles.buttonClose}>
            <Text style={styles.buttonText}>Close Drawer</Text>
          </TouchableOpacity>
        </Animated.View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    elevation: 3,
  },
  title: {
    fontSize: 20,
  },
  overlay: {
    flex: 1,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width * 0.8,
    height: '100%',
    backgroundColor: '#fff',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  drawerText: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonClose: {
    padding: 10,
    backgroundColor: '#d9534f',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

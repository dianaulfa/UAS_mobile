import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Card } from 'react-native-elements'; // Import Card component from react-native-elements

const Beranda = () => {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.conImage}>
      <Image 
        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPjS8oneQh43bkV9RMNBeJn7e2WUutsIlkLg&s'}}
        style={styles.profileImage}
      />
      </View>

      <View style={styles.header}>
        <Text style={styles.headerText}>Beranda</Text>
      </View>

      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Cuci Satuan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Cuci Kiloan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Setrika</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Paket Hemat</Text>
        </TouchableOpacity>
      </View>
      
      {/* Example of another section with different cards */}
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Paket Premium</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Layanan Antarkan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Layanan Ambil</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  card: {
    width: '45%',
    aspectRatio: 1, // Square aspect ratio
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3, // Android elevation
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  conImage:{
    width:'100%',
    height:200
  },
  profileImage:{
    width:'100%',
    height:'100%'
  }
});

export default Beranda;
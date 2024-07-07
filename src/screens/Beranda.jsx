import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

const Beranda = () => {
  // Data untuk layanan laundry
  const services = [
    { id: 1, name: 'Cuci Satuan', price: 'Rp10.000/item' },
    { id: 2, name: 'Cuci Kiloan', price: 'Rp5.000/kg' },
    { id: 3, name: 'Setrika', price: 'Rp3.000/kg' },
    { id: 4, name: 'Paket Hemat', price: 'Rp25.000/paket' },
    { id: 5, name: 'Paket Premium', price: 'Rp50.000/paket' },
    { id: 6, name: 'Layanan Antarkan', price: 'Rp15.000/trip' },
    { id: 7, name: 'Layanan Ambil', price: 'Rp15.000/trip' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.conImage}>
        <Image 
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPjS8oneQh43bkV9RMNBeJn7e2WUutsIlkLg&s' }}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.header}>
        <Text style={styles.headerText}>SELAMAT DATANG DI TOKO LAUNDRY</Text>
      </View>

      <View style={styles.cardContainer}>
        {services.map(service => (
          <TouchableOpacity key={service.id} style={styles.card}>
            <Text style={styles.cardText}>{service.name}</Text>
            <Text style={styles.cardPrice}>{service.price}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
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
    marginBottom: 5,
  },
  cardPrice: {
    fontSize: 16,
    color: '#2c3e50',
  },
  conImage: {
    width: '100%',
    height: 200,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
});

export default Beranda;
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert } from 'react-native';

const Pesananku = ({ navigation }) => {
  const [customerName, setCustomerName] = useState('');
  const [weight, setWeight] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [orders, setOrders] = useState([]);

  const addOrder = () => {
    if (customerName === '' || weight === '' || serviceType === '') {
      Alert.alert('Error', 'Semua field harus diisi');
      return;
    }

    const newOrder = {
      id: (orders.length + 1).toString(),
      customer_name: customerName,
      weight: parseFloat(weight),
      service_type: serviceType,
      price_per_kg: getPricePerKg(serviceType),
    };

    setOrders([...orders, newOrder]);
    setCustomerName('');
    setWeight('');
    setServiceType('');
  };

  const getPricePerKg = (serviceType) => {
    switch (serviceType) {
      case 'regular':
        return 5000;
      case 'express':
        return 8000;
      case 'dry_clean':
        return 10000;
      default:
        return 0;
    }
  };

  const calculateTotal = (weight, price_per_kg) => weight * price_per_kg;

  const renderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <Text style={styles.text}>Nama Pelanggan: {item.customer_name}</Text>
      <Text style={styles.text}>Berat: {item.weight} kg</Text>
      <Text style={styles.text}>Jenis Layanan: {item.service_type}</Text>
      <Text style={styles.text}>Total Biaya: Rp{calculateTotal(item.weight, item.price_per_kg)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pesananku</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama Pelanggan"
        value={customerName}
        onChangeText={setCustomerName}
      />
      <TextInput
        style={styles.input}
        placeholder="Berat Cucian (kg)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Jenis Layanan (regular/express/dry_clean)"
        value={serviceType}
        onChangeText={setServiceType}
      />
      <Button title="Tambah Pesanan" onPress={addOrder} />
      <Button title="ke Profil" onPress={() => navigation.navigate('Profil')} />
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
};

export default Pesananku;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#3498db',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  list: {
    marginTop: 20,
  },
  orderItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

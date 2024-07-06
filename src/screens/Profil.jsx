import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.profileImage} />
          <View style={styles.profileDetails}>
            <Text style={styles.profileName}>Diana Ulfa</Text>
            <Text style={styles.profilePhone}>dianaulfa@gmail.com</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.menu}>
        <MenuItem icon="🔄" title="Transaksi" count="0" />
        <MenuItem icon="🔔" title="Pemberitahuan" />
        <MenuItem icon="❤" title="Produk Favorit" count="0" />
        <MenuItem icon="📍" title="Alamat Pengiriman" count="0" />
        <MenuItem icon="👥" title="Downline" />
        <MenuItem icon="📂" title="Transaksi Massal" />
        <MenuItem icon="⚙" title="Pengaturan" />
      </View>
    </ScrollView>
  );
};

const MenuItem = ({ icon, title, count }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Text style={styles.menuIcon}>{icon}</Text>
    <Text style={styles.menuTitle}>{title}</Text>
    {count && <Text style={styles.menuCount}>{count}</Text>}
  </TouchableOpacity>
);

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#007bff',
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  profileDetails: {
    justifyContent: 'center',
  },
  profileName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profilePhone: {
    color: '#fff',
    fontSize: 16,
  },
  menu: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 1,
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 15,
  },
  menuTitle: {
    color:'black',
    fontSize: 18,
    flex: 1,
  },
  menuCount: {
    fontSize: 18,
    color: '#007bff',
  },
});
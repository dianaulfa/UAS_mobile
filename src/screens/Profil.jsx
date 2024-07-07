import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const Index = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert(
      'Konfirmasi Keluar',
      'Apakah Anda yakin ingin keluar?',
      [
        {
          text: 'Batal',
          style: 'cancel',
        },
        {
          text: 'Keluar',
          onPress: () => {
            // Navigasi ke halaman beranda
            navigation.navigate('Beranda');
          },
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerProfil}>
        <View style={styles.containerImage}>
          <Image
            source={{
              uri: 'https://qph.cf2.quoracdn.net/main-qimg-a80f3491ad8b891a98187748d6811a0d-pjlq',
            }}
            style={styles.profilePicture}
          />
        </View>
        <Text style={styles.textNama}>dianaaa</Text>
        <Text style={styles.textNomor}>diana@gmail.com</Text>
      </View>

      <TouchableOpacity style={styles.conMenu}>
        <View style={styles.Menu}>
          <View>
            <MaterialCommunityIcons name="bell" size={30} color="black" />
          </View>
          <Text style={styles.textMenu}>Pemberitahuan</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.conMenu}>
        <View style={styles.Menu}>
          <View>
            <MaterialCommunityIcons name="heart" size={30} color="#000" />
          </View>
          <Text style={styles.textMenu}>Produk Favorit</Text>
        </View>
        <Text style={styles.nomorMenu}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.conMenu}>
        <View style={styles.Menu}>
          <View>
            <MaterialCommunityIcons name="map-marker" size={30} color="#000" />
          </View>
          <Text style={styles.textMenu}>Alamat Pengiriman</Text>
        </View>
        <Text style={styles.nomorMenu}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.conMenu}>
        <View style={styles.Menu}>
          <View>
            <MaterialCommunityIcons name="cog" size={30} color="#000" />
          </View>
          <Text style={styles.textMenu}>Pengaturan</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.conMenu} onPress={handleLogout}>
        <View style={styles.Menu}>
          <View>
            <MaterialCommunityIcons
              name="arrow-right-bold-box-outline"
              size={30}
              color="#000"
            />
          </View>
          <Text style={styles.textMenu}>Keluar</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.conEnd}></View>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  containerProfil: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  containerImage: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 50,
    top: -20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicture: {
    width: 40,
    height: 40,
    left: 3,
  },
  textNama: {
    padding: 5,
    top: -15,
    fontSize: 20,
    color: 'black',
  },
  textNomor: {
    top: -15,
    color: 'black',
  },

  conMenu: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Menu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textIcon: {
    marginHorizontal: 10,
  },
  textMenu: {
    marginHorizontal: 15,
    fontWeight: 'bold',
    fontSize: 15,
  },
  nomorMenu: {
    fontSize: 15,
  },

  conEnd: {
    width: 100,
    height: 100,
  },
});
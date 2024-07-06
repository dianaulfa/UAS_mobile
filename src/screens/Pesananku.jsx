import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const orders = [
  { id: '1', item: 'T-shirt', status: 'In Progress', date: '2024-07-06' },
  { id: '2', item: 'Jeans', status: 'Completed', date: '2024-07-05' },
  { id: '3', item: 'Jacket', status: 'Pending', date: '2024-07-04' },
]

const Pesananku = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <Text style={styles.itemText}>{item.item}</Text>
            <Text style={styles.statusText}>{item.status}</Text>
            <Text style={styles.dateText}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default Pesananku

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  orderItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusText: {
    fontSize: 16,
    color: 'grey',
  },
  dateText: {
    fontSize: 14,
    color: 'darkgrey',
  },
})

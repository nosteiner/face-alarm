import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function  AlarmList({ alarmList }){

	const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.date}</Text>
    </View>
	)

	const styles = StyleSheet.create({
		container: {
			flex: 1
		},
		item: {
			padding: 16,
			borderBottomWidth: 1,
			borderBottomColor: '#ccc'
		}
	})

  return (
    <div className='alarm-list'>
      <h1>Alarm List</h1>
      <FlatList
        styles={styles.container}
        data={  JSON.parse(alarmList) }
        renderItem={renderItem}
      />
    </div>
  )
}

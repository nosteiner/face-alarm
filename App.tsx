import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import './App.css'
import reducer from './reducer';
import Login from './components/login/login';
import { APP_NAME } from './constants';
import AlarmList from './components/alarm-list/alarm-list'
const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));
const dates = [{key: 'a', date: new Date},{key: 'b', date: new Date},{key: 'c', date: new Date},{key: 'd', date: new Date},{key: 'e', date: new Date} ]
const App = () => {
  return (
    <Provider store={ store }>
      <View style={styles.container}>
        {/* <Login appName={APP_NAME}></Login> */}
        {/* <RepoList /> */}
        <AlarmList alarmList={ JSON.stringify(dates)}/>
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App